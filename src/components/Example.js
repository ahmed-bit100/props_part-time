import React from 'react';
import propTypes from 'prop-types';

const Example = ({name, children}) => {
  return (
    <div>
      <h1> {name} </h1>
      <h3> Example's children are : </h3>
      {children}
    </div>
  );
};

Example.defaultProps = {
  name: 'Kais',
};

Example.propTypes = {
  name: propTypes.string,
};

export default Example;
