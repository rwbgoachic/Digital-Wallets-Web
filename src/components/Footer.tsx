import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">Merchant Portal</p>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</a>
            <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</a>
            <a href="/support" className="text-sm text-gray-400 hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}