import React, { useState } from 'react';
//컴포넌트 내보낼때 export

//리액트 아이콘 설치
//npm install react-icons
import {FaStar} from 'react-icons/fa';
import './style.css';

//StarRaing 컴포넌트
export default function StarRating({starCount=5})
{
  //starCount(별개수)는 5개를 기본값으로, 컴포넌트를 사용하는 곳에서 정할 수 있게 매개변수로 정함
  //state 2개를 만들기(별점, 마우스오버 위치)
  let [score, setScore] = useState(0);  //별점
  let [hover, setHover] = useState(0);  //마우스위치

  // 배열: 총 별 객수(starCount) --> 반복문 map 사용
  let stars = [];  // 그려줄 별 갯수
  for(let i=0;i<starCount;i++){
    stars.push(i+1);
  }

  return(
    <>
      <div>
          {
            //jsx안에다가 자바스크립트 넣으려면 {}를 사용
            //map은 배열의 갯수만큼 반복
            //첫번째는 각 내부요소의 값, 두번째는 인덱스(위치)
            //map 안에 콜백함수를 넣어서 동작
            stars.map((e, idx)=>{
              //e는 map의 요소(element) / idx는 map의 인덱스
              //e: 1, 2, 3, 4, 5      idx: 0, 1, 2, 3, 4(배열 위치)
              

              function handleMouseClick(element){
                //클릭한 별에다가 setScore
                console.log(element);
                setScore(element);   //set: 비동기(실시간 적용안됨)
              }

              function handleMouseMove(element){
                //마우스가 들어간 별에다가 setHover()
                //console.log(element);
                setHover(element);
              }

              function handleMouseLeave(){
                //마우스가 나간 별에다가 setHover(별점)
                //console.log(element);
                setHover(score);
              }

              //반복적으로 생성할 HTML(JSX)은 return에 작성
              //return안에 하나로 감싸져있어야함
              return(
                <FaStar size={20} key={e}
                //마우스가 올라가 있거나, 선택된 상태면 클래스명을 변경(클릭, 마우스무브,마우스리브)
                //삼항연사자를 써서 상황에 따라 클래스명을 변경
                  className= {e <= (hover || score) ? 'active':'inactive'}
                  onClick={()=>{ handleMouseClick(e) }}
                  onMouseMove={()=>{ handleMouseMove(e)}}
                  onMouseLeave={()=>{ handleMouseLeave()}}
                />
              )
            })
          }
      </div>
    </>
  )
}
