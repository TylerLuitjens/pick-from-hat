import React, {useState, useEffect} from "react";
import {Row, Column} from "./StyledComponents";
import styled from "styled-components";

const MainWindow = ({items, selectItem, setSelectItem}) => {
    const [selectedIndex, setSelectedIndex] = useState(undefined);
    const [intervalReference, setIntervalReference] = useState("");
    const [doneSpinning, setDoneSpinning] = useState(false);

    let numSpins = 0;
    let spinAgain = selectItem;
    const maxSpins = 20;

    useEffect(() => {
        if (spinAgain) {
            setDoneSpinning(false);
            const interval = setInterval(getItem, 150);
            setIntervalReference(interval);
        }
    }, [selectItem]);

    const getItem = () => {
        if (spinAgain && numSpins < maxSpins) {
            let randomIndex = getRandomIndex(items.length);
            if (randomIndex == selectedIndex) { randomIndex ++; }

            setSelectedIndex(randomIndex);
            numSpins ++;
        } else if (numSpins >= maxSpins) {
            setSelectItem(false);
            spinAgain = false;
            numSpins = 0;
            setDoneSpinning(true);
            clearInterval(intervalReference);
        }
    };

    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * max);
    };
    
    return (
        <Row justifyContent="center">
            <Column justifyContent="center">
                <Row justifyContent="center" height="20%">
                    {doneSpinning && <h1>We Chose</h1>}
                    {!doneSpinning && selectItem && <h1>Selecting options...</h1>}
                </Row>
                <ItemRow justifyContent="center">
                    {selectedIndex !== undefined && (<h1>- {items[selectedIndex]} -</h1>)}
                </ItemRow>
            </Column>
        </Row>
    );
};

const ItemRow = styled(Row)`
    font-family: Garamond, serif;
`;
export default MainWindow;