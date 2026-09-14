function Projects () {
    return (
        <div className="pmax-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ul className="mt-4 space-y-4">
                <li className="border rounded-lg p-4">
                <h3 className="front-semibold text-lg">Diamond Tech Website</h3>
            <p className="text-gray-600 text-sm mt-1">
                Abootstrap-based responsive website for a tech company, showcasing their services and products.
                </p>
                    <a href="https://github.com/SRNhlapo/diamond-tech-website"className="text-blue-500 text-sm">
                        View on GitHub
                    </a>
                </li>
                <li className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg">The Beauty Spa</h3>
                    <p className="text-gray-600 text-sm mt-1">
                        A menu-style website for a beauty spa, built with HTML, CSS, and JavaScript, featuring a booking system and service information.
                    </p>
                    <a href="https://github.com/SRNhlapo/the-beauty-spa" className="text-blue-500 text-sm">
                        View on GitHub
                    </a>
                </li>
                <li className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg">This Portfolio</h3>
                    <p className="text-gray-600 text-sm mt-1">
                        A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.
                    </p>
                    <a href="https://github.com/SRNhlapo/react-portfolio" className="text-blue-500 text-sm">
                        View on GitHub
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Projects