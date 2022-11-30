import DefaultPageLayout from '../layouts/default.hbs';

export default {
  title: 'Pages/Default',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return DefaultPageLayout({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  page: {
    title: 'Crafting a design system for a multiplanetary future',
    contents: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    attributes: {
      revdate: '2022-10-06'
    }
  }
}
