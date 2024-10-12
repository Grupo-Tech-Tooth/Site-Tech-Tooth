import React from "react";
import PropTypes from "prop-types";
import style from './PlansCard.module.css';
import { Container } from "@mui/material";
import Button from "../../Button/Button.jsx";

const PlansCard = ({ title, price, description}) => {
    return (
        <div  className={style['card_line']}>
            <div className={style['card']}>
                <h3>{title}</h3>
                <h4><span>R${price}</span>/mês</h4>
                <p>{description}</p>
                <Button text={'ASSINE AGORA'} margin={'5% 0 0 0'} border={'none'} padding={'3% 4%'} radius={'5px'}/>
            </div>
        </div>
    );
}

PlansCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default PlansCard;
