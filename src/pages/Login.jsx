import React from 'react'
import { Link } from "react-router-dom";
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function Login() {
    return (
        <div>
            
      <Form size="medium">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Şifre"
            type="password"
          />

          <Button  primary color="white" fluid size="large" disabled>
            Giriş Yap
          </Button>
        </Segment>
      </Form>
      
        </div>
    )
}
