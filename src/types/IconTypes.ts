import { StaticImageData } from "next/image";

export interface Icon {
    src: string | StaticImageData;
    alt: string;
}
