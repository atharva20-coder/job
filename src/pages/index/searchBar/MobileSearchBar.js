import React, { useState } from 'react';
import {ReactComponent as SearchIcon} from '../../../assets/desktop/icon-search.svg'
import {ReactComponent as FilterIcon} from '../../../assets/mobile/icon-filter.svg'
import {ReactComponent as LocationIcon} from '../../../assets/desktop/icon-location.svg'
import Checkbox from '../../../component/Checkbox';

function FilterModal({ close, handleFilterOptions, full_time, location, handleSubmit }) {
    const handleClose = (ev) => {
        if (ev.target === ev.currentTarget)
            close()
    }

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-card">
                <div className="modal-card__input-block">
                    <LocationIcon viewBox="0 0 17 24" className="modal-card__icon" />
                    <input 
                        name="location"
                        value={location}
                        onChange={handleFilterOptions}
                        type="text"
                        className="modal-card__text-field" 
                        placeholder="Filter by location..."
                    />
                </div>

                <Checkbox
                    name="full_time"
                    label="Full Time Only"
                    className="modal-card__checkbox" 
                    checked={full_time ? true : false}   
                    onChange={handleFilterOptions}
                />

                <div className="modal-card__button-block">
                    <button onClick={handleSubmit} className="button1 modal-card__button">Search</button>
                </div>
            </div>
        </div>
    )
}


function MobileSearch({ filterOptions, handleFilterOptions, handleSubmit }) {
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            {showModal && 
            <FilterModal 
                close={handleCloseModal} 
                handleFilterOptions={handleFilterOptions}
                location={filterOptions.location}
                full_time={filterOptions.full_time}
                handleSubmit={handleSubmit}
            />}

            <div className="mobile-search-bar">
                <input
                    name="description"
                    value={filterOptions.description}
                    onChange={handleFilterOptions}
                    type="text"
                    className="mobile-search-bar__input"
                    placeholder="Filter by title..."
                />
                <FilterIcon onClick={handleOpenModal} viewBox="0 0 20 20" className="mobile-search-bar__filter" />
                <button onClick={handleSubmit} className="button1 mobile-search-bar__button">
                    <SearchIcon viewBox="0 0 24 24" className="mobile-search-bar__search" />
                </button>
            </div>
        </>
    );
}

export default MobileSearch;
