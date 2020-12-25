import { DEFAULT_STRING } from "../constants/string";

export const getLetter = (position: number): string => {
    if (position < 0 && position >= DEFAULT_STRING.length){
        return '?'
    }
    return DEFAULT_STRING[position];
}
