import classes from "./User.module.css";
import { Component } from "react";
class User extends Component {
  componentWillUnmount() {
    console.log("User component is being removed from the DOM");
  }
  // This lifecycle method is called just before the component is removed from the DOM.
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
