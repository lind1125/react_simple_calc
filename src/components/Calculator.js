import React, {Component} from 'react'

class Calculator extends Component {
    
    state = {
        num1: '',
        num2: ''
    }

    // newValue1 = (e) => {
    //     this.setState({
    //         value1: e.target.value
    //     })
    //     console.log(e.target.value)
    // }
    
    // newValue2 = (e) => {
    //     this.setState({
    //         value2: e.target.value
    //     })
    //     console.log(e.target.value)
    // }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
        console.log(e.target.value)
      }
    
    render(){
        return(
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    
                    <button>=</button>
                    <h3>Addition results go here!</h3>
                </div>
            </div>
        )
    }
}

export default Calculator