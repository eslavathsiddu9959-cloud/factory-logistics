import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold text-xl tracking-wide">Factory Logistics PWA</span>
          <nav className="flex space-x-6">
            <Link href="/shipper" className="hover:text-blue-400 text-sm font-medium transition-colors">Shipper</Link>
            <Link href="/driver" className="hover:text-blue-400 text-sm font-medium transition-colors">Driver</Link>
            <Link href="/receiver" className="hover:text-blue-400 text-sm font-medium transition-colors">Receiver</Link>
            <Link href="/login" className="hover:text-blue-400 text-sm font-medium border-l border-slate-700 pl-6 transition-colors">Login</Link>
          </nav>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}