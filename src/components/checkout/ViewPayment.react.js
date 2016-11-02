import React, { Component } from 'react';

class ViewPayment extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Hur vill du betala?</div>
                <div className="panel-body">
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Faktura (29kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Klarna konto (0kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Visa eller MasterCard (0kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Visa bank (0kr)</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewPayment;