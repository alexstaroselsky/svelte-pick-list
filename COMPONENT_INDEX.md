# Component Index

## Components

- [`PickList`](#picklist)

---

## `PickList`

### Props

| Prop name    | Kind             | Reactive | Type                                                    | Default value                                           | Description |
| :----------- | :--------------- | :------- | :------------------------------------------------------ | ------------------------------------------------------- | ----------- |
| selectedKeys | <code>let</code> | Yes      | <code>[[], []]</code>                                   | <code>[[], []]</code>                                   | --          |
| data         | <code>let</code> | Yes      | <code>[[], []]</code>                                   | <code>[[], []]</code>                                   | --          |
| renderFormat | <code>let</code> | No       | <code>(item) => item.label &#124;&#124; item.key</code> | <code>(item) => item.label &#124;&#124; item.key</code> | --          |
| sortFn       | <code>let</code> | No       | <code>(a, b) => a.key.localeCompare(b.key)</code>       | <code>(a, b) => a.key.localeCompare(b.key)</code>       | --          |
| titles       | <code>let</code> | No       | <code>["Available", "Selected"]</code>                  | <code>["Available", "Selected"]</code>                  | --          |

### Slots

None.

### Events

| Event name | Type       | Detail |
| :--------- | :--------- | :----- |
| move       | dispatched | --     |
| moveAll    | dispatched | --     |
| selectAll  | dispatched | --     |
