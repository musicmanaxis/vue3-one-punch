<!--문법: 1. < >태그안에는 text=""와 같이 값을 할당한다.   
         2. {{}}사용은 < > {{}} </ >와 같이 태그들 사이의 중간에 사용한다. 
            태그안 자체 < >는 {{}}를 사용하지 않는다. ex)<div  v-if="isModalApp">의  isModalApp부분
         3. export 영역안에서는 text:'사랑' 과 같이 값을 할당한다.  
         4.상위컴포넌트와 하위컴포넌트의 데이터 전송위치는 컴포넌트 태그 안에서 작성된다
           4-1.<Movies :movieListApp="movieList"  :상위컴포넌트에서 하위컴포넌트로 데이터 전송 

           4-2.하위컴포넌트 Movies.vue에서 props:{ movieListApp(받아온 이름):Array(데이터타입) }로 선언하고
              <template>안에서 사용
              
           4-3.하위컴포넌트에서 상위컴포넌트로 데이터를 전송할때는 태그안에 $emit('openModal'를 사용하여 
              openModal이름으로 상위컴포넌트에서 어떠한 처리를 할것을 요청한다. 
               <button @click="$emit('openModal', index)">상세보기</button>   

           4-4.상위컴포넌트(App.vue)에서 @openModal="isModal=true; selectedMovie=$event" />:하위컴포넌트에서 요청받은 것을 처리
               openModal이름으로 요청받은것을 isModal을 true로 바꾸고 index로 넘겨준것을 $event로 받아서 selectMovie에 집어넣는다. 
         -->
<template>
  <Navbar />
  <Event :textApp="textEvent[textEventTimer]" />
   <!-- *일정시간이 지나면 텍스트가 바뀌는 기능, mounted()에서 setInterval()이용, ummounted()에서 자원반납-->
  <SearchBar :movieListApp="copyMovieList" @searchMovie="searchMovie($event)"/>
  <p>
    <button @click="showMovieList">영화 전체보기</button>
  </p>
    
    
<!--** :movieListApp="copyMovieList" ->영화자료를 Movies.vue에 넘겨 영화리스트를 화면에 출력하게끔 Movies.vue에서 처리한다. -->
<!-- Modal의 movieListApp="movieList"와 차이점 파악할 것 --> 
  <Movies :movieListApp="copyMovieList"     
          @openModal="isModal=true; selectedMovie=$event "
          @increaseLike="increaseLike" 
          />   
          <!-- Movies.vue의 상세보기 버튼에서 $emit('openModal', index)의 index를 $event로 받는다 -->
  
  <Modal :movieListApp="movieList"   
         :isModalApp="isModal" 
         :selectedMovieApp="selectedMovie" 
         @closeModal="isModal=false;"  />
  <!-- 태그안에 넘겨줄 데이터들을 나열할 때는 ','없이 나열한다. -->
  <!-- * 2-3. :movieListApp="movieList" Modal.vue로 데이터를 넘겨줄때 v-bind:를 써서 movieListApp이름으로 넘겨준다...-->
   <!-- movies->movieList->movidListApp으로 전달 -->
  <!-- * @closeModal="isModal=false"는 Modal.vue에서 "$emit('closeModal')로 작성한 것을 이벤트 형식으로 가져다 쓴다. -->
        <!-- 하위컴포넌트에서(Modal.vue) 상위컴포넌트(App.vue)로 요청받을시   
            @closeModal(이벤트형식)로 받고 받은 요청을 처리(="isModal=false")해준다.-->
</template>

<script>
  import movies from './assets/movies.js';   //2-1.데이타가 많다면 별도의 js파일로 따로 저장하여 불러들인다.,
  //import axios from 'axios';  %%% MariaDB로 가져오는 방법, 하단 mounted참조
  import Navbar from './components/Navbar.vue'; //* 1-1.불러들인 컴포넌트는 하단에서 등록한다.
  import Event from './components/Event.vue';
  import Movies from './components/Movies.vue';
  import Modal  from './components/Modal.vue';
  import SearchBar from './components/SearchBar.vue';
  
  export default{
    name:'App',
    data(){
      return{
        movieList: movies,  // 원본영화 데이터    *2-2 .movies(객체배열)로 import한 것을 movieList로 매칭시켜 template에서 사용가능
        copyMovieList: [...movies],  //사본:UI갱신, 검색 결과 등으로 변형 가능한 복사본으로 사용    배열을 이런식으로  복사한다. '...'이용, 
        isModal: false,    //모달창 상태를 제어 (열림/닫힘) :modal창이 참이면 보이고 거짓이면 안보이게 하는것, 일단은 안보이게
        seletedMovie: 0,   //선택된 영화의 인덱스를 저장, 선택된 영화의 상세보기를 만들기 위해 선언
        textEvent: [
          'Netfilx 경성 크리처: 알려지지 않는 비밀!!!',
          '디즈니 100주년 기념작 위시',
          '그날, 대한민국의 운명이 바뀌었다.',
        ],
        textEventTimer:0,   //*이벤트 창에 일정시간이 지나면 이벤트 글이 교체 됨 
        interval:null,  //*interval를 해제(unmounted)하기 위해 변수 선언
      }
    },  //data()

    methods:{
      increaseLike(id){   //좋아요 버튼 숫자 늘리기함수
         this.copyMovieList.find(movie=>{
          if(movie.id==id){
            movie.count+=1;   //movieList[]배열 안에 담긴 객체의 count를 증가시킨다.
          }
         })   
        //  옵션 API를 사용하여 옵션의 data, methods 및 mounted 같은 객체를 사용하여 컴포넌트의 로직를 정의합니다. 
        // 옵션으로 정의된 속성은 this를 사용한다.
      },
      searchMovie(title){    //영화제목이 포함된 데이터를 원본에서 가져와 필터링을 거쳐 복사본에 넘김
        this.copyMovieList=this.movieList.filter(
          movie => {return movie.title.includes(title);
          })
      },
      showMovieList(){
        this.copyMovieList=[...this.movieList] //배열복사
      }

    },  //methods:

    components:{    //* 1-2 컴포넌트는 이렇게 등록을 한다.
      Navbar:Navbar, 
      Event:Event,
      Movies:Movies,
      Modal:Modal,  
      SearchBar:SearchBar,
    }, 

    mounted(){
      this.interval=setInterval(()=>{     //*이벤트 창에 일정시간이 지나면 이벤트 글이 교체 됨 
                      if(this.textEventTimer==this.textEvent.length-1){
                      this.textEventTimer=0;   //배열과 Timer크기가 값다면 0으로 초기화
                      }else{ 
                      this.textEventTimer++;
                      }  
                        }, 3000);

     //this.interval로 받는 것이 없어도 동작은 함                    
     //그러나, this.interval에 타이머id가 저장되는데 값을 할당하지 않으면, 타이머를 제어할 수 없게 되기 때문에 
     //(예: 컴포넌트가 종료될 때 clearInterval()을 사용하여 타이머를 중지할 수 없게 됩니다) 타이머 ID를 저장하는 것이 중요합니다.    
  
     //////////////////////////////////////////////////////////////////////////////////////////////////
     // axios.get('http://localhost:5000/api/movies')  // %%%  MariaDB로 가져오는 방법
      // .then(response => {
      //   this.movieList = response.data;
      // })
      // .catch(error => {
      //   console.error('Error fetching movies:', error);
      // });


    },
  
     unmounted(){
       clearInterval(this.interval);  
      }  
    //setInterval은 명시적으로 clearInterval을 호출하기 전까지 계속 실행되므로, 
    //불필요한 리소스 소모와 메모리 누수를 방지하려면 컴포넌트가 제거될 때 타이머아이디가 들어있는 interval를 이용하여 this.interval을 해제해야 합니다:
       
}//export
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
