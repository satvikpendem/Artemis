<template>
  <header class="main-header">
    <nav>
      <!-- a tag will refresh the page on click, so don't add it yet -->
      <img id="logo" src="@/../public/assets/img/logo/logo_outline.svg" alt="logo_outline">
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
};
</script>

<style scoped>
.main-header {
  height: 3rem;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
}

#logo {
  height: 2rem;
}
</style>
