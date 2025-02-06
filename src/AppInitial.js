import React, { useState, useEffect, useMemo } from 'react';
import CardsList from './components/CardsList/CardsList.jsx';
import TopContentTools from './components/TopContentTools/TopContentTools.jsx';
import { useGenerateData } from './hooks/useGenerateData.js';
import './App.css';

const MINIMAL_INPUT_SIZE_BEFORE_SEARCH = 3;

export default function App() {
    const { generateMultipleItems, generateSingleItem } = useGenerateData();
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setItems(generateMultipleItems(10));
    }, []);

    const addCard = () => {
        setItems((prevItems) => [...prevItems, generateSingleItem()]);
    };

    const filteredCards = useMemo(() => {
        if (searchQuery.length < MINIMAL_INPUT_SIZE_BEFORE_SEARCH) return items;
        return items.filter((card) =>
            card.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, items]);

    const handleSearch = (value) => {
        setSearchQuery(value.trim());
    };

    return (
        <>
            <header className="sticky-header">
                {/* <TheHeader/> */}

                <TopContentTools
                    value={ searchQuery }
                    onSearchUpdate={ handleSearch }
                    onAdd={ addCard }
                />

                {/* <TopNav/> */}
            </header>
            <main className="wrapper">
                <CardsList items={ filteredCards } />
            </main>
        </>
    );
}
