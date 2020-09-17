import React from "react";
import { storiesOf } from "@storybook/react";

// local modules
import useThrottleState from "../hooks/useThrottleState";
import { KnobsContainer, number } from "../hooks/useKnobs";
import { Input } from "../hooks/useKnobs.style";

storiesOf("Hooks", module).add("useThrottleState", () => {
  const numberValue = number({ defaultValue: 600, label: "throttleTime" });
  const [value, setValue] = useThrottleState({
    defaultValue: "Hello World",
    throttleTime: numberValue
  });
  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input defaultValue={value} onChange={onChange} />
      <div>{`Value: ${value}`}</div>
      <KnobsContainer />
    </>
  );
});
