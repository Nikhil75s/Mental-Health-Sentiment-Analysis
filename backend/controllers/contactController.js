import Contact from "../models/contactModel.js"

// Submit contact form
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, organization, inquiryType, message } = req.body

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return res.status(400).json({ message: "Please fill all required fields" })
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      organization,
      inquiryType,
      message,
    })

    if (contact) {
      // In a real application, you would also send an email notification here
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
      })
    } else {
      res.status(400).json({ message: "Invalid contact data" })
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    res.status(500).json({ message: "Failed to submit contact form", error: error.message })
  }
}
