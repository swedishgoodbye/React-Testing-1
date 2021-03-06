import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = (props) => {
    const { value } = props
    return (
        <div className="component-display">
            <div>
                {value}
            </div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;