import { useEffect } from "react";

const ProfileFuctional = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer is running");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Profile Functional Component</h1>
    </div>
  );
};

export default ProfileFuctional;
