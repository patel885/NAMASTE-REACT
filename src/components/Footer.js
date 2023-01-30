import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>
        This site has developed by {user.name} - {user.email}
      </h1>
    </div>
  );
};

export default Footer;
