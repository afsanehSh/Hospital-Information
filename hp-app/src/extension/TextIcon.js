import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from "semantic-ui-react";

const TextIcon = (props) => {

    const style = {
        alignSelf: 'center',
        paddingRight: '4px',
    };

    TextIcon.propTypes = {
        name: PropTypes.string.isRequired,
        hideText: PropTypes.bool.isRequired,
        color: PropTypes.string
    };

    return(
        <div style={{whiteSpace: 'nowrap', display: 'inline-flex', float: 'right'}}>
            <Icon size='large'
                    color={props.color}
                    name={props.name}/>
            <div style={style} hidden={props.hideText}>
                {props.children}
            </div>
        </div>
    )
}

export default TextIcon