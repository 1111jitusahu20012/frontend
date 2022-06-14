import React from 'react'

const Dellivrycategory = ({Image,title}) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md">
        <div className="w-full h-full ">
          <img
            src={Image} alt="logo"
         className='w-40 h-20 object-cover'/>
         <h1 className='text-b text-center text text-lg' >{title}</h1>
        </div>
      </div>
    </>
  );
}

export default Dellivrycategory