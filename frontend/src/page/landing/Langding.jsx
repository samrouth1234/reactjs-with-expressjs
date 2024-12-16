import React, { useState, useEffect } from "react";
import Card from "../../component/card/Card";

const Landing = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Users:", data);
        setUsers(data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err.message);
        setError(err.message);
      });
  }, []);

  return (
    <div className="mt-20">
      {error ? (
        <p>Error loading users: {error}</p>
      ) : (
        users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            create_date={user.create_date}
          />
        ))
      )}
    </div>
  );
};

export default Landing;
