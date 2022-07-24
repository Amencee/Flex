<template>


  <div class="container">


  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
  }
});
</script>

<style lang="scss">


$img1: '/gens-ball-bg-1.png';

$img2: '/gens-ball-bg-2.png';

$img3: '/gens-ball-bg-3.png';


.container {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;

}

.img-1 {
  position: absolute;

  transform: translateZ(-1px) scale(2);
}

.img-2 {
  transform: translateZ(-2px) scale(3);
  position: absolute;

}

.img-3 {

  transform: translateZ(-3px) scale(4); //变快两倍
  position: absolute;

}

.img-4 {
  transform: translateZ(0px) scale(0.5); //变快两倍
  position: absolute;
}
</style>
