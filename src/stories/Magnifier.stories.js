import Magnifier from '../lib/Magnifier';
import testImage from '../../public/test-image.jpg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Magnifier',
  component: Magnifier,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export const Round = {
  args: {
    src: testImage,
    width: '50%',
  }
}

export const Square = {
  args: {
    src: testImage,
    mgShape: 'square',
    width: '50%'
  }
}