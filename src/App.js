import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from './components/card';
import './App.scss';

class App extends Component{
  state = {
    userList: new Map(),
  }

  memberGoal = 6

  settings = {
    acessKey: process.env.REACT_APP_ACESS_TOKEN,
    groupId: process.env.REACT_APP_GITLAB_GROUP_ID,
  }

  componentWillMount(){
    this.getIssuesInfo()
  }

  getMilestones = async () => {
    const { acessKey, groupId } = this.settings
    let miles = await axios.get(`https://gitlab.com/api/v4/groups/${groupId}/milestones?private_token=${acessKey}`)
    .then(res => res.data)
    .then(data => data.map(item => {
      let {start_date , due_date, id, title: name} = item
      return {start_date, due_date, id, name}
    }))
    .then(data => data.filter(item => item.start_date < moment().format('YYYY-MM-DD')) )
    .then(data => 
      data.sort((a,b) => (a.start_date < b.start_date ? 1 : -1))
    )
    .then(data => data.slice(0,3))
    // console.log(miles)
    return miles
  }

  asyncForEach = async (array, callback) => {
    for(let i = 0; i < array.length; i++){
      await callback(array[i], i)
    }
  }

  getAssignees = async (userList, issue) => {
    issue.assignees.forEach( user => {
      let {title, web_url, weight} = issue 
      // let type = issue.labels.includes('Dev') ? 'dev' : issue.labels.includes('Gestão') ? 'ges' : null;
      let type = issue.labels.includes('Dev') ? 'dev' : 'gestao';
      let assigned_issue = {title, web_url, weight, type}
      console.log(assigned_issue)
      if(!userList.has(user.id)){ //add new item
        user.issues = [assigned_issue]
        user.weight = assigned_issue.weight
        userList.set(user.id, user)
      }else{ //update item
        userList.get(user.id).issues.push(assigned_issue);
        userList.get(user.id).weight += assigned_issue.weight;
      }
    })
  }

  getIssuesInfo = async () => {
    const { acessKey, groupId } = this.settings
    let miles = await this.getMilestones()
    // console.log(miles)
    let userList = new Map();
    
    await this.asyncForEach(miles, async (milestone) => {
      await axios.get(`https://gitlab.com/api/v4/groups/${groupId}/issues?milestone=${milestone.name}&state=closed&private_token=${acessKey}`)
      .then(res => res.data)
      .then(issues => {
        issues.forEach(issue => {
          // console.log(issue)
          this.getAssignees(userList, issue)
        })
      })
    })
    
    // console.log(userList)
    console.log('done!')
    this.setState({userList})
  }
  render() {
    let { userList } = this.state
    userList = Array.from(userList.values()).sort((a, b) => a.weight < b.weight ? 1 : -1)
    // console.log(users[0])
    console.log(userList)
    let reachedUsers = 0
    userList.forEach((user) => user.weight >= this.memberGoal ? reachedUsers++ : false)
    
    return (
      <div className="App">
        {userList.map( (user, position) => <Card user={user} key={user.id} pos={position} goal={this.memberGoal}/>)}
        <footer>
          <span>
            {reachedUsers} de {userList.length} alcançaram a meta.
          </span>
        </footer>
      </div>
    );
  }
}
export default App;
