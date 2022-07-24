<template>

  <div class="div1">

    <div class="div2 mask1" @animationend="animationend" ref="element1"
         :style="{'animation':animationTest,'animation-play-state':animationShow1}">
      <q-img width="100%" src="/gens-ball-bg-1.png"></q-img>
    </div>


    <div class="div2 mask2" :style="{'animation-play-state':animationShow2}">
      <q-img width="100%" src="/gens-ball-bg-2.png"></q-img>
    </div>


    <div class="div2 mask3" :style="{'animation-play-state':animationShow3}">
      <q-img width="100%" src="/gens-ball-bg-3.png"></q-img>
    </div>

    <div class="div2 mask4" :style="{'animation-play-state':animationShow4}">
      <q-img width="100%" src="/gens-bg.png"></q-img>
    </div>


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
      animationTest: 'animate 6s linear both',
      animationShow1: 'paused',
      animationShow2: 'paused',
      animationShow3: 'paused',
      animationShow4: 'paused',
      direction: 'alternate',
      scrollDown: true,
      scrollActionY: 0,
      element1: ref(),
    })

    function scrollFunc() {
      if (!data.scrollActionY) data.scrollActionY = window.pageYOffset;
      const diffY = data.scrollActionY - window.pageYOffset;
      data.scrollDown = diffY <= 0;
      data.scrollActionY = window.pageYOffset;
    }

    const animationend = () => {
      const reg = RegExp(/animate/);
      if (!data.animationTest.match(reg)) data.animationTest = 'animateRest 6s linear  both'
    }
    watch(() => data.element1, () => {
      console.log('相对高度', data.element1.offsetTop)
    })


    onMounted(() => {
      window.addEventListener("scroll", onScroll, true);
    })

    const onScroll = () => {
      scrollFunc();
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= 10) data.animationShow1 = "running"


      if (!data.scrollDown && scrollTop < 10) {
        console.log('向上滑动')
        data.animationTest = 'animateDown 6s linear  both'
        data.animationShow1 = "running"
      }

      if (scrollTop >= 60) {
        data.animationShow2 = "running"
        data.animationShow3 = "running"
      }

      if (scrollTop >= 90) data.animationShow4 = "running"

      console.log("滚动距离" + data.scrollDown, scrollTop);
    }

    return {...toRefs(data), animationend};
  }
});
</script>

<style>

.div1 {
  width: 100%;
  background-color: black;
  font-size: 30px;
  height: 120vh;
  position: absolute;
}

.div2 {
  width: 100%;
  height: 50vh;
  position: absolute;
  left: 0;
  bottom: 0;
}


.mask1 {
  width: 100%;
  height: 100%; /* 高度是变量 */
  position: absolute;
  left: 0;
  top: 0; /* top是变量 */
}

.mask2 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: animate 6s ease-in 1;
}


.mask3 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: animate 6s ease-in-out 1;
}

.mask4 {
  width: 100%;
  height: 80%;
  position: absolute;
  left: 0;
  top: 0;
  animation: animateEnd 3s ease-in-out 1;
  animation-delay: 4s;
  animation-fill-mode: both;
}


@keyframes animateEnd {
  from {
    top: 100%;
  }
  to {
    top: 10%;
  }
}

@keyframes animate {
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
}

@keyframes animateRest {
  from {
    top: 100%
  }
  to {
    top: 0
  }
}

@keyframes animateDown {
  from {
    top: 0
  }
  to {
    top: 100%
  }
}

</style>
