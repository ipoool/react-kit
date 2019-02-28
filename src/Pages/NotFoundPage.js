import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <h1 className="my-3">404 - Page Not Found</h1>
      <br />
      <Link to="/" className="btn btn-link">
        Back to Home
      </Link>
    </Layout>
  );
}
