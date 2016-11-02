import React, { Component } from 'react';

class ViewCart extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Granska din kundvagn (Måste hämtas i butik)</div>
                <div className="panel-body">
                    <p>Din kundvagn innehåller antingen <b>reservdelar</b> eller produkter som vi klassar som <b>farliga</b>, <b>krymmande</b> eller <b>ömtåliga</b>. Din beställning måste därför hämtas ut i någon av våra butiker.</p>

                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-breed-landing-hero.ashx" alt="" width="120px" />
                                </td>
                                <td>Product Text</td>
                                <td>
                                    <div className="form-inline">
                                        <input type="number" className="form-control amount" id="exampleInputEmail1" placeholder="0" />
                                        st
                                    </div>
                                </td>
                                <td>x</td>
                                <td>200kr</td>
                                <td>=</td>
                                <td>400kr</td>
                                <td><b>X</b></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-breed-landing-hero.ashx" alt="" width="120px" />
                                </td>
                                <td>Product Text</td>
                                <td>
                                    <div className="form-inline">
                                        <input type="number" className="form-control amount" id="exampleInputEmail1" placeholder="0" />
                                        st
                                    </div>
                                </td>
                                <td>x</td>
                                <td>200kr</td>
                                <td>=</td>
                                <td>400kr</td>
                                <td><b>X</b></td>
                            </tr>
                        </tbody>
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

export default ViewCart;