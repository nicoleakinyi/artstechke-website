import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ProgramsSection() {
  const programs = [
    {
      title: "Ntron Ignite Kit",
      description: "Looking to improve your Science, Technology, Engineering, Arts and Mathematics (STEAM) lessons and make it more practical, the nTron Kit is definitely a toolkit worth considering.",
      image: "https://ext.same-assets.com/69155415/2259175953.jpeg",
      category: "Educational Kit"
    },
    {
      title: "HTC 2023 Closing",
      description: "Excitement and pride in their eyes as they present their creations to an enthusiastic audience. The closing ceremony is a testament to their hard work and dedication.",
      image: "https://ext.same-assets.com/69155415/841799661.webp",
      category: "Event"
    },
    {
      title: "Holiday Tech Camp (HTC)",
      description: "Our HTC is designed to empower young tech innovators for a promising future. Our comprehensive curriculum introduces participants to the latest technological advancements.",
      image: "https://ext.same-assets.com/69155415/3071765223.png",
      category: "Program"
    },
    {
      title: "ARTSKE Community MeetUp",
      description: "Connect with like-minded individuals who share your passion for innovation and personal development through our Community Meetups.",
      image: "https://ext.same-assets.com/69155415/856283157.jpeg",
      category: "Community"
    },
    {
      title: "ARTSKE Makerspace",
      description: "Our one-stop Lab for digital manufacturing services will help you streamline your production process and take your ideas, prototypes, projects, products, and business to the next level.",
      image: "https://ext.same-assets.com/69155415/2801396668.jpeg",
      category: "Facility"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {program.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
