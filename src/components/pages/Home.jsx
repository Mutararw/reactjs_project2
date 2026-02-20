import { useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(() => {
    axios.get("https://jsonpaceholder.typicode.com/users");
  }, []);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
export default Home;
