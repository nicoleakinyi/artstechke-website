export function PartnersSection() {
  const partners = [
    {
      name: "Ministry of Science and Technology",
      logo: "🇨🇲",
      color: "bg-red-500"
    },
    {
      name: "Cameroon",
      logo: "📊",
      color: "bg-green-500"
    },
    {
      name: "CNJC/CNYC",
      logo: "⚖️",
      color: "bg-red-600"
    },
    {
      name: "ANTIC",
      logo: "🌐",
      color: "bg-green-600"
    },
    {
      name: "UNDP",
      logo: "🇺🇳",
      color: "bg-blue-600"
    },
    {
      name: "GIZ",
      logo: "🇩🇪",
      color: "bg-red-500"
    },
    {
      name: "Future African Leaders Foundation",
      logo: "🌟",
      color: "bg-green-500"
    },
    {
      name: "ARTSKE",
      logo: "NT",
      color: "bg-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${partner.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
