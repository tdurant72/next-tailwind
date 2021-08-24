import React from 'react';

import { CardPlayfull } from "../components/ui/Card";
export default {
    title: 'Components/Cards/Playfull',
    component: CardPlayfull,
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
    },
    parameters: {
        docs: {
            source: {
                code:
                    `<CardPlayfull
        cardBg="bg-neutral-50"
        headerColor="text-primary-800"
        cardTxtColor="text-neutral-800"
        imgSrc="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        imgAlt="sky image"
        cardHeader="Design Tools"
        cardTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        cardLinkTxt="Jane Doe"
        cardLink="https://github.com/"
    />`,
            }
        }
    }
};

const Template = (args) => <CardPlayfull {...args}
//  colors object found in /styles.ColorStyles
/>;

export const CardPlayfullPrimary = Template.bind({});
CardPlayfullPrimary.args = {
    cardBd: 'border-primary-300',
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    headerColor: 'text-primary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-primary-500",
    cardBg: 'bg-white',
    imgBd: 'border-primary-500',
    onClick: undefined,
};


export const CardPlayfullSecondary = Template.bind({});
CardPlayfullSecondary.args = {
    cardBd: 'border-secondary-300',
    imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'image pictue',
    cardHeader: 'Card Header',
    headerColor: 'text-secondary-500',
    cardTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt",
    cardTxtColor: "text-neutral-600",
    cardLink: "#",
    cardLinkTxt: "John Doe",
    cardLinkColor: "text-secondary-500",
    cardBg: 'bg-white',
    imgBd: 'border-secondary-500',
    onClick: undefined,
};

