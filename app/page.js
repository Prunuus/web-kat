'use client'
import "./globals.css";
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  return(
    <div>
      <h1>Welcome to Ags Reach Gift Drive!</h1>
      <button type="button" onClick={() => router.push('./Donations')}>Donate!</button>
    </div>
  )
}