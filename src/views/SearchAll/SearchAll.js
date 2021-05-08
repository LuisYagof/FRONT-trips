import React, { useState, useEffect } from 'react'
import fetchData from '../../hooks/Fetch'
import { useHistory } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'

const SearchAll = () => {

    const [filter, setFilter] = useState(false)
    const [toggleBtn1, setToggleBtn1] = useState(false);
    const [toggleBtn2, setToggleBtn2] = useState(false);
    const [orderBy, setOrderBy] = useState("1");

    const toggleFilter = () => { setFilter(!filter) }
    const filterResults = (toggleBtn1, toggleBtn2, orderBy) => { 
        setToggleBtn1(toggleBtn1) 
        setToggleBtn2(toggleBtn2)
        setOrderBy(orderBy)
    }

    return (
        <>
            <Filter toggle={toggleFilter} filter={filter} filterResults={filterResults}/>
            <h3>Resultados de búsqueda</h3>
            <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
                <button onClick={toggleFilter}>FILTRO</button>
            </div>
        </>
    )
}

export default SearchAll;