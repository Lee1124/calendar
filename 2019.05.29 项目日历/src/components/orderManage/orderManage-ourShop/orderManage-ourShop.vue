<template>
  <div id="orderManage-ourShop">
    <el-table
      :data="tableData"
      border
      style="width: 100%;text-align: center">
      <el-table-column
        label="操作"
        align="center">
        <template slot-scope=scope>
          <span> <a href="#">详情</a></span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        align="center"
        show-overflow-tooltip>
        <template slot-scope=scope>
          <span>{{scope.row.date}}(婚期)</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="hotel"
        align="center"
        show-overflow-tooltip
        label="酒店">
      </el-table-column>
      <el-table-column
        prop="hunQ"
        align="center"
        show-overflow-tooltip
        label="婚庆">
      </el-table-column>
      <el-table-column
        prop="keHu"
        align="center"
        show-overflow-tooltip
        label="客户">
      </el-table-column>
      <el-table-column
        prop="xm"
        align="center"
        show-overflow-tooltip
        sortable="custom"
        label="项目">
      </el-table-column>
      <el-table-column
        prop="zt"
        align="center"
        show-overflow-tooltip
        sortable="custom"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="xs"
        align="center"
        show-overflow-tooltip
        label="销售">
      </el-table-column>
      <el-table-column
        prop="ps"
        align="center"
        show-overflow-tooltip
        label="拍摄">
      </el-table-column>
      <el-table-column
        prop="hq"
        align="center"
        show-overflow-tooltip
        label="后期">
      </el-table-column>
      <el-table-column
        prop="kf"
        align="center"
        show-overflow-tooltip
        label="客服">
      </el-table-column>
      <el-table-column
        prop="price"
        align="center"
        show-overflow-tooltip
        sortable="custom"
        label="金额">
      </el-table-column>
      <el-table-column
        prop="ht"
        align="center"
        show-overflow-tooltip
        sortable="custom"
        label="合同">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  /*数据*/
  let dataObj = {
    tableData: [
      {
        date: '2016.05.02',
        hotel: '（成都）丽思卡尔顿酒店',
        hunQ: '喜来婚礼',
        keHu: '陈建州&范玮琪',
        xm: '高清双机(含快剪)',
        zt: '待安排拍摄',
        xs: '小李',
        ps: '小巫师',
        hq: '小娃',
        kf: '嘻嘻',
        price: '1000',
        ht: '1000',
      },{
        date: '2016.05.02',
        hotel: '（成都）丽思卡尔顿酒店',
        hunQ: '喜来婚礼',
        keHu: '陈建州&范玮琪',
        xm: '高清双机(含快剪)',
        zt: '待安排拍摄',
        xs: '小李',
        ps: '小巫师',
        hq: '小娃',
        kf: '嘻嘻',
        price: '1000',
        ht: '1000',
      },
    ]
  };
  /*方法*/
  let myMethods = {};
  export default {
    name: "orderManage-ourShop",
    data() {
      return dataObj;
    },
    methods: myMethods,
    created() {

    },
  }
</script>

<style scoped>

</style>
