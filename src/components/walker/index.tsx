import { FunctionalComponent, h } from "preact";
import styled from "styled-components";
import { useEffect, useState } from "preact/hooks";
import Tile from "./elements/tile";
import { getInitialWalkerMeta, TilesMeta } from "./helpers/empty-tiles";
import { getNextStep } from "./helpers/next-step";
import { getFirstStep } from "./helpers/first-step";
type Size = { size?: number };

export interface WalkerMeta {
    tiles: TilesMeta[];
    stringIndex: number;
    lastVisit?: number;
    size: number;
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(
        ${(props: Size): number => props.size || 10},
        60px
    );
    gap: 5px 5px;
`;

const Walker: FunctionalComponent<Size> = ({ size = 10 }) => {
    const [startTile, setStartTile] = useState(undefined);
    const [meta, setMeta] = useState<WalkerMeta>(getInitialWalkerMeta(size));

    useEffect(() => {
        setMeta(prev => getFirstStep(prev, startTile));
    }, [startTile])

    useEffect(() => {
        setMeta(getNextStep(meta))
    }, [meta])

    return (
      <div>
          <Grid size={size}>
              {meta.tiles.map((tile =>
                  <Tile
                    value={tile.value}
                    position={tile.pos}
                    key={tile.pos}
                    color = {tile.color}
                    clickedOn={typeof startTile === "undefined" ? setStartTile : undefined}
                  />
              ))}
          </Grid>
      </div>
    );
};

export default Walker;
