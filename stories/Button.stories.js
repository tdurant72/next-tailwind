import React from 'react';

import Button from "../components/ui/Button";
export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        bg: { control: { type: 'text' } },
        bgh: { control: { type: 'text' } },
        txt: { control: { type: 'text' } },
        bd: { control: { type: 'text' } }
    },

};

const Template = (args) => <Button {...args}
//  colors object found in /styles.ColorStyles
/>;

export const Primary = Template.bind({});
Primary.args = {
    bg: "bg-primary-500",
    bgh: "bg-primary-700",
    txt: "text-primary-50",
    bd: "border-transparent",
    label: 'Button',
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    bg: "bg-neutral-50",
    bgh: "bg-primary-50",
    txt: "text-primary-500",
    bd: "border-primary-500",
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    bg: "bg-secondary-500",
    bgh: "bg-secondary-700",
    txt: "text-secondary-50",
    bd: "border-secondary-900",
    label: 'Button',
};
export const Other = Template.bind({});
Other.args = {
    bg: "bg-yellow-200",
    bgh: "bg-yellow-300",
    txt: "text-yellow-900",
    bd: "border-yellow-300",
    label: 'Button',
};
