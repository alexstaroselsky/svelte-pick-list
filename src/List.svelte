<script>
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      console.log(style.transform);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });

  export let data = [];
  export let selectedKeys = [];
  export let renderFormat = (item) => item.label || item.key;
  export let sortFn = (a, b) => a.key.localeCompare(b.key);
  export let title = "Select All";

  const handleAllChange = (event) => {
    selectedKeys = event.target.checked
      ? data.filter((d) => !d.disabled).map((d) => d.key)
      : [];
  };

  $: keys = data.filter((d) => !d.disabled).map((d) => d.key);
  $: areAllSelected = keys.length && keys.length === selectedKeys.length;
  $: isAllDisabled = keys.length === 0;
  $: sortedData = data.slice().sort(sortFn);
  $: indeterminate =
    selectedKeys.length > 0 && selectedKeys.length < keys.length;
</script>

<div class="list">
  <div class="heading">
    <label class="checkbox" class:disabled={isAllDisabled}>
      <input
        type="checkbox"
        checked={areAllSelected}
        on:change={handleAllChange}
        bind:indeterminate
        disabled={isAllDisabled}
      />
      <span class="content">{title}</span>
    </label>
  </div>
  <div class="foo">
    {#each sortedData as item (item.key)}
      <div
        class="item"
        class:selected={selectedKeys.includes(item.key)}
        class:disabled={item.disabled}
        in:receive={{ key: item.key }}
        out:send={{ key: item.key }}
      >
        <label class="checkbox" class:disabled={item.disabled}>
          <input
            type="checkbox"
            value={item.key}
            bind:group={selectedKeys}
            disabled={item.disabled}
          />
          <span class="content">{renderFormat(item)}</span>
        </label>
      </div>
    {/each}
  </div>
</div>

<style>
  .list {
    border: solid 1px #eee;
    border-radius: 3px;
  }

  .body {
    height: 200px;
    overflow-y: auto;
  }

  .heading {
    background-color: #eee;
  }

  .heading label {
    padding: 12px;
  }

  label:not(.disabled):hover {
    cursor: pointer;
  }

  .item {
    position: relative;
    line-height: 1.2;
  }

  .item label {
    padding: 12px;
  }

  .item:not([disabled]) label:hover {
    background: #eee;
  }

  .item.disabled {
    color: rgba(0, 0, 0, 0.12);
  }

  .item.disabled label:hover {
    cursor: not-allowed;
  }

  .checkbox {
    cursor: pointer;
    display: block;
    line-height: 1.25;
    position: relative;
  }

  .checkbox input {
    cursor: pointer;
  }

  .checkbox input[disabled] {
    color: #7a7a7a;
    cursor: not-allowed;
  }
</style>
