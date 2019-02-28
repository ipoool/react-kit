import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
// import the action
import { addToCart } from '../Actions';

function HomePage({ handlerAddToCart }) {
  return (
    <Layout>
      <h1 className="my-3">HOME PAGE</h1>
      <br />
      <button className="btn btn-primary" onClick={handlerAddToCart}>
        Add to Cart
      </button>
    </Layout>
  );
}

const mapDispatchToProps = dispacth => ({
  handlerAddToCart: () => dispacth(addToCart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
