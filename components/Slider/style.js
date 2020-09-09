// node modules
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #d6d6d6;
  border-radius: 2px;
  border: 1px solid #aaa;
  line-height: 0;
  overflow: hidden;
  position: relative;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: #21c19d;
  background-color: rgb(29, 138, 113);
  height: 100%;
  width: 0%;
`;

const Input = styled.input`
  --thumb-background: #fff;
  --thumb-height: 24px;
  --thumb-radius: 2px;
  --thumb-width: 24px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  appearance: none;
  background: none;
  height: calc(var(--thumb-height));
  margin: auto;
  outline: none;
  position: relative;
  width: 100%;
  z-index: 2;

  /* Webkit */
  &::-webkit-slider-thumb {
    appearance: none;
    background: var(--thumb-background);
    border-radius: var(--thumb-radius);
    border: none;
    cursor: grab;
    height: var(--thumb-height);
    position: relative;
    width: var(--thumb-width);

    &:active {
      cursor: grabbing;
    }
  }

  &::-webkit-slider-runnable-track {
    cursor: pointer;
  }

  /* MOZ */
  &::-moz-focus-outer {
    border: none;
  }

  &::-moz-range-thumb {
    appearance: none;
    background: var(--thumb-background);
    border-radius: var(--thumb-radius);
    border: none;
    cursor: grab;
    height: var(--thumb-height);
    position: relative;
    width: var(--thumb-width);
  }

  &::-moz-range-track {
    cursor: pointer;
    height: var(--thumb-height);
  }
`;

const Number = styled.div`
  margin: 0.25rem 0 auto auto;
  color: #666;
  font-family: Hack;
  font-size: 0.8rem;
  text-align: right;
`;

export { Wrapper, Progress, Input, Number };
