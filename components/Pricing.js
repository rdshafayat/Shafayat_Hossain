export default function Pricing() {
    return (
      <section id="pricing" className="bg-[#f5f0ea] pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-6 border-2 border-black p-6">
  
          {/* Label */}
          <p className="text-xs tracking-[0.2em] text-gray-500 mb-3">
            ENGAGEMENT MODELS
          </p>
  
          {/* Heading */}
          <h2 className="text-3xl font-bold text-black mb-3">
            Fractional CMO plans for growth-stage teams
          </h2>
  
          {/* Subtext */}
          <p className="text-gray-700 mb-10">
            Choose the operating cadence that fits your current stage and internal team maturity.
          </p>
          {/* Pricing cards */}
<div className="grid md:grid-cols-3 gap-6">

{/* Card 1 */}
<div className="border-2 border-black p-6 bg-white">
  <h3 className="text-lg font-semibold mb-2">Sprint Advisory</h3>

  <p className="text-2xl font-bold mb-3">$1,200 / month</p>

  <p className="text-sm text-gray-700 mb-6">
    Weekly strategy sessions, channel priorities, and leadership support for your marketing manager.
  </p>

  <a
  href="mailto:shafayat@shafayathossain.com" className="px-4 py-2 bg-black text-white text-sm">
    Book Advisory
    </a>
</div>

{/* Card 2 (highlighted) */}
<div className="border-2 border-black p-6 bg-white relative">

  <p className="text-xs text-gray-500 mb-2">MOST SELECTED</p>

  <h3 className="text-lg font-semibold mb-2">Embedded CMO</h3>

  <p className="text-2xl font-bold text-red-500 mb-3">
    $2000 / month
  </p>

  <p className="text-sm text-gray-700 mb-6">
    Hands-on strategic leadership, team planning, campaign oversight, and executive reporting.
  </p>

  <a
  href="mailto:shafayat@shafayathossain.com" className="px-4 py-2 border-2 border-black bg-red-400 text-white text-sm shadow-[4px_4px_0px_black]">
    Start Engagement
  </a>
</div>

{/* Card 3 */}
<div className="border-2 border-black p-6 bg-white">
  <h3 className="text-lg font-semibold mb-2">CMO + Team Pod</h3>

  <p className="text-2xl font-bold text-green-600 mb-3">
    Custom scope
  </p>

  <p className="text-sm text-gray-700 mb-6">
    Fractional CMO plus specialist execution across paid media, content, lifecycle, and RevOps alignment.
  </p>

  <a
  href="mailto:shafayat@shafayathossain.com" className="px-4 py-2 bg-black text-white text-sm">
    Request Proposal
  </a>
</div>

</div>
  
        </div>
      </section>
    );
  }