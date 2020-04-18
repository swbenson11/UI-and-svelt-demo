<script>
  import Onboarding from "./Onboarding/Onboarding.svelte";
  import MainScreen from "./MainScreen/MainScreen.svelte";

  let showOnboardingScreen = true;

  const runTransition = () => {
    document.getElementById("fade-out-div").style.opacity = "0";

    setTimeout(() => {
      showOnboardingScreen = false;
      document.getElementById("fade-out-div").style.opacity = "1";
    }, 300);
  };
</script>

<style src="./App.scss">

</style>

<main>
  <div id="fade-out-div" class="fade-out-div">
    {#if showOnboardingScreen}
      <Onboarding hideFunction={runTransition} />
    {:else}
      <MainScreen />
    {/if}
  </div>
</main>
