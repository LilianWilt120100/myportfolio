import './Product.css'

const Product =({img,link})=>{
    return(
        <div class="p">
            <div class="p-browser">
                <div class="p-circle"></div>
                <div class="p-circle"></div>
                <div class="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" class="p-img" />
            </a>
        </div>
    )
}

export default Product;