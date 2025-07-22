import Image from "next/image";

export function InnovationSection() {
  const tools = [
    {
      title: "Educational Kits",
      image: "https://ext.same-assets.com/69155415/2993056315.webp",
      category: "Kit"
    },
    {
      title: "Education",
      image: "https://ext.same-assets.com/69155415/1428157282.webp",
      category: "Education"
    },
    {
      title: "Curriculum",
      image: "https://ext.same-assets.com/69155415/894478444.webp",
      category: "Curriculum"
    },
    {
      title: "Makerspace",
      image: "https://ext.same-assets.com/69155415/2146307292.webp",
      category: "Makerspace"
    },
    {
      title: "Community",
      image: "https://ext.same-assets.com/69155415/3840521704.webp",
      category: "Community"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            An Innovation-ready Ecosystem with all the Necessary Tools
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto mb-6"></div>
          <p className="text-lg text-orange-100 leading-relaxed max-w-4xl mx-auto">
            Experience our innovation-ready ecosystem, where creativity thrives. Our nTron kit offers
            practical learning and cutting-edge technology. Explore our state-of-the-art makerspace,
            a collaborative hub for bringing ideas to life. Engage in community activities, workshops,
            and seminars to connect with fellow innovators. Stay ahead with our educational activities,
            including hands-on training in cutting-edge technologies, design thinking, and entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                    {tool.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">
                    {tool.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
