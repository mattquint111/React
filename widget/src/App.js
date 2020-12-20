import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate'

const options = [
    {
        label: "Red",
        value: "red",
    },
    {
        label: "Green",
        value: "green",
    },
    {
        label: "Blue",
        value: "blue",
    },
];

export default () => {

    return (
        <div>
            <Translate />
        </div>
    );
};
