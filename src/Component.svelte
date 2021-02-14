<script>
  import { send, receive } from "./crossfade";
  import Controls from "./Controls.svelte";

  export let data = [[], []];
  export let selectedKeys = [[], []];
  export let renderFormat = (item) => item.label || item.key;
  export let sortFn = (a, b) => a.key.localeCompare(b.key);
  export let titles = ["Available", "Selected"];

  function move(direction) {
    if (direction === "right") {
      data[1] = [
        ...data[1],
        ...data[0].filter((item) => selectedKeys[0].includes(item.key)),
      ];
      data[0] = data[0].filter((item) => !selectedKeys[0].includes(item.key));

      selectedKeys = [[], selectedKeys[1]];
    } else {
      data[0] = [
        ...data[0],
        ...data[1].filter((item) => selectedKeys[1].includes(item.key)),
      ];
      data[1] = data[1].filter((item) => !selectedKeys[1].includes(item.key));

      selectedKeys = [selectedKeys[0], []];
    }

    return;
  }

  function moveAll(direction) {
    if (direction === "right") {
      data = [
        [...data[0].filter((d) => d.disabled)],
        [...data[0].filter((d) => !d.disabled), ...data[1]],
      ];

      selectedKeys = [[], []];

      return;
    }

    data = [
      [...data[0], ...data[1].filter((d) => !d.disabled)],
      data[1].filter((d) => d.disabled),
    ];

    selectedKeys = [[], []];

    return;
  }

  function handleSelectAll(index) {
    selectedKeys[index] = data[index]
      .filter((d) => !d.disabled)
      .map((d) => d.key);
  }

  $: leftKeys = data[0].filter((d) => !d.disabled).map((d) => d.key);
  $: isAllLeftSelected =
    leftKeys.length && leftKeys.length === selectedKeys[0].length;
  $: isAllLeftDisabled = leftKeys.length === 0;
  $: leftIndeterminate =
    selectedKeys[0].length && selectedKeys[0].length < leftKeys.length;
  $: rightKeys = data[1].filter((d) => !d.disabled).map((d) => d.key);
  $: isAllRightSelected =
    rightKeys.length && rightKeys.length === selectedKeys[1].length;
  $: isAllRightDisabled = rightKeys.length === 0;
  $: rightIndeterminate =
    selectedKeys[1].length && selectedKeys[1].length < rightKeys.length;
</script>

<div class="pick-list">
  <div class="list">
    <div class="heading">
      <label class="label" class:disabled={isAllLeftDisabled}>
        <input
          type="checkbox"
          class="checkbox"
          on:change={() => handleSelectAll(0)}
          checked={isAllLeftSelected}
          bind:indeterminate={leftIndeterminate}
          disabled={isAllLeftDisabled}
        />
        <span class="content">{titles[0]}</span>
      </label>
    </div>
    <div class="body">
      {#each data[0].sort(sortFn) as item (item.key)}
        <div
          class="item"
          class:selected={selectedKeys.includes(item.key)}
          class:disabled={item.disabled}
        >
          <label
            class="label"
            in:receive={{ key: item.key }}
            out:send={{ key: item.key }}
          >
            <input
              type="checkbox"
              class="checkbox"
              value={item.key}
              bind:group={selectedKeys[0]}
              disabled={item.disabled}
            />
            <span class="content">{renderFormat(item)}</span>
          </label>
        </div>
      {/each}
    </div>
  </div>
  <Controls
    {selectedKeys}
    on:moveLeft={() => move("left")}
    on:moveRight={() => move("right")}
    on:moveAllLeft={() => moveAll("left")}
    on:moveAllRight={() => moveAll("right")}
  />
  <div class="list">
    <div class="heading">
      <label class="label" class:disabled={isAllRightDisabled}>
        <input
          type="checkbox"
          class="checkbox"
          on:change={() => handleSelectAll(1)}
          checked={isAllRightSelected}
          bind:indeterminate={rightIndeterminate}
          disabled={isAllRightDisabled}
        />
        <span class="content">{titles[0]}</span>
      </label>
    </div>
    <div class="body">
      {#each data[1].sort(sortFn) as item (item.key)}
        <div
          class="item"
          class:selected={selectedKeys.includes(item.key)}
          class:disabled={item.disabled}
        >
          <label
            class="label"
            in:receive={{ key: item.key }}
            out:send={{ key: item.key }}
          >
            <input
              type="checkbox"
              class="checkbox"
              value={item.key}
              bind:group={selectedKeys[1]}
              disabled={item.disabled}
            />
            <span class="content">{renderFormat(item)}</span>
          </label>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .pick-list {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr auto 1fr;
  }

  @media (max-width: 576px) {
    .pick-list {
      grid-template-columns: auto;
    }
  }

  .list {
    border: solid 1px #eee;
    border-radius: 3px;
  }

  .body {
    height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .heading {
    background-color: #eee;
  }

  .label {
    padding: 12px;
  }

  .label,
  .checkbox {
    cursor: pointer;
    position: relative;
  }

  .checkbox {
    vertical-align: baseline;
    margin: 0;
  }

  .item.disabled .label,
  .item.disabled .checkbox,
  .item.disabled .content {
    color: #7a7a7a;
    cursor: not-allowed;
  }

  .item.disabled .checkbox {
    color: #7a7a7a;
  }
</style>
