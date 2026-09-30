import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans bg-slate-50">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white gap-10">
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Learn Next.js Like a Professional
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate-200 mb-8">
            Build modern, fast, and SEO-friendly web applications using Next.js. Learn routing, layouts, components, APIs, and much more through real-world projects.
          </p>
          <Link href="/course">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-bold shadow-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
              Get Started the Courses
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt="Coding"
            className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8 text-center bg-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-800">
          Why Learn With Us?
        </h2>
        <p className="text-slate-500 mb-12 text-lg">
          Everything you need to become a modern web developer.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
          {[
            {
              title: "⚡ Fast Performance",
              desc: "Next.js provides optimized performance and lightning-fast loading.",
            },
            {
              title: "📈 SEO Friendly",
              desc: "Improve search engine rankings with built-in SEO features.",
            },
            {
              title: "💻 Real Projects",
              desc: "Learn by building real-world applications from scratch.",
            },
          ].map((item, index) => (
            <div key={index} className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800 text-white text-center py-20 px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Start Your Next.js Journey Today
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of developers learning modern web development.
        </p>
        <Link
          href="/course"
          className="inline-block rounded-lg bg-blue-600 px-10 py-4 font-bold text-white shadow-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Explore Courses
        </Link>
      </section>
    </div>
  );
}