import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function TechAreasSection() {
  const techAreas = [
    {
      title: "Robotics",
      image: "https://ext.same-assets.com/69155415/3118110987.jpeg"
    },
    {
      title: "Web Development",
      image: "https://ext.same-assets.com/69155415/4235953580.jpeg"
    },
    {
      title: "Programming",
      image: "https://ext.same-assets.com/69155415/499923134.jpeg"
    },
    {
      title: "3D Modeling & Printing",
      image: "https://ext.same-assets.com/69155415/3526228803.jpeg"
    },
    {
      title: "Artificial Intelligence",
      image: "https://ext.same-assets.com/69155415/1161076520.jpeg"
    },
    {
      title: "UI/UX Design",
      image: "https://ext.same-assets.com/69155415/770564967.jpeg"
    },
    {
      title: "Cybersecurity",
      image: "https://ext.same-assets.com/69155415/1522532085.jpeg"
    },
    {
      title: "Drone Technology",
      image: "https://ext.same-assets.com/69155415/670927871.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-400 to-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Equipping Young Tech Innovators for a Promising Future
          </h2>
          <p className="text-lg text-cyan-100 leading-relaxed max-w-4xl mx-auto">
            We are dedicated to equipping young tech innovators with the skills they need for a promising future.
            Through our comprehensive programs, we introduce them to cutting-edge technologies such as Robotics,
            Web development, Programming, 3D modeling, AI, IoT, Cyber Security, Drone Technology, and Entrepreneurship.
            Our hands-on approach fosters creativity and critical thinking, empowering them to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-white text-sm">
                  {area.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
