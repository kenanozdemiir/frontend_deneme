import React from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
  } from "semantic-ui-react";
export default function Register() {
    return (
        <div>
      
      <Header as="h1" color="white" textAlign="center">
         Kayıt Ol
      </Header>
      <Form size="medium">
        <Segment >
          <Grid >
            <Grid.Column width={16}>
              <Form.Input
                fluid
                placeholder="İsim"
              />
              <Form.Input
                fluid
                placeholder="Soy isim"
              />
              <Form.Input
                fluid
                placeholder="Kimlik numarası"
              />
              <Form.Input
                fluid
                placeholder="Dogum Yılı"
              />
            
              <Form.Input
                fluid
                placeholder="E-mail adresi"
              />
              <Form.Input
                fluid
                placeholder="Şifre"
                type="password"
              />
              <Form.Input
                fluid
                placeholder="Şifre tekrar"
                type="password"
              />
            </Grid.Column>
          </Grid>

            <br/>
          <Button color="white" fluid size="large" disabled>
            Kayıt Ol
          </Button>
        </Segment>
      </Form>
      
        </div>
    )
}
