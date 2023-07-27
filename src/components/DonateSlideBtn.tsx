
export default function DonateSlideBtn() {
    // const [isScrolled, setIsScrolled] = useState<boolean>(false)

    // window.addEventListener('scroll', () => {
    //     window.screenY > 200 ? setIsScrolled(true) : setIsScrolled(false)
    //     // console.log('window.scrollY', window.scrollY)
    // })


    return (
        <button
          className={`fixed bottom-0 rounded-t-md bg-gradient-to-r from-sky-500 to-indigo-500 w-full py-4 font-semibold text-white hover:text-gray-700 ease-out duration-300 lg:hidden`
        }
        >
          Donate
        </button>
    );
}