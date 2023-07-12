import type { LocaleConfig } from "./types";

export default {
  label: "한국어",
  lang: "ko-KR",
  themeConfig: {
    darkModeSwitchLabel: "화면 테마",
    docFooter: { next: "다음", prev: "이전" },
    langMenuLabel: "언어 변경",
    lastUpdatedText: "마지막 수정 일시",
    outline: {
      label: "목차",
      level: [2, 3],
    },
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
            {
              text: "유효성 검증",
              link: "/ko/guide/basic/validation/",
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
            {
              text: "Accordion",
              link: "/ko/components/accordion/",
            },
            {
              text: "Button",
              link: "/ko/components/button/",
            },
            {
              text: "Checkbox",
              link: "/ko/components/checkbox/",
            },
            {
              text: "Checkbox Group",
              link: "/ko/components/checkbox-group/",
            },
            {
              text: "Content",
              link: "/ko/components/content/",
            },
            {
              text: "Dialog",
              link: "/ko/components/dialog/",
            },
            {
              text: "Dropdown",
              link: "/ko/components/dropdown/",
            },
            {
              text: "Field",
              link: "/ko/components/field/",
            },
            {
              text: "Fieldset",
              link: "/ko/components/fieldset/",
            },
            {
              text: "Form",
              link: "/ko/components/form/",
            },
            {
              text: "Number Input",
              link: "/ko/components/number-input/",
            },
            {
              text: "Popover",
              link: "/ko/components/popover/",
            },
            {
              text: "Progress",
              link: "/ko/components/progress/",
            },
            {
              text: "Radio",
              link: "/ko/components/radio/",
            },
            {
              text: "Radio Group",
              link: "/ko/components/radio-group/",
            },
            {
              text: "Roving Tabindex",
              link: "/ko/components/roving-tabindex/",
            },
            {
              text: "Tabs",
              link: "/ko/components/tabs/",
            },
            {
              text: "Text Input",
              link: "/ko/components/text-input/",
            },
            {
              text: "Tooltip",
              link: "/ko/components/tooltip/",
            },
            {
              text: "Transition",
              link: "/ko/components/transition/",
            },
          ],
        },
      ],
      "/ko/api/": [
        {
          text: "컴포저블",
          items: [
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
              text: "useId",
              link: "/ko/api/composables/use-id/",
            },
            {
              text: "useInputSelectionRange",
              link: "/ko/api/composables/use-input-selection-range/",
            },
            {
              text: "useVInput",
              link: "/ko/api/composables/use-v-input/",
            },
          ],
        },
        {
          text: "유형",
          items: [
            {
              text: "AnyFunction",
              link: "/ko/api/types/any-function/",
            },
            {
              text: "CamelCase",
              link: "/ko/api/types/camel-case/",
            },
            {
              text: "ComponentAs",
              link: "/ko/api/types/component-as/",
            },
            {
              text: "MaybeArray",
              link: "/ko/api/types/maybe-array/",
            },
            {
              text: "MaybePromise",
              link: "/ko/api/types/maybe-promise/",
            },
            {
              text: "MaybeString",
              link: "/ko/api/types/maybe-string/",
            },
            {
              text: "OptionalJoin",
              link: "/ko/api/types/optional-join/",
            },
            {
              text: "PascalCase",
              link: "/ko/api/types/pascal-case/",
            },
            {
              text: "Prettify",
              link: "/ko/api/types/prettify/",
            },
            {
              text: "VBindAttributes",
              link: "/ko/api/types/v-bind-attributes/",
            },
          ],
        },
        {
          text: "유틸리티",
          items: [
            {
              text: "camelCase",
              link: "/ko/api/utils/camel-case/",
            },
            {
              text: "createContext",
              link: "/ko/api/utils/create-context/",
            },
            {
              text: "createEventHooks",
              link: "/ko/api/utils/create-event-hooks/",
            },
            {
              text: "pascalCase",
              link: "/ko/api/utils/pascal-case/",
            },
            {
              text: "randomInt",
              link: "/ko/api/utils/random-int/",
            },
            {
              text: "randomStr",
              link: "/ko/api/utils/random-str/",
            },
            {
              text: "upperFirst",
              link: "/ko/api/utils/upper-first/",
            },
          ],
        },
      ],
    },
  },
} satisfies LocaleConfig;
