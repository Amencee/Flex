<template>
  <q-page class="row ">

    <span>box-container-column-between</span>
    <div class="bg-positive box-container-column-start">
      <template v-for="(i,index) in 10" :key="index">
        <div class="box">
          <span>{{ index }}</span>

        </div>
      </template>
    </div>


    <span>box-container-column-end</span>
    <div class="bg-positive box-container-column-end">
      <template v-for="(i,index) in 10" :key="index">
        <div class="box">
          <span>{{ index }}</span>

        </div>
      </template>
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


.box-container-column-start {
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.box-container-column-end {
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
}


.box-container-column-center {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}

.box-container-column-around {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
}




.box {
  height: 40px;
  width: 40px;
  background: red;
}

</style>
