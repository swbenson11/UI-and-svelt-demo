<script>
  import Onboarding from "./Onboarding/Onboarding.svelte";
  import MainScreen from "./MainScreen/MainScreen.svelte";

  let showOnboardingScreen = true;
</script>

<style src="./Css/Variables.scss">

</style>

<main>
  {#if showOnboardingScreen}
    <Onboarding
      hideFunction={() => {
        showOnboardingScreen = false;
      }} />
  {:else}
    <MainScreen />
  {/if}

</main>
