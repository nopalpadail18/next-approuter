'use client';

import { useState } from 'react';

export default function ProductAdmin() {
  const [status, setStatus] = useState('');
  const revalidate = async () => {
    const res = await fetch('http://localhost:3000/api/revalidate?tag=products&secret=123', {
      method: 'POST',
    });

    if (!res.ok) {
      setStatus('error');
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus('success');
      }
    }

    // console.log(await res.json());
  };
  return (
    <div>
      <h1>{status}</h1>
      <button onClick={() => revalidate()}>Revalidate</button>
    </div>
  );
}
