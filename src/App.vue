<template>
  <header-top-component />
  <header-component />
  <preloader-component />
  <router-view/>
  <footer-component />
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
import HeaderTopComponent from "@/components/HeaderTopComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent, PreloaderComponent, HeaderTopComponent },
}
</script>