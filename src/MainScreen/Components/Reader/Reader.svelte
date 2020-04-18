<script>
  import Button from "../../../Ui/Button/Button.svelte";
  export let cancelFunction;
</script>

<style>
  h2 {
    font-size: 28px;
    font-weight: 400;
  }
</style>

<div>
  <h2>Ready to Scan</h2>
  <img src="images/tap-device-here.png" alt="tap-device-here" />
  <p>Hold your device near the tag to scan it</p>
  <Button label="Cancel" onClick={cancelFunction} />
</div>
