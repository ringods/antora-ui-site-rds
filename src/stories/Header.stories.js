import HeaderPartial from '../partials/header.hbs';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Components/Header',
    argTypes: {
        page: {
            description: "Page Header"
        }
    }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ page, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return HeaderPartial({ page, ...args });
};

export const Header = Template.bind({});
