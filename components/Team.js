export default function Team() {
    return (
      <section className="bg-[#f5f0ea] pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-6 border-2 border-black p-6">
  
          {/* Label */}
          <p className="text-xs text-gray-600 mb-4 tracking-widest">
            TEAM / CREDENTIALS
          </p>
  
          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
  
            {/* LEFT */}
            <div>
  
              <h2 className="text-2xl font-bold text-black mb-4">
                A senior leader built for board-level clarity and execution velocity.
              </h2>
  
              <p className="text-gray-700 mb-6">
                I lead category strategy, while channel specialists and operators translate it into measurable pipeline movement.
              </p>
  
              {/* Stats row */}
              <div className="mt-6 grid grid-cols-2 gap-4">
  
                <div className="border-2 border-black p-4">
                  <p className="text-sm text-gray-600">Marketing overhead reduction</p>
                  <p className="text-xl font-bold text-black">-80%</p>
                </div>
  
                <div className="border-2 border-black p-4 bg-green-300">
                  <p className="text-sm text-gray-600">Pipeline efficiency lift</p>
                  <p className="text-xl font-bold text-black">+14%</p>
                </div>
  
              </div>
  
            </div>
  
            {/* RIGHT */}
            <div className="flex flex-col gap-4">
  
              {/* Top card */}
              <div className="border-2 border-black p-4 bg-gray-100">
                <h2 className="text-xs text-gray-500 mb-2">CORE TEAM</h2>
                <h2 className="text-lg font-semibold text-black">
                  Fractional CMO · GTM Strategist · Advertising Lead · Content Director
                </h2>
                <p className="text-gray-700 mb-6">
                One operating table. One Monthly scorecard. Zero handoff gaps.
              </p>
              </div>
  
              {/* Bottom card */}
              <div className="border-2 border-black p-4 bg-orange-300 text-black">
                <h2 className="text-xs text-gray-500 mb-2">WORKING CADENCE</h2>
                <p className="text-lg font-semibold">
                  90-DAY STRATEGY SPRINTS
                </p>
                <p className="text-gray-700 mb-6">Weekly executive standups, monthly board narratives, quarterly growth model resets.</p>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }