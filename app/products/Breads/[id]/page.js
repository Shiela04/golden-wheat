"use client";

import { useEffect, useState } from "react";

export default function BreadPage({ params }) {
  const [bread, setBread] = useState(null);
  const [error, setError] = useState(false);
  const [id, setId] = useState(null);

  async function unwrapParams() {
    const { id: unwrappedId } = await params;

    setId(unwrappedId);
  }

  async function fetchBread() {
    try {
      const res = await fetch(`http://localhost:4000/products/${id}`);
      if (!res.ok) {
        setError(true);
      }
      const data = await res.json();
      setBread(data);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!id) return;
    fetchBread();
  }, [id]);

  if (error)
    return <p className="text-lg text-center text-red-500">Bread not found</p>;
  if (!bread)
    return <p className="text-lg text-center text-yellow-500">Loading...</p>;
}

return (
  <div>
    {/* <img src="http://localhost:4000/${id}"></img> */}
    <h1 className="text-2xl text-center">{bread.name}</h1>
    <p className="text-lg text-center">{bread.description}</p>
  </div>
);
