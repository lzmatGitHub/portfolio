import React from 'react';
import IndexButton from './IndexButton';

class IndexButtons extends React.Component {

    render() {
        return (
            <div className="grid-buttons-container">
                {this
                    .props
                    .buttons
                    .map((button) => <IndexButton button={button}  key={button.key} handleHover={this.props.handleHover} />)}
                <style jsx>{` 
                        .grid-buttons-container {
                            width: 600px;
                            height: 600px;
                            position: absolute;
                            right: 15%;
                            bottom: 10%;
                            display: grid;
                            grid-template-rows: repeat(3, 1fr);
                            grid-template-columns: repeat(3, 1fr);
                            border: solid 1px black;
                        }
                        
                        @media screen and (max-width: 1024px) {
                            .grid-buttons-container {
                                width: 540px;
                                height: 540px;
                                right: 5%;
                                bottom: 15%;
                            }
                        }

                        @media screen and (max-width: 600px) {
                            .grid-buttons-container {
                                width: 300px;
                                height: 300px;
                                right: 2.5%;
                                bottom: 20%;
                            }
                        }
                `}</style>
            </div>
        );
    }
}

export default IndexButtons;