<script>
  import Onboarding from "./Onboarding/Onboarding.svelte";
  import MainScreen from "./MainScreen/MainScreen.svelte";

  let showOnboardingScreen = true;
  let animation = "";

  const runTransition = () => {
    animation = "animation: fade-out-and-in 800ms";

    setTimeout(() => {
      showOnboardingScreen = false;
    }, 400);
  };
</script>

<style src="./App.scss">

</style>

<main>
  <div id="fade-out-div" class="fade-out-div" style="{animation}">
    {#if showOnboardingScreen}
      <Onboarding hideFunction={runTransition} />
    {:else}
      <MainScreen />
    {/if}
  </div>
</main>
