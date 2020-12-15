// node modules
import styled from "styled-components";

const backgroundColor = "#fff";
const border = "1px solid #ccc";
const borderRadius = "2px";

const Container = styled.div`
  margin-top: 1rem;
  max-width: 20rem;
  width: 100%;

  & > div {
    margin: auto auto 1rem;

    &:last-child {
      margin: auto;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #888;
  font-size: 0.8rem;
  font-weight: bold;
  margin: auto auto 0.25rem 0.075rem;
`;

const Input = styled.input`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  appearance: none;
  border-radius: ${borderRadius};
  border: ${border};
  box-sizing: border-box;
  font-size: 1rem;
  margin: auto;
  padding: 0.375rem;
  width: 100%;
`;

const SelectWrapper = styled.span`
  &::after {
    background-size: cover;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAANqADAAQAAAABAAAANgAAAADQiwyeAAABvUlEQVRoBd3awW2EMBCF4QXtiSqSZtLB3igg1eSQU3zZ0pIOdqU0QGYcWIWA8dieB7YtAbYPRr8+jjTGmJemaT6GYXg+VTCo5YtaXs/UYmjyVEGTTRiBTEuFQy1RUwc3tbS4ThsVPa9t13XvFHSvKOrOTW3f999E91ZLGLdwE3+Kp4rUrBY32bBa1CatRxhPKlB7aM3CSlf7qzULK1xtprUIK1Xtv9YirFC1hdZqWGlqa1qrYYWprWo5w0pRc2k5wwpRc2pthuWutqW1GZa52qaWNyxXNZ+WNyxTNa+WKCw3NYmWKCwzNZGWOCwXNamWOCwTNbFWUNjRaiFaQWEHqwVpBYcdpRaqFRx2kFqwVlTY3moxWlFhO6tFaUWH7aUWqxUdtpNatFZSGFotRSspDKyWpJUchlJL1UoOA6kla6mEaatpaKmEKaupaKmFaalpaamFKampaamGpappaqmGJaqpaqmHxappa6mHRaqpa0HCQtUQWpCwQDWIFixMqobSgoUJ1WBa0DCfGlILGuZRg2rBw1xqaC142KRGITee8+D5+N/W7wbobv9+A51tjx3VLrT45IvCLryHfCef/QPJCekG+XmrDgAAAABJRU5ErkJggg==");
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 10px;
    pointer-events: none;
  }
`;

const Select = styled.select`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  appearance: none;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  border: ${border};
  box-sizing: border-box;
  font-size: 1rem;
  margin: auto;
  padding: 0.375rem;
  width: 100%;
  outline: none;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  border: ${border};
  color: #666;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.375rem;
  width: 100%;

  &:active {
    background-color: #ccc;
  }
`;

export { Container, Wrapper, Label, Input, SelectWrapper, Select, Button };
