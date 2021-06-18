import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={signIn} primary as={Link} to={"/login"}>Giriş yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}as={Link} to={"/Register"}>Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}
