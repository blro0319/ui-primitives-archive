import { defineConfig } from "vitepress";

export default defineConfig({
  title: "UI Primitives",
  description: "Headless Vue Components",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: "Get Started", link: "/get-started/" },
          { text: "Components", link: "/components/" },
          { text: "API", link: "/api/" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/blro0319/ui-primitives" },
        ],
        sidebar: {
          "/components/": [
            {
              text: "Components",
              items: [
                { text: "Button", link: "/components/button/" },
                { text: "Dialog", link: "/components/dialog/" },
                { text: "Select", link: "/components/select/" },
                { text: "Tooltip", link: "/components/tooltip/" },
              ],
            },
          ],
        },
      },
    },
    ko: {
      label: "한국어",
      lang: "ko-KR",
      themeConfig: {
        nav: [
          { text: "시작하기", link: "/ko/get-started/" },
          { text: "컴포넌트", link: "/ko/components/" },
          { text: "API", link: "/ko/api/" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/blro0319/ui-primitives" },
        ],
        sidebar: {
          "/ko/components/": [
            {
              text: "Components",
              items: [
                { text: "Button", link: "/ko/components/button/" },
                { text: "Dialog", link: "/ko/components/dialog/" },
                { text: "Select", link: "/ko/components/select/" },
                { text: "Tooltip", link: "/ko/components/tooltip/" },
              ],
            },
          ],
        },
      },
    },
  },
});
