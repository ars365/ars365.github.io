import React, { forwardRef } from 'react';
import { StyledProjectTitle, StyledProjectSummary } from './StyledProjectTitle';

export interface ExportProjectTitleProps {
  titleType: 'thumb' | 'popup';
}

export interface ProjectTitleProps extends ExportProjectTitleProps {
  title: string;
  summary?: string;
}
/**
 * ## [Storybook](http://arshy-gray.github.io/?path=/story/components-contents-projecttitle--popup)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | type | value | description |
 * | :--- | :--- | :--- | :--- |
 * | * titleType | 'thumb', 'popup' | - | 타이틀 타입 |
 * | * title | string | - | 프로젝트 타이틀 |
 * | summary | string | - | 프로젝트 개요 |
 */

const ProjectTitle = forwardRef<HTMLHeadingElement, ProjectTitleProps>(
  ({ titleType, title, summary, ...rest }, ref) => {
    return (
      <>
        <StyledProjectTitle $titleType={titleType} className="project_title" ref={ref} {...rest}>
          {title}
        </StyledProjectTitle>
        <StyledProjectSummary
          $titleType={titleType}
          className="project_summary"
          ref={ref}
          {...rest}
        >
          {summary}
        </StyledProjectSummary>
      </>
    );
  },
);

export default ProjectTitle;
