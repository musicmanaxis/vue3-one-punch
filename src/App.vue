<template>
  <Navbar />
  <Event :text="text "/>
  <h1>상영 영화</h1>

  <div v-for="(list, index) in movieList" :key="index" class="item">
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
      <button @click="increase(index)">좋아요</button> 
      <span>{{ list.count }}</span>
      <p>
        <button @click="isModal=true; selectedMovie=index" >상세보기</button>
        <!-- v-for에서 정의한 index를 가져와서 사용 -->
        <!-- *이벤트가 값을 2가지 이상을 전달할 때 어떻게 하는지 주목 -->
      </p>
    </div>
  </div>
  <Modal :movieListApp="movieList"   
         :isModalApp="isModal" 
         :selectedMovieApp="seletedMovie" 
         @closeModal="isModal=false" />
  <!-- 태그안에 넘겨줄 데이터들을 나열할 때는 ','없이 나열한다. -->
  <!-- * :movieListApp="movieList" Modal.vue로 데이터를 넘겨줄때 v-bind:를 써서 movieListApp이름으로 넘겨준다...-->
  <!-- * @closeModal="isModal=false" Modal.vue에서 "$emit('closeModal')로 작성한 것을 이벤트 형식으로 가져다 쓴다. -->

    
</template>

<script>
  import movieList from './assets/movies.js';   //데이타가 많다면 별도의 js파일로 따로 저장하여 불러들인다.,
  import Navbar from './components/Navbar.vue'; //* 1-1.불러들인 컴포넌트는 하단에서 등록한다.
  import Event from './components/Event.vue';
  import Modal  from './components/Modal.vue';

 

  export default{
    name:'App',
    data(){
      return{
        movieList:movieList,  // * import한것을 이렇게 게시해주어야 template에서 사용가능
        isModal:false,    //상태전환 변수선언:modal창이 참이면 보이고 거짓이면 안보이게 하는것
        seletedMovie:0,   //상태변수:선택된 영화의 상세보기를 만들기 위해 선언, 일단 0으로 초기화
        text:'Netfilx 경성 크리처: 알려지지 않는 비밀!!!'
      }
    },  //data()

    methods:{
      increase(index){   //좋아요 버튼 숫자 늘리기함수
         this.movieList[index].count++   //movieList[]배열 안에 담긴 객체의 count를 증가시킨다.
        //  옵션 API를 사용하여 옵션의 data, methods 및 mounted 같은 객체를 사용하여 컴포넌트의 로직를 정의합니다. 
        // 옵션으로 정의된 속성은 this를 사용한다.
      }
    },  //methods:

    components:{    //* 1-2 컴포넌트는 이렇게 등록을 한다.
      Navbar:Navbar, 
      Modal:Modal,  
      Event:Event,
    }
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

 button{
  margin-right: 10px;
  margin-top: 1rem;
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

 .modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .modal .inner{
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
 }
</style>
