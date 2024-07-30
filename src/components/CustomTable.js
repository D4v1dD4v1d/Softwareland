import React from 'react';
import { Table, Button } from 'reactstrap';

function CustomTable({ data, onDelete, onEdit }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Género</th>
          <th>Rol</th>
          <th>Opciones</th>
          <th>Notas</th>
          <th>Fecha de Registro</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.email}>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.email}</td>
            <td>{item.edad}</td>
            <td>{item.genero}</td>
            <td>{item.rol}</td>
            <td>{item.opciones ? 'Sí' : 'No'}</td>
            <td>{item.notas}</td>
            <td>{item.fechaRegistro}</td>
            <td>
              <Button color="warning" onClick={() => onEdit(index)}>Editar</Button>{' '}
              <Button color="danger" onClick={() => onDelete(item.email)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CustomTable;
