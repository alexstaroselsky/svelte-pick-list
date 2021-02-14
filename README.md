# svelte-pick-list

Svelte component to reorder items between different lists.

## API

### PickList (Default)

Svelte component comprised of two lists arranged using CSS List Layout with button controls.

#### Props

| Name         | Type                                                           | Required | Default                              | Description                                                                                 |
| ------------ | -------------------------------------------------------------- | -------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| data         | Array<Array.<{key: String, label: String, disabled: Boolean}>> | false    | [[], []]                             | Nested arrays of data. Each nested array should include key, label and disabled properties. |
| selectedKeys | Array<Array<String>>                                           | false    | [[], []]                             | Nested array of selected list keys                                                          |
| renderFormat | Function: String                                               | false    | (item) => item.label \|\| item.key   | Function for rendering item label                                                           |
| sortFn       | Function: Array                                                | false    | (a, b) => a.key.localeCompare(b.key) | Function for sorting items in each list                                                     |
| titles       | Array<String>                                                  | false    | ["Available", "Selected"]            | Array of titles/headings to render                                                          |

## Installation

```bash
npm install svelte-pick-list
```

## Usage

```html
<script>
  import PickList from "svelte-pick-list";

  let data = [
    [
      { key: "1", label: "Content 1", disabled: false },
      { key: "2", label: "Content 2", disabled: true },
      { key: "3", label: "Content 3", disabled: false },
      { key: "4", label: "Content 4", disabled: false },
    ],
    [
      { key: "5", label: "Content 5", disabled: false },
      { key: "6", label: "Content 6", disabled: true },
    ],
  ];
</script>

<PickList bind:data />
```

## Todo

- [ ] Allow custom components for list items
- [ ] Allow custom components for controls
- [ ] Allow custom styles
- [ ] Allow custom list object data structure
- [ ] Allow custom animation
