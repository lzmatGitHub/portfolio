import React from 'react';
import IndexButtons from '../Component/IndexButtons';

class IndexLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "Liu's Portfolio Site",
            buttons: this.props.indexbuttons,
            backgroundImage: "index"
        }
        this.changeBackgroundIMG = this.changeBackgroundIMG.bind(this);
    }

    changeBackgroundIMG(key) {
        this.setState({backgroundImage: key});
    }

    render() {

        return (
            <div className="index-layout">
                <h1>{this.state.pageName}</h1>
                <IndexButtons buttons={this.state.buttons} handleHover={this.changeBackgroundIMG} />
                <style jsx>{` 
                        h1 {
                            font-size: 36px;
                            padding-left: 24px;
                            font-family: Comic Sans MS;
                        }
                        .index-layout {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-image: url(${require('../../images/background-' + this.state.backgroundImage + '.png')});
                            background-size: cover;
                            transition-duration: 0.2s;
                        }

                        @media screen and (max-width: 1024px) {
                            h1 {
                                font-size: 24px;
                            }
                        }
                      `}</style>
            </div>
        );
    }
}

export default IndexLayout;