export default function Footer() {
    return (
      <footer className="border-t-2 border-black bg-[#f5f0ea] px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
  
          {/* LEFT */}
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Shafayat Hossain
          </p>
  
          {/* RIGHT */}
          <div className="flex gap-4 items-center">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/shafayat-h-264abbb1/"
    target="_blank"
    className="border-2 border-black p-2 hover:bg-black hover:text-white transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1 3.87 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24h-5V8z" />
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/rdshafayat"
    target="_blank"
    className="border-2 border-black p-2 hover:bg-black hover:text-white transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.12-3.18 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.66.24 2.88.12 3.18.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.4-5.27 5.68.42.36.8 1.08.8 2.18v3.23c0 .3.2.66.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  </a>

</div>
        </div>
      </footer>
    );
  }