import React from "react";
import { Link } from "react-router-dom";
import { Button,Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
      <Button as={Link} to={"/jobAdvertisementAdd"}primary style={{marginRight:"0.6em"}}>İlan Ekle</Button>

        <Image
          avatar
          spaced="right"
          src="https://i2.wp.com/bakikaracay.com/wp-content/uploads/2016/09/Kamera-I%C5%9F%C4%B1k-Foto%C4%9Fraf.jpg?resize=810%2C540&ssl=1"
        />

        <Dropdown pointing="top left" text = "Kenan Özdemir">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
