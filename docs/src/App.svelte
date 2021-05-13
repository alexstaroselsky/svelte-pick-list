<script>
  import PickList from "../../src/Component.svelte";

  let data1 = [
    [
      {
        key: "1",
        label: "Content 1",
        disabled: false,
      },
      {
        key: "2",
        label: "Content 2",
        disabled: true,
      },
      {
        key: "3",
        label: "Content 3",
        disabled: false,
      },
      {
        key: "4",
        label: "Content 4",
        disabled: false,
      },
    ],
    [
      {
        key: "5",
        label: "Content 5",
        disabled: false,
      },
      {
        key: "6",
        label: "Content 6",
        disabled: true,
      },
    ],
  ];

  let data2 = [
    [
      {
        key: "1",
        label: "Content 1",
        disabled: false,
        img: "https://via.placeholder.com/64",
      },
      {
        key: "2",
        label: "Content 2",
        disabled: true,
        img: "https://via.placeholder.com/64",
      },
      {
        key: "3",
        label: "Content 3",
        disabled: false,
        img: "https://via.placeholder.com/64",
      },
      {
        key: "4",
        label: "Content 4",
        disabled: false,
        img: "https://via.placeholder.com/64",
      },
    ],
    [
      {
        key: "5",
        label: "Content 5",
        disabled: false,
        img: "https://via.placeholder.com/64",
      },
      {
        key: "6",
        label: "Content 6",
        disabled: true,
        img: "https://via.placeholder.com/64",
      },
    ],
  ];

</script>

<div class="app">
  <main class="main">
    <div>
      <h1>Svelte Pick List</h1>
      <p>Svelte component to reoder items between different lists.</p>
    </div>

    <hr />
    <br />

    <div>
      <h2>Basic</h2>
      <div>
        <div>Data:</div>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>

      <br />

      <PickList bind:data={data1} />
    </div>

    <br />

    <div>
      <h2>Custom Item (Slot)</h2>
      <div>
        <div>Data:</div>
        <pre>{JSON.stringify(data2, null, 2)}</pre>
      </div>

      <br />

      <PickList bind:data={data2}>
        <svelte:fragment slot="item" let:item>
          <div class="item">
            <div>
              <img src={item.img} alt={item.label} />
            </div>
            <div class="item-label">{item.label}</div>
          </div>
        </svelte:fragment>
      </PickList>
    </div>
  </main>
</div>

<style>
  .app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    padding: 0;
  }

  .main {
    padding: 24px;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item-label {
    margin-left: 8px;
  }

</style>
