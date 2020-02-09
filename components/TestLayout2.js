// components/MyLayout.js

import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const TestLayout2 = props => (
    <div style={layoutStyle}>
        <Header/> 
        {props.content}
    </div>
);

export default TestLayout2;