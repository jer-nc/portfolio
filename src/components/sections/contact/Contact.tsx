'use client'
import React from 'react'
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import ContactForm from './contact-form/ContactForm'
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button'
import { handleOpenLink } from '@/lib/handleExternalLink'

const Contact = () => {
  return (
    <section id='contact' className='py-12'>
      <div className='flex gap-4 items-center'>
        <div className='w-12 h-12 bg-secondary rounded-full flex justify-center items-center'>
          <EnvelopeClosedIcon className='text-blue-500' />
        </div>
        <h1 className='text-2xl font-semibold'>GET IN TOUCH</h1>
      </div>
      <div className='pt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[20rem] w-full'>
        <div>
          <p className='text-muted-foreground'>
            You can reach out to me through social media or send me a message to my personal email <span className='text-blue-500'> <a href="mailto:jer.info.dev@gmail.com">jer.info.dev@gmail.com</a></span>.
            I&apos;ll be delighted to answer any questions.
          </p>
          <div className='pt-4 md:pt-12 flex gap-2 w-full'>
            <Button title='github' onClick={() => handleOpenLink('https://github.com/jer-nc')} variant='outline' size='icon'>
              <GitHubLogoIcon />
            </Button>

            <Button title='twitter' onClick={() => handleOpenLink('https://twitter.com/rej_nc')} variant='outline' size='icon'>
              <TwitterLogoIcon />
            </Button>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact