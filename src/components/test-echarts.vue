<template>
  <div>
    <map-HK></map-HK>
    <connectNulls></connectNulls>
  </div>
</template>
<script>
  import MapHK from './test-echarts/map-HK'
  import ConnectNulls from './test-echarts/connectNulls'
  export default {
    components:{
      'map-HK': MapHK,
      'connectNulls': ConnectNulls
    }
  }
</script>
