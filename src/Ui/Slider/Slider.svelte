<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  export let hideFunction;
  export let componentArray = [];

  // closure will make lastElement and componentArray avalible
  const lastElement = componentArray.length;
  let prevElement = 0;
  const swipeCallback = (index, element) => {
    // Code to prevent users from sliding left to skip
    if (index === lastElement && prevElement === 0) {
      mySwipe.slide(1);
      return;
    }
    prevElement = index;
    if (index == lastElement) hideFunction();
  };

  onMount(async () => {
    let slider = document.getElementById("slider");
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

<style src="./Slider.scss">

</style>

<div id="slider" class="swipe">
  <div id="slider-wrapper" class="swipe-wrap">

    {#each componentArray as component}
      <div>
        <svelte:component this={component} />
      </div>
    {/each}
    <div>
      <!-- Empty element for last transition. -->
    </div>
  </div>
</div>
