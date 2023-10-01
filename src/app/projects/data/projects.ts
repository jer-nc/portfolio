import { PROJECT_TYPE } from '@/constants/projectType';
import nextCognito from '../../../../public/assets/next-cognito.png';
import sesLambda from '../../../../public/assets/lambda-ses.png';
import blenderLambda from '../../../../public/assets/blender-lambda.png';
import readmeStack from '../../../../public/assets/readmestack.png';
import portfolio from '../../../../public/assets/portfolio.png';
import r2r from '../../../../public/assets/r2r.png';

export const projects = [
    {
        projectType: PROJECT_TYPE.WEBSITE,
        timestamp: '',
        title: 'ReadmeStack',
        image: readmeStack,
        imageType: 'cover',
        description: 'Free Markdown web editor synchronized with GitHub',
        technologies: ['react', 'javascript', 'firebase', 'aws', 'chakra'],
        status: 'Active',
        link: 'https://www.readmestack.com',
        githubUrl: '',
    },
    {
        projectType: PROJECT_TYPE.GITHUB_WEBSITE,
        timestamp: '',
        title: 'NextJS + Cognito',
        image: nextCognito,
        imageType: 'cover',
        description: 'NextJS + Cognito starter template with custom auth flow',
        technologies: ['next', 'typescript', 'aws', 'tailwindcss', 'shad'],
        status: 'Active',
        link: 'https://main.d2zz6ioqtf0kay.amplifyapp.com/',
        githubUrl: 'https://github.com/jer-nc/next13-cognito-custom-auth-demo/tree/main',
    },
    {
        projectType: PROJECT_TYPE.GITHUB,
        timestamp: '',
        title: 'SES Form Email',
        image: sesLambda,
        description: 'Custom SES Template Email with Lambda Url',
        technologies: ['aws', 'javascript'],
        imageType: 'cover',
        status: 'Active',
        link: '#',
        githubUrl: 'https://github.com/jer-nc/lambda-url-ses-contact-form',
    },
    {
        projectType: PROJECT_TYPE.GITHUB_WEBSITE,
        timestamp: '',
        title: 'Rendering Blender on AWS Lambda',
        image: blenderLambda,
        description: 'Project to render Blender 3D scenes on AWS Lambda with Docker',
        technologies: ['next', 'typescript', 'aws', 'tailwindcss', 'shad'],
        imageType: 'cover',
        status: 'In Progress',
        link: '#',
        githubUrl: '',
    },
    {
        projectType: PROJECT_TYPE.GITHUB,
        timestamp: '',
        title: 'Portfolio',
        image: portfolio,
        description: 'Current Portfolio Web Page',
        technologies: ['next', 'typescript', 'aws', 'tailwindcss', 'shad'],
        imageType: 'cover',
        status: 'In Progress',
        link: '#',
        githubUrl: '',
    },
    {
        projectType: PROJECT_TYPE.GITHUB_WEBSITE,
        timestamp: '',
        title: 'Static Website with NextJS',
        image: r2r,
        description: 'Real Estate Static Website with NextJS and TailwindCSS',
        technologies: ['next', 'typescript', 'aws', 'tailwindcss', 'shad'],
        imageType: 'cover',
        status: 'In Progress',
        link: 'https://main.d2pncs0hhp6niy.amplifyapp.com/',
        githubUrl: 'https://github.com/jer-nc/r2r-next-13',
    },
];