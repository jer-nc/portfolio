'use client'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { contactShema } from './contactSchema'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { ReloadIcon } from '@radix-ui/react-icons'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof contactShema>>({
        resolver: zodResolver(contactShema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })


    function onSubmit(values: z.infer<typeof contactShema>) {
        console.log(values)
        setLoading(true)
        const lambdUrl = process.env.NEXT_PUBLIC_LAMBDA_URL

        if (lambdUrl) {
            fetch(lambdUrl, {
                method: 'POST',
                body: JSON.stringify(values)
            }).then(res => res.json())
                .then(data => console.log(data))
                .then(() => {
                    setLoading(false)
                    form.reset()
                    handleShowToaster()
                })
                .catch(err => console.log(err))
        } else {
            console.log('Lambda URL is not defined')
        }
    }

    const handleShowToaster = () => {
        toast({
            title: "Message sent successfully", 
            description: "I will get back to you as soon as possible",
          })
        console.log('show toaster')
    }


    return (
        <Card>
            <CardContent className='pt-8 px-4 md:px-6'>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-black dark:text-white'>Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-black dark:text-white'>Email</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-black dark:text-white'>Message</FormLabel>
                                    <FormControl>
                                        <Textarea disabled={loading} className='h-24 resize-none' placeholder="Enter your message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {
                            !loading ? <Button className='w-full dark:text-white' size='lg' type="submit">Send</Button> : (
                                <Button disabled className='w-full dark:text-white' size='lg' type="submit">
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </Button>
                            )
                        }
                    </form>
                </Form>
                <Toaster />
            </CardContent>
        </Card>
    )
}

export default ContactForm