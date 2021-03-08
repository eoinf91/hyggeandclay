import React from 'react'
import Circle from '../Circle/Circle'

import './TwoColImage.styles.scss'

const TwoColImage = ({ twoColHeader, twoColCopy, twoColImage }) => {
    return (
        <div className="two-col-container">
            <div className="two-col">
                <div 
                    className="two-col-image"
                    style={{
                        'background': `url(${twoColImage})`,
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center 60%'
                    }}
                />
                <div className="two-col-content">
                    <h3 className="text-green">{twoColHeader}</h3>
                    <p className="text-green">
                        {twoColCopy}
                    </p>
                </div>
            </div>
            <Circle />
        </div>
    )
}

export default TwoColImage