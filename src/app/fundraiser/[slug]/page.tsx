import Blog from "@/components/Blog";
import Title from "@/components/Title";
import DonateWidget from "@/components/DonateWidget";
import Support from "@/components/Support";
import DonateSlideBtn from "@/components/DonateSlideBtn";


const getData = async (slug: string) => {
  // const newData = await fetch(`https://pbsfwbgsmkcjegweotla.supabase.co/rest/v1/FundRaiser?slug=eq.${slug}&select=*`,
  // {method: 'GET',
  // headers: {
  //   'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  //   'Authorization': process.env.NEXT_PUBLIC_SUPABASE_AUTHORIZATION
  // },
  // cache: 'no-cache'})

  const newData = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
      `/campaigns?filters[slug][$eq]=${slug}`,
    { cache: "no-cache" }
  );
  const newDataJson = await newData.json();
  const Data = await newDataJson.data[0]["attributes"];
  // console.log("newDataJson-->", newDataJson)

  // const {data} = await supabase
  // .from("FundRaiser")
  // .select()
  // .eq("slug", `${slug}`);

  return Data;
};
export default async function Page({ params }: { params: { slug: string } }) {
  const Data = await getData(params.slug);
  // console.log("Data-->", Data[0])

  return (
    Data && (
      <div className="">
        <div className="mx-6 lg:px-20 mt-6 md:mb-16">
          <Title title={Data.title} headline={Data.headline}/>
          <div className="lg:grid lg:grid-cols-3">
            <Blog data={Data} />
            <DonateWidget firstBtn="Donate" secBtn="Share" quote="Quote" />
          </div>
        </div>
        <DonateSlideBtn />
        <Support />
      </div>
    )
    // <h1>Helllll</h1>
  );
}
