import './App.css';
import Header from "./components/header/Header";
import Listing from "./components/Listing";
import ListingNavigation from "./components/ListingNavigation";
import {Fragment, useState} from "react";
import TabSection from "./components/TabSection";
import Page2 from "./components/Page2";

function App() {

    const [tab, setTab] = useState('Home page');

    const changeTab = (tab) => setTab(tab);

    return (
    <Fragment>
        <TabSection onClick ={changeTab} tab={tab}/>
        <Header />
        {tab==='Home page' && <><Listing />
            <ListingNavigation /></>}

        {tab==='Page 2' && <> <Page2 /></>}

    </Fragment>
  );
}

export default App;
