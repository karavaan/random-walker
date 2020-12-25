import styled from "styled-components";
import { FunctionalComponent, h } from "preact";
import { INITIAL_COLOR } from "../constants/color";

const Button = styled.button`
    color: ${(props) => props.color};
    font-size: 2em;
    font-family: Arial, serif;
    font-weight: bolder;
    width: 60px;
    height: 60px;
    border: ${(props) => props.color !== INITIAL_COLOR ? '3px' : '2px'} solid ${(props) => props.color};
    border-radius: 3px;
`;

export interface ButtonProps {
    value?: string | number;
    color: string;
    position: number;
    clickedOn?: Function;
}

export const Tile: FunctionalComponent<ButtonProps> = ({
   value = "",
   color,
   position,
   clickedOn
}): JSX.Element => {
    return (
      <Button
        color={color}
        key={value}
        onClick={() => clickedOn && clickedOn(position)}
      >
          {value}
      </Button>
    );
};
export default Tile;
