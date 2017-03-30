import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const CatalogSearch = ({ filter, onFilter }) => {
  let input;

  return (
    <div className={filterableTable}>
      <input
        value={filter}
        ref={node => {input = node;}}
        placeholder="Product Search"
        onChange={() => onFilter(input.value)} />
      <ProductTable filter={filter} />
    </div>
  );
};

CatalogSearch.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: filterText => dispatch(filterTable(filterText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogSearch);
