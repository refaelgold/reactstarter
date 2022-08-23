import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import Card from 'react-bootstrap/Card';
import classes from "./Card.module.css";


const AddUser = (props:any) => {
    const {t} = useTranslation();
    const addUserHandler = (event:any)=>{
        event.preventDefault();
    }
    return (
        <Card className={classes.card}>
            <Card.Img variant="top" src="https://placeimg.com/640/480/any" />
            <Card.Body>
                <Card.Title>כותרת הכרטיס</Card.Title>
                <Form  onSubmit={addUserHandler}>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>משתמש</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label htmlFor='age'>גיל</Form.Label>
                        <Form.Control id='age' type="number" />
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
