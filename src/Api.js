import React from 'react'
import './App.css';
import Card from './Card';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Api = ({ value, setValue, images, setImages }) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos/?client_id=QJM7fxoB82TVCuZCiTU5TQHpbtoIXRhBZFvLv7gbdC8&query=&query=${value}&per_page=12&page=${page}`)
            .then(res => {
                setImages(res.data.results);
                console.log(res.data.results);
            })
    }, [value, page])

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos/?client_id=QJM7fxoB82TVCuZCiTU5TQHpbtoIXRhBZFvLv7gbdC8&query=&query=all&per_page=12&page=${page}`)
            .then(res => {
                setImages(res.data.results);
                console.log(res.data.results);
            })
    }, [page])

    const onChangeHandler = async (event) => {
        await setValue(event.target.value);
        console.log(value)
    };



    return (
        <div className='App'>
            <h1>𝓘𝓶𝓪𝓰𝓮 𝓖𝓪𝓵𝓵𝓮𝓻𝔂</h1>
            <div className="growing-search">
                <div className="input">
                    <input type="text" placeholder="Search" name="search" value={ value } onChange={ onChangeHandler } />
                </div><div class="submit">
                    <button type="submit" name="go_search">
                        <span class="fa fa-search"></span>
                    </button>
                </div>
            </div>

            <div className="container">
                { images && images.map(p => (

                    <Card image={ p.urls.small } full={ p.urls.full } regular={ p.urls.regular } small={ p.urls.small } />



                )) }

            </div>
            <div className="btns">
                <div className='btn' onClick={ () => setPage(page - 1) }>Prev</div>
                <div className='btn' onClick={ () => setPage(page + 1) }>Next</div>
            </div>
        </div>
    )
}

export default Api
