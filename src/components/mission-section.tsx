export function MissionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Transforming Great Ideas into Sustainable Innovations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            In a world driven by innovation and entrepreneurship, ideas are the currency of progress.
            We believe that every great innovation starts with a simple idea, and we are dedicated to
            nurturing, developing, and bringing those ideas to life. Our team of creative thinkers,
            problem solvers, and visionaries collaborates to turn concepts into tangible, impactful solutions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* ARTSKE Logo */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded text-white font-bold text-sm flex items-center justify-center">
                NT
              </div>
              <span className="font-bold text-lg text-blue-600">ARTSKE</span>
            </div>
          </div>

          {/* ARTSKE Education */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="w-full bg-cyan-500 text-white px-3 py-1 rounded text-sm font-bold">
                NT ARTSKE
              </div>
              <div className="text-xs text-cyan-500 mt-1">Education</div>
            </div>
          </div>

          {/* ARTSKE Community */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">⚙️</span>
              </div>
              <div className="text-xs text-orange-500 mt-1 font-semibold">ARTSKE</div>
            </div>
          </div>

          {/* ARTSKE Makerspace */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">⚙️</span>
              </div>
              <div className="text-xs text-green-500 mt-1 font-semibold">ARTSKE</div>
              <div className="text-xs text-gray-500">MAKERSPACE</div>
            </div>
          </div>

          {/* Additional Partner Logos */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xs">NTNT</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">ARTSKE</div>
              <div className="text-xs text-gray-400">PLATFORM</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full border-4 border-cyan-600 flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xs">2023</span>
              </div>
              <div className="text-xs text-cyan-600 mt-1 font-semibold">Tech Camp</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 font-bold text-lg">nTron</div>
              <div className="text-xs text-gray-500">Innovation Kit</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full h-24 flex items-center justify-center">
            <div className="text-center text-blue-600 font-bold">
              <div className="text-2xl">⚡</div>
              <div className="text-xs">nTron</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
