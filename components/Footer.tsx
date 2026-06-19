export default function Footer() {
    return (
      <footer className="relative overflow-hidden bg-[#F5F5F7] text-[#111]">
  
        {/* blueprint grid */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[45%]
            opacity-40
            bg-[linear-gradient(#22222212_1px,transparent_1px),linear-gradient(90deg,#22222212_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />
  
  
        {/* textile band */}
        <div
          className="
            absolute
            bottom-[32%]
            left-0
            w-full
            h-[70px]
            bg-[#202020]
            opacity-[0.96]
            shadow-2xl
          "
        >
  
          <div
            className="
              absolute
              inset-0
              opacity-20
              bg-[repeating-linear-gradient(90deg,#fff_0px,#fff_1px,transparent_1px,transparent_7px)]
            "
          />
  
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-[3px]
              bg-[#e47225]
            "
          />
  
        </div>
  
  
  
        <div className="relative z-10 max-w-[1500px] mx-auto px-8 md:px-20 pt-36 pb-16">
  
  
          {/* brand statement */}
  
          <div className="text-center mb-40">
  
            <p
              className="
                uppercase
                tracking-[0.45em]
                text-xs
                text-[#e47225]
                mb-10
              "
            >
              Engineered With Precision
            </p>
  
  
            <h1
              className="
                text-[13vw]
                leading-none
                tracking-[-0.08em]
                font-semibold
              "
            >
              RS
            </h1>
  
  
            <p
              className="
                mt-6
                text-2xl
                md:text-5xl
                font-light
                tracking-tight
              "
            >
              Enterprises
            </p>
  
  
          </div>
  
  
  
  
          {/* links */}
  
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-16
              max-w-5xl
              mx-auto
              text-center
              mb-28
            "
          >
  
  
            <div>
  
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-black/40">
                Company
              </h4>
  
              <ul className="space-y-4 text-sm">
                <li>About</li>
                <li>Process</li>
                <li>Innovation</li>
              </ul>
  
            </div>
  
  
  
  
            <div>
  
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-black/40">
                Expertise
              </h4>
  
              <ul className="space-y-4 text-sm">
                <li>Elastic</li>
                <li>Webbing</li>
                <li>Manufacturing</li>
              </ul>
  
            </div>
  
  
  
  
  
            <div>
  
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-black/40">
                Connect
              </h4>
  
              <ul className="space-y-4 text-sm">
                <li>Email</li>
                <li>Phone</li>
                <li>Location</li>
              </ul>
  
            </div>
  
  
  
  
  
            <div>
  
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 text-black/40">
                Social
              </h4>
  
              <ul className="space-y-4 text-sm">
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
  
            </div>
  
  
          </div>
  
  
  
  
          {/* bottom */}
  
          <div
            className="
              border-t
              border-black/10
              pt-10
              flex
              justify-between
              items-center
              text-xs
              text-black/40
            "
          >
  
            <span>
              © 2026 RS Enterprises
            </span>
  
            <span className="tracking-[0.35em] uppercase">
              Precision Textile Engineering
            </span>
  
          </div>
  
  
  
        </div>
  
  
      </footer>
    );
  }