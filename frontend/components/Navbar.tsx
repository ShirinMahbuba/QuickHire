import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white border-b">
      <div className="text-2xl font-bold text-primary">QuickHire</div>
      <div className="space-x-6 text-gray-600 font-medium">
        <Link href="/">Find Job</Link>
        <Link href="/browse">Browse Companies</Link>
      </div>
      <div className="space-x-4">
        <button className="px-4 py-2 font-semibold">Login</button>
        <button className="px-5 py-2 bg-primary text-white rounded-lg">Sign Up</button>
      </div>
    </nav>
  );
}