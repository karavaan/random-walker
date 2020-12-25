export interface Edges {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
}

export const isEdge = (pos: number, size: number): Edges => {
    return {
      top: pos < size,
      left: pos % size === 0,
      right: (pos + 1) % size === 0,
      bottom: pos >= size * (size - 1)
    }
}
