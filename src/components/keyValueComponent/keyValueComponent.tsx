import React, { ReactElement } from "react";
import { KeyValueField, KeyField, ValueField } from "./keyValueStyles";

interface IProps {
  description: string;
  value: string | ReactElement
}

export default class KeyValueComponent extends React.Component<IProps> {
   
    render()  {
        return (
            <KeyValueField>
                <KeyField>  {this.props.description}    </KeyField>
                <ValueField>{this.props.value}  </ValueField>
            </KeyValueField>
        );
    }
}