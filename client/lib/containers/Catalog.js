import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const Catalog = (props) => {
  if (props.params.category && !props.params.slug) {
    return (
      <div>
        <h3>Category: {props.params.category}</h3>
        <h3>Slug: {props.params.slug}</h3>
        <div>
          <ProductTable category={props.params.category} />
        </div>
      </div>
    )
  } else if (props.params.category && props.params.slug) {
    return (
      <div>
        <h3>Category: {props.params.category}</h3>
        <h3>Slug: {props.params.slug}</h3>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Full Category</h3>
      </div>
    )
  }
}

Catalog.propTypes = {
  params: React.PropTypes.object
}

export default Catalog;
