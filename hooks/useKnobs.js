// node modules
import React, { useState, useEffect, useMemo } from "react";
import { render, unmountComponentAtNode } from "react-dom";

// local modules - components
import Toggle from "./../components/Toggle";
import Slider from "./../components/Slider";

// local modules - hooks
import useInputText from "./useInputText";
import useInputCheckbox from "./useInputCheckbox";
import useInputNumber from "./useInputNumber";
import useSelect from "./useSelect";

// local modules - functions
import getRandomString from "@letea/functions/getRandomString";

// local files
import {
  Container,
  Wrapper,
  Label,
  Input,
  SelectWrapper,
  Select,
  Button
} from "./useKnobs.style";

const DEFAULT_CONTAINER = "use-knobs-container";
const DEFAULT_PREFIX = "knobs";

const getElementId = () => {
  return `${DEFAULT_PREFIX}-${getRandomString(5)}`;
};

const createRootElement = id => {
  let rootElement = document.getElementById(`root-${id}`);
  if (!rootElement) {
    rootElement = document.createElement("div");
    rootElement.id = `root-${id}`;
    let containerElement = document.querySelector(`#${DEFAULT_CONTAINER}`);
    if (!containerElement) {
      containerElement = document.body;
    }
    containerElement.appendChild(rootElement);
  }

  return rootElement;
};

const textDefaultProps = {
  defaultValue: "",
  label: ""
};

const text = props => {
  const { defaultValue, label } = { ...textDefaultProps, ...props };
  const [value, setValue] = useInputText(defaultValue);
  const id = useMemo(getElementId, []);

  useEffect(() => {
    const rootElement = createRootElement(id);

    render(
      <Wrapper>
        {label && <Label htmlFor={id}>{`${label}`}</Label>}
        <Input
          id={id}
          type="text"
          defaultValue={defaultValue}
          onChange={setValue}
        />
      </Wrapper>,
      rootElement
    );

    return () => {
      if (rootElement.children) {
        unmountComponentAtNode(rootElement);
      }
    };
  }, []);

  return value;
};

const booleanDefaultProps = {
  defaultValue: false,
  label: ""
};

const boolean = props => {
  const { defaultValue, label } = { ...booleanDefaultProps, ...props };
  const [value, setValue] = useInputCheckbox(defaultValue);
  const id = useMemo(getElementId, []);

  useEffect(() => {
    const rootElement = createRootElement(id);
    render(
      <Wrapper>
        {label && <Label htmlFor={id}>{`${label}`}</Label>}
        <Toggle
          id={id}
          defaultValue={defaultValue}
          onChange={result => setValue(result)}
          width={48}
          height={24}
        />
      </Wrapper>,
      rootElement
    );

    return () => {
      if (rootElement.children) {
        unmountComponentAtNode(rootElement);
      }
    };
  }, []);

  return value;
};

const numberDefaultProps = {
  defaultValue: 0,
  label: ""
};

const number = props => {
  const { defaultValue, label } = { ...numberDefaultProps, ...props };
  const [value, setValue] = useInputNumber(defaultValue);
  const id = useMemo(getElementId, []);

  useEffect(() => {
    const rootElement = createRootElement(id);

    render(
      <Wrapper>
        {label && <Label htmlFor={id}>{`${label}`}</Label>}
        <Input
          id={id}
          type="number"
          defaultValue={defaultValue}
          onChange={setValue}
        />
      </Wrapper>,
      rootElement
    );

    return () => {
      if (rootElement.children) {
        unmountComponentAtNode(rootElement);
      }
    };
  }, []);

  return value;
};

const rangeDefaultProps = {
  defaultValue: 0,
  min: 0,
  max: 100,
  step: 1,
  label: ""
};

const range = props => {
  const { defaultValue, min, max, step, label } = {
    ...rangeDefaultProps,
    ...props
  };
  const [value, setValue] = useState(defaultValue);
  const id = useMemo(getElementId, []);

  useEffect(() => {
    const rootElement = createRootElement(id);

    render(
      <Wrapper>
        {label && <Label htmlFor={id}>{`${label}`}</Label>}
        <Slider
          id={id}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          onChange={result => setValue(result)}
        />
      </Wrapper>,
      rootElement
    );

    return () => {
      if (rootElement.children) {
        unmountComponentAtNode(rootElement);
      }
    };
  }, []);

  return value;
};

const selectDefaultProps = {
  options: [],
  label: ""
};

const select = props => {
  const { options, label } = { ...selectDefaultProps, ...props };
  const hasOptions = options && options.length > 0;
  const [index, setIndex] = useSelect(hasOptions ? 0 : null);
  const value = hasOptions ? options[index] : null;
  const id = useMemo(getElementId, []);

  useEffect(() => {
    const rootElement = createRootElement(id);

    render(
      <Wrapper>
        {label && <Label htmlFor={id}>{`${label}`}</Label>}
        <SelectWrapper>
          <Select onChange={setIndex}>
            {options.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </Select>
        </SelectWrapper>
      </Wrapper>,
      rootElement
    );

    return () => {
      if (rootElement.children) {
        unmountComponentAtNode(rootElement);
      }
    };
  }, []);

  return { value, index };
};

const buttonDefaultProps = {
  handler: () => {},
  label: ""
};

const button = props => {
  const { label, handler } = { ...buttonDefaultProps, ...props };
  const id = useMemo(getElementId, []);

  useEffect(() => {
    const rootElement = createRootElement(id);

    render(
      <Wrapper>
        {label && <Label htmlFor={id}>{`${label}`}</Label>}
        <Button id={id} onClick={handler}>
          CLICK
        </Button>
      </Wrapper>,
      rootElement
    );

    return () => {
      if (rootElement.children) {
        unmountComponentAtNode(rootElement);
      }
    };
  }, []);
};

const KnobsContainer = React.memo(() => {
  return <Container id={DEFAULT_CONTAINER} />;
});

KnobsContainer.displayName = "KnobsContainer";

export { KnobsContainer, text, boolean, number, range, select, button };

// TODO
// color,
// date,
// object,
// array,
// radios,
// files
