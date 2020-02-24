import React from 'react';
import IndexButtons from '../Component/IndexButtons';

class IndexLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "Index Page",
            buttons: [
                {
                    name: "01",
                    rowspan: 2,
                    colspan: 1,
                    backgroundColor: "#db2828",
                    key: 1
                }, {
                    name: "02",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#f2711c",
                    key: 2
                }, {
                    name: "03",
                    rowspan: 1,
                    colspan: 2,
                    backgroundColor: "#fbbd08",
                    key: 3
                }, {
                    name: "04",
                    rowspan: 1,
                    colspan: 2,
                    backgroundColor: "#b5cc18",
                    key: 4
                }, {
                    name: "05",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#21ba45",
                    key: 5
                }, {
                    name: "06",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#00b5ad",
                    key: 6
                }, {
                    name: "07",
                    rowspan: 2,
                    colspan: 1,
                    backgroundColor: "#2185d0",
                    key: 7
                }, {
                    name: "08",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#6435c9",
                    key: 8
                }, {
                    name: "09",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#a333c8",
                    key: 9
                }, {
                    name: "10",
                    rowspan: 1,
                    colspan: 1,
                    backgroundColor: "#e03997",
                    key: 10
                }, {
                    name: "11",
                    rowspan: 1,
                    colspan: 2,
                    backgroundColor: "#a5673f",
                    key: 11
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
            ]
        }
    }

    render() {
        return (
            <div className="index-layout">
                <h1>{this.state.pageName}</h1>
                <IndexButtons buttons={this.state.buttons}/>
                <style jsx>{` 
                        h1 {
                            font-size: 24px;
                            font-family: Arial;
                        }
                        .index-layout {
                            position: absolute;
                            top: 0;
                            left: 2%;
                            width: 96%;
                            height: 100%;
                        }
                      `}</style>
            </div>
        );
    }
}

export default IndexLayout;