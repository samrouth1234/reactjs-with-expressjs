import React, { useState, useEffect } from "react";
import Card from "../../component/card/Card";

const Landing = () => {
  const [users, setUsers] = useState([]);
  // fetch data from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data",data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);  

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {users.map((user) => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} create_date={user.create_date} />
      ))}
    </div>
  );
};

export default Landing;

