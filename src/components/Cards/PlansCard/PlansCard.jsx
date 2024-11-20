import React from "react";
import PropTypes from "prop-types";
import style from './PlansCard.module.css';
import Button from "../../Button/Button.jsx";

const PlansCard = ({ title, price, description }) => {
    return (
        <>
            <div className={`${style['card_line']} card`} style={{width: '19rem'}}>
                <div className={`${style['card']} card-body`}>
                    <div className={`${style['card-title']} card-title`}>{title}</div>
                    <h5><span className="card-title">R${price}</span>/mês</h5>
                    <p className="card-text">{description}</p>
                    <Button text={'Assine Agora'} margin={'5% 0 0 0'} border={'none'} padding={'3% 4%'} radius={'5px'} fontSize={'1.2rem'} />
                </div>
            </div>
        </>
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
