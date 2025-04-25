import Link from "next/link"

export function TopNav() {
  return (
    <nav className="border-b bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end space-x-4 text-sm py-2">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/submit" className="text-muted-foreground hover:text-foreground">
            Submit a Template
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">
            Contact Us
          </Link>
          <Link href="/search" className="text-muted-foreground hover:text-foreground">
            Search
          </Link>
          <Link href="/advertise" className="text-muted-foreground hover:text-foreground">
            Advertise
          </Link>
        </div>
      </div>
    </nav>
  )
}

