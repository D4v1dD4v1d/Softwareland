import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import data from './data.json';

const CustomTable = () => {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggle = (id) => {
    setSelectedId(id);
    setModal(!modal);
  };

  const closeToggle = () => {
    setModal(!modal);
  };

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
            <th>#</th>
            <th>Text Column 1</th>
            <th>Text Column 2</th>
            <th>Icon</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.text1}</td>
              <td>{row.text2}</td>
              <td>
                <FontAwesomeIcon icon={Icons[row.icon]} />
              </td>
              <td>
                <Button onClick={() => toggle(row.id)} color="secondary">Button</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
