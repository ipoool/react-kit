import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text } from "@storybook/addon-knobs";
import notes from "../notes/button.md";

// Component
import Button from "../src/components/button";

storiesOf("Component|Button", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    "with text",
    () => (
      <Button onClick={action("Clicked")}>
        {text("children", "Hello Button")}
      </Button>
    ),
    {
      notes
    }
  )
  .add("with emoji", () => (
    <Button onClick={action("Clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
