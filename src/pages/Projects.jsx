import ProjectCard from '../components/ProjectCard' 

function Projects() {
    const projects = [
        {
            title: "Diamond Tech Website",
            description: "A bootstrap-based responsive website for a tech company, showcasing their services and products.",
            link: "https://github.com/SRNhlapo/diamond-tech-website"
        },
        {
            title: "The Beauty Spa",
            description: "A menu-style website for a beauty spa, built with HTML, CSS, and JavaScript, featuring a booking system and service information.",
            link: "https://github.com/SRNhlapo/Menu-Like-Project"
        },
        {
            title: "This Portfolio",
            description: "A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
            link: "https://github.com/SRNhlapo/react-portfolio"
        },
        {
            title: "Clock",
            description: "A simple clock application built with React, displaying the current time and date.",
            link: "https://github.com/SRNhlapo/clock"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="grid gap-4 mt-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}


export default Projects