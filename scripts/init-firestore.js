import admin from "firebase-admin"

const serviceAccount = {
  projectId: "gymkhana-recrave",
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  clientEmail: "firebase-adminsdk-fbsvc@gymkhana-recrave.iam.gserviceaccount.com",
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

async function initializeFirestore() {
  try {
    console.log("Initializing Firestore database...")

    // Create stall_registrations collection with a sample document
    const sampleData = {
      stallName: "Sample Stall",
      ownerName: "Sample Owner",
      email: "sample@example.com",
      phone: "+91 9999999999",
      cuisine: "Indian",
      description: "This is a sample stall registration",
      experience: "5",
      timestamp: admin.firestore.Timestamp.now(),
      status: "pending",
    }

    const docRef = await db.collection("stall_registrations").add(sampleData)
    console.log("✓ Firestore initialized successfully!")
    console.log(`✓ Sample document created with ID: ${docRef.id}`)
    console.log("✓ Collection 'stall_registrations' is ready to receive registrations")

    process.exit(0)
  } catch (error) {
    console.error("✗ Error initializing Firestore:", error)
    process.exit(1)
  }
}

initializeFirestore()
