const classNames = require('classnames');
const omit = require('lodash.omit');
const PropTypes = require('prop-types');
const React = require('react');

require('./button.scss');

const Button = props => {
    const classes = classNames('button', props.className, {'forms-close-button': props.isCloseType});
    const ButtonWrapper = props.href ? 'a' : 'button';

    return (
        <ButtonWrapper
            href={props.href}
            className={classes}
            {...omit(props, ['className', 'children', 'isCloseType'])}
        >
            {
                props.isCloseType ? (
                    <img
                        alt="close-icon"
                        className="modal-content-close-img"
                        draggable="false"
                        src="/svgs/modal/close-x.svg"
                    />
                ) : [
                    props.children
                ]
            }
        </ButtonWrapper>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    isCloseType: PropTypes.bool
};

Button.defaultProps = {
    className: '',
    href: undefined, // eslint-disable-line
    isCloseType: false
};

module.exports = Button;
