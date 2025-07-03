import { Mail, Users, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="text-xl font-bold">Jeu du Centenaire de L&apos;EPF</span>
            </div>
            <p className="text-gray-400 mb-4">
              Un projet étudiant de l&apos;association BDJ pour célébrer l&apos;histoire et la culture de l&apos;EPF.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <img src="/Logo_BDJ.png?height=24&width=24" alt="Logo BDJ" className="h-6 w-6" />
              <span>Association BDJ - EPF Cachan</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Le Jeu</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  261 Cartes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Règles du jeu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Catégories
                </a>
              </li>
              <li>
                <a href="#preorder" className="hover:text-white transition-colors">
                  Précommander
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Campus EPF</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cachan (Campus principal)</li>
              <li>Saint-Nazaire</li>
              <li>Troyes</li>
              <li>Montpellier</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>bdj@epf.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Association BDJ</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>EPF - École d&apos;Ingénieurs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Association BDJ - EPF. Projet étudiant non officiel.</p>
        </div>
      </div>
    </footer>
  )
}
