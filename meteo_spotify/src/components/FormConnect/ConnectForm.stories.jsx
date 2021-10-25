import React from "react";
import ConnectForm from "./ConnectForm";

export default{
    component:ConnectForm,
    title:'components/ConnectForm',
};
const Template = (args) => <ConnectForm {...args} />;
export const Default = Template.bind({});