import React, {Component} from 'react';

import * as user_utils from '../utils/user_actions';
import * as offer_utils from '../utils/offer_actions';

import axios from 'axios';
import {Row, Col, Container, Button} from 'react-bootstrap';


export default class Site extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            offers: [],
            username: '',
            flag: '',
            input: ''
        };
    }


    async componentDidMount() {


    }

    get_approved_users = async () => {
        try {
            let the_users = await user_utils.fetch_approved_users();
            console.log(the_users);
            this.setState({users: the_users.users, flag: 'users'});
        } catch (err) {
            console.error(err);
            console.error(`error at fetching approved users`);
        }
    };

    get_rejected_users = async () => {
        try {
            let the_users = await user_utils.fetch_rejected_users();
            console.log(the_users);
            this.setState({users: the_users.users, flag: 'users'});
        } catch (err) {
            console.error(err);
            console.error(`error at fetching rejected users`);
        }
    };

    get_all_users = async () => {
        try {
            let the_users = await user_utils.fetch_all_users();
            console.log(the_users);
            this.setState({users: the_users.users, flag: 'users'});
        } catch (err) {
            console.error(err);
            console.error(`error at fetching all users`);
        }
    };

    go_reject_user = async (username) => {
        try {
            let rejected_user = await user_utils.reject_user(username);
            console.log(rejected_user);
            console.log(`user was rejected ${username}`);
        } catch (err) {
            console.error(err);
            console.error(`error at rejecting the user ${username}`);
        }
    };

    go_approve_user = async (username) => {
        try {
            let approved_user = await user_utils.approve_user(username);
            console.log(approved_user);
            console.log(`user was approved ${username}`);
        } catch (err) {
            console.error(err);
            console.error(`error at approving the user ${username}`);
        }
    };

    go_approve_offer = async (offerid) => {
        try {
            let approved_offer = await offer_utils.approve_offer(offerid);
            console.log(approved_offer);
            console.log(`offer was approved ${offerid}`);
        } catch (err) {
            console.error(err);
            console.error(`error at approving the offer ${offerid}`);
        }
    };

    go_reject_offer = async (offerid) => {
        try {
            let rejected_offer = await offer_utils.reject_offer(offerid);
            console.log(rejected_offer);
            console.log(`offer was rejected ${offerid}`);
        } catch (err) {
            console.error(err);
            console.error(`error at rejecting the offer ${offerid}`);
        }
    };

    get_offers_by_username = async () => {
        try {
            let the_offers = await offer_utils.fetch_offers_by_username(this.state.input);
            console.log(the_offers);
            this.setState({offers: the_offers.offers, flag: 'offers'});
        } catch (err) {
            console.error(err);
            console.error(`error at fetching all users`);
        }
    };

    value_change = (e) => {
        e.preventDefault();
        this.setState({input: e.target.value});
    }


    render() {

        const {users, flag, offers} = this.state;
        var table;
        if (flag === 'users') {
            table = Object.keys(this.state.users).map((key) => {
                console.log(`the key ${key}`)
                let the_button;
                if (users[key].admin_approved === true) {
                    the_button = <button onClick={() => this.go_reject_user(users[key].username)}>Reject
                        User</button>
                } else {
                    the_button = <button onClick={() => this.go_approve_user(users[key].username)}>Approve
                        User</button>
                }
                return (
                    <tr key={key}>
                        <td>{users[key].username}</td>
                        <td>
                            {the_button}

                        </td>
                    </tr>
                );
            });
        } else if (flag === 'offers') {
            table = Object.keys(this.state.offers).map((key) => {
                console.log(`the key ${key}`)
                let the_button;
                if (offers[key].admin_approved === true) {
                    the_button = <button onClick={() => this.go_reject_offer(offers[key].offer_id)}>Reject
                        offer</button>
                } else {
                    the_button = <button onClick={() => this.go_approve_offer(offers[key].offer_id)}>Approve
                        offer</button>
                }
                return (
                    <tr key={key}>
                        <td>{offers[key].offer_id}</td>
                        <td>
                            {the_button}

                        </td>
                    </tr>
                );
            });
        }
        return (
            <div>

                <Container>
                    <Row>

                        <div><h1>TWM Site</h1></div>

                    </Row>

                    <Row>

                        <button type="button" className="btn btn-success" onClick={this.get_approved_users}>Get Approved
                            Users
                        </button>
                        <button type="button" className="btn btn-success" onClick={this.get_rejected_users}>Get Rejected
                            Users
                        </button>
                        <button type="button" className="btn btn-success" onClick={this.get_all_users}>Get All
                            Users
                        </button>
                        <input onChange={this.value_change} />
                        <button type="button" className="btn btn-success" onClick={this.get_offers_by_username}>Get Offers by Username
                        </button>

                    </Row>
                    <Row>
                        <table>
                            {table}
                        </table>
                    </Row>


                    <div>

                    </div>


                </Container>
            </div>)
    }
}


