import ProsePartial from '../partials/prose.hbs';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Blog/Prose',
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return ProsePartial({ ...args });
};

export const Prose = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Prose.args = {
    className: 'mt-8',
    page: {
        contents: 'Content',
    }
};
