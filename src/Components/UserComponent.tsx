import * as React from "react";
import UserInterface from '../UserInterface'

export default class UserComponent extends React.Component<UserInterface, {}> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props: UserInterface){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>User Component</h1>
                Hello, <b>{this.props.name}</b>
                <br/>
                You are <b>{this.props.age} years old</b>
                <br/>
                You live at: <b>{this.props.address}</b>
                <br/>
                You were born: <b>{this.props.dob.toDateString()}</b>
            </div>
        );
    }
}
