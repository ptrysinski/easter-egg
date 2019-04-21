import React from 'react'
import egg from './egg.svg'

const EggNotPainted = (props) => {
    return (
        <div>
            <h3>
                Kliknij by pomalować jajko
			</h3>
            <img
                src={egg}
                alt={'Zwykłe jajko'}
                onClick={props.paintEgg}
            />
        </div>
    )
}

export default EggNotPainted