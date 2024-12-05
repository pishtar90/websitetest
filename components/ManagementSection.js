const ManagementSection = () => {
    // Data for management cards
    const management = [
      {
        name: "Fisnik",
        title: "Solutions ekspert",
        background: "/images/fisnik.jpg", // Replace with the actual image path
        linkedin: "#", // Add the LinkedIn URL
      },
      {
        name: "Petrit",
        title: "Delivery ekspert",
        background: "/images/petrit.jpg",
        linkedin: "#",
      },
      {
        name: "Pishtar",
        title: "Business ekspert",
        background: "/images/pishtar.jpg",
        linkedin: "#",
      },
      {
        name: "Edita",
        title: "Development ekspert",
        background: "/images/edita.jpg",
        linkedin: "#",
      },
      {
        name: "Lindon",
        title: "Design ekspert",
        background: "/images/lindon.jpg",
        linkedin: "#",
      },
    ];
  
    return (
      <div className="container mx-auto px-8 py-16 max-w-[1280px]">
        <h2 className="text-center text-black font-bold text-4xl mb-12">
          UNSER MANAGEMENT AUF EINEN BLICK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {management.map((person, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${person.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:opacity-80"></div>
  
              {/* Name and Title */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
                <h3 className="text-2xl font-bold">{person.name}</h3>
                <p className="text-sm mt-2">{person.title}</p>
              </div>
  
              {/* LinkedIn Icon */}
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-black rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zm-6 5v5m4-5v5m4-2.5h-3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ManagementSection;
  