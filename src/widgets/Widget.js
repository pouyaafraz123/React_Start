import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'What Is React?',
        content: 'React is front-end javascript framework'
    },
    {
        title: 'Why Use React?',
        content: 'React is favorite JS library among engineers'
    },
    {
        title: 'How Do You Use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of blue',
        value: 'blue'
    }
];

const Widget = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div /*style={{marginRight: "200px", marginLeft: "200px", marginTop: "25px"}}*/>
            <Header/>
            <Route path={'/'}><Accordion items={items}/> </Route>
            <Route path={'/translate'}><Translate/></Route>
            <Route path={'/list'}><Search/></Route>
            <Route path={'/dropdown'}><Dropdown label={'Select a Color'} options={options} selected={selected}
                                                onSelectedChange={setSelected}/></Route>
        </div>
    );
}

export default Widget;