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
  `,
};

export const Color = {
  PRIMARY: '#4285F4',
};
