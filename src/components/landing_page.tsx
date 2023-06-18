import React from "react";
import ImageComponent from "./image";
import TextBox from "./text_box";

const LandingPage: React.FC = () => {
    return (
        <div className="container">
            <TextBox type="header" text="Welcome to Vending Machine Supplier"/>
            <TextBox type="p" text="We provide top-quality vending machines for your business needs."/>
            <ImageComponent src={require("../images/vending_machine.jpg")} alt="something"/>
        </div>
    );
}

export default LandingPage;
