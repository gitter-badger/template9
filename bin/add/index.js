const arg = require("arg");

module.exports = () => {
  // choose what command:
  const args = arg({});
  if (args._.length <= 1) { console.log("missing command!"); return; }

  switch (args._[1]) {
    case "entry":
      require("./entry")();
      break;

    case "config":
      require("./config")();
      break;

    case "type":
      require("./type")();
      break;

    case "scene":
      console.log("scene");
      break;

    case "component":
      console.log("component");
      break;

    case "lazy-operation":
      console.log("lazy-operation");
      break;

    case "action":
      console.log("action");
      break;

    default:
      console.log("unknown command!");
      break;
  }
};
