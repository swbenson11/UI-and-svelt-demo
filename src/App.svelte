<script>
  import Onboarding from "./Onboarding/Onboarding.svelte";
  import MainScreen from "./MainScreen/MainScreen.svelte";

  let showOnboardingScreen = true;
</script>

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
