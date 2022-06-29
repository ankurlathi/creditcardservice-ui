

import React, { Component } from 'react'
import CreditCardService from '../services/CreditCardService';

class CreateCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            cardNumber: '',
            cardLimit: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
        this.changeLimitHandler = this.changeLimitHandler.bind(this);
        this.saveOrUpdateCard = this.saveOrUpdateCard.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            /*CreditCardService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });*/
        }
    }
    saveOrUpdateCard = (e) => {
        e.preventDefault();
        let card = {name: this.state.name, cardNumber: this.state.cardNumber, cardLimit: this.state.limit};
        console.log('card => ' + JSON.stringify(card));

        // step 5
        if(this.state.id === '_add'){
            CreditCardService.createCard(card).then(res =>{
                this.props.history.push('/cards');
            });
        }else{
            /*EmployeeService.updateEmployee(card, this.state.id).then( res => {
                this.props.history.push('/cards');
            });*/
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCardNumberHandler= (event) => {
        this.setState({cardNumber: event.target.value});
    }

    changeLimitHandler= (event) => {
        this.setState({limit: event.target.value});
    }

    cancel(){
        this.props.history.push('/cards');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Card</h3>
        }/*else{
            return <h3 className="text-center">Update Employee</h3>
        }*/
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Card Number: </label>
                                        <input placeholder="Card Number" name="cardNumber" className="form-control"
                                               value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Limit: </label>
                                        <input placeholder="Limit" name="limit" className="form-control"
                                               value={this.state.limit} onChange={this.changeLimitHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateCardComponent
