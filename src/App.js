import React, { useState, useEffect, useMemo } from 'react';
import { useGenerateData } from './hooks/useGenerateData';
import CardsList from './components/CardsList/CardsList';
import TopContentTools from './components/TopContentTools/TopContentTools';
import './App.css';

const MINIMAL_INPUT_SIZE_BEFORE_SEARCH = 3;

export default function App() {
  const { generateMultipleItems, generateSingleItem } = useGenerateData();
  const [ items, setItems ] = useState([]);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    setItems(generateMultipleItems(10));
  }, []);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, generateSingleItem()]);
  }

  const filteredItems = useMemo(() => {
    if (search.length < MINIMAL_INPUT_SIZE_BEFORE_SEARCH) return items;
    return items.filter((item) => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  const handleSearch = (value) => {
    setSearch(value.trim());
  }

  return(
    <>
      <header className="sticky-header">
        <TopContentTools 
          value={ search }
          onSearchUpdate={ handleSearch }
          onAdd={ addItem }
        />
      </header>
      <main className="wrapper">
        <CardsList items={ filteredItems }/>
      </main>
    </>
  );
}