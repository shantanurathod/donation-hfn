export default function Support() {
  return (
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
  );
}
