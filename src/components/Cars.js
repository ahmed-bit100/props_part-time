import React from 'react';

const Cars = ({car, func}) => {
  return (
    <div>
      {car.map((el) => (
        <div>
          <h1> {el.brand} </h1>
          <button onClick={() => func(el.brand, el.price)}>Show price</button>
        </div>
      ))}
    </div>
  );
};

export default Cars;
