function Home () {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto p-6 text-center pt-24 pb-16">
            <div className=" mx-auto mb-6 flex items-center justify-center text-4xl">
                HELLO!!!
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
                My name is Siya 
            </h1>
            <p className="text-gray-600 mt-4 text-xl">
                A software developer passionate about creating innovative solutions.
            </p>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                I build responsive and user-friendly websites using modern technologies, all while growing my skills one project at a time.
            </p>
            <a href="/Projects" 
            className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg front-medium hover:bg-blue-600"
            >
                View My Work
            </a>
            </div>
          </div>
    )
}

export default Home