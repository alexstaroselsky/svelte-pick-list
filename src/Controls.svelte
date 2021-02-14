<script>
  import { createEventDispatcher } from "svelte";

  export let selectedKeys = [[], []];
  export let controlLabels = ["&#171;", "&#8249;", "&#8250;", "&raquo;"];

  const dispatch = createEventDispatcher();

  function moveLeft() {
    dispatch("moveLeft");
  }

  function moveAllLeft() {
    dispatch("moveAllLeft");
  }

  function moveRight() {
    dispatch("moveRight");
  }

  function moveAllRight() {
    dispatch("moveAllRight");
  }

  $: isLeftDisabled = selectedKeys[1].length === 0;
  $: isRightDisabled = selectedKeys[0].length === 0;
</script>

<div class="pick-list-controls">
  <div>
    <button class="btn" type="button" on:click={moveAllLeft}>
      <span>{@html controlLabels[0]}</span>
    </button>
  </div>
  <div>
    <button
      class="btn"
      type="button"
      on:click={moveLeft}
      disabled={isLeftDisabled}
    >
      <span>{@html controlLabels[1]}</span>
    </button>
  </div>
  <div>
    <button
      class="btn"
      type="button"
      on:click={moveRight}
      disabled={isRightDisabled}
    >
      <span>{@html controlLabels[2]}</span>
    </button>
  </div>
  <div>
    <button class="btn" type="button" on:click={moveAllRight}>
      <span>{@html controlLabels[3]}</span>
    </button>
  </div>
</div>

<style>
  .pick-list-controls {
    display: grid;
    align-items: center;
  }

  @media (max-width: 576px) {
    .pick-list-controls {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 16px;
    }
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }

  .btn:hover {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
  }

  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }

  .btn:disabled {
    pointer-events: none;
    opacity: 0.65;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
</style>
