import { END_VALUE, MIDDLE_VALUE, START_VALUE } from "../constants/gradient";
import tinygradient from "tinygradient";
import { DEFAULT_STRING } from "../constants/string";

export const getColor = (number: number): string => {
  const gradient = tinygradient([
    START_VALUE,
    MIDDLE_VALUE,
    END_VALUE
  ])
  gradient.rgb(DEFAULT_STRING.length);
  const val = map(number, 0, DEFAULT_STRING.length - 1, 0, 1);
  return rgbToHex(gradient.rgbAt(val));
}

const map = (x: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const rgbToHex = ({_r, _g, _b}: any): string => {
  return `#${toBase16String(_r)}${toBase16String(_g)}${toBase16String(_b)}`
}

const toBase16String = (number: number): string => {
  const base16 = Math.ceil(number).toString(16);
  return base16.length === 1 ? `0${base16}` : `${base16}`
}
