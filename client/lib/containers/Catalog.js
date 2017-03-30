import React from 'react';

const Catalog = (props) => (
  <div>
    <h3>Category: {props.params.category}</h3>
    <h3>Slug: {props.params.slug}</h3>
  </div>
)

Catalog.propTypes = {
  params: React.PropTypes.object
}

export default Catalog;
