function About () {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-gray-600 mt-2">I am a software developer with a passion for creating innovative solutions, always striving to improve and learn new technologies.</p>
            
            <h2 className="text-2xl font-semibold mt-6">Skills</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    )
}

export default About