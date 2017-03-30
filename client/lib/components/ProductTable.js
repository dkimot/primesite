import React, { PropTypes } from 'react';
import ProductRow from './ProductRow';

const products = [
  { category: 'Desktops', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Laptops', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Components', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Pre-Owned', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Accessories', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Desktops', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const ProductTable = ({ filter, category }) => {
  let rows = [];
  if (category) {
    products.forEach((p) => {
      const pCategory = p.category.toLowerCase();

      if (pCategory === category) {
        rows.push(
          <ProductRow key={p.name} data={p} />
        );
      }
    });
  } else {
    products.forEach((p) => {
      const nameLC = p.name.toLowerCase();
      const filterLC = filter.toLowerCase();

      if (nameLC.indexOf(filterLC) !== -1) {
        rows.push(
          <ProductRow key={p.name} data={p} />
        );
      }
    });
  }

  return <div> {rows} </div>;
};

ProductTable.propTypes = {
  filter: PropTypes.string,
  category: PropTypes.string
};

export default ProductTable;
