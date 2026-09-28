import Dashboard from "../dashboard/page";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4 sm:p-8 lg:p-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          Welcome to our website! We are passionate about creating modern,
          responsive, and user-friendly web applications using React and
          Next.js. Our goal is to provide high-quality digital experiences with
          clean design and excellent performance.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <div className="flex-1 bg-slate-50 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <h2 className="text-blue-600 text-xl font-bold mb-3">
              🎯 Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Build fast, scalable, and beautiful web applications that solve
              real-world problems.
            </p>
          </div>

          <div className="flex-1 bg-slate-50 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <h2 className="text-green-600 text-xl font-bold mb-3">
              💡 Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Deliver innovative solutions with modern technologies while
              keeping the user experience simple and enjoyable.
            </p>
          </div>

          <div className="flex-1 bg-slate-50 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <h2 className="text-red-600 text-xl font-bold mb-3">
              🚀 Why Choose Us
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We focus on clean code, responsive design, SEO, performance, and
              the latest web technologies like Next.js.
            </p>
          </div>
        </div>

        <button className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}