import type { DefaultTheme, UserConfig } from "vitepress";

export type LocaleConfig = UserConfig<DefaultTheme.Config>["locales"][string];
