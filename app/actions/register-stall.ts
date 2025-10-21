"use server"

export async function registerStall(formData: {
  stallName: string
  ownerName: string
  email: string
  phone: string
  cuisine: string
  description: string
  experience: string
}) {
  try {
    console.log("[v0] Attempting to register stall:", formData.stallName)
    console.log("[v0] Form data:", JSON.stringify(formData))

    const projectId = "gymkhana-recrave"
    const apiKey = "AIzaSyBsD9s298DaZheZ2pe-gjMllLo_Jpg0inc"

    const documentData = {
      fields: {
        stallName: { stringValue: formData.stallName },
        ownerName: { stringValue: formData.ownerName },
        email: { stringValue: formData.email },
        phone: { stringValue: formData.phone },
        cuisine: { stringValue: formData.cuisine },
        description: { stringValue: formData.description },
        experience: { integerValue: formData.experience ? Number.parseInt(formData.experience) : 0 },
        createdAt: { timestampValue: new Date().toISOString() },
        status: { stringValue: "pending" },
        submittedAt: { timestampValue: new Date().toISOString() },
      },
    }

    const response = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/stall_registrations?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentData),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Firestore API error:", errorData)
      throw new Error(`Firestore API error: ${response.status}`)
    }

    const result = await response.json()
    console.log("[v0] Stall registered successfully with ID:", result.name)

    return { success: true, id: result.name }
  } catch (error) {
    console.error("[v0] Error registering stall:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to register stall"
    return { success: false, error: errorMessage }
  }
}
