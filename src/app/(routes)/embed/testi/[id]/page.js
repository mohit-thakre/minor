"use client";
import { useEffect, useState } from "react";

export default function TestimonialPage({ params }) {
  const { id } = params;
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    // Simulate fetching testimonial data
    async function fetchTestimonial() {
      const response = await fetch(`/api/testimonials/${id}`);
      const data = await response.json();
      setTestimonial(data);
    }

    fetchTestimonial();
  }, [id]);

  if (!testimonial) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen">
      <h1>Viewing Testimonial ID: {id}</h1>
      <p>{testimonial.content}</p>
    </div>
  );
}
