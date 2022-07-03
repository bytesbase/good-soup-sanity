export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "images",
      description: "Add at least 3 images",
      title: "Image Carousel",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      title: "Session Variants",
      description: "e.g. 1 hour session",
      name: "sessionVariants",
      type: "array",
      of: [
        {
          title: "Session Variant",
          type: "sessionVariant",
        },
      ],
    },
    {
      name: "notes",
      description: "Any exceptions to above variants",
      title: "Additional notes",
      type: "localeBlockContent",
    },
    {
      name: "callToAction",
      description: "e.g. Book your portrait session",
      title: "Call to Action",
      type: "string",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
