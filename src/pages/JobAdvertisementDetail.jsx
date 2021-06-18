import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { companyName } = useParams();
  
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getByCompanyName(companyName).then(jobAdvertisement=>setJobAdvertisements(jobAdvertisement.data))
  },[])


  return (
    <div>
      <Card.Group>
          {jobAdvertisements.map((jobAdvertisement)=>(
        <Card fluid> 
          <Card.Content key={jobAdvertisement.id}>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{jobAdvertisement.employerCompanyName}</Card.Header>
            <Card.Meta >Min maaş:{jobAdvertisement.minSalary} TL</Card.Meta>
            <Card.Meta>İlan tarihi:{jobAdvertisement.startingDate} </Card.Meta>
            <Card.Meta>Bitiş Tarihi:{jobAdvertisement.endDate} </Card.Meta><Card.Meta>Max maaş:{jobAdvertisement.maxSalary} TL</Card.Meta>

            <Card.Description>
               <strong>{jobAdvertisement.description}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Başvur!
              </Button>
              
            </div>
          </Card.Content>
          
        </Card>
          ))}
      </Card.Group>
    </div>
  );
}