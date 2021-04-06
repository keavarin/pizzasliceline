import React from 'react';
import styled from 'styled-components';
import {foods} from '../Data/FoodData'
import {Food, FoodGrid, FoodLabel} from "./FoodGrid"


const MenuStyled = styled.div`
height: 1000px;
margin: px 400px 50px 20px; 
`
export function Menu({setOpenFood}){
    //console.log(foods)
    return (
    <MenuStyled>
        {/* entries create arr of key and value */}
        {Object.entries(foods).map(([sectionName, foods]) => (
        <>
        <h1>{sectionName}</h1>
        <FoodGrid>
        {foods.map(food=> (
            <Food 
            img={food.img} 
            onClick={()=>{
                setOpenFood(food.name);
            }}>
                <FoodLabel>{food.name}</FoodLabel>
            </Food>
        ))}
        </FoodGrid>
        </>
        ))}
    </MenuStyled>
    )
};