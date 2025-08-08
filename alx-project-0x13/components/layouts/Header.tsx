// components/layouts/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ImageGen</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
