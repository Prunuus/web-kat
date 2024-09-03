'use client'
import "./globals.css";
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  return(
    <div className ="navi">
      <img className="logo"src="https://reach4home.org/wp-content/uploads/2021/06/The-Reach-Project-Logo-Regular.jpg" alt="reach image"></img>

        <a href="https://web-kat.vercel.app" onClick={() => router.push('..')} className="nav-links1">Home</a>
        <a href="https://web-kat.vercel.app/About" onClick={() => router.push('./About')} className="nav-links2">About</a>
        <a href = "https://web-kat.vercel.app/Donations"onClick={() => router.push('./Donations')}className="nav-links3">Donate!</a>

        <div className="welcome-area">
          <h1 className ="welcome">Welcome to Ags Reach Gift Drive!</h1>
        </div>

    </div>
  )
}