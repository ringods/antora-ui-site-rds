import FooterPartial from '../partials/footer.hbs';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Components/Footer',
    argTypes: {
        page: {
            description: "Page Footer"
        }
    }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ page, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return FooterPartial({ page, ...args });
};

export const Footer = Template.bind({});
