export default function Hero() {
    return (
      <section id="home" className="bg-[#f5f0ea] min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-6">
  
          {/* LEFT */}
          <div className="relative flex justify-center items-center w-full max-w-[350px] md:max-w-none mx-auto">
  
            {/* BLOB (fixed shape) */}
            <div className="absolute w-[320px] h-[300px] md:w-[570px] md:h-[520px] bg-yellow-400 
                            rounded-[60%_40%_50%_50%/50%_60%_40%_50%] z-0"></div>
  
            {/* IMAGE (bigger + proportional) */}
            <img
              src="/profile.png"
              alt="profile"
              className="w-[220px] md:w-[320px] relative z-10"
            />
  
            {/* BLUE BOX */}
            <div className="absolute top-[10px] left-[0px] z-20 
                bg-blue-400 px-3 py-3 md:px-6 md:py-6 
                border-2 border-black 
                shadow-[6px_6px_0px_black] text-black text-center 
                w-[110px] md:w-[150px]">
  <p className="text-xl md:text-3xl font-bold">10x</p>
  <p className="text-xs md:text-sm">revenue in 18 months</p>
</div>
  
            {/* GREEN BOX */}
            <div className="absolute bottom-[10px] left-[10px] z-20 
                bg-green-300 px-3 py-2 md:px-6 md:py-3 
                border-2 border-black 
                shadow-[6px_6px_0px_black] text-black 
                flex items-center gap-1 md:gap-2">
  <span className="text-xl md:text-3xl font-bold">9+</span>
  <span className="text-xs md:text-sm">Years of experiences</span>
</div>
  
            {/* YELLOW BOX */}
            <div className="absolute right-[5px] bottom-[20px] z-20 
                bg-yellow-400 px-3 py-2 md:px-6 md:py-4 
                border-2 border-black 
                shadow-[6px_6px_0px_black] text-black text-center">
  <p className="text-xl md:text-3xl font-bold">20+</p>
  <p className="text-xs md:text-sm">enterprise positively served</p>
</div>
</div>
  
          {/* RIGHT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
              Hi, I am <br />
              Shafayat Hossain
            </h1>
  
            <p className="text-gray-700 mb-10 text-lg">
            I help businesses grow using data, creativity, and a global perspective.
            </p>
  
            <a
  href="#contact"
  className="mt-10 inline-block px-6 py-3 border-2 border-black 
             shadow-[4px_4px_0px_black] bg-white text-black"
>
  Contact Me
</a>
          </div>
  
        </div>
      </section>
    );
  }