import supabase from "@/utils/supabase";
import Blog from "@/components/Blog"
import DonateWidget from "@/components/DonateWidget";
import DonateSlideBtn from "@/components/DonateSlideBtn";

const getData = async (slug: string) => {

  const newData = await fetch(`https://pbsfwbgsmkcjegweotla.supabase.co/rest/v1/FundRaiser?slug=eq.${slug}&select=*`, 
  {method: 'GET',
  headers: {
    'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  },
  cache: 'no-cache'})
  const newDataJson = await newData.json()
  console.log("newData-->", newDataJson)

  // const {data} = await supabase
  // .from("FundRaiser")
  // .select()
  // .eq("slug", `${slug}`);

  return newDataJson
}
export default async function Page({ params }: { params: { slug: string } }) {
 
  
  const Data = await getData(params.slug)
  console.log("Data-->", Data[0])
  return (
    Data && (
      <div>
        <div className="mx-6 lg:px-20 mt-2">
          <h1 className="mb-2 py-6 capitalize font-bold lg:text-4xl text-gray-800 text-4xl">
            {Data[0]["title"]}
          </h1>
          <div className="lg:grid lg:grid-cols-3">
            <div className="col-span-2">
              <Blog data={Data[0]} />
            </div>
            <DonateWidget firstBtn="Donate" secBtn="Share" quote="Quote"/>
          </div>
        </div>
        <DonateSlideBtn/>
      </div>
    )
    // <h1>hfn</h1>
  );
}

