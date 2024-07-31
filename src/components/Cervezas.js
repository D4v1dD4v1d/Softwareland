import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import axios from 'axios';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBeers = async () => {
    try {
      // Realiza la solicitud al API
      const response = await axios.get('https://random-data-api.com/api/v2/beers', {
        params: {
          size: 15  // Solicita 15 registros
        }
      });
      // Actualiza el estado con los datos obtenidos
      setBeers((prevBeers) => [...prevBeers, ...response.data]);
    } catch (error) {
      // Maneja errores de solicitud
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Cervezas</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Contenido de alcohol</th>
            <th>Cervecería</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{beer.name}</td>
              <td>{beer.style}</td>
              <td>{beer.alcohol}</td>
              <td>{beer.brand}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color='primary' onClick={fetchBeers}>Más cervezas</Button>
    </div>
  );
};

export default BeerList;
