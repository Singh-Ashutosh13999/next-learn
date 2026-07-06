import Link from "next/link";

export default function Profle() {
  const info = [
    { label: "Full Name", value: "Aarav Sharma" },
    { label: "Email", value: "aarav@example.com" },
    { label: "Phone", value: "+91 98765 43210" },
    { label: "Location", value: "Mumbai, India" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                AS
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Profile Overview
                </p>
                <h1 className="text-2xl font-bold text-slate-900">Aarav Sharma</h1>
                <p className="text-sm text-slate-600">Product Designer • Creative Dashboard</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/setting"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Personal Information</h2>
            <div className="mt-4 space-y-4">
              {info.map((item) => (
                <div key={item.label} className="flex flex-col border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:justify-between">
                  <span className="text-sm font-medium text-slate-500">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">About Me</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                I specialize in crafting clean user experiences, scalable product interfaces,
                and modern dashboard systems that feel intuitive and professional.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {['UI/UX', 'Tailwind CSS', 'Next.js', 'React'].map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}