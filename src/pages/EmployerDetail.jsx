import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import EmployerService from "../services/employerService";

export default function EmployerDetail() {
  let { mail } = useParams();
  
  const [employer, setEmployer] = useState({});

  useEffect(()=>{
    let employerService = new EmployerService()
    employerService.getByMail(mail).then(employer=>setEmployer(employer.data))
  },[])


  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{employer.mail}</Card.Header>
            <Card.Meta>{employer.webAdress}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}