<template >
  <div  class="event">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name:'EventComponent',
  props:{
    text:String,   //App.vue에서 받아온 것을 등록
  }   
}
</script>

<style >
  .event {
    background: #444;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
  }

  .event p {
    margin: 0;
    
  }
</style>