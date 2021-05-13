# Component Index

## Components

- [`PickList`](#picklist)

---

## `PickList`

### Types

```ts
export interface PickListItem {
  key: string;
  label: string;
  [x: string]: any;
}
```

### Props

| Prop name    | Kind             | Reactive | Type                                                      | Default value                                           | Description                        |
| :----------- | :--------------- | :------- | :-------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------- |
| selectedKeys | <code>let</code> | Yes      | <code>[string[], string[]]</code>                         | <code>[[], []]</code>                                   | Keys for selected items            |
| data         | <code>let</code> | Yes      | <code>[PickListItem[], PickListItem[]]</code>             | <code>[[], []]</code>                                   | Items                              |
| renderFormat | <code>let</code> | No       | <code>(item: PickListItem) => string</code>               | <code>(item) => item.label &#124;&#124; item.key</code> | Function for rendering item label  |
| sortFn       | <code>let</code> | No       | <code>(a: PickListItem, b: PickListItem) => number</code> | <code>(a, b) => a.key.localeCompare(b.key)</code>       | Sort function for items            |
| titles       | <code>let</code> | No       | <code>[string, string]</code>                             | <code>["Available", "Selected"]</code>                  | Titles for left and right sections |

### Slots

| Slot name | Default | Props                       | Fallback                                                   |
| :-------- | :------ | :-------------------------- | :--------------------------------------------------------- |
| item      | No      | <code>{ item: any } </code> | <code>&lt;span&gt;{renderFormat(item)}&lt;/span&gt;</code> |

### Events

| Event name | Type       | Detail |
| :--------- | :--------- | :----- |
| move       | dispatched | --     |
| moveAll    | dispatched | --     |
| selectAll  | dispatched | --     |
