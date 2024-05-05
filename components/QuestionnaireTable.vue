<template>
  <table class="table">
    <tr>
      <th v-for="(title, index) in props.titles">{{ title }}</th>
    </tr>
    <tr>
      <td>
        <ec-svg-renderer class="item-chart" @click="console.log">
          <ec-legend :orient="'vertical'" :right="0" :bottom="0" :data="['21岁以下', '21-25岁', '26-30岁', '31-35岁', '36-50岁', '50岁以上']" />
          <ec-grid :data="{left: 0}" />
          <ec-tooltip />
          <ec-pie-chart
            :radius="['40%', '80%']"
            :label="{show: true, position: 'inside',formatter: '{d}%'}"
            :data="[
        { value: 2571, name: '21岁以下' },
        { value: 2640, name: '21-25岁' },
        { value: 1737, name: '26-30岁' },
        { value: 1520, name: '31-35岁' },
        { value: 1360, name: '36-50岁' },
        { value: 171, name: '50岁以上' }]"
            @click="console.log"
          />
        </ec-svg-renderer>
      </td>
      <td>
        <ec-svg-renderer class="item-chart" @click="console.log" width="700">
          <ec-legend :data="['sales']" />
          <ec-tooltip />
          <ec-x-axis
            :data="[
              'Shirts',
              'Cardigans',
              'Chiffons',
              'Pants',
              'Heels',
              'Socks',
            ]"
          />
          <ec-y-axis />
          <ec-bar-chart
            name="sales"
            :data="[5, 20, 36, 10, 10, 20]"
            @click="console.log"
          />
        </ec-svg-renderer>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import 'echarts-jsx/dist/renderers/SVG';
import 'echarts-jsx/dist/components/title';
import 'echarts-jsx/dist/components/legend';
import 'echarts-jsx/dist/components/tooltip';
import 'echarts-jsx/dist/components/x-axis';
import 'echarts-jsx/dist/components/y-axis';
import 'echarts-jsx/dist/components/grid';
import 'echarts-jsx/dist/charts/bar';
import 'echarts-jsx/dist/charts/pie';

const props = defineProps<{
  titles: string[];
  bar?: number;
}>();
const headers = ref(["Header1", "Header2", "Header3"]);
const datas = ref(["Data1", "Data2", "Data3"]);
</script>

<style lang="less" scoped>
.table {
  tr {
    display: flex;
    flex: 1;
    th,
    td,
    .item-chart {
      display: flex;
      flex: 1;
    }
    th {
      align-items: center;
      justify-content: center;
    }
    td {
      background-color: #ffffff;
    }
    .item-chart {
      min-height: 230px;
    }
  }
}
</style>
