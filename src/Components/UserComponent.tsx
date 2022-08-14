import * as React from "react";
import UserInterface from '../UserInterface'

export default class UserComponent extends React.Component<UserInterface, {}> {
    constructor (props: UserInterface){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>קומפוננטת משתמש</h1>
                שלום, <b>{this.props.name}</b>
                <br/>
                הגיל שלך הוא:   <b>{this.props.age}</b>
                <br/>
                הכתובת שלך היא:  <b>{this.props.address}</b>
                <br/>
                נולדת ב:  <b> {this.props.dob.toLocaleString("he-IL")}</b>
            </div>
        );
    }
}
