import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import Card from 'react-bootstrap/Card';
import classes from "./Card.module.css";
import {useState} from "react";


const AddUser = (props:any) => {
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');



    const addUserHandler = (event:any)=>{
        event.preventDefault();
        console.log(enteredAge,enteredUsername)
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
                <Form  onSubmit={addUserHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>משתמש</Form.Label>
                        <Form.Control id='username' type="text" onChange={usernameChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='age'>גיל</Form.Label>
                        <Form.Control id='age' type="number"  onChange={ageChangeHandler} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        {t('Add User')}
                    </Button>
                </Form>
            </Card.Body>
            {props.children}
        </Card>
    );
};

export default AddUser;
