import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((jobAdvertisement) => setJobAdvertisements(jobAdvertisement.data));
  });

  return (
    <div>
      
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Mail</Table.HeaderCell>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {jobAdvertisements.map((jobAdvertisement) => (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell>
                  <Link
                    to={`/jobAdvertisementList/${jobAdvertisement.employerCompanyName}`}
                  >
                    {jobAdvertisement.employerCompanyName}
                  </Link>
                </Table.Cell>

                <Table.Cell>{jobAdvertisement.jobPositionPosition}</Table.Cell>
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
    </div>
  );
}
