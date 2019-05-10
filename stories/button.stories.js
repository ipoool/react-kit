import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import notes from './notes/button.md';

// Component
import Button from '../src/Components/Button';

storiesOf('Component|Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Type',
    () => (
      <div>
        <Button type="primary">Button Primary</Button>
        <Button type="success">Button Success</Button>
        <Button>Button Default</Button>
        <Button type="danger">Button Danger</Button>
        <Button type="dashed">Button Dashed</Button>
        <Button type="link">Button Link</Button>
      </div>
    ),
    {
      notes,
    },
  )
  .add(
    'Disabled',
    () => (
      <Button disabled={boolean('disabled', true)} type="success">
        {text('label', 'Button Disabled')}
      </Button>
    ),
    {
      notes,
    },
  )
  .add(
    'Loading',
    () => (
      <Button loading={boolean('loading', true)} type="success">
        {text('label', 'Button Loading')}
      </Button>
    ),
    {
      notes,
    },
  )
  .add(
    'Size',
    () => (
      <React.Fragment>
        <Button size="large" type="success">
          Button Large
        </Button>
        <Button size="default" type="success">
          Button Default
        </Button>
        <Button size="small" type="success">
          Button Small
        </Button>
      </React.Fragment>
    ),
    {
      notes,
    },
  );
