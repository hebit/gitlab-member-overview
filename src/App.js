import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from './components/card';
import './App.scss';

class App extends Component{
  state = {
    userList: new Map(),
  }

  memberGoal = 4

  settings = {
    acessKey: 'PBpuVdjxc8dTgbUCkzVz' ,
    groupId: '4521828',
    internalGroupId: '4521869'
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
      let {title, web_url} = issue //let {title, web_url, weight} = issue
      let weight = 1
      let assigned_issue = {title, web_url, weight}
      // console.log(assigned_issue)
      if(!userList.has(user.id)){ //add item
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
      // .then(res => console.log(res))
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
    userList = Array.from(userList.values())
    // console.log(users[0])
    userList = userList.map( user => <Card user={user} key={user.id} goal={this.memberGoal}/>)
    // console.log('from component')    
    // console.log(userList)
    
    return (
      <div className="App">
        {userList}
      </div>
    );
  }
}
export default App;
