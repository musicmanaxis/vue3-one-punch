<template>
  <div class="search-box">
    <input type="search" 
    @change="
    $emit('searchMovie', $event.target.value);   //이벤트 처리시 2개이상 값을 넘길려면 각 값마다 세미콜론(;)을 붙여야 한다.
    inputText=$event.target.value;    //v-model=inputText를 해도 되나 한글자만 입력해도 바로 반응해서 @change사용
    $event.target.value='';   //  한번 입력을 하고나면 빈칸으로 초기화되게 보이게 한다.
    "   
    placeholder="검색을 입력하세요"  
    >  
    <!-- @change:입력내용을 엔터키치거나 확인버튼을 누를 때 처리됨 , $event.target:현재입력을 받고 있는 요소명, value:해당요소의 입력된 값 -->
    <!-- $event에서 $는 특정 프레임워크에서 특별한 의미를 가진 변수나 속성을 구분하기 위해 관습적으로 사용 -->
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

      inputText(name){  //입력한 영화제목이 데이터에 있는지 확인 , 정의한함수(변경된 값, 변경이전 값)처럼 2개의 인자가 들어갈 수 있다.
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