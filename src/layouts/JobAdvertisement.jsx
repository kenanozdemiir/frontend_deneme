import React from 'react'
import { NavLink } from 'react-router-dom';
import {Dropdown} from "semantic-ui-react";
import JobAdvertisementList from '../pages/JobAdvertisementList';
import { Route } from 'react-router';

export default function jobAdvertisement() {
    return (
        <div>
         <Dropdown item text="Job Advertisement">
              <Dropdown.Menu>
              <Dropdown.Item as={NavLink}to="/jobAdvertisementList">Job Advertisement Archive</Dropdown.Item>
               
                <Dropdown.Item>Job Advertisement Details </Dropdown.Item>
                
                <Dropdown.Divider/>
                
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
