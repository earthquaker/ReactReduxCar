import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cartActions';

class ViewCart extends Component {

    updateCart(value, key) {
        this.props.updateProdAmount(value, key);
        this.props.updateTotalPrice();
    }

    render() {

        const cart = this.props.cart;

        const mappedCart = Object.keys(cart).map((product)=> {
            return (
                <tbody key={product}>
                    <tr>
                        <td>
                            <img className="well" src={cart[product].image} alt="" width="120px" />
                        </td>
                        <td>
                            <p className="product-title">{cart[product].title}</p>
                            <p className="product-description">{cart[product].desc}</p>
                        </td>
                        <td>
                            <div className="form-inline">
                                <input type="number" className="form-control amount" placeholder="0" defaultValue={cart[product].amount} onChange={(e)=>this.updateCart(e.target.value, product)}/>
                                st
                            </div>
                        </td>
                        <td>x</td>
                        <td>{cart[product].price}kr</td>
                        <td>=</td>
                        <td className="priceTotalProd">{cart[product].price * cart[product].amount}kr</td>
                        <td><b>X</b></td>
                    </tr>
                </tbody>
            )
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Granska din kundvagn (Måste hämtas i butik)</div>
                <div className="panel-body">
                    <p>Din kundvagn innehåller antingen <b>reservdelar</b> eller produkter som vi klassar som <b>farliga</b>, <b>krymmande</b> eller <b>ömtåliga</b>. Din beställning måste därför hämtas ut i någon av våra butiker.</p>

                    <table className="table">
                        {mappedCart}
                    </table>
                </div>
                <div className="panel-footer">
                    <p className="priceInfo">
                        Fakturaavgift: 29kr<br />
                        Totalt inkl. moms: <span className="priceTotal">454kr</span>
                    </p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateProdAmount: (value, key) => dispatch(cartActions.updateProdAmount(value, key)),
        updateTotalPrice: () => dispatch(cartActions.updateTotalPrice())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);