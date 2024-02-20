import Image from "next/image";
import img1 from "../../public/assets/img1.png";
import img2 from "../../public/assets/img2.png";
import img3 from "../../public/assets/img3.png";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto px-4 mt-10">
      {/* Section 1  */}
      <section className="flex justify-between items-center">
        {/* Left Hexagonal  */}
        <div className="w-[50%] md:w-[40%] relative h-[180px] md:h-[400px]">
          <div className="w-[70%] aspect-[10/8] m-auto absolute bottom-2 right-0">
            <Image
              src={img1}
              alt="Image "
              width={200}
              height={200}
              className="w-full h-full z-0"
            />
          </div>
          <div className="w-[100%] h-[100%] absolute right-0 bottom-0">
            <Image
              src={img3}
              alt="Image "
              width={400}
              height={400}
              className="h-full w-full z-1"
            />
          </div>
        </div>
        {/* Right Content  */}
        <div className="w-[50%] pl-4">
          <h1 className="text-[25px] md:text-[60px] font-semibold md:leading-[65px] text-[#002e47] dark:text-[#eae3b8]">
            Get the Wix Code Advantage
          </h1>
          <p className="dark:text-[#eae3b8] mt-4 text-[12px] md:text-[20px] text-[#002e47]">
            We help business build custom functionality that actually makes a
            difference to their bottom line.
          </p>
          <button
            className="mt-8 h-[40px] border-[#f0a343] dark:border-white text-[12px] md:text-[20px] w-40 md:w-[300px] border bg-[#eae3b8] text-black font-semibold no-wrap rounded-md hover:bg-[#e4db9b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1c276] transition-colors"
            style={{ boxShadow: "rgba(199, 194, 194, 0.25) 0px 0px 30px 15px" }}
          >
            BOOK A CALL NOW
          </button>
        </div>
      </section>
      {/* Services Section  */}
      <section className="flex justify-between items-center mt-[300px] mb-10">
        {/* Left Section  */}
        <div className="w-[50%]">
          <h1 className="text-[30px] md:text-[50px] font-semibold dark:text-[#eae3b8] mb-3 md:mb-5 text-[#002e47]">
            Services
          </h1>
          <div className="space-y-4 md:space-y-8">
            <div className="flex items-center space-x-4">
              <div className="dark:text-white rounded px-2 py-1 md:px-3 md:py-1 border-[#dea03c] text-[#002e47] border-[1px] md:border-[2px]">
                01
              </div>
              <div className="text-[#dea03c] text-[12px] md:text-[20px]">
                Third party APIs
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="dark:text-white rounded px-2 py-1 md:px-3 md:py-1 border-[#dea03c] text-[#002e47] border-[1px] md:border-[2px]">
                02
              </div>
              <div className="text-[#dea03c] text-[12px] md:text-[20px]">
                Custom payments
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="dark:text-white rounded px-2 py-1 md:px-3 md:py-1 border-[#dea03c] text-[#002e47] border-[1px] md:border-[2px]">
                03
              </div>
              <div className="text-[#dea03c] text-[12px] md:text-[20px]">
                Full constume store
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="dark:text-white rounded px-2 py-1 md:px-3 md:py-1 border-[#dea03c] text-[#002e47] border-[1px] md:border-[2px]">
                04
              </div>
              <div className="text-[#dea03c] text-[12px] md:text-[20px]">
                Custom wix solution
              </div>
            </div>
          </div>
        </div>
        {/* Right Section  */}
        <div className="w-[50%] h-[200px] md:h-[300px]">
          <div className="flex justify-center h-[50%]">
            <Image
              src={img2}
              height={200}
              width={200}
              alt="Image "
              className="w-[50%] h-[100%]"
            />
            <Image
              src={img2}
              height={200}
              width={200}
              alt="Image "
              className="w-[50%] h-[100%]"
            />
          </div>
          <div className="flex justify-center h-[50%]">
            <Image
              src={img2}
              height={200}
              width={200}
              alt="Image "
              className="w-[50%] h-[100%]"
            />
            <Image
              src={img2}
              height={200}
              width={200}
              alt="Image "
              className="w-[50%] h-[100%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
