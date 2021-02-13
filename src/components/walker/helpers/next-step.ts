import { WalkerMeta } from "../index";
import {getRandomElement} from "./random";
import {getLetter} from "./alphabet";
import { getColor } from "./color";

export const getNextStep = (meta: WalkerMeta): WalkerMeta => {
  const { message, lastVisit, tiles, stringIndex } = meta;
  if (stringIndex >= message.length - 1 || typeof lastVisit === 'undefined') {
    return meta;
  }
  const nextPosition = getRandomElement(getPivotOptions(meta));
  if (typeof nextPosition === 'undefined') {
    return meta;
  }
  tiles[nextPosition].value = getLetter(message,stringIndex + 1)
  tiles[nextPosition].color = getColor(message,stringIndex + 1)
  return {
    ...meta,
    stringIndex: stringIndex + 1,
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
