import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "src/content/site-settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "href",
                label: "Link",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              {
                type: "string",
                name: "copyright",
                label: "Copyright Text",
              },
              {
                type: "object",
                name: "socialLinks",
                label: "Social Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "platform",
                    label: "Platform",
                    options: ["facebook", "twitter", "instagram", "linkedin", "youtube"],
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage Sections",
        path: "src/content/homepage",
        format: "json",
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Headline",
                required: true,
              },
              {
                type: "string",
                name: "subheadline",
                label: "Subheadline",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Button Text",
              },
              {
                type: "string",
                name: "ctaLink",
                label: "CTA Button Link",
              },
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
            ],
          },
          {
            type: "object",
            name: "mission",
            label: "Mission Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "rich-text",
                name: "content",
                label: "Mission Content",
              },
              {
                type: "object",
                name: "values",
                label: "Our Values",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Value Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Value Description",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon Name",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "impact",
            label: "Impact Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
              },
            ],
          },
        ],
      },
      {
        name: "programs",
        label: "Programs",
        path: "src/content/programs",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Program Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Program Summary",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "description",
            label: "Full Description",
          },
          {
            type: "string",
            name: "ageRange",
            label: "Age Range",
          },
          {
            type: "string",
            name: "schedule",
            label: "Schedule",
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "object",
            name: "outcomes",
            label: "Expected Outcomes",
            list: true,
            fields: [
              {
                type: "string",
                name: "outcome",
                label: "Outcome",
              },
            ],
          },
        ],
      },
      {
        name: "successStories",
        label: "Success Stories",
        path: "src/content/success-stories",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Story Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "studentName",
            label: "Student Name",
          },
          {
            type: "number",
            name: "studentAge",
            label: "Student Age",
          },
          {
            type: "string",
            name: "program",
            label: "Program Attended",
          },
          {
            type: "string",
            name: "quote",
            label: "Student/Parent Quote",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "story",
            label: "Full Story",
          },
          {
            type: "object",
            name: "beforeAfter",
            label: "Before & After",
            fields: [
              {
                type: "string",
                name: "before",
                label: "Before",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "after",
                label: "After",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Student Image",
          },
        ],
      },
      {
        name: "team",
        label: "Team Members",
        path: "src/content/team",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role/Title",
            required: true,
          },
          {
            type: "string",
            name: "bio",
            label: "Biography",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "photo",
            label: "Profile Photo",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      {
        name: "impactStats",
        label: "Impact Statistics",
        path: "src/content/impact-stats",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Stat Label",
              },
              {
                type: "string",
                name: "value",
                label: "Stat Value",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
            ],
          },
        ],
      },
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["education", "community", "literacy", "events", "resources"],
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});