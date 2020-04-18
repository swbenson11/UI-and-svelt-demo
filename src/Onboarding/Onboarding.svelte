<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  import Assess from "./Components/Assess.svelte";
  import Educate from "./Components/Educate.svelte";
  import Empower from "./Components/Empower.svelte";

  export let hideFunction;

  onMount(async () => {
    // At mount time calculate slider-wrapper children
    const lastElement =
      document.getElementById("slider-wrapper").children.length - 1;
    // closure will make lastElement avalible
    const swipeCallback = (index, element) => {
      if (index == lastElement) hideFunction();
    };

    let slider = document.getElementById("slider");
    if (slider === null) console.log("swipe not found");
    window.mySwipe = new Swipe(slider, {
      startSlide: 0,
      draggable: true,
      autoRestart: false,
      continuous: true,
      disableScroll: true,
      stopPropagation: true,
      callback: swipeCallback
    });
  });
</script>

<style src="./Onboarding.scss">

</style>

<div class="onboarding screen">
  <img src="images/logo-white.png" alt="Smart Access" class="top-logo" />

  <div id="slider" class="swipe">
    <div id="slider-wrapper" class="swipe-wrap">
      <div>
        <Educate />
      </div>
      <div>
        <Assess />
      </div>
      <div>
        <Empower />
      </div>
      <div>
        <!-- Empty element for last transition. -->
      </div>
    </div>
  </div>

  <!--  I'm aware that I'm missing the 3 dots, I kinda of assumed it came with the library used
        In those pics -->

  <p class="link-text" on:click={hideFunction}>Skip Tour</p>

  <!-- TODO bottom of the screen -->
  <p>
    Already a user?
    <span class="link-text">Login</span>
  </p>
</div>
