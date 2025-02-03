import React, { useState, useEffect, useMemo } from 'react';
import CardsList from './components/CardsList/CardsList.jsx';
import { useGenerateData } from './hooks/useGenerateData.js';
import './App.css';

const MINIMAL_INPUT_SIZE_BEFORE_SEARCH = 3;

export default function App() {
    const { generateMultipleItems } = useGenerateData();
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setItems(generateMultipleItems(10));
    }, []);

    // const addCard = () => {
    //     setItems((prevItems) => [...prevItems, generateSingleItem()]);
    // };

    const filteredCards = useMemo(() => {
        if (searchQuery.length < MINIMAL_INPUT_SIZE_BEFORE_SEARCH) return items;
        return items.filter((card) =>
            card.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, items]);

    // const handleSearch = (value) => {
    //     setSearchQuery(value.trim());
    // };

    return (
        <>
            <h1> App</h1>
            {/* <header class="sticky-header">
                <TheHeader/>
                <TopContentTools :modelValue="searchQuery" @update:modelValue="handleSearch" @add="addCard"/>
                <TopNav/>
            </header> */}
            <main className="wrapper">
                <CardsList items={ filteredCards } />
            </main>
        </>
    );
}
