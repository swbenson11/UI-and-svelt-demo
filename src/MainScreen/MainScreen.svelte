<script>
  import Reader from "./Components/Reader/Reader.svelte";

  import Button from "./../Ui/Button/Button.svelte";
  import BottomOverlay from "./../Ui/BottomOverlay/BottomOverlay.svelte";

  let readerOpen = false;
  //these fuctions are used multiple times
  const openReader = () => {
    readerOpen = true;
  };
  const closeReader = () => {
    readerOpen = false;
  };

  let homePageOpen = false;
  const closehomePage = () => {
    homePageOpen = false;
  };
</script>

<style src="./MainScreen.scss">

</style>

<div class="mainScreen screen">
  <div style="display:block">
    <img src="images/logo-color.png" alt="Smart Access" class="top-logo" />
  </div>
  <img
    src="images/reader.png"
    alt="Phone"
    class="center-image"
    on:click={openReader} />

  <h2>Enable NFC Reader</h2>
  <p class="focused-font">
    Open the NFC reader on your iPhone to read the tag.
  </p>

  <Button label="Open Reader" onClick={openReader} />

  <p>
    Already a user?
    <span class="link-text">Login</span>
  </p>

  <p
    class="link-text"
    on:click={() => {
      homePageOpen = true;
    }}>
    About Smart Access
  </p>

  <BottomOverlay visible={readerOpen} setInvisible={closeReader} height={50}>
    <Reader cancelFunction={closeReader} />
  </BottomOverlay>

  <BottomOverlay
    visible={homePageOpen}
    setInvisible={closehomePage}
    height={100}>
    <div style="margin:10px">
      <Button label="Close" onClick={closehomePage} />
    </div>
    <iframe title="Smart Access" src="https://smartaccess.io" />
  </BottomOverlay>
</div>
