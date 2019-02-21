import React, { useState, useEffect } from 'react';
import Layout from './Layout';

export default function OtherPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click ${count}`;
  });

  return (
    <Layout>
      <h1>
        OTHER PAGE
        {count}
      </h1>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </Layout>
  );
}
