
import React from "react";
import ServiceView from "./serviceView";

async function Page({ params }) {
  const { id } = await params;

  // Fetch data during server-side rendering
  const res = await fetch(`${process.env.URL}/api/services/${id}`);
  const data = await res.json();
  const service = data.service;

  return (
    <ServiceView service={service} />
  );
}

export default Page;
