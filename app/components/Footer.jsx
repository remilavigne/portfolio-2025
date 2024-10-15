import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="w-full p-4 bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; 2021 Rémi</p>
            </div>
            <div className="hidden md:flex space-x-6">
                <Link href="/portfolio" className="text-black hover:text-orange-600">
                    Portfolio
                </Link>
                <Link href="/about" className="text-black hover:text-orange-400">
                    About Me
                </Link>
                <Link href="/contact" className="text-black hover:text-orange-400">
                    Contact
                </Link>
            </div>
            <div>
              <p>Created with love by Rémi Lavigne</p>
            </div>
          </div>
        </div>
      </footer>
    );
}