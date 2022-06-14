import React from 'react';
import { useParams } from 'react-router-dom';
import Del from '../Deillvery';
import DiningCarousal from '../DInein/Dienout';
import Nutitioncaro from '../NUtrition/Nutitioncaro';
//compo

 const Master = () => {
    const {type} =useParams();
  return (
    <>
      {type === "dellivery" && <Del />}
      {type === "nu" && < Nutitioncaro />} {type === "dellivery" && <Del />}{" "}
      {type === "dine" && <DiningCarousal />} {type === "night" && <Del />}
    </>
  );
}
export default Master;