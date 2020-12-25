import { Edges, isEdge } from "./edge";
import { WalkerMeta } from "../index";
import { INITIAL_COLOR } from "../constants/color";

export interface TilesMeta {
    pos: number;
    edges: Edges;
    value: string;
    color: string;
}

const getInitialTilesMeta = (size: number): TilesMeta[] => {
    return Array(size * size).fill(0).map((unused, index) => {
        return {
            pos: index,
            edges: isEdge(index, size),
            color: INITIAL_COLOR,
            value: ""
        }
    })
}

export const getInitialWalkerMeta = (size: number): WalkerMeta  => {
    return {
        tiles: getInitialTilesMeta(size),
        stringIndex: 0,
        size
    }
}

