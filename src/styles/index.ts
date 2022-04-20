import { css } from 'styled-components';

export const Layout = {
  flexRowBetween: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexColStart: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  spacePadding: css`
    padding: 1vh 2vw;
  `,
};

export const Color = {
  PRIMARY: '#4285F4',
  GRAY01: 'rgb(203 213 225)',
  RED01: 'rgb(239 68 68)',
};

export const StyleAttr = {
  borderRadius: css`
    border-radius: 1vw;
  `,
};
