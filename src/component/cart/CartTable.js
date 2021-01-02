import { FiX } from "react-icons/fi";

import meet from '../../assets/images/product/meet.png';
import seafood1 from '../../assets/images/product/seafood1.png';
import orange from '../../assets/images/product/orange.png';

export default function CartTable(){
    return(
    <section className="table-cart">
        <div className="content">
            <table>
                <tr className="tr-head">
                    <th>#</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                </tr>
                <tr className="tr-1">
                    <td className="td-1"><FiX color="333333" size="24px" /></td>
                    <td className="img"><img src={meet} alt="" /></td>
                    <td>Meet Burger</td>
                    <td>$15.00</td>
                    <td>2</td>
                    <td>$30.00</td>
                </tr>
                <tr className="tr-2">
                    <td className="td-2"><FiX color="333333" size="24px" /></td>
                    <td className="img"><img src={seafood1} alt="" /></td>
                    <td>Large Shrimp</td>
                    <td>$15.00</td>
                    <td>2</td>
                    <td>$30.00</td>
                </tr>
                <tr className="tr-3">
                    <td className="td-3"><FiX color="333333" size="24px" /></td>
                    <td className="img"><img src={orange} alt="" /></td>
                    <td>Orange Fruit</td>
                    <td>$15.00</td>
                    <td>2</td>
                    <td>$30.00</td>
                </tr>
            </table>
        </div>
    </section>
    );
}