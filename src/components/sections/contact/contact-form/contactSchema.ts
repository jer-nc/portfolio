"use client"

import * as z from "zod"

export const contactShema = z.object({
    name: z.string().min(2,{
        message: "Name must be at least 2 characters long"
    }).max(50),
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    message: z.string().min(2,{
        message: "Message must be at least 2 characters long"
    }).max(500),
})
