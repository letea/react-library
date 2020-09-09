// node modules
import React, { useState, useMemo, useCallback } from "react";
import { unstable_batchedUpdates } from "react-dom";
import PropTypes from "prop-types";

// local modules - hooks
import useTimeout from "../../hooks/useTimeout";

// local files
import { toast } from "./function";
import {
  Container,
  Wrapper,
  Content,
  Link,
  Message,
  CloseButton
} from "./style";

const Toast = React.memo(
  ({
    message = "",
    url = "",
    duration = 3000,
    hasClose = false,
    onFinish = () => {}
  }) => {
    const [isShow, setIsShow] = useState(false);
    const [lastMessage, setLastMessage] = useState("");
    const isLongText = useMemo(() => {
      return message.length > 80;
    }, [message]);

    // Handle Close Toast
    const hideToast = useCallback(() => {
      if (isShow && (lastMessage === "" || lastMessage !== message)) {
        unstable_batchedUpdates(() => {
          setIsShow(false);
          setLastMessage(message);
        });
      }
    }, [isShow, message, lastMessage, onFinish]);

    // Check to show notification.
    useTimeout({
      callback: useCallback(() => {
        setIsShow(true);
      }, []),
      duration: 300,
      startTimeout:
        !isShow && message && (lastMessage === "" || lastMessage !== message)
    });

    // Check to hide notification with timeout.
    useTimeout({
      callback: hideToast,
      duration,
      startTimeout: isShow
    });

    // Trigger onFinish after toast is closed.
    useTimeout({
      callback: onFinish,
      duration: 300,
      startTimeout:
        onFinish && !isShow && lastMessage && lastMessage === message
    });

    return (
      <Container isLongText={isLongText}>
        <Wrapper
          isShow={isShow}
          hasClose={hasClose}
          onClick={!hasClose ? hideToast : null}
        >
          <Content>
            {url && (
              <Link href={url} target="_blank">
                <Message hasClose={hasClose}>{message}</Message>
              </Link>
            )}
            {!url && <Message hasClose={hasClose}>{message}</Message>}
            {hasClose && (
              <CloseButton onClick={hideToast}>
                <svg
                  height="512px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                >
                  <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>
              </CloseButton>
            )}
          </Content>
        </Wrapper>
      </Container>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.message === nextProps.message;
  }
);

Toast.displayName = "Toast";

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  duration: PropTypes.number,
  hasClose: PropTypes.bool,
  onFinish: PropTypes.func
};

export default Toast;
export { toast };
