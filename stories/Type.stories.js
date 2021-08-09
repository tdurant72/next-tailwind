import React from 'react';

import { H1 } from "../components/typography/Type";

export default {
    title: 'Components/Type',
    component: H1,
};

const Template = (args) => <H1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'text-primary-500',
    weight: 'font-normal',
    children: 'H1 primary normal',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'text-secondary-500',
    weight: 'font-normal',
    children: 'H1 secondary normal',
};

export const PrimaryBold = Template.bind({});
PrimaryBold.args = {
    color: 'text-primary-500',
    weight: 'font-bold',
    children: 'H1 primary bold',
};
export const PrimaryThin = Template.bind({});
PrimaryThin.args = {
    color: 'text-primary-500',
    weight: 'font-thin',
    children: 'H1 primary thin',
};


