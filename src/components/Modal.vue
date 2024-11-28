<template>
  <!-- 아래는 Modal창 정의 -->
  <div class="modal" v-if="isModal">   
    <div class="inner" @click="isModal=false">
      <h3> {{ movieList[selectedMovie].title }} </h3>
      <!-- <button  selectedMovie=index" >상세보기버튼에서 
           입력된 index값의 selectedMovie를 가져와서 제목을 보여준다 -->
      <p>영화 상세정보</p>
      <button @click="isModal=false">닫기</button>
      <!-- isModal이 App.vue에 있기 때문에 이 변수를 전달 받는다. -->
    </div>
   </div>
</template>

<script>
    export default{
        name:'ModalComponent',
    }
</script>

<style>

</style>


