import React from 'react';
import { connect } from 'react-redux';

function Cart({ cartReducer }) {
  return (
    <React.Fragment>
      Cart
      {' '}
      <span>{cartReducer.count}</span>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  cartReducer: state.addToCartReducer,
});

export default connect(mapStateToProps)(Cart);
