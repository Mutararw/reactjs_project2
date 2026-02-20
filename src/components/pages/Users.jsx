import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Users() {
  const { username } = useParams;

  return <div> {username}</div>;
}
export default Users;
