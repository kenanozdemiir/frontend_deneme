import React from 'react'
import { NavLink } from 'react-router-dom';
import {Dropdown} from "semantic-ui-react";

export default function Candidate() {
    return (
        <div>
         <Dropdown item text="Candidate">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/candidateList">Candidate Archive</Dropdown.Item>
                <Dropdown.Item>Candidate Details </Dropdown.Item>
                
                <Dropdown.Divider/>
                
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
