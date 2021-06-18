import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  });

 
      return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell>İsim</Table.HeaderCell>
              <Table.HeaderCell>Mail</Table.HeaderCell>
              <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
              <Table.HeaderCell>Cv</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {candidates.map((candidate) => (
              <Table.Row key={candidate.id}>
                <Table.Cell>
                {candidate.name} {candidate.surname}
                </Table.Cell>

                <Table.Cell>{candidate.mail}</Table.Cell>
                <Table.Cell>{candidate.birthYear}</Table.Cell>
                <Table.Cell>{candidate.cv}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    
  );
}
