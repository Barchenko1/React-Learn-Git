import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating a components'
    }
];

const options = [
    {
        label: 'The color Red',
        'value': 'red'
    },
    {
        label: 'The color Green',
        'value': 'green'
    },
    {
        label: 'A Shade of Blue',
        'value': 'blue'
    }
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
}

function App() {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

  return (
      <div>
          <Header />
          <Router path="/">
              <Accordion items={items} />
          </Router>
          <Router path="/list">
              <Search/>
          </Router>
          <Router path="/dropdown">
              <Dropdown
                  selected={selected}
                  onSelectedChange={setSelected}
                  options={options} />
          </Router>
          <Router path="/translate">
              <Translate />
          </Router>
        {/*<Accordion items={items}/>*/}
        {/*<Search />*/}
        {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>*/}
        {/*  {showDropdown ?*/}
        {/*      <Dropdown*/}
        {/*          selected={selected}*/}
        {/*          onSelectedChange={setSelected}*/}
        {/*          options={options}*/}
        {/*      /> : null*/}
        {/*  }*/}
        {/*<Translate />*/}
      </div>
  );
}

export default App;
