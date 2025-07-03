

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/Logo_BDJ.png?height=40&width=40" alt="Logo EPF" className="h-10 w-10" />
          <div>
            <span className="text-xl font-bold text-gray-900">Jeu du Centenaire de l&apos;EPF</span>
            <div className="text-xs text-gray-500">par l&apos;association BDJ</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#product" className="text-gray-600 hover:text-blue-600 transition-colors">
            Le Jeu
          </a>
          <a href="#preorder" className="text-gray-600 hover:text-blue-600 transition-colors">
            Précommande
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="#preorder"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Précommander
        </a>
      </div>
    </header>
  )
}
