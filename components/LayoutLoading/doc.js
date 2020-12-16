module.exports = {
  title: "LayoutLoading",
  description:
    "It's a layout of loading(load images), allow you to get user *permissions by click/touch after loaded. (ex. Autoplay video/audio with sound, vibrate API)",
  defaultProps: `
    defaultProps = {
      images: [], // optional
      getUserPermission: false, // optional
      onLoad: () => {}, // optional
      zIndex: 9999, // optional
      isFixed: true // optional
    }
  `,
  usage: `      
    function Example() {
      const [isLoaded, setIsLoaded] = useState(false);

      return (
        <>
          {
            !isLoaded && 
              <LayoutLoading 
                images={["a.jpg", "b.jpg", "c.jpg"]} 
                getUserPermission 
                onLoad={() => { setIsLoaded(true); }}
              />
          }
          {
            isLoaded &&
              <YourComponent />
          }
        </>
      );
    }
  `,
  demo: {
    title: "LayoutLoading",
    url:
      "https://storybook.letea.me/?path=/story/components-layout-6--layoutloading"
  },
  kind: "Layout",
  type: "Component"
};
