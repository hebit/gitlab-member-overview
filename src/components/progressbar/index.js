import React, { Component } from 'react';
import './style.scss';

class Bar extends Component{
  render() {
    let { points, goal } = this.props
    const extra = 2
    const reached = points >= goal
    const totalreached = points >= goal + extra
    // console.log(points)
    const style = {
      points: { 
        width: totalreached ? '100%' : points/ (goal + extra) * 100 + '%',
        paddingRight: reached && !totalreached ? '0.5em' : 0,
        boxSizing: reached ? 'content-box' : 'border-box'
      },
      goal: { 
        left: goal/(goal + extra) * 100  > 97 ? '97%': goal/(goal + extra) * 100 + '%',
        borderColor: reached ? '#63de68' : ''
      }
    }
    return (
        <div className="progress-bar">
          <div className="progress-bar-inner">
            <div className="points" style={style.points}></div>
            <div className="goal" style={style.goal} >
              {reached ?  <div className="reached"></div> : ''}
            </div>
            <div className="bar"></div>
          </div>
        </div>
    );
  }
}
export default Bar;
