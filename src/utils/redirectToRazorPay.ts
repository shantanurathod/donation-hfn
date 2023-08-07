
export default function redirectToRazorPay()
{
    fetch('https://api.razorpay.com/v1/orders/',  {method: 'GET', headers: {Authorization: btoa(`${process.env.NEXT_PUBLIC_RAZORPAY_API_KEY_ID_TEST}:${process.env.NEXT_PUBLIC_RAZORPAY_API_KEY_SECRET_TEST}`)}})
    .then(res => console.log("Razor is called->", res))
}