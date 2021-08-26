import PropTypes from 'prop-types';

export const Button = ({ bg, bgh, txt, bd, children }) => (<button className={`w-auto text-base ${txt} transition duration-300 ease-in-out ${bg} ${bd} border-2 px-4 py-2  shadow-sm rounded-md mx-4 my-2 h-auto transform hover:shadow-lg hover:${bgh} hover:-translate-y-px `}>{children}</button>);

Button.propTypes = {          //colors found in tailwind.config file
    bg: PropTypes.string,    //background color
    bgh: PropTypes.string,   //background color on hover
    txt: PropTypes.string,   //text color
    bd: PropTypes.string,    //border color
}
Button.defaultProps = {
    bg: 'bg-primary-500',
    bgh: 'bg-transparent',
    txt: 'text-primary-50',
    bd: 'border-transparent',
    children: 'Button',
    onClick: undefined,
};
export default Button