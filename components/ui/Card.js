import PropTypes from 'prop-types';

export const CardPlayfull = ({ cardBg, cardBd, imgSrc, imgAlt, cardHeader, headerColor, cardTxt, cardTxtColor, cardLink, cardLinkTxt, cardLinkColor, imgBd }) => {
    return (
        <div className={`max-w-md py-4 px-8 ${cardBg} ${cardBd} border-2 shadow-lg rounded-lg my-20`}>
            <div className="flex justify-center md:justify-end -mt-16">
                <img className={`w-20 h-20 object-cover rounded-full border-2 ${imgBd}`} src={`${imgSrc}`} alt={`${imgAlt}`} />
            </div>
            <div >
                <h2 className={`${headerColor} text-3xl font-semibold`}>{cardHeader}</h2>
                <p className={`mt-2 ${cardTxtColor}`}>{cardTxt}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href={`${cardLink}`} className={`text-xl font-medium ${cardLinkColor}`}>{cardLinkTxt}</a>
            </div>
        </div>
    )
};
export const CardHorizontalImage = ({ cardBg, cardBd, imgSrc, imgAlt, avatar, cardHeader, headerColor, cardTxt, cardTxtColor, cardLink, cardLinkTxt, cardLinkColor, imgBd }) => {
    return (
        <div className={`flex items-center p-4 bg-white  ${cardBd} border-2 rounded-lg shadow-lg `}>
            <img alt="mountain" className={`rounded-md border-2 max-h-60 ${imgBd} sm:w-5 md:w-20 lg:w-45`} src={`${imgSrc}`} alt={`${imgAlt}`} />
            <div id="body" className="flex flex-col ml-5">
                <h4 id="name" className={`text-xl font-semibold mb-2 ${headerColor}`}>{cardHeader}</h4>
                <p id="job" className={`${cardTxtColor} mt-2`}>{cardTxt}</p>
                <div className="flex items-center mt-5">
                    <img alt="avatar" className={`w-10 rounded-full border-2 max-h-10 bg-cover ${imgBd}`} src={`${avatar}`} />
                    <a href={`${cardLink}`} className={`ml-3 ${cardLinkColor}`}>{cardLinkTxt}</a>
                </div>
            </div>
        </div>
    )
};
export const CardAdjustingImage = ({ cardBg, cardBd, imgSrc, imgAlt, cardHeader, headerColor, cardTxt, cardTxtColor, cardLink, cardLinkTxt, cardLinkColor, imgBd }) => {
    return (
        <div className={`flex flex-col md:flex-row overflow-hidden
                  ${cardBg} ${cardBd} border-2 rounded-lg shadow-xl  mt-4 w-100 mx-2`}>

            <div className="h-64 w-auto md:w-1/2">
                <img className="inset-0 h-full w-full object-cover object-center" src={`${imgSrc}`} alt={`${imgAlt}`} />
            </div>

            <div className="w-full py-4 px-6 flex flex-col justify-between">
                <h3 className={`font-semibold text-lg leading-tight truncate ${headerColor}`}>{cardHeader}</h3>
                <p className="mt-2">
                    {cardTxt}
                </p>
                <a className={`text-sm ${cardLinkColor} uppercase tracking-wide font-semibold mt-2`}>
                    {cardLinkTxt}
                </a>
            </div>
        </div>
    )
};

CardPlayfull.defaultProps = {
    cardBd: 'border-neutral-500',
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    headerColor: 'text-primary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-secondary-500",
    cardBg: 'bg-white',
    imgBd: 'border-primary-500',
    onClick: undefined,
};
CardHorizontalImage.defaultProps = {
    cardBd: 'border-neutral-800',
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    avatar: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    headerColor: 'text-primary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-secondary-500",
    cardBg: 'bg-white',
    imgBd: 'border-primary-500',
    onClick: undefined,
};
CardAdjustingImage.defaultProps = {
    cardBd: 'border-neutral-800',
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    headerColor: 'text-primary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-secondary-500",
    cardBg: 'bg-white',
    imgBd: 'border-primary-500',
    onClick: undefined,
};


