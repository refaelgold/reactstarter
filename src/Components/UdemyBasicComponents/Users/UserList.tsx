import Card from "react-bootstrap/Card";
import classes from "./UserList.module.css";



// 6.print the users with map function prints like VIEW
const UserList = (props:any) => {
    return (
        <Card className={classes.user}>
            <h2>רשימת יוזרים : </h2>
            <ul >
                {props.users.map((user:any) => <li key={user.id}>{user.age} גיל  {user.name}</li>
                )}
            </ul>
        </Card>
    );
};

export default UserList;
