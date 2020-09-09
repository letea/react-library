// Before using EmbedRunKit, make sure you have implement the script into the <head></head> scope
// <script src="https://embed.runkit.com"></script>

// node modules
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

const EmbedRunKit = ({
  environment = [], // Environment variables for the execution environment. Available under `process.env`. Defaults to []
  evaluateOnLoad = true, // Evaluate the Embed when it finishes loading.
  gutterStyle = "inside", // "inside" | "none" | "outside" Where the line numbers should appear. Defaults to "outside"
  hidesActionButton = false, // Hides the "▶ Run" button. In Endpoint mode, Hides the endpoint URL.
  hidesEndpointLogs = false, // In Endpoint mode, Hides the logs that would appear when hitting the Endpoint. See https://runkit.com/docs/endpoint.
  minHeight = "73px", // Minimum height of the embed in pixels. E.g. "100px". Defaults to "73px"
  mode = "default", // When in default mode RunKit Embeds behave like a regular notebook and display outputs after each evaluation. When the Embed is in endpoint mode the outputs are replaced by endpoint logs and a URL is provided to run the Embed code. See https://runkit.com/docs/endpoint. Defaults to "default"
  nodeVersion = "10.x.x", // A semver range that the node engine should satisfy, e.g. "4.0.x" or "> 6.9.2". Defaults to "10.x.x"
  onLoad = () => {}, // Called when the Embed has fully loaded. The function will be passed a reference to the Embed
  packageTimestamp = undefined, // number || null The timestamp in UTC milliseconds to recreate the state of package availability. No packages published to npm after this time are available in this embed. Useful for reproducing bugs, or guaranteeing dependency versions. By default the timestamp is set to the time the embed is created.
  preamble = "", // Code in the preamble field will not be displayed in the embed, but will be executed before running the code in the embed. For example, libraries that use RunKit for documentation often require their package in the preamble to avoid clutter in the embed code.
  readOnly = false,
  source = "", // The source code of the Embed.
  tabSize = 2,
  title = "" // The title of the RunKit Notebook when it is saved on RunKit
}) => {
  const elementRef = useRef();
  useEffect(() => {
    const runKitNoteBook = RunKit.createNotebook({
      element: elementRef.current,
      environment,
      evaluateOnLoad,
      gutterStyle,
      hidesActionButton,
      hidesEndpointLogs,
      minHeight,
      mode,
      nodeVersion,
      onLoad,
      packageTimestamp,
      preamble,
      readOnly,
      source: prettier.format(source, {
        parser: "babel",
        plugins: [parserBabel],
        tabWidth: tabSize
      }),
      tabSize,
      title
    });

    return () => {
      runKitNoteBook.destroy();
    };
  }, [
    environment,
    evaluateOnLoad,
    gutterStyle,
    hidesActionButton,
    hidesEndpointLogs,
    minHeight,
    mode,
    nodeVersion,
    onLoad,
    packageTimestamp,
    preamble,
    readOnly,
    source,
    tabSize,
    title
  ]);

  return <div source={source} ref={elementRef} />;
};

EmbedRunKit.propTypes = {
  environment: PropTypes.array,
  evaluateOnLoad: PropTypes.bool,
  gutterStyle: PropTypes.string,
  hidesActionButton: PropTypes.bool,
  hidesEndpointLogs: PropTypes.bool,
  minHeight: PropTypes.string,
  mode: PropTypes.string,
  nodeVersion: PropTypes.string,
  onLoad: PropTypes.func,
  packageTimestamp: PropTypes.number,
  preamble: PropTypes.string,
  readOnly: PropTypes.bool,
  source: PropTypes.string,
  tabSize: PropTypes.number,
  title: PropTypes.string
};

export default EmbedRunKit;
