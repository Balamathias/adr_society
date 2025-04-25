"use client"

export function FooterSection() {
  return (
    <footer className="bg-black/80 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ADR Society</h3>
            <p className="">
              Promoting peaceful resolutions through education, advocacy, and community.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className=" hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className=" hover:text-white transition-colors">About</a></li>
              <li><a href="/events" className=" hover:text-white transition-colors">Events</a></li>
              <li><a href="/resources" className=" hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="">Faculty of Law</li>
              <li className="">Ahmadu Bello University</li>
              <li className="">Zaria, Nigeria</li>
              <li className="">info@adrsociety.org</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className=" hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className=" hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} ADR Society, Ahmadu Bello University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 