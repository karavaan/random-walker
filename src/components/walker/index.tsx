import { FunctionalComponent, h } from "preact";
import styled from "styled-components";
import { useEffect, useState } from "preact/hooks";
import Tile from "./elements/tile";
import { getInitialWalkerMeta, TilesMeta } from "./helpers/empty-tiles";
import { getNextStep } from "./helpers/next-step";
import { getFirstStep } from "./helpers/first-step";

interface Props {
    size: number;
    message: string;
}

export interface WalkerMeta {
    tiles: TilesMeta[];
    message: string;
    stringIndex: number;
    lastVisit?: number;
    size: number;
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(
        ${(props: {size: number}): number => props.size},
        60px
    );
    gap: 5px 5px;
`;

const Walker: FunctionalComponent<Props> = ({
    size ,
    message
}) => {
    const [startTile, setStartTile] = useState(undefined);
    const [meta, setMeta] = useState<WalkerMeta>(getInitialWalkerMeta(size, message));

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
