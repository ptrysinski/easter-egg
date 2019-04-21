import React from 'react'
import paintedEgg from './egg-painted.svg'
import './Eggs.css'

const EggPainted = (props) => {
    return (
        <div>
            <img
                src={paintedEgg}
                alt={'Pisanka'}
            />
            <h3>
                Wesołych świąt
			</h3>
        </div>
    )
}

export default EggPainted