import React, { useState } from 'react'
import './Card.css'
import ReactTooltip from "react-tooltip";


const Card = ({ image, full, regular, small }) => {
    const [download, setDownload] = useState(false);

    const onClickHandler = () => {
        setDownload(!download)
        console.log(download)
    }


    return (
        <div className="card">
            <img data-tip data-for="imageTip" src={ image } onClick={ onClickHandler } alt="" />

            { download &&
                <div>
                    <a href={ full } className='btn'> Full </a>
                    <a href={ regular } className='btn'> Regular </a>
                    <a href={ full } className='btn'> Small </a>

                </div>
            }
            <ReactTooltip id="imageTip" place="bottom" effect="solid">
                Click To View image in Different Sizes
      </ReactTooltip>
        </div>
    )
}

export default Card
