import React from "react";

import Navi from "./Navi";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router"
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import CandidateList from "../pages/CandidateList";
import Login from "../pages/Login";
import Register from "../pages/Register";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row position="center">
          <Grid.Column width={4}>
            
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path="/employerList" component={EmployerList}/>
          <Route exact path="/jobAdvertisementList" component={JobAdvertisementList}/>
          <Route path="/jobAdvertisementList/:companyName" component={JobAdvertisementDetail} />
          <Route path="/candidateList" component={CandidateList} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
