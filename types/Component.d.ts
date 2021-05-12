/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type PickListItem = {
  [key: string]: any;
} & ({ label: string } | { key: string });

export interface PickListProps {
  /**
   * @default [[], []]
   */
  data?: [PickListItem[], PickListItem[]];

  /**
   * @default [[], []]
   */
  selectedKeys?: [string[], string[]];

  /**
   * @default (item) => item.label || item.key
   */
  renderFormat?: (item: PickListItem) => string;

  /**
   * @default (a, b) => a.key.localeCompare(b.key)
   */
  sortFn?: (a: PickListItem, b: PickListItem) => number;

  /**
   * @default ["Available", "Selected"]
   */
  titles?: [string, string];
}

export default class PickList extends SvelteComponentTyped<
  PickListProps,
  {
    move: CustomEvent<any>;
    moveAll: CustomEvent<any>;
    selectAll: CustomEvent<any>;
  },
  {}
> {}
