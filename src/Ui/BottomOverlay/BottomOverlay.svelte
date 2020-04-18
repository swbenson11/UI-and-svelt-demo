<script>
  import { onMount } from "svelte";

  export let visible;
  export let setInvisible;
  export let height;

  $: currentHeight = visible ? height : 0;
</script>

<style src="./BottomOverlay.scss">

</style>

{#if visible}
  <div class="transparency" on:click={setInvisible} />
{/if}

<div
  id="overlay-content"
  style="height: {currentHeight}%; top: {100 - currentHeight}%;"
  class="slider">

  <slot />
</div>
