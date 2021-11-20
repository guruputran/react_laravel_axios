import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            NatID: "",
            password: "",
            userLevel: "Job Expert",
        };

        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.takePhone = this.takePhone.bind(this);
        this.takeEmail = this.takeEmail.bind(this);
        this.takeID = this.takeID.bind(this);
        this.takePassword = this.takePassword.bind(this);
        this.takeLevel = this.takeLevel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstName(event) {
        this.setState({ firstname: event.target.value });
    }
    lastName(event) {
        this.setState({ lastname: event.target.value });
    }
    takePhone(event) {
        this.setState({ phone: event.target.value });
    }
    takeEmail(event) {
        this.setState({ email: event.target.value });
    }
    takeID(event) {
        this.setState({ ID: event.target.value });
    }
    takePassword(event) {
        this.setState({ password: event.target.value });
    }
    takeLevel(event) {
        this.setState({ userLevel: event.target.value });
    }

    handleSubmit() {
        const packets = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            NatID: this.state.ID,
            userLevel: this.state.userLevel,
            password: this.state.password,
        };
        axios
            .post("/sendrequest", packets)
            .then((response) => alert(JSON.stringify(response.data)))
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);
            });
    }

    render() {
        return (
            <div>
                <img className="wave" src="/images/noodle_soup.jpg" alt="img" />
                <div className="container">
                    <div className="img">
                        <img
                            src="https://terrence-aluda.com/bg.svg"
                            alt="img"
                        />
                    </div>
                    <div className="login-content">
                        <form>
                            <img
                                src="https://terrence-aluda.com/avatar.svg"
                                alt="img"
                            />
                            <h2 className="title">Register</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        onChange={this.firstName}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={this.lastName}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-envelope-square"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        onChange={this.takeEmail}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className=""></i>
                                </div>
                                <div className="div">
                                    <select
                                        onChange={this.takeLevel}
                                        name="userLevel"
                                    >
                                        <option value="">Choose level</option>
                                        <option value="Job Expert">
                                            Job Expert
                                        </option>
                                        <option value="Client">Client</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-id-card"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="number"
                                        placeholder="National ID"
                                        onChange={this.takeID}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="number"
                                        placeholder="Phone Number"
                                        onChange={this.takePhone}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={this.takePassword}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="input"
                                    />
                                </div>
                            </div>
                            <input
                                type="submit"
                                className="btn"
                                onClick={this.handleSubmit}
                                value="Register"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
