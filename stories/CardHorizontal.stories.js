import React from 'react';

import { CardHorizontalImage } from "../components/ui/Card";
export default {
    title: 'Components/Cards/Horizontal',
    component: CardHorizontalImage,
    argTypes: {
        cardBg: {
            control: { type: 'text' },
            name: 'cardBg',
            description: 'color based on tailwind colors and theme',

        },
        cardBd: {
            control: { type: 'text' },
            name: 'cardBd',
            description: 'color based on tailwind colors and theme',

        },
        imgSrc: {
            control: { type: 'text' },
            name: 'imgSrc',
            description: 'Image url',

        },
        imgAlt: {
            control: { type: 'text' },
            name: 'imgAlt',
            description: 'Image alt text',

        },
        cardHeader: {
            control: { type: 'text' },
            name: 'cardHeader',
            description: 'Card Header content',

        },
        headerColor: {
            control: { type: 'text' },
            name: 'headerColor',
            description: 'Card Header color',

        },
        cardTxt: {
            control: { type: 'text' },
            name: 'cardTxt',
            description: 'Card text content',

        },
        cardTxtColor: {
            control: { type: 'text' },
            name: 'cardTxtColor',
            description: 'color based on tailwind colors and theme',

        },
        cardLink: {
            control: { type: 'text' },
            name: 'cardLink',
            description: 'url destination of link',

        },
        cardLinkTxt: {
            control: { type: 'text' },
            name: 'cardLinkTxt',
            description: 'Text for link',

        },
        cardLinkColor: {
            control: { type: 'text' },
            name: 'cardLinkColor',
            description: 'color of link based on tailwind colors and theme',

        },
        imgBd: {
            control: { type: 'text' },
            name: 'imgBd',
            description: 'Image border color based on tailwind colors and theme',

        },
        avatar: {
            control: { type: 'text' },
            name: 'avatar',
            description: 'Image url for avatar',
        },

    },

};

const Template = (args) => <CardHorizontalImage {...args}
//  colors object found in /styles.ColorStyles
/>;

export const CardHorizontalPrimary = Template.bind({});
CardHorizontalPrimary.args = {
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    cardBd: 'border-neutral-500',
    headerColor: 'text-primary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-primary-500",
    cardBg: 'bg-white',
    imgBd: 'border-neutral-500',
    onClick: undefined,
};


export const CardHorizontalSecondary = Template.bind({});
CardHorizontalSecondary.args = {
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    avatar: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    cardBd: 'border-neutral-300',
    headerColor: 'text-secondary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-secondary-500",
    cardBg: 'bg-white',
    imgBd: 'border-neutral-300',
    onClick: undefined,
};

