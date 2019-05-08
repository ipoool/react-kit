import { addParameters, configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../stories/", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
addParameters({
  name: "Kudo Web Kit",
  isFullScreen: false,
  showPanel: true
});
configure(loadStories, module);
