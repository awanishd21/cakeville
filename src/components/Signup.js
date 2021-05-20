import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      onlineUsers: 0,
    };
  }
  componentDidMount() {
    //this.testfunction()
  }

  testfunction = (e) => {
    alert("ho gya didmount");
  };
  user = {};

  getName = (event) => {
    this.user.name = event.target.value;
  };

  getEmail = (event) => {
    this.user.email = event.target.value;
  };
  getPassword = (event) => {
    this.user.password = event.target.value;
  };

  register = () => {
    if (!this.user.email || !this.user.password || !this.user.name) {
      this.setState({
        errorMessage: "Please Fill Details",
      });
    } else {
      let apiurl = "https://apibyashu.herokuapp.com/api/register";
      axios({
        url: apiurl,
        method: "post",
        data: this.user,
      }).then(
        (response) => {
          console.log("Response from signup api", response.data);
        },
        (error) => {
          console.log("Error from signup api", error);
        }
      );
    }
    // console.log("...... user details" , this.user)
  };
  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-5 w-50 mx-auto">
        <h2> Register Yourself! </h2>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            onChange={this.getName}
          ></input>
        </div>

        <div className="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            onChange={this.getEmail}
          ></input>
        </div>

        <div className="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={this.getPassword}
          ></input>
        </div>

        {this.state.errorMessage ? (
          <div className="alert alert-danger">{this.state.errorMessage}</div>
        ) : (
          ""
        )}

        <div className="float-right">
          <Link to="/login">Already an User! Click Here</Link>
        </div>

        <button className="btn btn-primary btn-sm" onClick={this.register}>
          Register
        </button>
      </div>
    );
  }
}

export default Signup;
