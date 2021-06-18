import React from 'react'
import { NavLink } from 'react-router-dom';
import {Dropdown} from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
import { Route } from 'react-router';

export default function Employer() {
    return (
        <div>
         <Dropdown item text="Employer">
              <Dropdown.Menu>
              <Dropdown.Item as={NavLink}to="/employerList">Employer Archive</Dropdown.Item>
               
                <Dropdown.Item>Employer Details </Dropdown.Item>
                
                <Dropdown.Divider/>
                
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
