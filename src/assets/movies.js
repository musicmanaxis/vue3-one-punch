const movieList=[{
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


  export default movieList   //대표적인 모듈 하나만 내보낼때만 이런방식
  //여러개인 경우는 export {movie, lisy, acter}를 사용한다.