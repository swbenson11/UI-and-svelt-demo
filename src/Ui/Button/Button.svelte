<script>
  export let onClick;
  export let label;
</script>

<style src="./Button.scss">

</style>

<button on:click={onClick}>{label}</button>
