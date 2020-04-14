import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'

const LinkComponent = ({ active, children, onClick }) => (
    <Button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
        size="lg"
    >
        {children}
    </Button>
)

LinkComponent.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default LinkComponent;