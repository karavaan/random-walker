import { END_VALUE, MIDDLE_VALUE, START_VALUE } from "../constants/gradient";
import tinygradient from "tinygradient";

const gradient = tinygradient([START_VALUE, MIDDLE_VALUE, END_VALUE]);

const map = (
    x: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number => {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const getColor = (message: string, number: number): string => {
    gradient.rgb(message.length);
    const val = map(number, 0, message.length - 1, 0, 1);
    return gradient.rgbAt(val).toHexString();
};
