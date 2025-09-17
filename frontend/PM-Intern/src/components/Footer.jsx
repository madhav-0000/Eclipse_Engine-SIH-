function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        
        {/* Links in the middle */}
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-teal-500 transition">Privacy</a>
          <a href="#" className="hover:text-teal-500 transition">Contact</a>
          <a href="#" className="hover:text-teal-500 transition">Help</a>
        </div>

        {/* Copyright */}
        <p className="text-sm">© 2025 Smart Allocation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
