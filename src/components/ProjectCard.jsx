function ProjectCard({ title, description, link }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
            <a href={link} className="text-blue-500 text-sm mt-2 inline-block">
                View on GitHub
            </a>
        </div>
    )
}

export default ProjectCard