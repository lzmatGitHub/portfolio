import React from 'react';
import IndexButtons from '../Component/IndexButtons';

class IndexLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "Liu's Portfolio Site",
            buttons: [
                {
                    name: "自己紹介",
                    rowspan: 2,
                    colspan: 1,
                    key: 1,
                    link:"/self-introduction"
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 1,
                    key: 2,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 2,
                    key: 3,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 2,
                    key: 4,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 1,
                    key: 5,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 1,
                    key: 6,
                    link:""
                }, {
                    name: "",
                    rowspan: 2,
                    colspan: 1,
                    key: 7,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 1,
                    key: 8,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 1,
                    key: 9,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 1,
                    key: 10,
                    link:""
                }, {
                    name: "",
                    rowspan: 1,
                    colspan: 2,
                    key: 11,
                    link:""
                }
                /*
                , {
                    name: "12",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#767676",
                    key: 12
                }, {
                    name: "13",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#1b1c1d",
                    key: 13
                }
                */
            ],
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