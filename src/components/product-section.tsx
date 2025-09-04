import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, MapPin, Lightbulb, Laugh, Rocket, Building } from "lucide-react"
import Image from "next/image"

export function ProductSection() {
  const categories = [
    {
      icon: BookOpen,
      title: "Histoire de l'EPF",
      description: "Les moments clés de notre école",
      color: "text-blue-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: Users,
      title: "Associations & Vie étudiante",
      description: "La richesse de la vie associative",
      color: "text-green-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: Lightbulb,
      title: "Culture scientifique",
      description: "Sciences et innovations",
      color: "text-purple-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: Laugh,
      title: "Anecdotes et blagues",
      description: "L'humour étudiant EPF",
      color: "text-yellow-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: Rocket,
      title: "Futur de l'ingénieur",
      description: "L'avenir de l'EPF",
      color: "text-red-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: MapPin,
      title: "Campus St-Nazaire",
      description: "Spécificités du campus",
      color: "text-blue-500",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: Building,
      title: "Campus Cachan",
      description: "Le campus historique",
      color: "text-gray-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: MapPin,
      title: "Campus Troyes",
      description: "Innovation en Champagne",
      color: "text-indigo-600",
      image: "/jeu_centenaire_hd.jpg",
    },
    {
      icon: Building,
      title: "Campus Montpellier",
      description: "Soleil du Sud",
      color: "text-orange-600",
      image: "/jeu_centenaire_hd.jpg",
    },
  ]

  return (
    <section id="product" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-red-100 text-blue-800 text-lg px-4 py-2">
            🎉 Édition Centenaire 1925-2025
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Le Jeu du Centenaire de l&apos;EPF</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Plongez dans 100 ans d&apos;histoire EPF avec ce jeu de cartes unique ! Créé spécialement pour célébrer le
            centenaire de notre école, ce jeu rassemble étudiants, anciens et amis autour de la passion commune pour
            l&apos;EPF.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/jeu_centenaire_hd.jpg?height=400&width=500"
              alt="Cartes EPF - Exemples de cartes du jeu"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/Logo_BDJ.png?height=50&width=50" alt="Logo Association BDJ" className="h-12 w-12" />
              <div>
                <Badge className="bg-blue-100 text-blue-700 mb-2">Association BDJ</Badge>
                <h3 className="text-2xl font-bold text-gray-900">Édition Étudiante Originale</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Un projet étudiant authentique qui rassemble toute la richesse de l&apos;EPF : son histoire, ses campus,
              sa culture scientifique et l&apos;esprit unique qui anime notre communauté.
            </p>
            <div className="flex gap-4 justify-center">
              <Image
                src="/verso.png"
                alt="Cartes EPF - Exemples de cartes du jeu"
                width={300}
                height={240}
                className="rounded-lg shadow-2xl w-1/3 md:w-2/6 mx-auto"
              />
              <Image
                src="/recto.png"
                alt="Cartes EPF - Exemples de cartes du jeu"
                width={300}
                height={240}
                className="rounded-lg shadow-2xl w-1/3 md:w-2/6 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Section gameplay détaillée */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Comment ça marche ?</h3>
            <p className="text-lg text-gray-600">
              Un jeu de réflexion et de convivialité qui teste vos connaissances EPF !
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  L&apos;objectif
                </h4>
                <p className="text-gray-600">
                  Répondez correctement aux questions pour <strong>gagner un maximum de cartes</strong> et prouver que
                  vous êtes un fin connaisseur de l&apos;EPF !
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Le déroulement
                </h4>
                <p className="text-gray-600">
                  À tour de rôle, un joueur tire une carte et la lit aux autres.{" "}
                  <strong>Répondez juste, gagnez la carte !</strong> Simple et efficace.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  L&apos;ambiance
                </h4>
                <p className="text-gray-600">
                  <strong>Convivialité, nostalgie et esprit EPF</strong> garantis ! Parfait pour les soirées entre amis,
                  les retrouvailles d&apos;anciens ou les pauses entre cours.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🃏 5 types de cartes pour varier les plaisirs :</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 font-bold">QCM</span>
                    <Badge variant="outline" className="text-xs">
                      Choix multiples
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Choisissez la bonne réponse parmi les propositions</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-600 font-bold">Questions ouvertes</span>
                    <Badge variant="outline" className="text-xs">
                      Réflexion
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Montrez vos connaissances sans aide !</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-purple-600 font-bold">Cartes débat</span>
                    <Badge variant="outline" className="text-xs">
                      Automatique
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Lancez le débat et gagnez la carte !</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600 font-bold">Cartes anecdotes</span>
                    <Badge variant="outline" className="text-xs">
                      Bonus
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Découvrez les secrets de l&apos;EPF et gardez la carte</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-600 font-bold">Sans propositions</span>
                    <Badge variant="outline" className="text-xs">
                      Challenge
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Le défi ultime pour les experts !</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">👥</div>
                <div className="text-sm text-gray-600">2-8 joueurs</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">🎯</div>
                <div className="text-sm text-gray-600">Mode solo</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">⏱️</div>
                <div className="text-sm text-gray-600">15-30 min</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">9 Catégories pour découvrir l&apos;EPF</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="perspective-1000 h-48">
                <div className="flip-card relative w-full h-full">
                  {/* Face avant */}
                  <Card className="flip-card-front text-center p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-4 h-full flex flex-col justify-center">
                      <category.icon className={`h-10 w-10 ${category.color} mx-auto mb-3`} />
                      <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>

                  {/* Face arrière */}
                  <Card className="flip-card-back text-center p-4 hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100">
                    <CardContent className="pt-4 h-full flex flex-col justify-center">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={`Illustration ${category.title}`}
                        className="w-full h-24 object-cover rounded-lg mb-3 mx-auto"
                      />
                      <h4 className={`font-semibold mb-2 ${category.color}`}>{category.title}</h4>
                      <p className="text-xs text-gray-500">Découvrez cette catégorie !</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">🎓 Testez vos connaissances sur :</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>L&apos;histoire de l&apos;EPF</strong> - Des origines à aujourd&apos;hui
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <strong>La vie associative</strong> - Clubs, événements, traditions
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <strong>Le programme scolaire</strong> - Matières, projets, spécialisations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <strong>Les campus</strong> - Cachan, Saint-Nazaire, Troyes, Montpellier
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">💝 Parfait pour :</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="text-xl">🎉</span>
                <span>
                  <strong>Soirées étudiantes</strong> - Ambiance garantie !
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">👨‍🎓</span>
                <span>
                  <strong>Retrouvailles d&apos;anciens</strong> - Nostalgie assurée
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🏫</span>
                <span>
                  <strong>Événements EPF</strong> - Animation parfaite
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🎁</span>
                <span>
                  <strong>Cadeau original</strong> - Pour tout Peufien !
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>248 cartes uniques</strong> conçues avec amour par l&apos;association BDJ pour célébrer notre école.
            Chaque carte raconte une partie de l&apos;histoire EPF, de ses moments les plus glorieux à ses anecdotes les
            plus croustillantes !
          </p>
        </div>
      </div>
    </section>
  )
}
