import {z} from "zod"

export const contactSchema = z.object({
    name: z.string().trim().min(3, {
        message: 'Name must be minimum 3 characters long'
    }),
    message: z.string().trim().min(1, {
        message: "Message is required"
    }).max(500, {
        message: "Max 500 characters allowed"
    }),
    email: z.string().trim().email().min(1, {
        message: "Email is required"
    })
})