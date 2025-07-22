import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Impact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Image */}
          <div className="relative">
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/69155415/3208784824.png"
                alt="Tech Camp participants"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg">
                <div className="text-sm font-bold">Get Them to express themselves!</div>
                <div className="text-xs">Let kids about playing and teaching them about what they truly love is what we...</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-cyan-600">
              We Keep Creating Impact
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We don't want our children to see STEAM [Science, Technology, Engineering, Arts, Mathematics]
              fields as rocket science or imaginary, we want them to have a believe system that they can use
              STEAM to create solutions, therefore we are providing them with the tools need to make their
              dreams a reality. Through hands-on experiments, innovative projects, and engaging activities,
              we inspire them to explore their imaginations, develop critical thinking skills, and build a
              strong foundation for their future success in STEAM disciplines.
            </p>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              More...
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-cyan-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-4xl text-yellow-300 mb-4">"</div>
                <p className="text-lg leading-relaxed mb-6">
                  My 7 weeks spent in the ARTSKE Holiday Tech Camp was an exceptional experience. A very organized
                  curriculum and a very skilled team. I will confidently say it was an experience of a lifetime. Within
                  these few weeks with the kids, I came across the next Generation of tech giants. The enthusiasm
                  these kids carried everyday kept me on my heels with me at the end of each day hoping for the
                  following day to meet them once again. With this enthusiasm gotten from the participants of ARTSKE
                  Holiday Tech Camp 2023, I will say confidently that this Tech camp will produce Technology Giants.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-cyan-600 font-bold text-lg">★</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Participant</div>
                    <div className="text-cyan-200 text-sm">Holiday Tech Camp 2023</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[1, 2, 3, 4].map((dot, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "bg-cyan-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
