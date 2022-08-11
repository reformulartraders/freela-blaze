import React, { useState } from 'react'

import background from '../../assets/background.png'

import { FaTelegramPlane } from 'react-icons/fa'

import './style.scss'

export function SectionTelegram() {
    return(
        <section className="sectionTelegram">
            <div className="contentSectionTelegram">
                <h1 className="titleCustom">Conheça nosso grupo gratuito</h1>
                <a href="https://t.me/+W6lEF873z5c3Y2Ex" target="_blank" className="iconTelegram">
                    <FaTelegramPlane />
                </a>
                <span>GRUPO FREE</span>
            </div>
            <img src={background} className="imgBg"/>
      </section>
    )
}
