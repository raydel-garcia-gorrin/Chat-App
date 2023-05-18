import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Chat App RayDevPro</C.Title>
      <C.Info>
        Ahora puede enviar y recibir mensajes sin tener que mantener su teléfono
        conectado a Internet.
      </C.Info>
    </C.Container>
  );
};

export default Default;
