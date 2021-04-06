import React from 'react';
import {ReactComponent as SearchIcon} from '../../../assets/desktop/icon-search.svg'
import {ReactComponent as LocationIcon} from '../../../assets/desktop/icon-location.svg'
import Checkbox from '../../../component/Checkbox';

function SearchBar({ filterOptions, handleFilterOptions, handleSubmit }) {
    return (
        <div className="desktop-search-bar">
            <div className="desktop-search-bar__input-block">
                <SearchIcon viewBox="0 0 24 24" />
                <input
                    name="description"
                    value={filterOptions.description}
                    onChange={handleFilterOptions}
                    type="text"
                    className="desktop-search-bar__input"
                    placeholder="Filter by title, companies, expertise…"
                />
            </div>
            
            <div className="desktop-search-bar__input-block desktop-search-bar__input-block--location">
                <LocationIcon viewBox="0 0 17 24" />
                <input
                    name="location"
                    value={filterOptions.location}
                    onChange={handleFilterOptions}
                    type="text"
                    className="desktop-search-bar__input"
                    placeholder="Filter by location…"
                />
            </div>

            <div className="desktop-search-bar__filter-block">
                <Checkbox 
                    className="desktop-search-bar__checkbox" 
                    label="Full Time" 
                    name="full_time"
                    onChange={handleFilterOptions}
                    checked={filterOptions.full_time ? true : false}   
                />
                <button onClick={handleSubmit} className="button1 desktop-search-bar__button">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
