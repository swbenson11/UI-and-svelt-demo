<script>
  import Assess from "./Components/Assess.svelte";
  import Educate from "./Components/Educate.svelte";
  import Empower from "./Components/Empower.svelte";
  import Slider from "../Ui/Slider/Slider.svelte";

  export let hideFunction;
</script>

<style src="./Onboarding.scss">

</style>

<div class="onboarding screen">
  <img src="images/logo-white.png" alt="Smart Access" class="top-logo" />

  <Slider {hideFunction} componentArray={[Educate, Assess, Empower]} />

  <!--  I'm aware that I'm missing the 3 dots, I kinda of assumed it came with the library used
        In those pics -->

  <p class="link-text" on:click={hideFunction}>Skip Tour</p>

  <p>
    Already a user?
    <span class="link-text">Login</span>
  </p>
</div>
