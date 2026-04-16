"use client";
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
  return (
    <div>
      <h1>properties</h1>
      <Link href="/">Go home</Link>
        <button onClick={() => router.push('/properties/add')}>Add Property</button>
    </div>
  )
}

export default page
