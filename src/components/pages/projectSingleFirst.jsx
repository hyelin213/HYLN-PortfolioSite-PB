import React from "react";
import ProjectDetailFrame from "./projectDetailFrame";
import sanitizeHTML from 'sanitize-html';

// HWT 사이트

export default function ProjectSingleFirst() {

    // XSS 방지를 위한 필터링 과정
    const contents = sanitizeHTML(
        `사용자의 위치 정보를 기반으로 하는 날씨 정보 사이트입니다.<br />
        React를 처음 공부하는 과정에서 구현한 사이트이며, UI보다는 기능에 중점을 두었습니다.<br />
        'openWeatherMap' API를 사용하여 시간 별, 주간 별, 전국 날씨를 출력하고,<br />
        기온에 따른 추천 옷차림을 확인할 수 있습니다.
        `
    );

    return (
        <>
            <ProjectDetailFrame 
                title='How Weather Today?'
                projectClass='개인 프로젝트'
                duration='2023.03'
                contribution='100'
                viewName='hwt'
                contents={contents}
                githubLink='https://github.com/hyelin213/HWT-HowWeatherToday.git'
                demoLink='https://hyelin213.github.io/HWT-HowWeatherToday/'
                language={['HTML5', 'CSS3', 'REACT']}
            />
        </>
    );
}