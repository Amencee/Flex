<template>

  <div class="div1">


    <div id="allPlatform">
      <div class="div2 mask1" @animationend="animationend" ref="element1">

        <q-img width="100%" src="/gens-ball-bg-1.png"></q-img>
      </div>
    </div>

    <!--  :style="{transform: `translateY(${yprecent})`,'animation':animationTest,'animation-play-state':animationShow1,display:display}">-->


    <!--    <div class="div2 mask2" :style="{'animation-play-state':animationShow2}">-->
    <!--      <q-img width="100%" src="/gens-ball-bg-2.png"></q-img>-->
    <!--    </div>-->


    <!--    <div class="div2 mask3" :style="{'animation-play-state':animationShow3}">-->
    <!--      <q-img width="100%" src="/gens-ball-bg-3.png"></q-img>-->
    <!--    </div>-->

    <!--    <div class="div2 mask4" :style="{'animation-play-state':animationShow4}">-->
    <!--      <q-img width="100%" src="/gens-bg.png"></q-img>-->
    <!--    </div>-->


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
      animationTest: 'animate 1s linear both',
      animationShow1: 'paused',
      animationShow2: 'paused',
      animationShow3: 'paused',
      animationShow4: 'paused',
      direction: 'alternate',
      scrollDown: true,
      scrollActionY: 0,
      element1: ref(),
      display: 'block',
      scrollTop: 0,
      yprecent: "0%",
    })


    const animationend = () => {
      const reg = RegExp(/animate/);
      if (!data.animationTest.match(reg)) data.animationTest = 'animateRest 6s linear  both'
    }

    watch(() => data.scrollTop, (current, pre) => {
      data.scrollDown = current > pre;
    })


    onMounted(() => {
      window.addEventListener("scroll", onScroll, true);
    })


    function goToSelector(selector) {
      const mainRoot = document.getElementById(selector);
      mainRoot?.scrollIntoView({behavior: "smooth"});
    }


    const onScroll = () => {
      data.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const elementMarginTop = data.element1.getBoundingClientRect().top;
      const screenHeight = document.documentElement.clientHeight;
      console.log(data.scrollDown, data.scrollTop)

      data.element1.style.transform = `translateY(-${ data.scrollTop }%)`
      // if (elementMarginTop < (screenHeight * 1.5 - 100) && data.scrollDown) {
      //   if (data.animationShow1 == 'running') return
      //   goToSelector('allPlatform');
      //   console.log('开始了上升', elementMarginTop, screenHeight)
      //   data.animationShow1 = "running";
      //   data.display = 'block';
      // }


      // if (!data.scrollDown && elementMarginTop + 300 > screenHeight) {
      //   console.log('向上滑动')
      //   data.animationTest = 'animateDown 1s linear  both'
      //   data.animationShow1 = "running"
      // }

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
}

.div2 {
  width: 100%;
  left: 0;
  bottom: 0;
}


.mask1 {
  width: 100%;
  height: 100%; /* 高度是变量 */
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
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
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
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

</style>
