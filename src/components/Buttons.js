import React, { Component } from 'react'

 class Buttons extends Component {
  render() {
    return (
        <div >
        <button className="bnt btn-success" style={{ width: '100px'}}  name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
        <button className="bnt btn-success" style={{ width: '100px'}}  name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
  
  
        <button className="bnt btn-success" style={{ width: '100px'}} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
  
  
        <button className="bnt btn-success" style={{ width: '100px'}} name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
  
        <button className="bnt btn-success" style={{ width: '100px'}} name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>
  
  
        <button className="bnt btn-success" style={{ width: '100px'}} name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button className="bnt btn-success" style={{ width: '100px'}} name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
    </div>
    )
  }
}
export default Buttons;