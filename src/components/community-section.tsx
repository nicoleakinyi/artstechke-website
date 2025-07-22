import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Be Part of Our Community
            </h2>

            <Button
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold mb-6"
              size="lg"
            >
              Join Us
            </Button>

            <p className="text-cyan-100 leading-relaxed">
              Join our vibrant community and be part of a collective that celebrates collaboration and growth.
              Connect with like-minded individuals who share your passion for innovation and personal development.
              Engage in thought-provoking workshops, seminars, and panel discussions led by industry experts.
              Collaborate on exciting projects and initiatives that tackle real-world challenges. Together, we can
              create a better future while nurturing your passions and unlocking your full potential.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/69155415/3208784824.png"
                alt="Community members at ARTSKE"
                fill
                className="object-cover"
              />
              {/* Overlay Quote */}
              <div className="absolute bottom-4 right-4 bg-green-500 text-white p-3 rounded-lg max-w-xs">
                <div className="text-xs leading-tight">
                  Empowering young minds through Innovation, here is a thriving tech community that
                  fosters creativity and drives exponential growth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
