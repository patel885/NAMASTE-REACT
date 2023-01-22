import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <ProfileClass name={"Aman Patel"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <ProfileClass name={"Aman Patel"} />
//     </div>
//   );
// };

export default About;
