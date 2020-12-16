# React Components & Hooks Library

[![npm version](https://badge.fury.io/js/%40letea%2Freact.svg)](https://badge.fury.io/js/%40letea%2Freact)

A react library.

## Install

```bash
npm install @letea/react
```

## Contents

### [Background](#background-1)

* [BackgroundFixedImage](#backgroundfixedimage)
* [BackgroundGallery](#backgroundgallery)
* [BackgroundGalleryWithOrientation](#backgroundgallerywithorientation)
* [BackgroundVideo](#backgroundvideo)

### [Canvas](#canvas-1)

* [Flashlight](#flashlight)
* [Lighting](#lighting)
* [Processing](#processing)
* [Scratcher](#scratcher)

### [Element](#element-1)

* [ElementInView](#elementinview)
* [HorizontalScroll](#horizontalscroll)
* [Marquee](#marquee)

### [Image](#image-1)

* [Gallery](#gallery)
* [ImageLoader](#imageloader)

### [Layout](#layout-1)

* [FullPage](#fullpage)
* [FullscreenLoading](#fullscreenloading)
* [LandscapeTip](#landscapetip)
* [LayoutLoading](#layoutloading)
* [LayoutTransition](#layouttransition)
* [Mask](#mask)

### [Media](#media-1)

* [VideoPlayer](#videoplayer)

### [Notification](#notification-1)

* [Toast](#toast)

### [Text](#text-1)

* [Clipboard](#clipboard)
* [Code](#code)
* [EmbedRunKit](#embedrunkit)
* [QRCode](#qrcode)

### [Tool](#tool-1)

* [FPS](#fps)
* [Frame](#frame)
* [RenderCounter](#rendercounter)
* [WindowSize](#windowsize)

# Background

## BackgroundFixedImage

Allow you to have a fixed background image. Because of iOS Device does not support background-attachment: fixed.

### props

```js
defaultProps = {
  image: "", // required
};

```

### usage

```js
import BackgroundFixedImage from "@letea/react/components/BackgroundFixedImage";

function Example() {
  return (
    <>
      <BackgroundFixedImage image="a.jpg" />
      <YourComponent />
    </>
  );
}

```

### Demo

[BackgroundFixedImage](https://storybook.letea.me/?path=/story/playground-components-background--backgroundfixedimage){:target="\_blank" rel="noopener"}

### Can I Use

<img src="https://caniuse.bitsofco.de/image/background-attachment.png" alt="" />

## BackgroundGallery

A background with a gallery.

### props

```js
defaultProps = {
  images: [], // required
  duration: 3000, // optional
  transition: 1000, // optional
};

```

### usage

```js
import BackgroundGallery from "@letea/react/components/BackgroundGallery";

function Example() {
  return (
    <YourComponent>
      <BackgroundGallery images={["a.jpg", "b.jpg", "c.jpg"]} />
    </YourComponent>
  );
}

```

### Demo

[Ghost of Tsushima](https://storybook.letea.me/?path=/story/playground-websites--ghost-of-tsushima){:target="\_blank" rel="noopener"}

## BackgroundGalleryWithOrientation

A background with a gallery feature. Support two types(portrait and landscape).

### props

```js
defaultProps = {
  portraitImages: [], // require
  landscapeImages: [], // require
  duration: 3000, // optional
  transition: 1000, // optional
};

```

### usage

```js
import BackgroundGalleryWithOrientation from "@letea/react/components/BackgroundGalleryWithOrientation";

function Example() {
  return (
    <YourComponent>
      <BackgroundGallery
        portraitImages={["a.jpg", "b.jpg", "c.jpg"]}
        landscapeImages={["a.jpg", "b.jpg", "c.jpg"]}
      />
    </YourComponent>
  );
}

```

### Demo

[BackgroundGalleryWithOrientation](https://storybook.letea.me/?path=/story/playground-components-background--backgroundgallery-with-orientation){:target="\_blank" rel="noopener"}

## BackgroundVideo

A background with a video.

### props

```js
defaultProps = {
  video: "", // required
  poster: "", // optional
  isFixed: false, // optional, it will be position: absolute; if the value is false.
};

```

### usage

```js
import BackgroundVideo from "@letea/react/components/BackgroundVideo";

function Example() {
  return (
    <>
      <BackgroundVideo video="a.mp4" isFixed />
      <YourComponent />
    </>
  );
}

```

### Demo

[TENET](https://storybook.letea.me/?path=/story/playground-websites--tenet){:target="\_blank" rel="noopener"}

# Canvas

## Flashlight

A flashlight effect by canvas. You can control the flashlight by mouse/touch move.

### props

```js
defaultProps = {
  defaultMouseX: window.innerWidth / 2, // optional
  defaultMouseY: window.innerHeight / 2, // optional
};

```

### usage

```js
import Flashlight from "@letea/react/components/Flashlight";

function Example() {
  return <Flashlight />;
}

```

### Demo

[Flashlight](https://storybook.letea.me/?path=/story/playground-components-canvas--flashlight){:target="\_blank" rel="noopener"}

### notes

* Watch out!

## Lighting

A lighting flash effect by canvas.

### usage

```js
import Lighting from "@letea/react/components/Lighting";

function Example() {
  return <Lighting />;
}

```

### Demo

[Lighting](https://storybook.letea.me/?path=/story/playground-components-canvas--lighting){:target="\_blank" rel="noopener"}

### notes

* You will hate me.

## Processing

Allow you to write p5.js in React.

### props

```js
defaultProps = {
  sketch: null, // (p5) => { /* your code */ }
  hasSoundLibrary: false, // Using p5.sound library or not
  isPositionFixed: false, // CSS default is absolute position
  zIndex: null, // CSS default is 0
};

```

### usage

```js
import Processing from "@letea/react/components/Processing";

function Example() {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background(0);
    };

    p5.draw = () => {
      p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
    };
  };

  return <Processing sketch={sketch} />;
}

```

### Demo

[Processing](https://storybook.letea.me/?path=/story/components-canvas-4--processing){:target="\_blank" rel="noopener"}

### notes

* If you want to create a canvas full fill with parent element, use "p5.canvas.parentElement" to get width and height.
* If you want to use Amplitude from p5.sound, use window\.p5 instead of p5 from parameter.

## Scratcher

A scratcher effect by canvas.

### usage

```js
import Scratcher from "@letea/react/components/Scratcher";

function Example() {
  return (
    <>
      <YourComponent />
      <Scratcher />
    </>
  );
}

```

### Demo

[Scratcher](https://storybook.letea.me/?path=/story/components-canvas-4--scratcher){:target="\_blank" rel="noopener"}

# Element

## ElementInView

To detect if the element is in the view of the browser. It will pass the "isInView" variable to children.

### props

```js
defaultProps = {
  isDebug: false, // optional, will return size of window, bounding client rect of element and position if value is true.
  hasPosition: false, // optional, will return *xAxis and *yAxis if value is true. (the unit is percentage, xAxis is from left to right, yAxis is from top to bottom)
  offsetTop: 0, // optional, to set offset *top for element in view. (the unit is percentage, the value is relative to element's height)
  offsetRight: 0, // optional, to set offset *right for element in view. (the unit is percentage, the value is relative to element's width)
  offsetBottom: 0, // optional, to set offset *bottom for element in view. (the unit is percentage, the value is relative to element's height)
  offsetLeft: 0, // optional, to set offset *left for element in view. (the unit is percentage, the value is relative to element's width)
  onReady: () => {}, // optional, trigger when component is ready.
  onMove: () => {}, // optional, trigger when component moving.
  onEnter: () => {}, // optional, trigger when component enter the browser's view.
  onLeave: () => {}, // optional, trigger when component leave the browser's view.
};

```

### usage

```js
import ElementInView from "@letea/react/components/ElementInView";

function Example() {
  return (
    <ElementInView hasPosition>
      <TargetElement />
    </ElementInView>
  );
}

```

### Demo

[ElementInView](https://storybook.letea.me/?path=/story/playground-components-element--elementinview){:target="\_blank" rel="noopener"}

## HorizontalScroll

A horizontal scroll effect for mobile devices.

### props

```js
defaultProps = {
  hideScrollbar: true, // optional
};

```

### usage

```js
import HorizontalScroll from "@letea/react/components/HorizontalScroll";

function Example() {
  return (
    <HorizontalScroll>
      <YourElement />
      <YourElement />
      <YourElement />
      <YourElement />
      <YourElement />
    </HorizontalScroll>
  );
}

```

### Demo

[HorizontalScroll](https://storybook.letea.me/?path=/story/components-element-3--horizontalscroll){:target="\_blank" rel="noopener"}

### notes

* The children should be display: 'inline-block' or 'inline-flex'.
* iOS hide scrollbar natively.

## Marquee

A marquee slider.

### props

```js
defaultProps = {
  animationDuration: 40000, // optional, the unit is millisecond.
  isPausedOnHover: false, // optional
};

```

### usage

```js
import Marquee from "@letea/react/components/Marquee";

function Example() {
  return (
    <Marquee animationDuration={40000}>
      <YourElement />
      <YourElement />
      <YourElement />
      <YourElement />
      <YourElement />
    </Marquee>
  );
}

```

### Demo

[Marquee](https://storybook.letea.me/?path=/story/components-element-3--marquee){:target="\_blank" rel="noopener"}

### notes

* The children should be 'display: inline-block' or 'inline-flex'.

# Image

## Gallery

A simple gallery.

### props

```js
defaultProps = {
  images: [], // required
  duration: 3000, // optional
  transition: 1000, // optional
};

```

### usage

```js
import Gallery from "@letea/react/components/Gallery";

function Example() {
  return <Gallery images={["a.jpg", "b.jpg", "c.jpg"]} />;
}

```

### Demo

[Gallery](https://storybook.letea.me/?path=/story/components-image-2--gallery){:target="\_blank" rel="noopener"}

## ImageLoader

A component loads images and gives you a callback when images are loaded.

### props

```js
defaultProps = {
  images: [], // required
  onEachLoad: (loadedImages) => {}, // optional
  onAllLoad: (loadedImages) => {}, // optional
};

```

### usage

```js
import ImageLoader from "@letea/react/components/ImageLoader";

function Example() {
  return (
    <ImageLoader
      images={["a.jpg", "b.jpg", "c.jpg"]}
      onEachLoad={(loadedImages) => {
        // Do something...
      }}
      onAllLoad={(loadedImages) => {
        // Do something...
      }}
    />
  );
}

```

### Demo

[ImageLoader](https://storybook.letea.me/?path=/story/components-image-2--imageloader){:target="\_blank" rel="noopener"}

# Layout

## FullPage

Create a full-page layout and keeps the height of content is equal to or greater than the height of the window.

### props

```js
defaultProps = {
  isDebug: false, // optional, it will display contrastive colors if the value is true.
  enableMinWidth: 0, // optional
  offsetHeight: 0, // optional, to adjust the size of height.
  paddingTop: 0, // optional, add padding top to content.
  paddingBottom: 0, // optional, add padding bottom to content.
};

```

### usage

```js
import FullPage from "@letea/react/components/FullPage";

function Example() {
  return (
    <FullPage>
      <YourComponent />
    </FullPage>
  );
}

```

### Demo

[FullPage](https://storybook.letea.me/?path=/story/playground-components-layout--fullpage){:target="\_blank" rel="noopener"}

## FullscreenLoading

Display a fullscreen loading.

### props

```js
// openFullscreenLoading
defaultProps = {
  Spinner: null, // Your spinner component
  zIndex: 9999, // optional
  backgroundColor: "rgba(0, 0, 0, 0.75)", // optional
  onClick: () => {}, // optional
};

// closeFullscreenLoading
defaultProps = {};

```

### usage

```js
import FullscreenLoading from "@letea/react/components/FullscreenLoading";

function Example() {
  return (
    <>
      <YourComponent
        onClick={() => {
          openFullscreenLoading();
        }}
      />
      <YourComponent
        onClick={() => {
          closeFullscreenLoading();
        }}
      />
    </>
  );
}

```

### Demo

[FullscreenLoading](https://storybook.letea.me/?path=/story/components-layout-6--fullscreenloading){:target="\_blank" rel="noopener"}

## LandscapeTip

Sometimes you want to hint users something. For example, browsing on the mobile web in the landscape is suck.

### props

```js
defaultProps = {
  message: "", // optional
  zIndex: 9999, // optional
};

```

### usage

```js
import LandscapeTip from "@letea/react/components/LandscapeTip";

function Example() {
  return <LandscapeTip message="Hello World!" />;
}

```

### Demo

[LandscapeTip](https://storybook.letea.me/?path=/story/playground-components-layout--landscapetip){:target="\_blank" rel="noopener"}

## LayoutLoading

It's a layout of loading(load images), allow you to get user \*permissions by click/touch after loaded. (ex. Autoplay video/audio with sound, vibrate API)

### props

```js
defaultProps = {
  images: [], // optional
  getUserPermission: false, // optional
  onLoad: () => {}, // optional
  zIndex: 9999, // optional
  isFixed: true, // optional
};

```

### usage

```js
import LayoutLoading from "@letea/react/components/LayoutLoading";

function Example() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <LayoutLoading
          images={["a.jpg", "b.jpg", "c.jpg"]}
          getUserPermission
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      )}
      {isLoaded && <YourComponent />}
    </>
  );
}

```

### Demo

[LayoutLoading](https://storybook.letea.me/?path=/story/components-layout-6--layoutloading){:target="\_blank" rel="noopener"}

## LayoutTransition

A layout of transition.

### props

```js
defaultProps = {
  start: false, // required
  url: "", // required
  duration: 1000, // optional, value of animation-duration, unit is millisecond.
  frames: 0, // optional, value of animation-timing-function
  reverse: false, // optional, value of animation-direction
  infinite: false, // optional, value of animation-iteration-count
  forwards: false, // optional, value of animation-fill-mode
  onFinish: null, // optional, trigger on animation end.
};

```

### usage

```js
import LayoutTransition from "@letea/react/components/LayoutTransition";

function Example() {
  return (
    <LayoutTransition
      start={true}
      url={"a.jpg"}
      duration={1000}
      frames={22}
      reverse={false}
      infinite={false}
      forwards={false}
      onFinish={() => {
        // do something...
      }}
    />
  );
}

```

### Demo

[LayoutTransition](https://storybook.letea.me/?path=/story/components-layout-6--layouttransition){:target="\_blank" rel="noopener"}

## Mask

A mask covers the layout.

### props

```js
defaultProps = {
  isFixed: false, // optional
  zIndex: 9999, // optional
};

```

### usage

```js
import Mask from "@letea/react/components/Mask";

function Example() {
  return (
    <>
      <YourComponent />
      <Mask />
    </>
  );
}

```

### Demo

[Mask](https://storybook.letea.me/?path=/story/components-layout-6--mask){:target="\_blank" rel="noopener"}

# Media

## VideoPlayer

A video player uses the native interface.

### props

```js
defaultProps = {
  src: "", // required
  poster: "", // optional
  hasControls: false, // optional
  hasContextMenu: false, // optional
  hasPreload: true, // optional
  isAutoPlay: false, // optional
  isPlaysInline: false, // optional
  isMuted: false, // optional
  isLoop: false, // optional
  isPauseOnBlur: false, // optional
  isCoverSize: false, // optional
  onCanPlay: (event) => {}, // optional
  onError: (event) => {}, // optional
  onPlay: (event) => {}, // optional
  onPlaying: (event) => {}, // optional
  onTimeUpdate: (event) => {}, // optional
  onPause: (event) => {}, // optional
  onEnded: (event) => {}, // optional
  onVolumeChange: (event) => {}, // optional
  onFullscreen: () => {}, // optional
  onFullscreenExit: () => {}, // optional
};

```

### usage

```js
import VideoPlayer from "@letea/react/components/VideoPlayer";

function Example() {
  return <VideoPlayer src="a.mp4" />;
}

```

### Demo

[VideoPlayer](https://storybook.letea.me/?path=/story/components-media-1--videoplayer){:target="\_blank" rel="noopener"}

### references

* [Public Test Videos](https://gist.github.com/jsturgis/3b19447b304616f18657)

# Notification

## Toast

Display a message at the corner.

### usage

```js
import Toast from "@letea/react/components/Toast";

function Example() {
  return (
    <>
      <YourComponent
        onClick={() => {
          toast("Hello There");
        }}
      />
      <YourComponent
        onClick={() => {
          toast({ message: "Hello There", duration: 1500 });
        }}
      />
    </>
  );
}

```

### Demo

[Toast](https://storybook.letea.me/?path=/story/components-notification-1--toast){:target="\_blank" rel="noopener"}

# Text

## Clipboard

Allow users to copy text.

### props

```js
defaultProps = {
  text: "", // optional
  isDebugMode: false, // optional
  onSuccess: () => {}, // optional
  onFail: () => {}, // optional
};

```

### usage

```js
import Clipboard from "@letea/react/components/Clipboard";

function Example() {
  return <Clipboard text="Hello World!">Copy Text</Clipboard>;
}

```

### Demo

[Clipboard](https://storybook.letea.me/?path=/story/components-text-4--clipboard){:target="\_blank" rel="noopener"}

### references

* [clipboard.js](https://clipboardjs.com/)

## Code

Display source code with syntax highlight.

### props

```js
defaultProps = {
  code: "", // required
};

```

### usage

```js
import Code from "@letea/react/components/Code";

function Example() {
  return <Code code="console.log('Hello World!');" />;
}

```

### Demo

[Code](https://storybook.letea.me/?path=/story/components-text-4--code){:target="\_blank" rel="noopener"}

### notes

* Import Hack Typeface in the head of HTML for the best experience.

### references

* [highlight.js](https://highlightjs.org/)
* [Hack](https://sourcefoundry.org/hack/)

## EmbedRunKit

Allow you to test javascript code via RunKit.

### usage

```js
import EmbedRunKit from "@letea/react/components/EmbedRunKit";

function Example() {
  return <EmbedRunKit source="console.log('Hello World!')" />;
}

```

### Demo

[EmbedRunKit](https://storybook.letea.me/?path=/story/components-text-4--embedrunkit){:target="\_blank" rel="noopener"}

## QRCode

Convert text to QR code.

### props

```js
defaultProps = {
  text: "", // optional
  width: 150, // optional
  height: 150, // optional
};

```

### usage

```js
import QRCode from "@letea/react/components/QRCode";

function Example() {
  return <QRCode text="Hello World!" />;
}

```

### Demo

[QRCode](https://storybook.letea.me/?path=/story/components-text-4--qrcode){:target="\_blank" rel="noopener"}

### references

* [QR Code Generator](http://goQR.me)

# Tool

## FPS

Display FPS(Frame per Second).

### props

```js
defaultProps = {
  isFixed: false, // optional, default position is absolute.
  zIndex: 9999, // optional
};

```

### usage

```js
import FPS from "@letea/react/components/FPS";

function Example() {
  return <FPS />;
}

```

### Demo

[FPS](https://storybook.letea.me/?path=/story/components-tool-4--fps){:target="\_blank" rel="noopener"}

## Frame

Display frame for developing layout, style is base on Storybook.

### props

```js
defaultProps = {
  isFixed: false, // optional, default position is absolute.
  zIndex: -1, // optional
};

```

### usage

```js
import Frame from "@letea/react/components/Frame";

function Example() {
  return <Frame />;
}

```

### Demo

[Frame](https://storybook.letea.me/?path=/story/components-tool-4--frame){:target="\_blank" rel="noopener"}

### references

* [Storybook](https://storybook.js.org/)

## RenderCounter

Display render counts.

### usage

```js
import RenderCounter from "@letea/react/components/RenderCounter";

function Example() {
  return (
    <RenderCounter>
      <YourComponent />
    </RenderCounter>
  );
}

```

### Demo

[RenderCounter](https://storybook.letea.me/?path=/story/components-tool-4--rendercounter){:target="\_blank" rel="noopener"}

## WindowSize

Display the size of the window, base on Chrome's inspect style.

### props

```js
defaultProps = {
  isFixed: true, // optional
  zIndex: 9999, // optional
  autoHide: false, // optional
  hideDelay: 1000, // optional, it will enable if audHide is true.
};

```

### usage

```js
import WindowSize from "@letea/react/components/WindowSize";

function Example() {
  return <WindowSize />;
}

```

### Demo

[WindowSize](https://storybook.letea.me/?path=/story/components-tool-4--windowsize){:target="\_blank" rel="noopener"}
