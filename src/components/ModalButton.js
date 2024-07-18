// src/components/ModalButton.js
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalButton = () => {
  const [modal, setModal] = useState(false);//este useState es para ver si se debe o no mostrar el modal

  const toggle = () => setModal(!modal);//toggle es una funcion que invierte el valor del modal

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Show Modal
      </Button>
      
      <Modal isOpen={modal} toggle={toggle}>
        
        <ModalHeader toggle={toggle}>Titulo del modal</ModalHeader>
        <ModalBody>
          Contenido del modal
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
