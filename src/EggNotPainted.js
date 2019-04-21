import React from 'react'
import egg from './egg.svg'
import './Eggs.css'

const EggNotPainted = (props) => {
    return (
        <div>
            <img
                src={egg}
                alt={'Zwykłe jajko'}
                onClick={props.paintEgg}
            />
            <h3>
                Kliknij by pomalować jajko
			</h3>
        </div>
    )
}

export default EggNotPainted