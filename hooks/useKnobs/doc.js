module.exports = {
  title: "useKnobs",
  arguments: `
    // text
    arguments = {
      defaultValue: "", // required
      label: "" // optional  
    }

    // number
    arguments = {
      defaultValue: 0, // required
      label: "" // optional  
    }

    // boolean
    arguments = {
      defaultValue: false, // required
      label: "" // optional  
    }

    // select
    arguments = {
      options: [], // required
      label: "" // optional
    }

    // button
    arguments = {
      handler: () => {}, // required
      label: "" // optional  
    }
  `,
  description:
    "Allow you to create a value control easily. The idea is base on Storybook addon-knobs.",
  usage: `

    function Example() {
      const textValue = text({ defaultValue: "Message", label: "Text" });
      const numberValue = number({ defaultValue: 0, label: "Number" });
      const booleanValue = boolean({ defaultValue: false, label: "Boolean"});
      const { value: selectValue, index: selectIndex } = select({options: ["Apple", "Banana", "Piapple"], label: "Select"});

      button({
        label: "Button",
        handler: () => {
          // Do something...
        }
      });

      return (
        <div>
          {\`Text: \${textValue}\`}<br />
          {\`Number: \${numberValue}\`}<br />
          {\`Boolean: \${booleanValue}\`}<br />
          {\`Select Value: \${selectValue}\`}<br />
          {\`Select Index: \${selectIndex}\`}<hr />
          <KnobsContainer />
        </div>
      );
    }
  `,
  demo: {
    title: "useKnobs",
    url: "https://storybook.letea.me/?path=/story/hooks-form-5--useknobs"
  },
  references: [
    {
      title: "Storybook Addon Knobs",
      url: "https://github.com/storybookjs/storybook/tree/master/addons/knobs"
    }
  ],
  kind: "Form",
  type: "Hooks"
};
