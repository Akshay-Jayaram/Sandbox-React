import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(con) {
  return (
    <Card
      key={con.id} //requirement by React to have unique value
      name={con.name}
      img={con.img}
      tel={con.phone}
      email={con.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      <Card
        id="1"
        name="Akshay"
        img=""
        tel="1234567890"
        email="akshay@gmail.com"
      />
      <Card name="Anusha" img="" tel="0987654321" email="anusha@gmail.com" />
    </div>
  );
}

export default App;
