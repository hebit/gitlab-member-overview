import React, { Component } from 'react';
import Bar from '../progressbar';
import './style.scss';

class Card extends Component{
  render() {
    let { user, goal } = this.props
    // console.log(user)
    return (
        <div className="card">
          <div className="title">
            {user.username}<span className="name">{user.name}</span>
          </div>
          <Bar goal={goal} points={user.weight}/>
          <div className="info">
            <span className="details">
              {user.issues.length} issue{user.issues.length > 1 ? 's' : ''} • {/*Y commits*/} {user.weight} weight
            </span>
            <span className="percent">{user.weight/goal * 100}%</span>
          </div>
        </div>
    );
  }
}
export default Card;
