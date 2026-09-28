export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-8 sm:px-12 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between flex-wrap gap-10 lg:gap-16">
        {/* Logo & About */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-blue-500 text-2xl font-bold mb-4">
            NextLearn
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-sm">
            Learn modern web development with React and Next.js through simple,
            practical examples and real-world projects.
          </p>
        </div>

        {/* Quick Links */}
        <div className="min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-slate-400">
            <li><p className="cursor-pointer hover:text-blue-400 transition">Home</p></li>
            <li><p className="cursor-pointer hover:text-blue-400 transition">About</p></li>
            <li><p className="cursor-pointer hover:text-blue-400 transition">Services</p></li>
            <li><p className="cursor-pointer hover:text-blue-400 transition">Contact</p></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="min-w-[200px]">
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-slate-400">
            <li>Email: info@example.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-slate-700 max-w-7xl mx-auto" />

      <p className="text-center text-slate-400 m-0">
        © 2026 NextLearn. All Rights Reserved.
      </p>
    </footer>
  );
}