export default function DonateWidget({firstBtn, secBtn, quote} : {firstBtn:string, secBtn:string, quote:string}) {
  return (
    <div className="hidden lg:block sticky top-10 ease-in-out duration-200 col-span-1 overflow-hidden bg-gray-100 rounded-lg ml-9 flex flex-col h-2/3">
      <div className={`bg-[url(https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDcxMTcwfHxlbnwwfHx8fHw%3D&w=1000&q=80)] bg-center h-1/2 flex justify-center items-center bg-gray-500`}>
        <p className="text-white italic">{quote}</p>
      </div>
      <div className="flex flex-col h-1/2 items-center justify-center">
        <button className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 my-3 w-2/3 py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300">
          {firstBtn}
        </button>
        <button className="rounded-full border-2 w-2/3 my-3 py-4 border-gray-400 font-semibold text-gray-700 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-gray-100 hover:text-white ease-out duration-300">
          {secBtn}
        </button>
      </div>
    </div>
  );
}
