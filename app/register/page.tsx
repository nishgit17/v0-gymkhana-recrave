"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { registerStall } from "@/app/actions/register-stall"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    stallName: "",
    ownerName: "",
    email: "",
    phone: "",
    cuisine: "",
    description: "",
    experience: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await registerStall(formData)

    if (result.success) {
      setSubmitted(true)
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } else {
      setError(result.error || "Failed to submit registration")
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avI8QYhtLW0LaDBMIE8Rz2STEas1Ue.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <Navbar />
      <main className="flex-1 pt-20 pb-12 relative z-10">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">Register Your Stall</h1>
            <p className="text-xl text-white mb-2">Join ReCrave 2025 - The Annual Food Fest</p>
            <p className="text-gray-300">Showcase your culinary excellence to thousands of food lovers</p>
          </div>

          {/* Form Section */}
          {!submitted ? (
            <div className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-8 shadow-2xl">
              {error && (
                <div className="mb-4 p-4 bg-red-900 border border-red-400 text-red-200 rounded-lg">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Stall Name */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Stall/Restaurant Name *</label>
                  <Input
                    type="text"
                    name="stallName"
                    value={formData.stallName}
                    onChange={handleChange}
                    placeholder="Enter your stall name"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400"
                  />
                </div>

                {/* Owner Name */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Owner/Manager Name *</label>
                  <Input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400"
                  />
                </div>

                {/* Cuisine Type */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Type of Cuisine *</label>
                  <select
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Select cuisine type</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Continental">Continental</option>
                    <option value="Street Food">Street Food</option>
                    <option value="Desserts">Desserts & Bakery</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Fusion">Fusion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Stall Description *</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your stall, specialties, and what makes you unique"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400 min-h-24"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">Years of Experience</label>
                  <Input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-400"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                </Button>

                <p className="text-gray-400 text-sm text-center">
                  We'll review your application and contact you within 48 hours
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-green-900 border-2 border-green-400 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-green-400 mb-4">✓ Registration Submitted!</h2>
              <p className="text-white text-lg mb-2">Thank you for registering your stall for ReCrave 2025</p>
              <p className="text-gray-300">Redirecting to home page...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
