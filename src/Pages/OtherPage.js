import React, { useState } from 'react';
import Layout from './Layout';

export default function OtherPage() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <h1 className="my-3">
        OTHER PAGE
        {' '}
        <span className="badge badge-success">{count}</span>
      </h1>
      <br />
      <button
        className="btn btn-warning"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Example Using Hook
      </button>
    </Layout>
  );
}
