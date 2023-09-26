'use client'
import React from 'react'
import { Button } from '../ui/button'
import { GitHubLogoIcon } from "@radix-ui/react-icons"
const GithubButton = () => {

    const externalUrl = 'https://github.com/jer-nc'; // Reemplaza con tu URL externa

    const handleClick = () => {
        window.open(externalUrl, '_blank'); // Abre la URL en una nueva pestaña o ventana
    }

    return (
        <Button variant='outline' size="icon" onClick={handleClick}>
            <GitHubLogoIcon />
        </Button>
    )
}

export default GithubButton