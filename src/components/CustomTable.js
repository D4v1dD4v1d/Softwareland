import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const CustomTable = ({data, onDelete}) => {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggle = (id) => {
    setSelectedId(id);
    setModal(!modal);
  };

  const closeToggle = () => {
    setModal(!modal);
  };

  if (!Array.isArray(data)) {
    return <p>No data available.</p>;
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={closeToggle}>
        <ModalHeader toggle={closeToggle}>Titulo del Modal</ModalHeader>
        <ModalBody>
          {selectedId !== null && (
            <img src={data.find(row => row.id === selectedId).imgSrc} alt="carro" className="img-fluid" />
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={closeToggle}>
            Aceptar
          </Button>{' '}
          <Button color="secondary" onClick={closeToggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Table striped>
        <thead>
          <tr>
            <th><b>NOMBRE</b></th>
            <th><b>APELLIDOS</b></th>
            <th><b>EMAIL</b></th>
            <th><b>EDAD</b></th>
            <th><b>GENERO</b></th>
            <th><b>ROL</b></th>
            <th><b>OPCIONES</b></th>
            <th><b>NOTAS</b></th>
            <th><b>FECHA DE REGISTRO</b></th>
            <th><b>ACCIONES</b></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.email}>
              <td>{row.nombre}</td>
              <td>{row.apellidos}</td>
              <td>{row.email}</td>
              <td>{row.edad}</td>
              <td>{row.genero}</td>
              <td>{row.rol}</td>
              <td>{row.opciones?"Opciones aceptadas":"Opciones no aceptadas"}</td>
              <td>{row.notas}</td>
              <td>{row.fechaRegistro.split("-").reverse().join("-")}</td>
              <td>
                <Button onClick={() => onDelete(row.email)} color="danger">
                  Eliminar
                </Button>
                <Button onClick={() => toggle(row.id)} color="warning">
                  Editar
                </Button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
