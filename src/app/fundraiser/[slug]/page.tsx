import supabase from "@/utils/supabase";
import Image from "next/image";
import Blog from "../../../../components/Blog";
import Support from "../../../../components/Support";
import DonateWidget from "../../../../components/DonateWidget";
import DonateSlideBtn from "../../../../components/DonateSlideBtn";

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
            <DonateWidget firstBtn="Donate" secBtn="Share" quote="Quote" bgUrl="https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDcxMTcwfHxlbnwwfHx8fHw%3D&w=1000&q=80"/>
          </div>
        </div>
        <DonateSlideBtn/>
      </div>
    )
    // <h1>hfn</h1>
  );
}

