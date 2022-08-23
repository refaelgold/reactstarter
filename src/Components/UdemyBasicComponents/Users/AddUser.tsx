import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import Card from 'react-bootstrap/Card';
import classes from "./Card.module.css";
import {useState} from "react";

const AddUser = (props:any) => {
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');




    //2.First call after submit Trigger EVENT controller
    const addUserHandler = (event:any)=>{
        event.preventDefault();
        if (enteredUsername.trim().length===0 || enteredAge.trim().length<=0){
            console.log("error");
            return;
        }
        if (+enteredAge<=0){
            console.log("error");
            return;
        }
        props.onAddUser(enteredAge,enteredUsername); // 3.next  called  <AddUser onAddUser={PushUserHandler}/> and put the data inside the array
        setEnteredAge('');
        setEnteredUsername('');

    }


    const usernameChangeHandler= (event:any) =>{
        setEnteredUsername(event.target.value)

    }

    const ageChangeHandler= (event:any) =>{
        setEnteredAge(event.target.value)

    }

    const {t} = useTranslation();

    return (
        <Card className={classes.card}>
            <Card.Img variant="top" src="https://placeimg.com/640/480/any" />
            <Card.Body>
                <Card.Title>כותרת הכרטיס</Card.Title>
                <Form  onSubmit={addUserHandler}> {/*1.submit the data for SINGLE data */}
                    <Form.Group className="mb-3">
                        <Form.Label>משתמש</Form.Label>
                        <Form.Control id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='age'>גיל</Form.Label>
                        <Form.Control id='age' type="number"  value={enteredAge} onChange={ageChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        {t('Add User')}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddUser;
