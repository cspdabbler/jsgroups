import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Assignments from '../admin/Assignments/Assignments';
import StudyAssignments from './StudyAssignments';
import AddEdit from '../admin/Assignments/AddEdit';
import StudyMaterial from './StudyMaterial';
import SolveAssignment from './SolveAssignment';
import AssignGroupAssignments from '../admin/Assignments/AssignGroupAssignments';

const Home = (props) => {
    const { url } = props.match;
        return (
            <>
                <Header/>
                <Switch>
                    <Route path={`${url}/study-material`}>
                        <StudyMaterial />
                    </Route>
                    <Route exact path={`${url}/assignments/create`} >
                        <AddEdit/>
                    </Route>
                    <Route path={`${url}/assignments/edit/:id`} >
                        <AddEdit/>
                    </Route>
                    <Route exact path={`${url}/assignments/:id`} >
                        <SolveAssignment />
                    </Route>
                    <Route path={`${url}/assignments/groups/:id`}>
                        <AssignGroupAssignments />
                    </Route>
                    <Route exact path={`${url}/assignments`} >
                        <Assignments/>
                    </Route>
                    <Route exact path={`${url}/study-assignments`} >
                        <StudyAssignments/>
                    </Route>
                </Switch>
            </>
    )
}

export default Home;
