// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Thermal Printing App</h1>
      <p>
        <Link href="/print">
          Go to Print Page
        </Link>
      </p>
    </div>
  );
}