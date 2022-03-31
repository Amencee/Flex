<template>
  <q-page class="row ">
    <!--
        垂直水平居中：水平居中 justify-content: center
        垂直水平居中：垂直居中 align-items: center
    -->

    <div class="box-detail-base">

      <div class="box" style="height: 40px;width: 20px;order: 2;flex-grow:1;  ">
        <div
            style="height: 10px;width: 10px;background: black;">

        </div>
      </div>
      <div class="box" style="height: 70px;width: 50px;order: 1;flex-grow:3">2</div>
      <div class="box" style="height: 60px;width: 30px;order: 3;flex-grow:3">3</div>
      <div class="box" style="height: 30px;width: 70px;order: 0;flex-grow:3;align-self: baseline">4</div>
      <div class="box" style="height: 60px;width: 50px;order: 5;flex-grow:3;align-self: flex-end">5</div>


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


.box-detail-base {
  background: #31CCEC;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between; /** 子元素的排列方式 居中 左右最齐**/
  align-items: center; /** 子元素基准线 居中 左右最齐**/
  align-content: flex-end;


}

.box {
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 0 5px;

}

</style>
