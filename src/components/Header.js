import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="tesla" />
            </a>

            <Menu>

                { cars && cars.map((car, index) =>(
                    <a href="/" key={index}>{car}</a>
                ))}
            </Menu>

            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>

                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>

            {/* Burger Nav Menu ( SideBar ) */}

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>

                { cars && cars.map((car, index) =>(
                    <li key={index}><a href={car}>{car}</a></li>
                ))}

                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Test Drive</a></li>
                <li><a href="/">Support</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right:0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    margin-left: 30px;

    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 400px) {
        max-width: 200px;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        margin-right: 20px;
        flex-wrap: nowrap;
    }

    @media (max-width: 400px) {
        a {
            display: none;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right:0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 30px;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: space-between;
    overflow-y: scroll;

${'' /* si faux décaler sur X de 100% vers la droite, sinon laisser tel qu'elle */}
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);

        a {
            font-weight: 600;
        }
    }

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`