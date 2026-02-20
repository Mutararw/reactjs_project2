import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Users() {
  const { username } = useParams;

  useEffect(() => {
    fetch(`https://tiktok.api.com/${username}`);
  }, []);

  return <div> {username}</div>;
}
export default Users;
