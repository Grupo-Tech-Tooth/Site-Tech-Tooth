import style from './BlogCard.module.css';
import Button from '../../Button/Button';

const BlogCard = (props) => {
    return (
        <>
            <div className={`${style['card_line']} card col-12  col-lg-4`}>
                <img src={`${props.image}`} className="card-img-top" alt="..."/>
                    <div className={`${style['card_text']} card-body`}>
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.description}</p>
                        <Button text={'Leia Mais'} width={'fit-content'} height={'fit-content'} padding={'2% 2.5%'} radius={'5px'} margin={'3% 0 0 0'} fontSize={'1rem'} />
                    </div>
            </div>
        </>
    )
}

export default BlogCard;