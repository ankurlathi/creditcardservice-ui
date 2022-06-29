import React, {Component} from 'react'
import CreditCardService from '../services/CreditCardService'

class ListCardsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            name: '',
            cardNumber: '',
            cardLimit: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
        this.changeLimitHandler = this.changeLimitHandler.bind(this);
        this.saveOrUpdateCard = this.saveOrUpdateCard.bind(this);
    }

    componentDidMount() {
        CreditCardService.getCards().then((res) => {
            this.setState({cards: res.data.creditCardList});
        });
    }

    saveOrUpdateCard = (e) => {
        e.preventDefault();
        let card = {name: this.state.name, cardNumber: this.state.cardNumber, cardLimit: this.state.cardLimit};
        console.log('card => ' + JSON.stringify(card));

        // step 5
        CreditCardService.createCard(card).then(res => {
            CreditCardService.getCards().then((res) => {
                this.setState({cards: res.data.creditCardList});
            });
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeCardNumberHandler = (event) => {
        this.setState({cardNumber: event.target.value});
    }

    changeLimitHandler = (event) => {
        this.setState({cardLimit: event.target.value});
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Card List</h2>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h5 className="align-content-center">Add Card</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Card Number: </label>
                                        <input placeholder="Card Number" name="cardNumber" className="form-control"
                                               value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Limit: </label>
                                        <input placeholder="Limit" name="cardLimit" className="form-control"
                                               value={this.state.cardLimit} onChange={this.changeLimitHandler}/>
                                    </div>
                                    <div><br/></div>
                                    <div className="form-group">
                                        <button className="btn btn-dark" onClick={this.saveOrUpdateCard}>Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <br/><br/><br/><br/>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Name</th>
                            <th> Card Number</th>
                            <th> Limit</th>
                            <th> Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            React.Children.toArray(
                                this.state.cards?.map(
                                    card =>
                                        // <tr key={card.cardNumber}>
                                        <tr>
                                            <td> {card.owner} </td>
                                            <td> {card.cardNumber}</td>
                                            <td> {card.cardLimit}</td>
                                            <td> {card.balance}</td>
                                        </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListCardsComponent

