import styled, { css } from 'styled-components';
import { ui } from '../../../assets/style';

export interface StyledProjectTitleProps {
  $titleType: string;
}

const popLineHeight = `line-height: 1.2;`;
const thumbLineHeight = `line-height: 1.3;`;

const CssTitle = (titType: string) => {
  switch (titType) {
    case 'popup':
      return css`
        ${ui.font('35px', popLineHeight)}
      `;
    case 'thumb':
    default:
      return css`
        ${ui.font('22px', thumbLineHeight)}
      `;
  }
};

const CssSummary = (titType: string) => {
  switch (titType) {
    case 'popup':
      return css`
        ${ui.font('17px', popLineHeight, ui.color.dft.medium)}
      `;
    case 'thumb':
    default:
      return css`
        ${ui.color.dft.lighter}
      `;
  }
};

export const StyledProjectTitle = styled.h4<StyledProjectTitleProps>`
  color: ${ui.color.dft.dark};
  font-weight: bold;
  ${(props) => CssTitle(props.$titleType)}
`;

export const StyledProjectSummary = styled.p<StyledProjectTitleProps>`
  margin-top: 5px;
  ${(props) => CssSummary(props.$titleType)}
`;
