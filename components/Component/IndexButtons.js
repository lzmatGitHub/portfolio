import React from 'react';
import Link from 'next/link';

class IndexButtons extends React.Component {
    render() {
        return (
            <div className="grid-buttons-container">
                {this
                    .props
                    .buttons
                    .map((button) => <div
                        className={button.link=="" ? "" : "grid-button"}
                        key={button.key}
                        style={{
                        backgroundColor: button.backgroundColor,
                        gridRow: `auto / span ${button.rowspan}`,
                        gridColumn: `auto / span ${button.colspan}`
                    }}
                        id={`button${button.key}`}>
                        <Link href={button.link}>
                            <a>{button.name}</a>
                        </Link>
                    </div>)}
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
                        .grid-buttons-container > div {
                            background-color: darkgray;
                            border: solid 1px black;
                        }
                        .grid-buttons-container > div.grid-button {
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
                `}</style>
            </div>
        );
    }
}

export default IndexButtons;