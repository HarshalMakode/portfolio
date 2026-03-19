function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#E3350D] py-20 px-4 border-t-[4px] border-black overflow-hidden"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-[700px] mx-auto text-center">
        {/* Heading */}
        <h2 className="font-pokemon text-[clamp(14px,3vw,24px)] text-yellow-400 drop-shadow-[3px_3px_0_black] mb-4">
          WANT TO BATTLE?
        </h2>

        {/* Description */}
        <p className="text-white/85 text-base leading-7 mb-10">
          Open to opportunities and collaborations — let’s build something
          amazing together.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=harshalmakode26@gmail.com&su=Let's%20Collaborate&body=Hi%20Harshal,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black font-pokemon text-[10px] px-6 py-3 rounded-lg border-[3px] border-black shadow-[4px_4px_0_black] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_black]"
          >
            📧 EMAIL
          </a>

          <a
            href="https://www.linkedin.com/in/harshalmakode/"
            className="flex items-center gap-2 bg-white text-black font-pokemon text-[10px] px-6 py-3 rounded-lg border-[3px] border-black shadow-[4px_4px_0_black] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_black]"
          >
            💼 LINKEDIN
          </a>

          <a
            href="https://github.com/HarshalMakode"
            className="flex items-center gap-2 bg-white text-black font-pokemon text-[10px] px-6 py-3 rounded-lg border-[3px] border-black shadow-[4px_4px_0_black] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_black]"
          >
            🐙 GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
