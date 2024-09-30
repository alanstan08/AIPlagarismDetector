const heroSection = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center py-28">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Real-time AI-Powered Plagiarism Detection
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-2xl dark:text-gray-500 py-4">
            Detect plagiarism instantly with our advanced AI technology. Ensure originality in your work.
          </p>
          <div className="bg-black rounded-2xl" >
            <p className="text-2xl text-white border-2 border-black rounded-2xl p-3 m-3" onClick={() => window.location.href = "/upload-document"} style={{ cursor: "pointer" }}>
              Upload Your Document
            </p>
          </div>
        </div>
    )
}
export default heroSection