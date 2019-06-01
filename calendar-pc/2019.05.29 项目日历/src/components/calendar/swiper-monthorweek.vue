<template>
  <div class="calendarBox" ref="format"
       style="overflow:hidden;">
    <div style="height: 100%;white-space: nowrap" :style="{transform: 'translate3d('+calendarMove.x+'px,'+calendarMove.y+'px,0px)'}" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        calendarMove:{
          x:0,
          y:0
        },
      }
    },
    props:['checkDate'],
    created(){
    },
    watch:{
      checkDate(val){
        if(val){
          this.line_num = this.calc_line_num(val)
          // console.log(this.line_num,'行')
        }
      }
    },
    methods:{
      calc_line_num(day){
        //计算今天在第几行
        var year = day.getFullYear()
        var month = day.getMonth()
        var dt_first = new Date(year,month,1)   //每个月第一天
        var space = (dt_first.getDay() - 1 + 7) % 7   //月历前面空格
        //console.log(space + day.getDate())
        return parseInt((space + day.getDate() - 1) / 7)
      }
    }
  }
</script>
<style scoped>
  .calendarBox{
    height: calc( 100% - 30px );
    /*background: #4188d8;*/
  }
</style>
