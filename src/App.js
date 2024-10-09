import './App.css';
import { useState } from 'react';
import Sidepane from './Sidepane';
import MainWindow from './MainWindow';
import {Row, Column, Container, LinearGradientDivSeparator} from "./StyledComponents";

function App() {
  const [listItems, setListItems] = useState([]);
  const [selectItem, setSelectItem] = useState(false);

  return (
    <Container className="App">
      <Row height="100%">
        <Column width="40%">
          <Sidepane items={listItems} setItems={setListItems} setSelectItem={setSelectItem}/>
        </Column>
        <Column width="5%">
          <LinearGradientDivSeparator />
        </Column>
        <Column width="55%">
          <MainWindow items={listItems} selectItem={selectItem} setSelectItem={setSelectItem}/>
        </Column>
      </Row>
    </Container>
  );
}

export default App;
