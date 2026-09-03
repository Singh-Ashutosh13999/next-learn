import "./globals.css";
import Footer from "./footer.jsx";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./components/logout-button.jsx";

export default async function RootLayout({ children }) {
  const isLoggedIn = (await cookies()).has("auth-token");
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/demo", label: "Demo" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-md">
                  N
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">NextLearn</p>
                  <p className="text-sm text-slate-500">Modern web development</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                {isLoggedIn ? (
                  <LogoutButton className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700" />
                ) : (
                  <Link
                    href="/login"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );  
}
