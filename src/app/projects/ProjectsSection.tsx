'use client'
import { technologyIcons } from '@/components/sections/featured-projects/technologyIcons'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GitHubLogoIcon, StarIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'
import { projects } from './data/projects'
import { Button } from '@/components/ui/button'
import { PROJECT_TYPE } from '@/constants/projectType'
import { handleOpenLink } from '@/lib/handleExternalLink'

const ProjectsSection = () => {


    return (
        <section className='py-12'>
            <div className='flex gap-4 items-center'>
                <div className='w-12 h-12 bg-secondary rounded-full flex justify-center items-center'>
                    <StarIcon className='text-blue-500' />
                </div>
                <h1 className='text-2xl font-semibold'>PROJECTS</h1>
            </div>
            <div className='pt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[20rem] w-full'>
                {projects.map((project, index) => (
                    <Card className='rounded-md flex w-full ' key={index}>
                        <div className='w-72'>
                            <Image  className={`rounded-l-md ${project.imageType === 'contain' ? 'object-contain' : 'object-cover'}  h-full`} src={project.image} title={project.title} width={1000} height={500} alt='avatar' />
                        </div>
                        <div className='h-full grid w-full'>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CardTitle>Technologies</CardTitle>
                                <div className='grid grid-cols-5 gap-2 items-center justify-center'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <div key={techIndex} className='flex justify-start pt-4'>
                                            <Image style={{ width: '25px' }} width={20} height={20} src={technologyIcons[tech]?.src} alt={technologyIcons[tech]?.alt} title={technologyIcons[tech]?.alt} />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardContent>
                                <CardTitle>Status</CardTitle>
                                <div className='flex gap-2 items-center pt-2'>
                                    <div className={`w-3 h-3 ${project.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}  rounded-full`}></div>
                                    <CardDescription>
                                        {project.status}
                                    </CardDescription>
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-end gap-2 items-end font-semibold'>
                                {project.projectType === PROJECT_TYPE.GITHUB_WEBSITE && (
                                    <>
                                        <Button title={project.title} disabled={project.status === 'In Progress' && true} onClick={() => handleOpenLink(project.githubUrl)} variant='outline' size='icon'>
                                            <GitHubLogoIcon />
                                        </Button>

                                        <Button title={project.title} disabled={project.status === 'In Progress' && true} onClick={() => handleOpenLink(project.link)} variant='outline'>Visit</Button>
                                    </>
                                )}
                                {project.projectType === PROJECT_TYPE.GITHUB && (
                                    <>
                                        <Button title={project.title} disabled={project.status === 'In Progress' && true} onClick={() => handleOpenLink(project.githubUrl)} variant='outline' size='icon'>
                                            <GitHubLogoIcon />
                                        </Button>

                                    </>
                                )}
                                {project.projectType === PROJECT_TYPE.WEBSITE && (
                                    <>
                                        <Button title={project.title} disabled={project.status === 'In Progress' && true} onClick={() => handleOpenLink(project.link)} variant='outline'>Visit</Button>
                                    </>
                                )}
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection