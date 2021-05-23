import logo from './logo.svg';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './Card';
import { Link, Switch, Route } from 'react-router-dom'
import Api from './Api';

function App() {
    const [value, setValue] = useState("");
    const [images, setImages] = useState()
    const [currentURL, setCurrentURL] = useState(`https://api.unsplash.com/search/photos/?client_id=QJM7fxoB82TVCuZCiTU5TQHpbtoIXRhBZFvLv7gbdC8&query=&query=${value}`)




    return (

        <div className="App">
            <Switch>
                <Route path='/'>
                    <Api value={ value } setValue={ setValue } images={ images } setImages={ setImages } />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
