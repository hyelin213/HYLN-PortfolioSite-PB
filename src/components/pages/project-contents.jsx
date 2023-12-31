import React, { useEffect, useRef, useState } from "react";
import classNames from 'classnames';

// pages components import
import Nav from "./nav";
import ProjectTeamFirst from "./projectTeamFirst";
import ProjectTeamSecond from "./projectTeamSecond";
import ProjectSingleFirst from "./projectSingleFirst";
import ProjectSingleSecond from "./projectSingleSecond";

import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function ProjectContents() {

    const [path, setPath] = useState('/HYLN-PortfolioSite-PB');
    const location = useLocation();

    let slideDirection = 'right';

    return (
        <TransitionGroup
            className={classNames('project-contents', {'detail-size': location.pathname === path ? '' : 'detail-size'})}
        >
            <CSSTransition
                key={location.pathname}
                classNames={slideDirection}
                timeout={500}
            >
                <Routes location={location}>
                    <Route path={path} element={<Nav />} />
                    <Route path={`${path}/HogwartsSchool`} element={<ProjectTeamFirst />} />
                    <Route path={`${path}/Melon`} element={<ProjectTeamSecond />} />
                    <Route path={`${path}/HWT`} element={<ProjectSingleFirst />} />
                    <Route path={`${path}/portfolioSite`} element={<ProjectSingleSecond />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );

}