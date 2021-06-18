import React,{useState} from "react";
import Employer from "./Employer";
import {  Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import Candidate from "./Candidate";
import Jobs from "./Jobs";
import { NavLink } from "react-router-dom";
import JobAdvertisement from "./JobAdvertisement";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
    
  }
  function handleSignIn() {
    setIsAuthenticated(true)
    
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="HRMS" />
          

          <Menu.Menu position="right">
            <Candidate/>
          <Employer/>
          <JobAdvertisement/>
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:
            <SignedOut signIn={handleSignIn}/>}
          
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
