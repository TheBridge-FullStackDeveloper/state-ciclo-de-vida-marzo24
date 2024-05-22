import { useEffect } from "react";

const ExampleChild = () => {
  useEffect(() => {
    //cuando se desmonta este componente se ejecuta este código
    return () => {
      alert("El componente ExampleChild ha sido eliminado(desmontado).");
    };
  });
  return <h1>Hola The Bridge!</h1>;
};

export default ExampleChild
