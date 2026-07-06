import Link from "next/link";

export default function DashboardLayout({ children }) {
  const links = [
    
    { name: "Profile", href: "/dashboard/profile", icon: "👤" },
   
    { name: "Users", href: "/dashboard/users", icon: "👥" },
    { name: "Products", href: "/dashboard/products", icon: "🛒" },
    { name: "Orders", href: "/dashboard/orders", icon: "📦" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-slate-900 text-white flex-col">

        <div className="text-3xl font-bold text-center py-6 border-b border-slate-700">
          Next Admin
        </div>

        <nav className="flex-1 p-5 space-y-2">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-3 hover:bg-blue-600 transition"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-slate-700">
          <button className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg">
            Logout
          </button>
        </div>

      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-slate-700">
            Dashboard
          </h1>

          <div className="flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/100?u=ashutosh"
              alt=""
              className="w-12 h-12 rounded-full border"
            />

            <div>
              <h3 className="font-semibold">Ashutosh</h3>
              <p className="text-gray-500 text-sm">
                Administrator
              </p>
            </div>

          </div>

        </header>

        {/* Mobile Menu */}
        <div className="md:hidden bg-slate-900 text-white overflow-x-auto">
          <div className="flex gap-5 p-4">
            {links.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* Footer */}
     

      </div>

    </div>
  );
}