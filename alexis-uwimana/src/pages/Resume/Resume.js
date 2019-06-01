import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  state = {
    github: {}
  };

  componentDidMount() {
    fetch("https://api.github.com/users/alexisuwimana")
      .then(res => res.json())
      .then(res => {
        this.setState({
          github: res
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h1 className="title is-1 has-text-centered">My Resume</h1>
            <hr />

            <div className="content">
              <h3 className="title is-3">Personal Details</h3>
              <hr />
              <ul>
                <li>
                  <span className="has-text-weight-bold">First Name: </span>
                  Alexis
                </li>
                <li>
                  <span className="has-text-weight-bold">Last Name: </span>
                  UWIMANA
                </li>
                <li>
                  <span className="has-text-weight-bold">Email: </span>
                  alexisuwimana@gmail.com
                </li>
                <li>
                  <span className="has-text-weight-bold">Tel: </span>
                  +250 788 68 76 67
                </li>
              </ul>

              <h3 className="title is-3">Github</h3>
              <hr />
              <ul>
                <li>
                  <span className="has-text-weight-bold">Username: </span>
                  {this.state.github.login}
                </li>
                <li>
                  <span className="has-text-weight-bold">Location: </span>
                  {this.state.github.location}
                </li>
                <li>
                  <span className="has-text-weight-bold">Followers: </span>
                  {this.state.github.followers}
                </li>
                <li>
                  <span className="has-text-weight-bold">Following: </span>
                  {this.state.github.following}
                </li>
                <li>
                  <span className="has-text-weight-bold">Repositories: </span>
                  {this.state.github.public_repos}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
