import React, {Component} from 'react'

class Calculator extends Component {
    
    state = {
        num1: '',
        num2: '',
        sum: ''
    }


    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

      addValues = (e) => {
        e.preventDefault()
        this.setState({
            sum: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
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
                    
                    <button onClick={this.addValues}>=</button>
                    <h3>Addition results go here!</h3>
                    <p>{this.state.sum}</p>
                </div>
            </div>
        )
    }
}

export default Calculator