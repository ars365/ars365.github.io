import styled, { css } from 'styled-components';
import { ui } from '../../../assets/style';

export interface StyledProjectInfoProps {
  $infoType: string;
}

const popLineHeight = `line-height: 1.5;`;
const thumbLineHeight = `line-height: 1.3;`;

const CssTitle = (infoType: string) => {
  switch (infoType) {
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

const CssDesc = (infoType: string) => {
  switch (infoType) {
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

export const StyledProjectInfoTitle = styled.h4<StyledProjectInfoProps>`
  color: ${ui.color.dft.dark};
  font-weight: bold;
  ${(props) => CssTitle(props.$infoType)}
`;

export const StyledProjectInfoDesc = styled.p<StyledProjectInfoProps>`
  margin-top: 5px;
  ${(props) => CssDesc(props.$infoType)}
`;
