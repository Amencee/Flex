<template>


  <div style="background-image: url('/gens-ball-bg-1.png');background-size: cover;height: 200vh"
       :style="{backgroundPositionY:top}">

    <q-img src="/gens-ball-bg-2.png" style="position: absolute"></q-img>
    <q-img src="/gens-ball-bg-3.png" style="position: absolute"></q-img>
  </div>


</template>

<script lang="ts">
import ExampleComponent from 'src/components/ExampleComponent.vue';
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {ExampleComponent},
  setup() {
    const data = reactive({
      animationTest: 'animate 3s linear both',
      animationShow1: 'running',
      animationShow2: 'paused',
      animationShow3: 'paused',
      animationShow4: 'paused',
      direction: 'alternate',
      scrollDown: true,
      scrollActionY: 0,
      element1: ref(),
      display: 'block',
      top: 0,
    })


    onMounted(() => {
      window.addEventListener("scroll", onScroll, true);
    })


    const onScroll = () => {
      const position = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      data.top = 0.6 * position;
    }


    return {...toRefs(data)};
  }
});
</script>

<style>


</style>
