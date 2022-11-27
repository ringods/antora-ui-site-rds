import TimePartial from '../partials/time.hbs';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Blog/Time',
    argTypes: {
        date: {
            description: "Date"
        }
    }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ date, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return TimePartial({ date, ...args });
};

export const Time = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Time.args = {
    date: '2022-10-05'
};
