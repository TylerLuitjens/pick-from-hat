import styled from "styled-components";

export const Column = styled.div`
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    margin: ${({ margin }) => margin};
    height: ${({ height }) => height ?? '100%'};    
    width: ${({ width }) => width ?? '100%'};
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    margin: ${({ margin }) => margin};
    height: ${({ height }) => height ?? '100%'};    
    width: ${({ width }) => width ?? '100%'};
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const LinearGradientDivSeparator = styled.div`
    content: "";
    display: inline-block;
    width: 1px;
    height: 75vh;
    margin: 1em;
    background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), #c8c6ae 25%, #c8c6ae 85%, rgba(255, 255, 255, 0));
    background-image: -moz-linear-gradient(rgba(255, 255, 255, 0), #c8c6ae 25%, #c8c6ae 85%, rgba(255, 255, 255, 0));
    background-image: -o-linear-gradient(rgba(255, 255, 255, 0), #c8c6ae 25%, #c8c6ae 85%, rgba(255, 255, 255, 0));
    background-image: linear-gradient(rgba(255, 255, 255, 0), #c8c6ae 25%, #c8c6ae 85%, rgba(255, 255, 255, 0));
  `;

  export const ListItem = styled.div`
    display: flex;
    padding-top: 5px;
  `;