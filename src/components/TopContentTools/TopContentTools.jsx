import React from 'react';
import styles from './TopContentTools.module.css';
import AddIcon from "../icons/IconAdd";
import SearchIcon from "../icons/IconSearch";

export default function TopContentTools ({ value, onSearchUpdate, onAdd }) {
  return(
    <div className={ styles["top-content-tools"] }>

      <div className={ styles["tool-box"] }>
        <span className={ styles["tool-title"] }>Créer</span>
        <div>
          <button
            className={`${styles["add-button"]} clickable`}
            onClick={ onAdd }
          >
            <AddIcon />
          </button>
        </div>
      </div>

      < div className={ styles["spacer"] } />

      <div className={ styles["tool-box"] }>
        <span className={`${styles["tool-title"]} ${styles["search-title"]}`}>Rechercher</span>
        <div className={ styles["search-input"] }>
          <label htmlFor="search-input" className="sr-only">
            Rechercher une ressource
          </label>
          <input
            id="search-input"
            value={ value }
            onInput={ (event) => onSearchUpdate(event.target.value) }
            className={ styles["search-input-text"] }
            type="text"
            placeholder="Nom d'une ressource"
          />
          <button className={`${styles["search-input-button"]} clickable`}>
            <SearchIcon />
          </button>
        </div>
      </div>

    </div>
  );
}