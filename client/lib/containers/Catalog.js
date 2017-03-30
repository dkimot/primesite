import React from 'react';

const Catalog = (props) => (
  <div>
    <h3>ID: {props.params.category}</h3>
    <h3>ID: {props.params.slug}</h3>
  </div>
)

Catalog.propTypes = {
  params: React.PropTypes.object
}

export default Catalog;
