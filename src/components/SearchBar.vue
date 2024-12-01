<template>
  <div class="search-box">
    <input type="search" placeholder="검색을 입력하세요" @change="inputText=$event.target.value">
    <!-- @change:입력내용을 엔터키치거나 확인버튼을 누를 때 처리됨 , $event.target:현재입력을 받고 있는 요소명, value:해당요소의 입력된 값 -->
    <button>검색</button>
  </div>

  <p>{{inputText}}</p>
</template>
<script>

export default {
  name:"SearchBarComponen",

    data(){
    return{
      inputText:'',
      answear:'',
      seletedMovie:0, 

    }
  },
  props:{
    movieListApp:Array,
    

  },

  watch:{
    //해당 변수의 상태를 보기 위해서는 보고자 하는 변수명과 같은 이름으로 함수를 만들면 된다.
    inputText(name){  //입력한 영화제목이 데이터에 있는지 확인 
      const findName=this.movieListApp.filter(movie=> {  
                           //filter함수는 배열의 각 요소를 순회하며 callback함수를 실행하며 조건에 맞는 요소만을 갖는 배열을 반환합니다. 
        return movie.title.includes(name);  //includes(값) 배열안에 값이 있는지 boolean 값으로 반환
      })
     
      if(findName.length==0){ 
         this.inputText='There is No title';
      } 
    }
  }
}
</script>
<style>
  .search-box{
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .search-box input{
    padding-block: 5px 10px;
  }

  .search-box button{
    margin: 0;
  }
</style>