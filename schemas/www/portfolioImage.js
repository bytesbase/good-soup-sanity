export default {
  title: "Portfolio image",
  name: "portfolioImage",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      title: "Alt text",
      description: "This is for accessiblity, describe the picture",
      name: "alt",
      type: "string",
    },
    {
      title: "Description",
      description: "Optional description for when user clicks on image",
      name: "description",
      type: "string",
    },
    {
      title: "type",
      description: "Optional description for when user clicks on image",
      name: "type",
      type: "string",
    },
  ],
};
