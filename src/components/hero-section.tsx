import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
          🎓 Créé par des étudiants EPF
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Découvrez l&apos;histoire de
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600"> l&apos;EPF</span>
          <br />
          en jouant !
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Un jeu de cartes unique créé par l&apos;association BDJ qui retrace l&apos;histoire, la culture et l&apos;esprit de l&apos;EPF à travers 261 cartes passionnantes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
            <a href="#preorder">
              Précommander maintenant
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            <a href="#product">
              En savoir plus
            </a>

          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            <span>261 cartes uniques</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-red-500" />
            <span>9 catégories</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Histoire authentique</span>
          </div>
        </div>
      </div>
    </section>
  )
}
