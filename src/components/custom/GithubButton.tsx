'use client'
import React from 'react'
import { Button } from '../ui/button'
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { handleOpenLink } from '@/lib/handleExternalLink'
const GithubButton = () => {

    const externalUrl = 'https://github.com/jer-nc';

    return (
        <Button title='github' variant='outline' size="icon" onClick={() => handleOpenLink(externalUrl)}>
            <GitHubLogoIcon />
        </Button>
    )
}

export default GithubButton