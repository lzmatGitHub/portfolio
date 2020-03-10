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
                            width: 50%;
                            height: 70%;
                            position: absolute;
                            right: 15%;
                            bottom: 10%;
                            display: grid;
                            grid-template-rows: repeat(4, 1fr);
                            grid-template-columns: repeat(4, 1fr);
                            border: solid 1px black;
                        }
                        
                        @media screen and (max-width: 1024px) {
                            .grid-buttons-container {
                                width: 80%;
                                right: 10%;
                                bottom: 10%;
                            }
                        }
                `}</style>
            </div>
        );
    }
}

export default IndexButtons;