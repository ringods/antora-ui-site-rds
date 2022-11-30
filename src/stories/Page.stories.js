import PagePartial from '../partials/main.hbs';

export default {
  title: 'Pages/Main',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return PagePartial({ ...args });
};

export const Main = Template.bind({});
Main.args = {
  page: {
    title: 'Crafting a design system for a multiplanetary future',
    contents: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    attributes: {
      revdate: '2022-10-06'
    }
  }
}
