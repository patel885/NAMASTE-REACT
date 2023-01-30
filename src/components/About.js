import { Component } from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <ProfileClass name={"Aman Patel"} />
      </div>
    );
  }
}

export default About;
