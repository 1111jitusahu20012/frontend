import React from 'react'

const Nutritioncard = ({Image,title}) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md w-24 h-full px-4 md:px-2 md:w-57">
        <div classname="w-full h-35 md:h-25">
          <img
            src={Image}
            alt="logo"
            classname="w-full h-full object-cover ronunded"
          />
        </div>
        <div >
          {" "}
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};
const Nutitioncaro=(props)=>{
  return(
    <>
    <Nutritioncard {...props}/></>
  )
}

export default Nutitioncaro;