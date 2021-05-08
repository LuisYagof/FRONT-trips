import React, { useState, useEffect } from 'react'
import fetchData from '../../hooks/Fetch'
import { useHistory } from 'react-router-dom'
import Filter from '../Filter/Filter'

const SearchAll = () => {

    const [filter, setFilter] = useState(false)
    const toggleFilter = () => { setFilter(!filter) }

    return (
        <>
            <Filter toggle={toggleFilter} filter={filter}/>
            <h3>Resultados de búsqueda</h3>
            <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
                <button onClick={toggleFilter}>FILTRO</button>
            </div>
        </>
    )
}

export default SearchAll;