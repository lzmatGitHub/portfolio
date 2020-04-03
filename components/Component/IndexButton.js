import React from 'react';
import Link from 'next/link';

class IndexButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        if (this.props.button.link != "" ) {
            this.props.handleHover(this.props.button.key);
        }
    }

    handleMouseLeave() {
        if (this.props.button.link != "" ) {
            this.props.handleHover("index");
        }
    }

    render() {
        let nameOrientation = "";
        if(this.props.button.name_orientation === "vertical") {
            nameOrientation = "width: 1em";
        }
        return (
            <div className={this.props.button.link == "#" ? "icon" : "grid-button"} style={{
                backgroundColor: this.props.button.backgroundColor,
                gridRow: `auto / span ${this.props.button.rowspan}`,
                gridColumn: `auto / span ${this.props.button.colspan}` }} id={`button${this.props.button.key}`}
                onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
                <Link href={this.props.button.link}>
                    <a><span>{this.props.button.name}</span></a>
                </Link>
                <style jsx>
                    {`
                        div {
                            background-color: darkgray;
                            border: solid 6px #fff;
                        }
                        .grid-button {
                            color: #fff;
                            font-size: 30px;
                            font-weight: bold;
                            transition-duration: 0.2s;
                            background-color: #e6e6e6;
                        }
                        .grid-button a,
                        .icon a {
                            display: block;
                            position: relative;
                            width: 100%;
                            height: 100%;
                            text-decoration: none;
                            color: black;
                            text-align: center;
                        }
                        .grid-button a span,
                        .icon a span {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            display: inline-block;
                            ${nameOrientation}
                        }
                        .icon a span {
                            font-size: 50px;
                        }
                        .grid-button:hover {
                            font-size: 1rem;
                            cursor: pointer;
                        }
                        @media screen and (max-width: 1024px) {
                            .grid-buttons-container {
                                width: 80%;
                                right: 10%;
                                bottom: 10%;
                            }

                            .grid-button {
                                font-size: 20px;
                            }
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default IndexButton;