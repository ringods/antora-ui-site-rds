import ArticlePartial from '../partials/article.hbs';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Blog/Article',
    argTypes: {
        page: {
            description: "Page Object"
        }
    }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ page, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return ArticlePartial({ page, ...args });
};

export const Article = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Article.args = {
    page: {
        title: 'Crafting a design system for a multiplanetary future',
        contents: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
        attributes: {
            revdate: '2022-10-06'
        }
    }
};
