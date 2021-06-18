import React from 'react'
import { NavLink } from 'react-router-dom';
import {Dropdown} from "semantic-ui-react";

export default function Jobs() {
    return (
        <div>
         <Dropdown item text="Jobs">
              <Dropdown.Menu>
                <Dropdown.Item>Jobs Archive</Dropdown.Item>
                <Dropdown.Item>List Details </Dropdown.Item>
                <Dropdown.Item>Add a job </Dropdown.Item>
                
                
                <Dropdown.Divider/>
               
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}