import supabase from "@/utils/supabase";
import Blog from "@/components/Blog"
import DonateWidget from "@/components/DonateWidget";
import DonateSlideBtn from "@/components/DonateSlideBtn";

const getData = async (slug: string) => {
  const {data} = await supabase
  .from("FundRaiser")
  .select()
  .eq("slug", `${slug}`);

  return data && data[0]
}
export default async function Page({ params }: { params: { slug: string } }) {
 
  
  const Data = await getData(params.slug)
  // console.log("Data-->", Data)
  return (
    Data && (
      <div>
        <div className="mx-6 lg:px-20 mt-2">
          <h1 className="mb-2 py-6 capitalize font-bold lg:text-4xl text-gray-800 text-4xl">
            {Data["title"]}
          </h1>
          <div className="lg:grid lg:grid-cols-3">
            <div className="col-span-2">
              <Blog data={Data} />
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

