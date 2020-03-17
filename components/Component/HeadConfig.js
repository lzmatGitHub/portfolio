import React from 'react';
import Head from 'next/head';

class HeadConfig extends React.Component {
    render() {
        return (
            <Head>
                <title>{this.props.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content={this.props.description}/>
                <link rel="icon" type="image/x-icon" href={require('../../favicon/favicon.ico')} />
                <link rel="apple-touch-icon" sizes="180x180" href={require('../../favicon/apple-touch-icon-180x180.png')}/>
                <link rel="icon" type="image/png" sizes="192×192" href={require('../../favicon/android-chrome-192x192.png')} />
                <link rel="manifest" href="../../favicon/manifest.json"/>
            </Head>
        );
    }
}

export default HeadConfig;