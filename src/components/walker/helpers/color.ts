import { END_VALUE, MIDDLE_VALUE, START_VALUE } from "../constants/gradient";
import tinygradient from "tinygradient";
import { DEFAULT_STRING } from "../constants/string";

const gradient = tinygradient([START_VALUE, MIDDLE_VALUE, END_VALUE]);
gradient.rgb(DEFAULT_STRING.length);

const map = (
    x: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number => {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const getColor = (number: number): string => {
    const val = map(number, 0, DEFAULT_STRING.length - 1, 0, 1);
    return gradient.rgbAt(val).toHexString();
};
