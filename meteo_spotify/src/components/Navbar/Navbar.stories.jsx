import React from "react";
import Navbar from "./Navbar";

export default{
    component:Navbar,
    title:'components/Navbar',
};
const Template = (args) => <Navbar {...args} />;
export const Default = Template.bind({});