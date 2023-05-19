import type { Component } from "vue";

export type ComponentAs = string | Component;

export type MaybeArray<T> = T | T[];
export type MaybePromise<T> = T | PromiseLike<T>;