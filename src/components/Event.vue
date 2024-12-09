<template >
  <div  :class="{show:isOpen}" class="event"  >   
    <!-- *1-1.div태그안에 클래스들은 가시효과 가부를 정하는 역할. style에서 클래스를 적용하여, 보이고 안보이고를 할수있음. 
              클래스를 동적으로 추가, 삭제하는 방법: show는 클래스명이고 우측은 값. true는 이벤트 글씨를 보이게 한다.-->
    <!--  {show:isOpen}-> json형태의 객체로, 클래스를 동적으로 정의. isOpen이 true이면 show 클래스가 적용.-->
    
    <p style="color: red;">{{textApp}}</p> <!--textApp: 글내용만 있음 -->
    <button @click="isOpen=false">닫기</button>
  </div>
</template>

<script>
export default {
  name:'EventComponent',  // <Event />태그를 사용하기 위해 이런식으로 등록
  props:{
    textApp:String,   //App.vue에서 받아온 것(<Event :textApp="textEvent"/>)을 등록
  },
  data(){
    return{
      isOpen:true,  //상태변수 
    }
  }   
}
</script>

<style >
  .event {
    background: #444;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    font-size: small;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
     /* 1-3. ./show클래스가 false가 되면 여기 display: none으로 적용되어 창이 닫히게 된다,*/
  }

  /* 1-2. 클래스를 동적으로 보여주기 위해 정의, 일단은 보이게..나중에 쓰인 클래스가 덮어쓴다.
  .event에서 display: none;으로 했지만, .show에서 display: flex;으로 덮어쓰게 된다*/
  .show{  
       display: flex;    
  }  

  .event p {
    margin: 0;
    
  }
</style>