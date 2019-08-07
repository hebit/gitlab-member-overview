import React, { Component } from 'react';
import Bar from '../progressbar';
import { IoIosArrowDown, IoIosArrowUp, IoMdHeart } from "react-icons/io";
import { FaGlassCheers } from 'react-icons/fa';
import './style.scss';

class Card extends Component{
  state = {
    isOpen: false
  }

  switchState = () => {
    this.setState({ isOpen: !(this.state.isOpen)})
  }

  render() {
    let { user, goal, pos } = this.props
    // console.log(user)
    let { issues } = user
    return (
        <div className="card">
          <div className="title">
            {user.username}<span className="name">{user.name}</span>
            { 
              pos < process.env.REACT_APP_PRIZES && 
              <span className={user.weight >= goal ? "active-prize" : "inactive-prize"}>
                  <FaGlassCheers />
                  {/* {pos == 0 ? <IoMdHeart /> : ''} */}
              </span>
            
            }
          </div>
          <Bar goal={goal} points={user.weight}/>
          <details className="info" onClick={this.switchState}>
            <summary>
              <span>
                    {user.issues.length} issue{user.issues.length > 1 ? 's' : ''}
                     • 
                    {/*Y commits*/} {user.weight} weight 
                    {this.state.isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              <span className="percent">{(user.weight/goal * 100).toFixed(1)}%</span>
            </summary>
            <ul>
              {issues.map((issue, index) => (
              <li key={index}>
                <a href={issue.web_url}>{issue.title}</a>
                {!!(issue.type) && (<span className={issue.type}></span>)}
              </li>))}
            </ul>
          </details>
        </div>
    );
  }
}
export default Card;
