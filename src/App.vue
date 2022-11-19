<template>
  <header-top-component />
  <header-component />
  <preloader-component />
  <router-view />
  <footer-component />
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
import HeaderTopComponent from "@/components/HeaderTopComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    HeaderTopComponent,
  },
  data() {
    return {
      tawkToPropertyId: "6379189eb0d6371309cffaf8",
      wigdetId: "1gi8ggbee",
    };
  },
  mounted() {
    this.loadScript();
  },
  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://embed.tawk.to/" + this.tawkToPropertyId + "/" + this.wigdetId;
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    },
  },
};
</script>