import { PiDetectiveFill } from "react-icons/pi";

const header = () => {
    return (
        <div className="flex justify-between items-center p-6 sm:p-9 w-full md:w-10/12 mx-auto">
            <PiDetectiveFill size={70} className="sm:size-70 " onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}/>
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-9 space-y-3 sm:space-y-0 items-center">
                <a className="text-xl sm:text-2xl md:text-3xl" href="/" style={{ cursor: "pointer" }}>
                    Home
                </a>
                <a className="text-xl sm:text-2xl md:text-3xl" href="/features" style={{ cursor: "pointer" }}>
                    Features
                </a>
                <a className="text-xl sm:text-2xl md:text-3xl" href="/contact" style={{ cursor: "pointer" }}>
                    Contact
                </a>
            </div>
        </div>

    )

}
export default header