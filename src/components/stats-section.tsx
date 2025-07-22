import { Globe, Users, GraduationCap, Handshake } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Globe,
      number: "5",
      label: "Regions Reached",
      color: "text-blue-600",
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Community Members",
      color: "text-blue-600",
    },
    {
      icon: GraduationCap,
      number: "2,000+",
      label: "Impacted Kids and Youths",
      color: "text-blue-600",
    },
    {
      icon: Handshake,
      number: "8",
      label: "Partners",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
