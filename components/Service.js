export default function Service() {
    return (
      <section id="How It Works" className="bg-[#f5f0ea] pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-6 border-2 border-black p-6">
  
            {/* Top header row */}
            <div className="flex items-start justify-between mb-8">
              <p className="text-xs tracking-[0.2em] text-grey-500">
                SERVICE ARCHITECTURE
              </p>
  
              <h2 className="text-sm font-semibold text-gray-500">
                How I structure strategy, execution, and team enablement
              </h2>
            </div>
            {/* Top 3 cards */}
<div className="grid md:grid-cols-3 gap-6 mb-6">

{/* Card 1 */}
<div className="border-2 border-black p-5 bg-gray-100">
  <p className="text-xs text-gray-500 mb-2">
    01 / STRATEGIC POSITIONING
  </p>

  <h3 className="text-lg font-semibold text-black mb-2">
    Category story, ICP clarity, and message architecture.
  </h3>

  <p className="text-sm text-gray-700">
    Define where you can win, what to say, and how to align sales + marketing language.
  </p>
</div>

{/* Card 2 */}
<div className="border-2 border-black p-5 bg-gray-100">
  <p className="text-xs text-gray-500 mb-2">
    02 / REVENUE PROGRAM DESIGN
  </p>

  <h3 className="text-lg font-semibold text-black mb-2">
    Demand system, campaign calendar, and channel economics.
  </h3>

  <p className="text-sm text-gray-700">
    Build practical plans with owner-level accountability across paid, content, lifecycle, and partner motions.
  </p>
</div>

{/* Card 3 (green one) */}
<div className="border-2 border-black p-5 bg-green-200">
  <p className="text-xs text-gray-600 mb-2">
    03 / EXECUTIVE OPERATING SYSTEM
  </p>

  <h3 className="text-lg font-semibold text-black mb-2">
    Monthly scorecards, decision forums, and board-ready narratives.
  </h3>

  <p className="text-sm text-gray-800">
    Turn strategy into a repeatable management rhythm that keeps the team focused on growth levers.
  </p>
</div>

</div>
{/* Bottom row */}
<div className="grid md:grid-cols-3 gap-6">

  {/* LEFT (Red card) */}
  <div className="border-2 border-black p-5 bg-red-400 text-white">
    <p className="text-xs mb-2 tracking-wide">
      ENGAGEMENT MODEL
    </p>

    <p className="text-sm font-semibold">
      Fractional CMO leadership with a specialist pod tailored to your growth stage.
    </p>
  </div>

  {/* RIGHT (Wide panel) */}
  <div className="md:col-span-2 border-2 border-black">

    {/* Row 1 */}
    <div className="flex justify-between items-center px-5 py-4 border-b border-black">
      <p className="text-sm font-medium text-black">
        Strategic Positioning Sprint
      </p>
      <span className="text-xs text-gray-500">
        Weeks 1–2
      </span>
    </div>

    {/* Row 2 */}
    <div className="flex justify-between items-center px-5 py-4 border-b border-black">
      <p className="text-sm font-medium text-black">
        Pipeline Program Build
      </p>
      <span className="text-xs text-gray-500">
        Weeks 3–6
      </span>
    </div>

    {/* Row 3 */}
    <div className="flex justify-between items-center px-5 py-4">
      <p className="text-sm font-medium text-black">
        Leadership Cadence + KPI Operating
      </p>
      <span className="text-xs text-gray-500">
        Ongoing
      </span>
    </div>

  </div>

</div>
  
          </div>
        
      </section>
    );
    
  }
  