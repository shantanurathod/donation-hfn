'use client'

import { displayRazorpay } from "@/utils/displayRazorpay"


export default function Page() {
  
  return (
    <div>
      helloo
      <br/>
      <button onClick={(e)=> displayRazorpay()} className="cursor-pointer px-6 px-2 text-white rounded bg-black" >donate</button>
    </div>
  );
}