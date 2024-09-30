
import { HiOutlineBolt } from "react-icons/hi2";
import { LuCheckCircle } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
const featureSection = () => {
    return(
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center bg-gray-100 py-28">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Key Features
          </h1>
          <div className="grid gap-20 sm:grid-cols-2 md:grid-cols-3 px-6">
            <div className="flex flex-col items-center space-y-4 p-4">
              <HiOutlineBolt size={60} />
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-l text-gray-500 dark:text-gray-400 text-center">
                Get results in seconds, not minutes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <LuCheckCircle size={60} />
              <h3 className="text-xl font-bold">Highly Accurate</h3>
              <p className="text-l text-gray-800 dark:text-gray-400 text-center">
                Powered by advanced AI for precise detection.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <IoDocumentsOutline size={60}  />
              <h3 className="text-xl font-bold">Detailed Reports</h3>
              <p className="text-l text-gray-500 dark:text-gray-400 text-center">
                Comprehensive analysis with source citations.
              </p>
            </div>
          </div>
        </div>
    )
}

export default featureSection;