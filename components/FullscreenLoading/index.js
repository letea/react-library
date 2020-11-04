// node modules
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import getRandomString from "@letea/functions/getRandomString";

// local modules
import createReactDOMEElement from "../../functions/createReactDOMElement";
import removeReactDOMElement from "../../functions/removeReactDOMElement";

// local files
import { Wrapper, ExampleSpinner, ExampleTips } from "./style";

const elementId = `fullscreen-loading-${getRandomString(5)}`;

const Loading = ({
  backgroundColor = "rgba(0, 0, 0, 0.75)",
  Spinner = null,
  onEntered = () => {},
  onClick = () => {},
  zIndex = 9999
}) => {
  useEffect(() => {
    onEntered && onEntered();
  }, [onEntered]);

  return (
    <Wrapper
      onClick={onClick}
      backgroundColor={backgroundColor}
      zIndex={zIndex}
    >
      {Spinner && <Spinner />}
      {!Spinner && (
        <>
          <ExampleSpinner />
          <ExampleTips>CLICK ANYWHERE TO CLOSE</ExampleTips>
        </>
      )}
    </Wrapper>
  );
};

Loading.propTypes = {
  backgroundColor: PropTypes.string,
  Spinner: PropTypes.elementType,
  onEntered: PropTypes.func,
  onClick: PropTypes.func,
  zIndex: PropTypes.number
};

const openFullscreenLoading = ({
  Spinner = null,
  zIndex = 9999,
  backgroundColor = "rgba(0, 0, 0, 0.75)",
  onClick = () => {}
} = {}) => {
  return new Promise(resolve => {
    createReactDOMEElement({
      Component: (
        <Loading
          backgroundColor={backgroundColor}
          Spinner={Spinner}
          onEntered={() => {
            resolve();
          }}
          onClick={onClick}
          zIndex={zIndex}
        />
      ),
      elementId: elementId
    });
  });
};

const closeFullscreenLoading = () => {
  return new Promise(resolve => {
    removeReactDOMElement(elementId);
    resolve();
  });
};

export { openFullscreenLoading, closeFullscreenLoading };
