<script setup lang="ts">
import SCardList from "@/components/SaviUI/S-Card-List.vue";
</script>
<template>
  <div class="overflow-y-scroll h-[30rem] sm:pr-5">
    <SCardList
      admin="Jorge Peralta"
      :score="5"
      service="Credito de libre consumo"
      state="Cerrado"
    />
  </div>
</template>
