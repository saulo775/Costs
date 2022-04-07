import React from "react";

import { Content } from "./styles";
export function Container(props) {
    return (
        <Content 
            min_heigth={props.min_heigth}
            start={props.start}
            column={props.column}    
        >
            {props.children}
        </Content>
    )
}