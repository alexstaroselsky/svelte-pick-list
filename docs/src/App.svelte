<script>
  import PickList from "../../src/Component.svelte";

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

<main>
  <div>
    <div>Data:</div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>

  <br />

  <PickList bind:data />
</main>
