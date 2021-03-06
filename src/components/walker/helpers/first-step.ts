import {getLetter} from "./alphabet";
import {WalkerMeta} from "../index";
import { getColor } from "./color";

export const getFirstStep = (meta: WalkerMeta, startTile?: number): WalkerMeta => {
  const tilesMeta = meta.tiles.map((tMeta) => {
    if (tMeta.pos !== startTile) {
      return tMeta;
    }
    return {
      ...tMeta,
      value: getLetter(meta.message, meta.stringIndex),
      color: getColor(meta.message, 0)
    };
  })
  return {
    ...meta,
    tiles: tilesMeta,
    stringIndex: meta.stringIndex,
    lastVisit: startTile,
  }
}
