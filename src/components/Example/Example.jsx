import React, { useState, useEffect } from "react";

const Example = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [name, setName] = useState("Juan Carlos");

  //cuanto se monta
  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 1000);
  }, []);

  //cuando se actualiza
  useEffect(() => {
    console.log("se ha actualizado");
  });

  //cada vez que cambia lo que l he pasado en el [] se ejecuta
  useEffect(() => {
    console.log(" favoriteColor ha cambiado");
  }, [name]);

  return <h1>My Favorite Color is {favoriteColor}</h1>;
};

export default Example;
