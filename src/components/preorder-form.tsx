"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Gift, Shield, Truck, Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function PreorderForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    quantity: 1,
    message: "",
    newsletter: false,
  })

  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmDialog(true)
  }

  const confirmSubmit = async () => {
    setShowConfirmDialog(false)
    setStatus("loading")
    setErrorMessage("")

    try {
      const apiUrl = process.env.NEXT_PUBLIC_SHEETDB_API_URL
      if (!apiUrl) {
        throw new Error("L'URL de l'API SheetDB n'est pas définie.")
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      })


      if (!response.ok) {
        throw new Error("Erreur lors de la soumission")
      }

      setStatus("success")
      // Réinitialiser le formulaire après succès
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        quantity: 1,
        message: "",
        newsletter: false,
      })
      console.log(apiUrl, formData) // Pour débogage, à supprimer en production
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error")
      setErrorMessage("Erreur lors de la soumission. Veuillez réessayer plus tard.")
    }
  }

  const benefits = [
    {
      icon: Gift,
      title: "Prix préférentiel",
      description: "Plus de précommandes = prix plus bas pour tous",
    },
    {
      icon: Shield,
      title: "Sans engagement",
      description: "Aucun paiement maintenant, prix final communiqué après",
    },
    {
      icon: Truck,
      title: "Livraison campus",
      description: "Récupération possible sur votre campus EPF",
    },
  ]

  return (
    <>
      <section id="preorder" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Précommandez maintenant</h2>
            <p className="text-lg text-gray-600">
              Soyez parmi les premiers à découvrir EPF Cards et profitez d&apos;avantages exclusifs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantages de la précommande</h3>

              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Ce qui est inclus :</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 248 cartes uniques sur l&apos;EPF</li>
                  <li>• 9 catégories thématiques</li>
                  <li>• Règles du jeu détaillées</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Prix de précommande</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Le prix final dépendra du nombre total de précommandes</span>
                  </div>
                  <p className="text-sm text-gray-500">Plus il y a de précommandes, plus le prix baisse pour tous !</p>
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-3 mt-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Important :</strong> Cette précommande ne vous engage pas financièrement. Le prix final sera
                      communiqué à la fin de la période de précommande.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">Formulaire de précommande</CardTitle>
                <CardDescription>Remplissez ce formulaire pour réserver votre exemplaire</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Messages de statut */}
                {status === "success" && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>Précommande confirmée !</strong>
                      <br />
                      Merci pour votre précommande. Vous recevrez un email de confirmation sous peu.
                    </AlertDescription>
                  </Alert>
                )}

                {status === "error" && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">{errorMessage}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first_name">Prénom *</Label>
                      <Input
                        id="first_name"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        disabled={status === "loading"}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last_name">Nom *</Label>
                      <Input
                        id="last_name"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        disabled={status === "loading"}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === "loading"}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantité</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="1000"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: Number.parseInt(e.target.value) })}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      id="message"
                      placeholder="Commentaires ou questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      disabled={status === "loading"}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Je souhaite recevoir les actualités par email
                    </Label>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-center mb-4">
                      {/* <div className="text-2xl font-bold text-blue-600"></div> */}
                      <p className="text-sm text-gray-600 mt-2">
                        Le prix final dépendra du nombre total de précommandes
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <p className="text-sm text-blue-800 text-center">
                        <strong>Aucun paiement maintenant !</strong>
                        <br />
                        Vous recevrez le prix final par email à la fin des précommandes.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Confirmer la précommande"
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Aucun paiement ne sera effectué maintenant. Nous vous contacterons pour finaliser votre commande.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dialog de confirmation */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              Confirmer votre précommande
            </DialogTitle>
            <DialogDescription>
              Veuillez vérifier vos informations avant de confirmer votre précommande.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div>
                <strong>Nom :</strong> {formData.first_name} {formData.last_name}
              </div>
              <div>
                <strong>Email :</strong> {formData.email}
              </div>
              <div>
                <strong>Quantité :</strong> {formData.quantity} exemplaire(s)
              </div>
              {formData.message && (
                <div>
                  <strong>Message :</strong> {formData.message}
                </div>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-sm text-blue-800">
                <strong>Rappel :</strong> Cette précommande ne vous engage pas financièrement. Vous recevrez le prix
                final par email.
              </p>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Modifier
            </Button>
            <Button onClick={confirmSubmit} className="bg-purple-600 hover:bg-purple-700">
              Confirmer la précommande
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
