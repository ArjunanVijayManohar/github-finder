import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params?.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  
  return <div>{user?.login}</div>;
};

export default User;
