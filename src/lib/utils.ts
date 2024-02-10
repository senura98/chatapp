import { ClassValue,clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//this is a function that accpets any amount of class names and concatenate them
export function cn(...inputs:ClassValue[]){
    //merge classes redundant together for cleaner tailwind code
    return twMerge(clsx(inputs))
}