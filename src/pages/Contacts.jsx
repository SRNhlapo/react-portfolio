function Contacts () {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold">Get in touch</h1>
            <p className="text-gray-600 mt-4">
                Feel free to reach out to me through any of the following:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-white-50 text-black-700 py-3 rounded-lg font-medium text-center">
                    Email: <a href="mailto:Siyanhlapo88@gmail.com" className="text-blue-500 hover:underline">
                        Siyanhlapo88@gmail.com
                    </a>    
                </div>
                <div className="bg-white-50 text-black-700 py-3 rounded-lg font-medium text-center">
                   Phone: <a href="tel:+27762345678" className="text-blue-500 hover:underline">
                        +27 76 234 5678
                    </a>
                </div>
                <div className="bg-white-50 text-black-700 py-3 rounded-lg font-medium text-center">
                    LinkedIn: <a href="https://www.linkedin.com/in/siya-nhlapo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        linkedin.com/in/siya-nhlapo
                    </a>
                </div>
                <div className="bg-white-50 text-black-700 py-3 rounded-lg font-medium text-center">
                    GitHub: <a href="https://github.com/SRNhlapo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        github.com/SRNhlapo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts

