import React from 'react';
import styled from 'styled-components'
import {pizzaRed} from '../Styles/colors'
import {Title} from '../Styles/title'

const NavbarStyled = styled.div`
padding: 10px;
background-color: ${pizzaRed};

` 
const Logo = styled(Title)`
font-size: 20px;
color: white;
text-shadow: 2px 2px 4px #380502;
`
export function Navbar(){
    return <NavbarStyled>
        <Logo>SliceLine</Logo>
        Hello Navbar
    </NavbarStyled>;
}