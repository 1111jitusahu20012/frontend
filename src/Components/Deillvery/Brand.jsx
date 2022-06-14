import React from 'react';

const Brand = ({image}) => {
  return (
  <>
    <div className='w-40 h-20 object-cover'>
        <img src={image} alt="logo" />
    </div>
  </>);
}
export default Brand;
