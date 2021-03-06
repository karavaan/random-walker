import { Edges, isEdge } from "./edge";
import { WalkerMeta } from "../index";
import { getColor } from "./color";

export interface TilesMeta {
  pos: number;
  edges: Edges;
  value: string;
}

const getInitialTilesMeta = (size: number): TilesMeta[] => {
  return Array(size * size).fill(0).map((unused, index) => {
    return {
      pos: index,
      edges: isEdge(index, size),
      value: ``,
    }
  })
}

export const getInitialWalkerMeta = (size: number): WalkerMeta => {
  return <WalkerMeta>{
    tiles: getInitialTilesMeta(size),
    stringIndex: 0,
    size,
  }
}
