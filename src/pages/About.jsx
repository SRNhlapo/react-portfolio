import {useState} from 'react'
function About () {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                    <img src="public/profile.PNG" 
                    alt="photo" 
                    className="w-40 h-40 rounded-full object-cover"/>
                    
                  </div>
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-gray-600 mt-2">
                I am a software developer with a passion for creating innovative solutions, always striving to improve and learn new technologies.
                </p>
                {showMore && (
                    <p className="text-gray-600 mt-2">
                        I have experience in building responsive and user-friendly websites using modern technologies. I enjoy collaborating with others and contributing to open-source projects.
                    </p>
                )}
             
                <button
                    className="mt-3 text-blue-500 text-sm font-medium"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Show Less' : 'Read More'}
                </button>
              
                <div className="mt-12">
            <h2 className="text-2xl font-semibold mt-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-blue-50 text-blue-700 py-3 rounded-lg font-medium text-center">
                    JavaScript
                </div>
                <div className="bg-blue-50 text-blue-700 py-3 rounded-lg font-medium text-center">
                    React
                </div>
                <div className="bg-blue-50 text-blue-700 py-3 rounded-lg font-medium text-center">
                    Node.js
                </div>
                <div className="bg-blue-50 text-blue-700 py-3 rounded-lg font-medium text-center">
                    HTML & CSS
                </div>
                <div className="bg-blue-50 text-blue-700 py-3 rounded-lg font-medium text-center">
                    Git & GitHub
                </div>
            </div>
        </div>
    </div>
       )
}

export default About