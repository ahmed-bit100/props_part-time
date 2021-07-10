import React from 'react';

const Data = ({aymen}) => {
  // console.log(props);
  return (
    <div>
      <h1>
        {' '}
        {aymen.firstName} {aymen.lastName}{' '}
      </h1>
    </div>
  );
};

export default Data;
