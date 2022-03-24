export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623bda6ad4cd785c67dffd37",
                  title: "Sanity Studio",
                  name: "test-sanity-gatsby-blog-studio-d256fcz4",
                  apiId: "71ce7375-98e6-4725-a4ad-b1533f10ba89",
                },
                {
                  buildHookId: "623bda6b1bd10e5a9ca4087a",
                  title: "Blog Website",
                  name: "test-sanity-gatsby-blog-web-nd7pywv1",
                  apiId: "c371adc1-e3a7-45a2-8467-4b35b66c5ba3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gg-1414/test-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://test-sanity-gatsby-blog-web-nd7pywv1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
