<template >
  <div  class="event">
    <p style="color: red;">{{textApp}}</p>
  </div>
</template>

<script>
export default {
  name:'EventComponent',  // <Event />태그를 사용하기 위해 이런식으로 등록
  props:{
    textApp:String,   //App.vue에서 받아온 것(<Event :textApp="textEvent"/>)을 등록
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