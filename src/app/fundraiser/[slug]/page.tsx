

// import { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import Image from "next/image";

// interface ResponseType {
//   title: string;
//   description: {tagline : string, content: string};
//   mainImage: string
// }

export default async function Page({ params }: { params: { slug: string } }) {
  // const [data, setData] = useState();
  // const [isScrolled, setIsScrolled] = useState(false);


  // async function supaData() {
   

  //   // console.log("Error==>", error)

  //   return data;
  // }
  
  // useEffect(() => {
  //   // supaData().then(error => console.log("update err-->", error))
  //   supaData().then((data) => data && setData(data[0]));
  //   // .catch(Error, console.log("Something went wrong!", error))
  // }, [supaData]);


  const {data} = await supabase
  .from("FundRaiser")
  .select()
  .eq("slug", `${params.slug}`);

  console.log("DATA-->", data)
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 200) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // });
  return (
    data && (
      <div>
        <div className="mx-6 lg:px-20 mt-2">
          <h1 className="mb-2 py-6 capitalize font-bold lg:text-4xl text-gray-800 text-3xl">
            {data[0]["title"]}
          </h1>
          <div className="lg:grid lg:grid-cols-3">
            <div className="col-span-2">
              {/* <Blog data={data} /> */}
              <div className="group hover:before:block before:hidden before:absolute before:-inset-1 before:bg-gray-700 before:opacity-50 relative rounded-lg overflow-hidden hover:transition-all ease-in-out delay-1000 cursor-pointer">
                <h2 className="hidden hover:transition-all hover:delay-2000 text-center group-hover:block text-white capitalize font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {data[0]["title"]}
                </h2>
                <Image
                  className="object-contain"
                  src={data[0]["mainImage"]}
                  alt="main-image"
                  width={1600}
                  height={600}
                />
              </div>
              <div className="mt-2">
                <h2 className="text-gray-800 font-semibold text-3xl py-3">
                  Story
                </h2>
                <h3 className="my-3 text-xl text-gray-900 font-bold">
                  {data[0]["description"]["tagline"]}
                </h3>
                <p>{data[0]["description"]["content"]}</p>
                {/* <Support /> */}
                <div className="p-1 py-8 bg-gray-200 rounded-lg mt-5 mb-16">
                  <h3 className="w-full lg:text-4xl text-3xl font-bold my-1 text-gray-700 text-center">
                    Support the fundraiser
                  </h3>
                  <div className="flex p-3">
                    <button className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-1 mx-2 w-2/3 py-2 font-semibold text-white hover:text-gray-700 ease-out duration-300">
                      Donate
                    </button>
                    <button className="rounded-full border-2 w-2/3 my-1 mx-2 py-2 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block sticky top-10 ease-in-out duration-200 col-span-1 overflow-hidden bg-gray-100 rounded-lg ml-9 flex flex-col h-2/3">
              <div
                className={`bg-[url(https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDcxMTcwfHxlbnwwfHx8fHw%3D&w=1000&q=80)] bg-center h-1/2 flex justify-center items-center bg-gray-500`}
              >
                <p className="text-white italic">"Quote"</p>
              </div>
              <div className="flex flex-col h-1/2 items-center justify-center">
                <button className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 w-2/3 py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300">
                  Donate
                </button>
                <button className="rounded-full border-2 w-2/3 my-3 py-4 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`fixed bottom-0 rounded-t-md bg-gradient-to-r from-sky-500 to-indigo-500 w-full py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300 lg:hidden `
          // ${
          //   isScrolled ? "" : "translate-y-16"
          // }`
        }
        >
          Donate
        </button>
      </div>
    )
    // <h1>hfn</h1>
  );
}
