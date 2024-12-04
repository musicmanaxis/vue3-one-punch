<template>
  <div class="search-box">
    <input type="search" placeholder="검색을 입력하세요" 
    @change="inputText=$event.target.value;  
    $event.target.value=''     //  한번 입력을 하고나면 빈칸으로 초기화되게 보이게 한다, 이벤트를 2개이상 처리할수 있다.
    ">  <!-- @change:입력내용을 엔터키치거나 확인버튼을 누를 때 처리됨 , $event.target:현재입력을 받고 있는 요소명, value:해당요소의 입력된 값 -->
    <button>검색</button>
  </div>

  <p>{{inputText}}</p>
</template>
<script>

export default {
    name:"SearchBarComponent",

    data(){
    return{
      inputText:'',
     }
    },

    props:{
      movieListApp:Array,
    },

    watch:{  
    //watch는 데이터가 변경이 되면 작동을 한다...여기서는 입력하는 자체 타이핑이 아니라..엔터를 치거나 확인을 누른뒤 변경이 되어야 작동을 한다.
    //해당 변수의 상태를 보기 위해서는 보고자 하는 변수명과 같은 이름으로 함수를 만들면 된다.->선언한 변수를 가져와서 사용할 때는 메서드 형태로 작성한다.

      inputText(name){  //입력한 영화제목이 데이터에 있는지 확인 
        const findName=this.movieListApp.filter(movie=> {  
                           //filter함수는 배열의 각 요소를 순회하며 callback함수를 실행하며 조건에 맞는 요소만을 배열로 반환. 
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