const footer = () => {
    return (
        <div className="flex justify-between items-center p-6 sm:p-9 w-full md:w-10/12 mx-auto">
            <p className="text-l lg: text-2xl">All rights reserved &copy; 2023</p>
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-9 space-y-3 sm:space-y-0 ">
                <a className="text-l lg: text-2xl" onClick={() => window.location.href = "/terms-of-service"} style={{ cursor: "pointer" }}>
                    Terms of Service 
                </a>
                <a className="text-l lg: text-2xl"  onClick={() => window.location.href = "/privacy"} style={{ cursor: "pointer" }}>
                    Privacy 
                </a>
            </div>
        </div>
    )
}
export default footer;