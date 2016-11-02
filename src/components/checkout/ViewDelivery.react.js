import React, { Component } from 'react';

class ViewDelivery extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Hur vill du ha din order levererad?</div>
                <div className="panel-body">
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Hämta på Postens utlämningställe (49kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Hem till dörren (249kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Hämta i butik (0kr)</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                            <span>Företagspaket (100kr)</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewDelivery;