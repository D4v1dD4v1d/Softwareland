import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalButton = ({ data, toggle }) => {
  return (
    <div>
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Informacion Guardada</ModalHeader>
        <ModalBody>
          <p>NOMBRE: {data.nombre}</p>
          <p>APELLIDOS: {data.apellido}</p>
          <p>EMAIL: {data.email}</p>
          <p>CONTRASEÑA: {data.password}</p>
          <p>EDAD: {data.edad}</p>
          <p>GENERO: {data.genero}</p>
          <p>ROL: {data.rol}</p>
          <p>Opciones: {data.opciones===true?"Opciones aceptadas":"Opciones no aceptadas"}</p>
          <p>NOTAS: {data.notas}</p>
          <p>FECHA DE REGISTRO: {data.fechaRegistro.split("-").reverse().join("-")}</p>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Aceptar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalButton;
