import React from 'react'
import paintedEgg from './egg-painted.svg'

const EggPainted = (props) => {
    return (
        <div>
            <h3>
                Wesołych świąt
			</h3>
            <img
                src={paintedEgg}
                alt={'Pisanka'}
            />
        </div>
    )
}

export default EggPainted