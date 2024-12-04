const movieList=[{
    id:0,
    title:'노량',
    year:'2024',
    category:'역사, 드라마',
    fontColor:'color:red',
    count:0,   //각각의 좋아요버튼의 숫자를 증가시키이 위한 자료형
    url:'./img/노량.jpg',
    detailInfo:'조선시대 임진왜란의 전쟁을 그린 영화',
   },
   {
    id:1,
    title:'아쿠아맨',
    year:'2022',
    category:'액션, 환타지',
    fontColor:'color:blue',
    count:0,
    url:'./img/아쿠아맨.jpg',
    detailInfo:'워더브러더스사의 바다에 관한 아쿠아왕자 이야기',
   },
  ]


  export default movieList   //대표적인 모듈 하나만 내보낼때만 이런방식
  //여러개인 경우는 export {movie, lisy, acter}를 사용한다.