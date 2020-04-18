<script>
  import Onboarding from "./Onboarding/Onboarding.svelte";
  import MainScreen from "./MainScreen/MainScreen.svelte";

  let showOnboardingScreen = true;
  let opacity = 1;

  const runTransition = () => {
    opacity = 0;

    setTimeout(() => {
      showOnboardingScreen = false;
      opacity = 1;
    }, 300);
  };
</script>

<style src="./App.scss">

</style>

<main>
  <div id="fade-out-div" class="fade-out-div" style="opacity: {opacity}">
    {#if showOnboardingScreen}
      <Onboarding hideFunction={runTransition} />
    {:else}
      <MainScreen />
    {/if}
  </div>
</main>
