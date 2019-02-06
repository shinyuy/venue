import React, { Component } from 'react'
import Button from '../utils/Button';
import Zoom from 'react-reveal/Zoom';
export default class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ["Balcony", "Medium", "Star"],
        desc: ["Adipiscing elit, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
            "velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid",
            "quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione"],
        linkTo: ["http://sales/b", "http://sales/m", "http://sales/s"],
        delay:[500,0,500]
    }

    showBoxes = () => {
        return (
            this.state.prices.map((box, i) => (
                <Zoom delay={this.state.delay[i]} key={{}}>
                    <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                         <span>${this.state.prices[i]}</span>
                         <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                           {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                        <Button 
                        text="Purchase"
                        bck="#ffa800"
                        color="#ffffff"
                        linkTo= {this.state.linkTo}
                        />
                        </div>
                    </div>
                </div>
                </Zoom>
                
            ))

        )
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">

                        {this.showBoxes()}

                    </div>
                </div>
            </div>
        )
    }
}
