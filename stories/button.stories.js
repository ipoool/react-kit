import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import notes from '../notes/button.md';

// Component
import Button from '../src/Components/Button';

storiesOf('Component|Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Type Success', () => <Button type="success">{text('children', 'Button Success')}</Button>, {
    notes,
  })
  .add('Type Link', () => <Button type="link">{text('children', 'Button Link')}</Button>, {
    notes,
  });
