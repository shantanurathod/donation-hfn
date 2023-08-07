import { NextRequest, NextResponse } from "next/server";
import Razorpay from 'razorpay'
import shortUUID from "short-uuid";

export async function GET(req: NextRequest, res: NextResponse)
{
    const razorpayInstance = new Razorpay({key_id: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY_ID_TEST, key_secret: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY_SECRET_TEST})
    const razorResponse = await razorpayInstance.orders.create(
      {amount: 500,
      currency: "INR",
      receipt: shortUUID.generate(),
      payment_capture: true}
    )
  

    // console.log("razorResponse-->", razorResponse)
    
    // return NextResponse.json(razorResponse)
    return NextResponse.json({name: "Shan"})
}