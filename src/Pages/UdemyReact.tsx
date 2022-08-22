import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";
import React, { useState } from 'react';
import CourseGoalList from '../Components/UdemyBasicComponents/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from '../Components/UdemyBasicComponents/CourseGoals/CourseInput/CourseInput';
import '../css/UdemyReact.css';


const UdemyReact = () => {
    const {t} = useTranslation();

    const [courseGoals, setCourseGoals] = useState([
        { text: t('Do all exercises!'), id: 'g1' },
        { text: t('Finish the course!'), id: 'g2' }
    ]);

    const addGoalHandler = (enteredText: any) => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };

    const deleteItemHandler = (goalId: string) => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p style={{ textAlign: 'center' }}>{t('No goals found. Maybe add one?')}</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
        );
    }
    return (
        <div>
            <Container>
                <Row>
                    <h1> {t("Udemy React - The Complete Guide  Tutorial")}</h1>
                </Row>
            </Container>
            <section id="goal-form">
                <CourseInput onAddGoal={addGoalHandler} />
            </section>
            <section id="goals">
                {content}
                {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
            </section>
        </div>
    );






 };
 export  {UdemyReact}
