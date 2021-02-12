import { WalkerMeta } from "../index";
import {getRandomElement} from "./random";
import {getLetter} from "./alphabet";
import { getColor } from "./color";
import { DEFAULT_STRING } from "../constants/string";

export const getNextStep = (meta: WalkerMeta): WalkerMeta => {
  if (meta.stringIndex >= DEFAULT_STRING.length - 1 || typeof meta.lastVisit === 'undefined') {
    return meta;
  }
  const nextPosition = getRandomElement(getPivotOptions(meta));
  if (typeof nextPosition === 'undefined') {
    return meta;
  }
  meta.tiles[nextPosition].value = getLetter(meta.stringIndex + 1)
  meta.tiles[nextPosition].color = getColor(meta.stringIndex + 1)
  return {
    ...meta,
    stringIndex: meta.stringIndex + 1,
    lastVisit: nextPosition
  }
}

const getPivotOptions = (meta: WalkerMeta): any[] => {
  const {tiles, size, lastVisit = 0 } = meta;
  const currentTile = tiles[lastVisit];
  const {left, right, top, bottom} = currentTile.edges
  return [
    !left && currentTile.pos - 1,
    !right && currentTile.pos + 1,
    !bottom && currentTile.pos + size,
    !top && currentTile.pos - size,
  ].filter(x => typeof x === 'number').filter(x => tiles[x as number].value === "");
}
