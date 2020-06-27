import React from 'react';

const withClass = (WrrapedComponent, className) => {
    return props => (
        <div
        className = {className}>
            <WrrapedComponent/>
        </div>
    )
}

export default withClass;