import Product from '../product/Product';
import './ProductList.css'
import {products} from '../../data';

const ProductList =()=>{
    return(
        <div class="pl">
            <div class="pl-texts">
                <h1 class="pl-title">My projects</h1>
                <p class="pl-desc">
                Here you can see some projects made during my studies. Do not hesitate to take a look at it by clicking on it in order to be able to see the source code.                </p>
            </div>
            <div class="pl-list">
                {products.map((item)=>(
                <Product key={item.id} img={item.img} link={item.link} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList;