import { css } from 'styled-components';

const mixins = {
  apart: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  column: css`
    display: flex;
    flex-direction: column;
  `,

  center: css`
    display: flex;
    align-items: center;
  `,

  fCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  fs14: css`
    font-size: 14px;
    line-height: 18px;
  `,

  fs16: css`
    font-size: 16px;
    line-height: 20px;
  `,

  fs18: css`
    font-size: 18px;
    line-height: 22px;
  `,

  fs20: css`
    font-size: 20px;
    line-height: 24px;
  `,

  fs22: css`
    font-size: 22px;
    line-height: 26px;
  `,
};

export default mixins;
