<template>
  <h1>상영 영화</h1>

  <div v-for="(list, id) in movieList" :key="id" class="item">
    <!-- v-for는 :key=""를 지정해줘야 한다 -->
   
    <figure>
      <img :src="`${list.url}`" :alt="list.title" width="200">
      <!-- html 태그 속성에 동적자료를 연결할려면 :('v-bind:')를 사용한다. -->
       <!-- `${}` :백틱 문법이라고 하는데 ``안에 문자와 변수를 같이 작성하는것이 가능하다. -->
    </figure>

    <div class="info">
      <h3 class="bg-color" :style="list.fontColor">제목:{{ list.title }}</h3>
      <p>연도:{{ list.year }}</p>
      <p>장르:{{ list.category }}</p> 
      <button @click="increase(id)">좋아요</button> <span>{{ list.count }}</span>
    </div>

    
    
</div>
</template>

<script>
 
  export default{
    data(){
      return{
         movieList:[{
          title:'노량',
          year:'2024',
          category:'액션, 드라마',
          fontColor:'color:red',
          count:0,   //각각의 좋아요버튼의 숫자를 증가시키이 위한 자료형
          url:'./img/노량.jpg',
         },
         {
          title:'아쿠아맨',
          year:'2022',
          category:'액션, 드라마',
          fontColor:'color:blue',
          count:0,
          url:'./img/아쿠아맨.jpg',
         },
        ]
      }
    },  //data()
    methods:{
      increase(id){
         this.movieList[id].count++   //movieList[]배열 안에 담긴 객체의 count를 증가시킨다.
        //  옵션 API를 사용하여 옵션의 data, methods 및 mounted 같은 객체를 사용하여 컴포넌트의 로직를 정의합니다. 
        // 옵션으로 정의된 속성은 컴포넌트 인스턴스를 가리키는 함수 내부의 this에 노출됩니다
      }
    }  //methods:
  }

</script>

<style>
 .bg-color{
  background-color: yellow;
 }

 *{
  box-sizing: border-box;
  margin: 0;
 }

 body{
  max-width: 768px;
  margin: 0 auto;
 }

 h1, h2, h3{
  margin-bottom: 1rem;
 }

 p{
  margin-bottom: 0.5rem;
 }

 .item{
  width: 100%;
  border:1px solid blue;
  display:flex;
  margin-bottom: 20px;
  padding:1rem;
 }

 .item figure{
  width: 40%;
  margin-right: 1rem;
 }

 .item img{
  width: 100%;
 }

 .item .info{
  width: 100%;
 }
</style>
