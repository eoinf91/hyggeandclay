import React from 'react'
import Circle from '../Circle/Circle'

import './TwoColImage.styles.scss'

const TwoColImage = ({ twoColHeader, twoColCopy }) => {
    return (
        <div className="two-col-container">
            <div className="two-col">
                <div className="two-col-image"></div>
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