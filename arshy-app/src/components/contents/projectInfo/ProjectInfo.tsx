import React, { forwardRef } from 'react';
import { StyledProjectInfoTitle, StyledProjectInfoDesc } from './StyledProjectInfo';

export interface ExportProjectInfoProps {
  infoType: 'thumb' | 'popup';
}

export interface ProjectInfoProps extends ExportProjectInfoProps {
  title: string;
  desc?: string;
}
/**
 * ## [Storybook](http://arshy-gray.github.io/?path=/story/components-contents-projectinfo--popup)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | type | value | description |
 * | :--- | :--- | :--- | :--- |
 * | * infoType | 'thumb', 'popup' | - | 프로젝트 정보 타입 |
 * | * title | string | - | 프로젝트 정보 타이틀 |
 * | desc | string | - | 프로젝트 정보 내용 |
 */

const ProjectInfo = forwardRef<HTMLHeadingElement, ProjectInfoProps>(
  ({ infoType, title, desc, ...rest }, ref) => {
    return (
      <>
        <StyledProjectInfoTitle $infoType={infoType} className="project_title" ref={ref} {...rest}>
          {title}
        </StyledProjectInfoTitle>
        <StyledProjectInfoDesc $infoType={infoType} className="project_desc" ref={ref} {...rest}>
          {desc}
        </StyledProjectInfoDesc>
      </>
    );
  },
);

export default ProjectInfo;
