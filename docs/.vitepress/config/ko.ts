import type { LocaleConfig } from "./types";

export default {
  label: "한국어",
  lang: "ko-KR",
  themeConfig: {
    darkModeSwitchLabel: "화면 테마",
    docFooter: { next: "다음", prev: "이전" },
    langMenuLabel: "언어 변경",
    lastUpdatedText: "마지막 수정 일시",
    returnToTopLabel: "맨 위로",
    sidebarMenuLabel: "메뉴",
    footer: {
      copyright: "Copyright © 2023 Blro",
      message: "Released under the MIT License.",
    },
    nav: [
      { text: "가이드", link: "/ko/guide/" },
      { text: "컴포넌트", link: "/ko/components/" },
      { text: "API", link: "/ko/api/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/blro0319/ui-primitives" },
    ],
    sidebar: {
      "/ko/guide": [
        {
          text: "시작하기",
          items: [
            { text: "소개", link: "/ko/guide/" },
            { text: "설치하기", link: "/ko/guide/installation/" },
          ],
        },
        {
          text: "가이드",
          items: [
            {
              text: "사전 지식",
              link: "/ko/guide/basic/prerequisites/",
            },
            {
              text: "스타일 입히기",
              link: "/ko/guide/basic/styling/",
            },
            {
              text: "나만의 컴포넌트 만들기",
              link: "/ko/guide/basic/component/",
            },
          ],
        },
        {
          text: "고급",
          items: [
            { text: "새로 구현하기", link: "/ko/guide/advanced/implementing/" },
          ],
        },
      ],
      "/ko/components/": [
        {
          text: "Components",
          items: [
            { text: "Button", link: "/ko/components/button/" },
            { text: "Dialog", link: "/ko/components/dialog/" },
            { text: "Select", link: "/ko/components/select/" },
            { text: "Tabs", link: "/ko/components/tabs/" },
            { text: "Tooltip", link: "/ko/components/tooltip/" },
          ],
        },
      ],
      "/ko/api/": [
        {
          text: "컴포저블",
          items: [
            {
              text: "useCurrentVNode",
              link: "/ko/api/composables/use-current-v-node/",
            },
            {
              text: "useGlobalCancelStack",
              link: "/ko/api/composables/use-global-cancel-stack/",
            },
            {
              text: "useGlobalEscapeStack",
              link: "/ko/api/composables/use-global-escape-stack/",
            },
            {
              text: "useGlobalHistoryStack",
              link: "/ko/api/composables/use-global-history-stack/",
            },
            {
              text: "useInstance",
              link: "/ko/api/composables/use-instance/",
            },
            {
              text: "useParentVNode",
              link: "/ko/api/composables/use-parent-v-node/",
            },
          ],
        },
        {
          text: "유형",
          items: [
            { text: "AnyFunction", link: "/ko/api/types/any-function/" },
            { text: "ComponentAs", link: "/ko/api/types/component-as/" },
            { text: "MaybeArray", link: "/ko/api/types/maybe-array/" },
            { text: "MaybePromise", link: "/ko/api/types/maybe-promise/" },
            { text: "VCompoundType", link: "/ko/api/types/v-compound-type/" },
          ],
        },
        {
          text: "유틸리티",
          items: [
            {
              text: "createContext",
              link: "/ko/api/utils/create-context/",
            },
            {
              text: "createEventHooks",
              link: "/ko/api/utils/create-event-hooks/",
            },
            {
              text: "filterCompoundVNodes",
              link: "/ko/api/utils/filter-compound-v-nodes/",
            },
            {
              text: "matchCompoundType",
              link: "/ko/api/utils/match-compound-type/",
            },
            {
              text: "randomInt",
              link: "/ko/api/utils/random-int/",
            },
            {
              text: "randomStr",
              link: "/ko/api/utils/random-str/",
            },
          ],
        },
      ],
    },
  },
} satisfies LocaleConfig;
