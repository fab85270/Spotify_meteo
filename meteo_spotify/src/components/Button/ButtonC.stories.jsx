import React from 'react';
import Button from './ButtonC';

export default {
        component: Button,
        title: 'components/Button',
};

const Template = (args) => <Button {...args} />;

export const But1 = Template.bind({});

But1.args = { //quand on est pas connecté et non traduit
        traduction: false,
        clicked: false,
        text: "Se connecter",
        clickChange: (event) => console.log(event.target.checked),
}

export const But2 = Template.bind({});

But2.args = { //quand on est pas connecté et traduit
        traduction: false,
        clicked: true,
        text: "Connect",
        clickChange: (event) => console.log(event.target.checked),
}


export const But3 = Template.bind({});
But3.args = { //quand on est pas connecté et non traduit
        traduction: false,
        text: "Se connecter",
        clicked: false,
        clickChange: (event) => console.log(event.target.checked),
}


export const But4 = Template.bind({});

But4.args = { //quand on est connecté et non traduit
        traduction: true,
        text: "Disconnect",
        clicked: true,
        clickChange: (event) => console.log(event.target.checked),
}





