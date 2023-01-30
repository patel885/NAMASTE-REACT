import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy User",
    email: "dummy@example.com",
  },
});

export default UserContext;
