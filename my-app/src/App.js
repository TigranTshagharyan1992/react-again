import './App.css';
import Header from "./components/header/Header";
import Listing from "./components/Listing";
import ListingNavigation from "./components/ListingNavigation";
import {Fragment, useState} from "react";
import TabSection from "./components/TabSection";
import Page2 from "./components/Page2";
import Form from "./components/Form";
import EffectSection from "./components/EffectSection";

function App() {

    const [tab, setTab] = useState('Effect');

    const changeTab = (tab) => setTab(tab);

    return (
    <Fragment>
        <Header />

        <TabSection onClick ={changeTab} tab={tab}/>

        {tab==='Home page' && <><Listing />
            <ListingNavigation /></>}

        {tab==='Page 2' && <> <Page2 /></>}


        {tab==='Form' && <> <Form /></>}

        {tab==='Effect' && <><EffectSection /></>}

    </Fragment>
  );
}

export default App;
