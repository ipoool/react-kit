import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from './Layout';

import { authentication } from '../Actions/auth';

function Login({ auth, authAction, location }) {
  // check state isLoggin
  if (auth.isLoggin) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  }

  return (
    <Layout>
      <h1 className="my-3">Fake Login</h1>
      {!auth.isLoggin ? (
        <button onClick={authAction} className="btn btn-success">
          Login
        </button>
      ) : (
        ''
      )}
    </Layout>
  );
}

const mapStateToProps = state => ({
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  authAction: () => dispatch(authentication()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
