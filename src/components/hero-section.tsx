import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Embrace the Future of{" "}
              <span className="text-yellow-300">Innovative STEM</span>{" "}
              Education with ARTSKE!
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Join our mission to build a vibrant tech ecosystem that makes STEM
              education accessible, nurtures innovation, facilitates skill
              acquisition, and drives impactful solutions for local challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold px-8 py-3"
              >
                More Info
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
              >
                Get in touch
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main character with VR headset */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  {/* Character placeholder - representing the person with VR headset */}
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-900 font-bold text-lg">
                    HolDay Tech
                  </div>

                  {/* Floating action bubbles */}
                  <div className="absolute top-8 right-8 bg-white rounded-full px-4 py-2 text-blue-600 font-semibold text-sm shadow-lg animate-bounce">
                    💡 Inspire
                  </div>

                  <div className="absolute top-1/2 right-0 bg-white rounded-full px-4 py-2 text-blue-600 font-semibold text-sm shadow-lg animate-bounce delay-100">
                    🔧 Create
                  </div>

                  <div className="absolute bottom-12 left-8 bg-white rounded-full px-4 py-2 text-blue-600 font-semibold text-sm shadow-lg animate-bounce delay-200">
                    ⚡ Innovate
                  </div>

                  <div className="absolute bottom-8 right-12 bg-blue-800 rounded-full px-4 py-2 text-white font-semibold text-sm shadow-lg">
                    💼 Job
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 rounded-full opacity-10 translate-y-24 -translate-x-24"></div>
    </section>
  );
}
