
'use client'
import { useRouter } from 'next/router';

export default function Embeder() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Testimonial ID: {id}</h1>;
}
