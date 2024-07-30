import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import ModalButton from './ModalButton';
import CustomTable from './CustomTable';

function FormularioRegistro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    edad: '',
    genero: '',
    rol: '',
    opciones: false,
    notas: '',
    fechaRegistro: ''
  });

  const [dataList, setDataList] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validLastname, setValidLastname] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validAge, setValidAge] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [validRole, setValidRole] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const nameExpression = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
  const lastnameExpression = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
  const emailExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ageExpression = /^(100|[1-9]?[0-9])$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validName && validLastname && validEmail && validAge && validDate && validRole) {
      if (editIndex !== null) {
        // Editando un registro existente
        const updatedDataList = [...dataList];
        updatedDataList[editIndex] = formData;
        setDataList(updatedDataList);
        setEditIndex(null);
      } else {
        // Añadiendo un nuevo registro
        setDataList([...dataList, formData]);
      }
      handleReset();
    }
  };

  const handleDelete = (email) => {
    setDataList(dataList.filter(item => item.email !== email));
  };

  const handleEdit = (index) => {
    setFormData(dataList[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    setValidName(nameExpression.test(formData.nombre));
    setValidLastname(lastnameExpression.test(formData.apellido));
    setValidEmail(emailExpression.test(formData.email));
    setValidAge(ageExpression.test(formData.edad));
    setValidRole(formData.rol !== '');

    const fechaActual = new Date();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const año = fechaActual.getFullYear();
    const fechaActualFormateada = `${año}-${mes}-${dia}`;
    setValidDate(formData.fechaRegistro >= fechaActualFormateada);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      edad: '',
      genero: '',
      rol: '',
      opciones: false,
      notas: '',
      fechaRegistro: ''
    });
    setEditIndex(null);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="nombre">Nombre</Label>
        <Input
          required
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Introduce tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          invalid={!validName}
          valid={validName}
        />
        {!validName && <FormFeedback>El nombre solo puede contener letras</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="apellido">Apellido</Label>
        <Input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Introduce tu apellido"
          value={formData.apellido}
          onChange={handleChange}
          valid={validLastname}
          invalid={!validLastname}
        />
        {!validLastname && <FormFeedback>El apellido solo puede contener letras</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Introduce tu email"
          value={formData.email}
          onChange={handleChange}
          invalid={!validEmail}
          valid={validEmail}
        />
        {!validEmail && <FormFeedback>El email debe tener el formato 'nombredeusuario@dominio.ext'</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="password">Contraseña</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Introduce tu contraseña"
          value={formData.password}
          onChange={handleChange}
          minLength={6}
        />
      </FormGroup>
      <FormGroup>
        <Label for="edad">Edad</Label>
        <Input
          type="number"
          name="edad"
          id="edad"
          placeholder="Introduce tu edad"
          value={formData.edad}
          onChange={handleChange}
          valid={validAge}
          invalid={!validAge}
        />
        {!validAge && <FormFeedback>La edad debe ser un número entre 1 y 100</FormFeedback>}
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Género</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="genero"
              value="masculino"
              checked={formData.genero === 'masculino'}
              onChange={handleChange}
            />
            Masculino
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="genero"
              value="femenino"
              checked={formData.genero === 'femenino'}
              onChange={handleChange}
            />
            Femenino
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="rol">Rol</Label>
        <Input
          type="select"
          name="rol"
          id="rol"
          value={formData.rol}
          onChange={handleChange}
          valid={validRole}
          invalid={!validRole}
        >
          <option value="">Selecciona un rol</option>
          <option value="administrador">Administrador</option>
          <option value="usuario">Usuario</option>
        </Input>
        {!validRole && <FormFeedback>Debe seleccionar un rol</FormFeedback>}
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="opciones"
            checked={formData.opciones}
            onChange={handleChange}
          />
          Opciones
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="notas">Notas</Label>
        <Input
          type="textarea"
          name="notas"
          id="notas"
          value={formData.notas}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="fechaRegistro">Fecha de Registro</Label>
        <Input
          type="date"
          name="fechaRegistro"
          id="fechaRegistro"
          value={formData.fechaRegistro}
          onChange={handleChange}
          valid={validDate}
          invalid={!validDate}
        />
        {!validDate && <FormFeedback>La fecha debe ser de hoy en adelante</FormFeedback>}
      </FormGroup>
      <Button color='primary' type="submit">Guardar</Button>
      <Button onClick={handleReset} color='secondary' type="button">Reiniciar</Button>
      <CustomTable data={dataList} onDelete={handleDelete} onEdit={handleEdit} />
    </Form>
  );
}

export default FormularioRegistro;
