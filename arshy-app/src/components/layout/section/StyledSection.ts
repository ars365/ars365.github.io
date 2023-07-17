import styled from 'styled-components';
import { ui } from '../../../assets/style';
import { rgba } from 'polished';

export const StyledSection = styled.section`
  position: relative;
  padding: 90px 0;
  min-height: 750px;
  box-sizing: border-box;
  ${ui.clearfix}
  &:not(#history):not(#project) {
    height: 100vh;
  }
  &#project {
    min-height: 100vh;
  }
  // 섹션 공통
  > .sect_tit,
  h2 + .sect_desc {
    position: relative;
    z-index: 1;
    ${ui.ani_direction_init}
    animation-name: ${ui.toT};
  }
  // 섹션 타이틀
  > .sect_tit {
    ${ui.font('50px', '42px', ui.color.dft.brightest)}
    text-align: center;
    font-weight: bold;
  }
  // 섹션 설명
  h2 + .sect_desc {
    margin-top: 10px;
    ${ui.font('', '18px', ui.color.dft.brightest)}
    text-align: center;
    animation-delay: 0.2s;
  }
  // 섹션 활성화시
  &.active {
    // 섹션 타이틀
    > .sect_tit,
    h2 + .sect_desc {
      animation-name: ${ui.fromT};
    }
    // 섹션 설명
    h2 + .sect_desc {
      opacity: 0.9;
    }
  }
  // 푸터
  .main_footer {
    position: absolute;
    padding: 5px 0;
    bottom: 30px;
    background: ${rgba(ui.color.dft.brightest, 0.1)};
    p {
      color: color(dft, light);
      text-align: center;
    }
  }
`;
