import React from "react";
import { useParams } from "react-router-dom";
import Del from "../Deillvery";
import Dining from "../DInein/Dienout";
import Nutition from "../NUtrition/Nutitioncaro";
//compo

const Master = () => {
  const { type } = useParams();
  return (
    <>
      {type === "dellivery" && <Del />}
      {type === "nu" && <Nutition />} {type === "dellivery" && <Del />}{" "}
      {type === "dine" && <Dining />} {type === "night" && <Del />}
    </>
  );
};
export default Master;
