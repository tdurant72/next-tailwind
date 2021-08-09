import PropTypes from 'prop-types';

export const HeroH1 = ({ weight, color, children, ...props }) => { return (<h1 className={`text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl  ${color} ${weight}`} {...props} >{children}</h1>) }

export const H1 = ({ weight, color, children, ...props }) => { return (<h1 className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  ${color} ${weight}`} {...props} >{children}</h1>) }

export const H2 = ({ weight, color, children, ...props }) => <h2 className={`text-3xl md:text-4xl lg:text-5xl ${color} ${weight}`} {...props} >{children}</h2>

export const H3 = ({ weight, color, children, ...props }) => { return (<h3 className={`text-2xl lg:text-3xl ${color} ${weight}`} {...props} >{children}</h3>) }

export const H4 = ({ weight, color, children, ...props }) => { return (<h4 className={`text-xl lg:text-2xl ${color} ${weight}`} {...props} >{children}</h4>) }

export const BodyLg = ({ weight, color, children, ...props }) => (<p className={`text-lg lg:text-xl  ${color} ${weight}`} {...props} >{children}</p>)

export const BodyBase = ({ weight, color, children, ...props }) => { return (<p className={`text-base ${color} ${weight}`} {...props} >{children}</p>) }

export const BodySm = ({ weight, color, children, ...props }) => (<p className={`text-sm font-bold ${color} ${weight}`} {...props} >{children}</p>)

HeroH1.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,//colors found in tailwind.config file
}
H1.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}
H2.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}
H3.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}
H4.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}
BodyLg.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}
BodyBase.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}
BodySm.propTypes = {
    weight: PropTypes.string,
    color: PropTypes.string,
}

HeroH1.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800' //colors found in tailwind.config file
}
H1.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}
H2.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}
H3.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}
H4.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}
BodyLg.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}
BodyBase.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}
BodySm.defaultProps = {
    weight: 'font-normal',
    color: 'text-neutral-800'
}