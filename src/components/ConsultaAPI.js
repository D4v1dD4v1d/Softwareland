import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

const RandomUser = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/v2/users');
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h1>Usuario Random</h1>
      <Button color="primary" onClick={fetchRandomUser}>Fetch Random User</Button>
      {user && (
        <Card className="mt-4">
          <CardHeader>{user.first_name} {user.last_name}</CardHeader>
          <CardBody>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Address:</strong> {user.address.street_address}, {user.address.city}, {user.address.state}, {user.address.zip_code}</p>
            <p><strong>Phone Number:</strong> {user.phone_number}</p>
          </CardBody>
          <CardFooter>
            <p><strong>Subscription:</strong> {user.subscription.plan} - {user.subscription.status}</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default RandomUser;
