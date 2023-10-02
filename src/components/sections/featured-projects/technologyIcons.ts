import firebaseIcon from '../../../../public/icons/firebase-1.svg'
import reactIcon from '../../../../public/icons/react-2.svg'
import awsIcon from '../../../../public/icons/aws.svg'
import javascriptIcon from '../../../../public/icons/logo-javascript.svg'
import chakraIcon from '../../../../public/icons/chakra.svg'
import typescriptIcon from '../../../../public/icons/typescript.svg'
import nextjsIcon from '../../../../public/icons/nextjs.svg'
import tailwindIcon from '../../../../public/icons/tailwind-css-2.svg'
import shadIcon from '../../../../public/icons/shad-icon.ico'
import { Icon } from '../../../types/IconTypes'; 

export const technologyIcons: Record<string, Icon> = {
    react: { src: reactIcon, alt: 'React Icon' },
    javascript: { src: javascriptIcon, alt: 'JavaScript Icon' },
    firebase: { src: firebaseIcon, alt: 'Firebase Icon' },
    aws: { src: awsIcon, alt: 'AWS Icon' },
    chakra: { src: chakraIcon, alt: 'Chakra Icon' },
    typescript: { src: typescriptIcon, alt: 'TypeScript Icon' },
    next: { src: nextjsIcon, alt: 'Next.js Icon' },
    tailwindcss: { src: tailwindIcon, alt: 'Tailwind CSS Icon' },
    shad: { src: shadIcon, alt: 'Shadcn Icon' },
};