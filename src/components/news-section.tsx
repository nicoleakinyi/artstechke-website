import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            News Update
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://ext.same-assets.com/69155415/1254919998.jpeg"
                  alt="ARTSKE Makerspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    ARTSKE Makerspace: Cameroon's Youth Innovation Hub for Hands-On STEM
                  </Link>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  What Is a Makerspace? A Makerspace is a dedicated workspace where a community meets to share ideas,
                  practice skills, explore creativity, and solve problems. ARTSKE Makerspace, established in 2020,
                  is one such hub located on the top floor of the Ecobank Building in Molyko, Buea, Cameroon.
                  Makerspaces provides hands-on practice and the necessary resources to bridge the gap between theory and practice...
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Read More →
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
