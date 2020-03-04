import React from 'react';
import Link from 'next/link';

class IndexButton extends React.Component {
    render() {
        return (
            <div className={this.props.button.link == "" ? "" : "grid-button"} style={{
                backgroundColor: this.props.button.backgroundColor,
                gridRow: `auto / span ${this.props.button.rowspan}`,
                gridColumn: `auto / span ${this.props.button.colspan}` }} id={`button${this.props.button.key}`}>
                <Link href={this.props.button.link}>
                    <a>{this.props.button.name}</a>
                </Link>
                <style jsx>
                    {`
                        div {
                            background-color: darkgray;
                            border: solid 1px black;
                        }
                        .grid-button {
                            color: #fff;
                            font-size: 16px;
                            font-weight: bold;
                            position: relative;
                            transition-duration: 0.2s;
                            background-color: white;
                        }
                        .grid-button a {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            text-decoration: none;
                            color: black;
                            text-align: center;
                        }
                        .grid-button:hover {
                            opacity: 0.3;
                            cursor: pointer;
                        }
                        .grid-button:active {
                            opacity: 0.7;
                        }
                        @media screen and (max-width: 1024px) {
                            .grid-buttons-container {
                                width: 80%;
                                right: 10%;
                                bottom: 10%;
                            }
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default IndexButton;