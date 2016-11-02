import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewCart extends Component {

    render() {

        const mappedCart = this.props.products.map((product, index)=> {
            return (
                <tbody key={index}>
                <tr>
                    <td>
                        <img src={product.image} alt="" width="120px" />
                    </td>
                    <td>{product.title}</td>
                    <td>
                        <div className="form-inline">
                            <input type="number" className="form-control amount" placeholder="0" defaultValue={product.amount} />
                            st
                        </div>
                    </td>
                    <td>x</td>
                    <td>{product.price}</td>
                    <td>=</td>
                    <td>{product.price * product.amount}</td>
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
        products: state.products
    };
}
export default connect(mapStateToProps)(ViewCart);