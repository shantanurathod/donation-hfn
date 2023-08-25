import Link from "next/link";

export default function Title({title, headline} : {title: string, headline: string}) {
  return (
    <>
      <h2 className="text-gray-800 text-2xl font-bold mb-3">{title}</h2>
      <Link href={"#"}>
        <img
          className="lg:hidden p-2 bg-[#CBE6F4] rounded-full fixed z-10 w-10 right-3 top-0 m-3 "
          src="/icons8-share-30.svg"
          alt="share"
        />
      </Link>
      <h1 className="mb-8 sm:mr-12 capitalize font-bold lg:text-4xl text-gray-800 text-4xl">
        {headline}
      </h1>
    </>
  );
}
