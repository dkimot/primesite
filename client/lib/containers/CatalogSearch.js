import React from 'react';

const CatalogSearch = (props) => (
  <div>
    <input placeholder="Product Search" />
  </div>
)

CatalogSearch.propTypes = {
  params: React.PropTypes.object
}

export default CatalogSearch;
