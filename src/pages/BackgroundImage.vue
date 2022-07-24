<template>


  <div class="main"></div>
  <div class="main"></div>
  <div class="main"></div>
  <div class="main"></div>



</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const data = reactive({
      position: 0,
    })

    onMounted(() => {
      window.addEventListener("scroll", () => {
        data.position = window.scrollY;
      });
    })

    return {...toRefs(data)}
  }
});
</script>

<style lang="scss">


$img1: '/gens-ball-bg-1.png';

$img2: '/gens-ball-bg-2.png';

$img3: '/gens-ball-bg-3.png';
$img4: '/gens-bg.png';


.main {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 100vh;
  width: 100%;
  background-color: #1D1D1D;
}

h2 {
  font-weight: bold;
  font-size: 60px;
  padding: 8px 24px;
  border-radius: 24px;
  background: #eee;
}


div:nth-child(1) {
  background-image: url($img1);
  background-size: cover;
}

div:nth-child(2) {
  background-image: url($img2) ;
  background-size: cover;

}

div:nth-child(3) {
  background-image: url($img3);
  background-size: cover;

}

div:nth-child(4) {
  background-image: url($img4);
  background-size: cover;

}


</style>
