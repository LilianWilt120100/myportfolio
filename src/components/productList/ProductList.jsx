import Product from '../product/Product';
import './ProductList.css'

const ProductList =()=>{
    return(
        <div class="pl">
            <div class="pl-texts">
                <h1 class="pl-title">My projects</h1>
                <p class="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, dolore earum nostrum quos harum totam quidem placeat deserunt laboriosam ipsa, fugit a. Quisquam exercitationem recusandae ducimus illum officia error quo.
                </p>
            </div>
            <div class="pl-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductList;