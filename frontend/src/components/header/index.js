import React from 'react';
import logo from '../../assets/img/logoMercado.png';
import { MyHeader, MyLogo } from './style';

export default function Header() {
    return (
        <MyHeader>
            <MyLogo alt='logo do mercado' src={logo} />
        </MyHeader>
    )
}