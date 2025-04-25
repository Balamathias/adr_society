export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <p>Copyright © 2005 - 2025 - Free CSS. All Rights Reserved</p>
          <div className="space-x-4">
            <a href="/sitemap" className="hover:text-foreground">
              XML Sitemap
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:text-foreground">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

