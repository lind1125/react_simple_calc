import React, {Component} from 'react'

class Calculator extends Component {
    
    state = {
        num1: '',
        num2: '',
        result: '',
        operator: '+'
    }


    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

      addValues = (e) => {
        e.preventDefault()
        switch (this.state.operator) {
            default:
            this.setState({
                result: parseInt(this.state.num1) + parseInt(this.state.num2)
            })
            break;
            case '-':
            this.setState({
                result: parseInt(this.state.num1) - parseInt(this.state.num2)
            })
            break;
            case '*':
            this.setState({
                result: parseInt(this.state.num1) * parseInt(this.state.num2)
            })
            break;
            case '/':
            this.setState({
                result: parseInt(this.state.num1) / parseInt(this.state.num2)
            })
        }
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
                    <select name="operator"
                    value={this.state.operator}
                    onChange={  (e) => this.setNum(e, 'operator') }
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    
                    <button onClick={this.addValues}>=</button>
                    <h3>Results: {this.state.result}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator