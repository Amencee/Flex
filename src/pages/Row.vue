<template>
  <q-page class="row ">
    <q-btn label="flex 子元素" size="md" color="primary" to="/flexDetail"/>

    <div class="row">
      <span>box-container-row-between 交叉轴的起点对齐</span>
      <div class="box-base bg-positive box-container-row-between">
        <template v-for="(i,index) in 10" :key="index">
          <div class="box"
               :style="'height:'+ (index+Math.floor(Math.random()*10)+3) * Math.floor(Math.random()*10) +'px;'+';'+'width:'+ (index+Math.floor(Math.random()*10)+1) * Math.floor(Math.random()*10) +'px;'+';'+'flex-grow:'+index+'; align-self: auto;' ">
            <span>{{ index }}</span>
          </div>
        </template>


      </div>

      <span>box-container-row-center 交叉轴的终点对齐</span>

      <div class="box-base bg-positive box-container-row-center">
        <template v-for="(i,index) in 10" :key="index">
          <div class="box"
               :style="'height:'+ (index+Math.floor(Math.random()*10)+3) * Math.floor(Math.random()*10) +'px;'+';'+'width:'+ (index+Math.floor(Math.random()*10)+1) * Math.floor(Math.random()*10) +'px;align-self: flex-start;' ">

            <span>{{ index }}</span>
          </div>
        </template>


      </div>

      <span>box-container-row-around 交叉轴的中点对齐</span>

      <div class="box-base bg-positive box-container-row-around">
        <template v-for="(i,index) in 10" :key="index">
          <div class="box"
               :style="'height:'+ (index+Math.floor(Math.random()*10)+3) * Math.floor(Math.random()*10) +'px;'+';'+'width:'+ (index+Math.floor(Math.random()*10)+1) * Math.floor(Math.random()*10) +'px;align-self: flex-end;' ">

            <span>{{ index }}</span>
          </div>
        </template>


      </div>

      <span>box-container-row-star 项目的第一行文字的基线对齐。</span>

      <div class="box-base bg-positive box-container-row-start">
        <template v-for="(i,index) in 10" :key="index">
          <div class="box"
               :style="'height:'+ (index+Math.floor(Math.random()*10)+3) * Math.floor(Math.random()*10) +'px;'+';'+'width:'+ (index+Math.floor(Math.random()*10)+1) * Math.floor(Math.random()*10) +'px;align-self: center;'+'flex-grow:'+1 ">

            <span>{{ index }}</span>
          </div>
        </template>


      </div>

      <span>box-container-row-end 如果项目未设置高度或设为auto，将占满整个容器的高度。</span>

      <div class="box-base bg-positive box-container-row-end">
        <template v-for="(i,index) in 10" :key="index">
          <div class="box"
               :style="'height:'+ (index+Math.floor(Math.random()*10)+3) * Math.floor(Math.random()*10) +'px;'+';'+'width:'+ (index+Math.floor(Math.random()*10)+1) * Math.floor(Math.random()*10) +'px;' +';'+'flex-grow:'+index ">

            <span>{{ index }}</span>
          </div>
        </template>

      </div>

    </div>


  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'src/components/ExampleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {ExampleComponent},
  setup() {

    return {};
  }
});
</script>

<style>

.box-base {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.box-container-row-between {
  justify-content: space-between;
  align-items: flex-start;
}

.box-container-row-center {
  justify-content: center;
  align-items: flex-end;
}

.box-container-row-around {
  justify-content: space-around;
  align-items: center;
}

.box-container-row-start {
  justify-content: flex-start;
  align-items: baseline;
}

.box-container-row-end {
  justify-content: flex-end;
  align-items: stretch;

}

.box-container-row-end .box {
  height: auto;
}

.box {
  background: red;
  align-items: center;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  align-self: baseline;

}

</style>
