const glob = require("glob");
const path = require("path");

// node modules
const fs = require("fs");
const prettier = require("prettier");
const { formatFromString } = require("@quilicicf/markdown-formatter");

// Documents
const documents = glob.sync("{,!(node_modules)/**/}doc.js").map(file => {
  return require(path.resolve(file));
});

const groupedDocuments = {};
documents.forEach(document => {
  const { kind, type } = document;

  // Add Type
  const hasType = !!groupedDocuments[type];
  if (!hasType) {
    groupedDocuments[type] = {};
  }

  // Add Kind
  const hasKind = !!groupedDocuments[type][kind];
  if (hasKind) {
    groupedDocuments[type][kind].push(document);
  } else {
    groupedDocuments[type][kind] = [document];
  }
});

const jsFormat = (content = "") => {
  return prettier.format(content, {
    semi: true,
    parser: "babel"
  });
};

const main = async () => {
  // Library Title
  let readMe = `# React Library\n`;

  // NPM
  readMe +=
    "[![npm version](https://badge.fury.io/js/%40letea%2Freact.svg)](https://badge.fury.io/js/%40letea%2Freact)\n\n";

  // Library Description
  readMe += "A react library for component & hooks.\n\n";
  readMe +=
    "[Live Demo](https://codesandbox.io/s/react-with-letea-library-w2p64)\n";

  // Install
  readMe += "## Install\n";
  readMe += `\`\`\`bash\nnpm install @letea/react\n\`\`\`\n`;

  // Important
  readMe += "## Important!!!\n";
  readMe +=
    "If you want to use components, please make sure your bundler includes the path of the library `node_modules/@letea/react` to handle jsx compiling.\n";

  // Content
  readMe += "## Contents\n";

  Object.keys(groupedDocuments)
    .sort()
    .forEach(type => {
      readMe += `### ${type}\n`;

      Object.keys(groupedDocuments[type])
        .sort()
        .forEach(kind => {
          readMe += `#### ${kind}\n`;

          groupedDocuments[type][kind].forEach(item => {
            readMe += `- [${item.title}](#${item.title.toLowerCase()})\n`;
          });
        });
    });

  // Components & Hooks
  Object.keys(groupedDocuments)
    .sort()
    .forEach(type => {
      // Type
      readMe += `# ${type}\n`;

      Object.keys(groupedDocuments[type])
        .sort()
        .forEach(kind => {
          // Kind
          readMe += `## ${kind}\n`;

          groupedDocuments[type][kind].forEach(item => {
            // title
            readMe += `## ${item.title}\n`;

            // description
            if (item.description) {
              readMe += `${item.description}\n`;
            }

            // defaultProps
            if (item.defaultProps) {
              readMe += "### props\n";
              readMe += `\`\`\`js\n${jsFormat(item.defaultProps)}\n\`\`\`\n`;
            }

            // usage
            if (item.usage) {
              const getTypePath = (type = "") => {
                switch (type) {
                  case "Component":
                    return "components";
                  case "Hooks":
                    return "hooks";
                }

                return "";
              };

              readMe += "### usage\n";
              readMe += `\`\`\`js\n${jsFormat(
                `import ${item.title} from "@letea/react/${getTypePath(
                  item.type
                )}/${item.title}";\n${item.usage}`
              )}\n\`\`\`\n`;
            }

            // demo
            if (item.demo) {
              readMe += "### Demo\n";

              // _blank is not working
              // readMe += `<a href="${item.demo.url}" target="_blank">${item.demo.title}</a>\n`;
              readMe += `[${item.demo.title}](${item.demo.url})\n`;
            }

            // can i use
            if (item.canIUse) {
              readMe += "### Can I Use\n";

              item.canIUse.forEach(canIUseItem => {
                readMe += `<img src="https://caniuse.bitsofco.de/image/${canIUseItem}.png" alt="" />\n\n`;
              });
            }

            // notes
            if (item.notes) {
              readMe += "### notes\n";
              item.notes.forEach(note => {
                readMe += `- ${note}\n`;
              });
            }

            // references
            if (item.references) {
              readMe += "### references\n";
              item.references.forEach(reference => {
                readMe += `- [${reference.title}](${reference.url})\n`;
              });
            }
          });
        });
    });

  const { contents, messages } = await formatFromString(readMe);
  fs.writeFile("README.md", contents, function (err) {
    if (err) return console.log(err);
    console.log("README.md is builded.");
  });
};

main();
