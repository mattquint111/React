import React from "react";
import './App.css'
import Accordion from './components/Accordion';
import Search from './components/Search'

export default () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a front end framework",
        },
        {
            title: "Why use React?",
            content: "React is a favorite front end library among engineers",
        },
        {
            title: "How do you use React?",
            content: "You use React by creating components",
        },
    ];

    return (
        <div>
            <Search />
        </div>
    );
};
