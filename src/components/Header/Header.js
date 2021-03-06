import React from "react"
import Circle from '../Circle/Circle'

import './Header.styles.scss'

import BGImage from '../../img/header_bg_template.jpg'
import ArchImage from '../../img/header_arch_img.jpg'

const Header = ({ headerTitle, headerCopy, productImage }) => {
    return (
        <div
            className="header"
            style={{
                'background': `url(${BGImage})`,
                'backgroundSize': 'cover',
                'backgroundPosition': 'center left'
            }}
        >
            {productImage
                ? <div
                    className="header-image"
                    style={{
                        'background': `url(${productImage})`,
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center'
                    }}
                />
                : <div
                    className="header-image"
                    style={{
                        'background': `url(${ArchImage})`,
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center'
                    }}
                />
            }
            <div className="header-content">
                <h1>{headerTitle}</h1>
                <p className="text-green">
                    {headerCopy}
                </p>
            </div>
            <Circle />
        </div>
    )
}

export default Header