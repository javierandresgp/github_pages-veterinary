import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosClient from "../helpers/requests";
import { Main, Form, Fieldset, Legend, Label, Input, Button } from "./Styles";

const CreateAppoinment = (props) => {
  const [appoinment, setAppoinment] = useState({
    date: "",
    time: "",
    client: "",
    patient: "",
    reason: "",
  });

  const updateState = (e) => {
    setAppoinment({
      ...appoinment,
      [e.target.name]: e.target.value,
    });
  };

  const newAppoinment = (e) => {
    e.preventDefault();
    axiosClient.post("api/v1/appoinments", appoinment).then((res) => {
      props.setQuery(true);
      props.history.push("/");
    });
  };

  return (
    <Main role="main">
      <Button>
        <Link to="/">&#60;&#60;&#60; Regresar</Link>
      </Button>
      <Form onSubmit={newAppoinment}>
        <Fieldset>
          <Legend>Nueva cita</Legend>
          <Label htmlFor="date">Fecha</Label>
          <Input
            type="date"
            id="date"
            name="date"
            onChange={updateState}
            required
          />
          <Label htmlFor="time">Hora</Label>
          <Input
            type="time"
            id="time"
            name="time"
            onChange={updateState}
            required
          />
          <Label htmlFor="client">Cliente</Label>
          <Input
            type="text"
            id="client"
            name="client"
            placeholder="Nombre del propietario"
            onChange={updateState}
            required
          />
          <Label htmlFor="patient">Paciente</Label>
          <Input
            type="text"
            id="patient"
            name="patient"
            placeholder="Nombre de la mascota"
            onChange={updateState}
            required
          />
          <Label htmlFor="reason">Motivo</Label>
          <Input
            type="text"
            id="reason"
            name="reason"
            placeholder="Servicio, Consulta, Razón de la cita"
            onChange={updateState}
            required
          />
        </Fieldset>
        <Button type="submit">Crear nueva cita</Button>
      </Form>
    </Main>
  );
};

export default withRouter(CreateAppoinment);
