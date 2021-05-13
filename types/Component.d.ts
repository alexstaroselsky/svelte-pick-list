/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PickListItem {
  key: string;
  label: string;
  [x: string]: any;
}

export interface PickListProps {
  /**
   * Items
   * @default [[], []]
   */
  data?: [PickListItem[], PickListItem[]];

  /**
   * Keys for selected items
   * @default [[], []]
   */
  selectedKeys?: [string[], string[]];

  /**
   * Function for rendering item label
   * @default (item) => item.label || item.key
   */
  renderFormat?: (item: PickListItem) => string;

  /**
   * Sort function for items
   * @default (a, b) => a.key.localeCompare(b.key)
   */
  sortFn?: (a: PickListItem, b: PickListItem) => number;

  /**
   * Titles for left and right sections
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
  { item: { item: any } }
> {}
