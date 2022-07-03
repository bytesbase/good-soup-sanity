export default {
  title: "Session variant",
  name: "sessionVariant",
  type: "object",
  fields: [
    {
      title: "Session name",
      name: "sessionName",
      type: "string",
    },
    {
      title: "Price",
      name: "sessionPrice",
      type: "number",
    },
    {
      name: "sessionDetails",
      title: "Session details",
      type: "localeBlockContent",
    },
  ],
};
