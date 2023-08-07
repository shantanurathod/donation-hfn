// import {MouseEventHandler} from 'react'
"use client";

import { displayRazorpay } from "@/utils/displayRazorpay";

// import cors
function redirectToRazorPay() {
  // fetch("https://api.razorpay.com/v1/orders/", {
  //   method: "POST",
  //   headers: {
  //     Authorization: btoa(
  //       `${process.env.NEXT_PUBLIC_RAZORPAY_API_KEY_ID_TEST}:${process.env.NEXT_PUBLIC_RAZORPAY_API_KEY_SECRET_TEST}`
  //     ),
  //     "Access-Control-Allow-Origin": "https://api.razorpay.com/v1/orders/",
  //   },
  //   body: {
  //     "amount": "500",
  //     "currency": "INR",
  //     "receipt": "qwsaq1",
  //   },
  // }).then((res) => console.log("Razor is called->", res));
}
export default function DonateSlideBtn() {
  // const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // window.addEventListener('scroll', () => {
  //     window.screenY > 200 ? setIsScrolled(true) : setIsScrolled(false)
  //     // console.log('window.scrollY', window.scrollY)
  // })

  return (
    <button
    onClick={(e) => displayRazorpay()}
      className={`fixed bottom-0 rounded-t-md bg-gradient-to-r from-sky-500 to-indigo-500 w-full py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300 lg:hidden`}
    >
      Donate
    </button>
  );
}
