import { Container } from '@mui/material';
import style from './TestimonialsCard.module.css';

const TestimonialsCard = ({image, testimony, author}) =>{
    return(
        <Container maxWidth='sm' className={`${style['card_line']} col-12 col-md`} style={{backgroundImage: `url(${image})`}}>
            <div className={style['card']}>
                <span>{testimony}
                <p>-{author}</p>
                </span>
            </div>
        </Container>
    )
}

export default TestimonialsCard;