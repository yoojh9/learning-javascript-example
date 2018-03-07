// 아래 결과는 해당 지역의 표준시에 따라 다를 수 있다.
new Date();  // 현재 날짜

// 자바스크립트의 월은 0으로 시작한다. 즉 0은 1월이고, 1은 2월
new Date(2018,0);   // 2018년 1월 1일 0시
new Date(2018,1);   // 2018년 2월 1일 0시
new Date(2018, 1, 14);  // 2018년 2월 14일 0시
new Date(2018, 2, 7, 13);  // 2018년 3월 7일 오후 1시
new Date(2018, 2, 7, 13, 30);  // 2018년 3월 7일 오후 1시 30분
new Date(2018, 2, 7, 13, 30, 5);  // 2018년 3월 7일 오후 1시 30분 5초
new Date(2018, 2, 7, 13, 30, 5, 500);  // 2018년 3월 7일 오후 1시 30분 5.5초

// 유닉스 타임스탬프로 날짜 설정
new Date(0);  // Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)
new Date(1000); // Thu Jan 01 1970 09:00:01 GMT+0900 (대한민국 표준시)
new Date(1520385817089); // Wed Mar 07 2018 10:23:37 GMT+0900 (대한민국 표준시)

// 날짜 문자열
new Date('Mar 7, 2018'); // Wed Mar 07 2018 00:00:00 GMT+0900 (대한민국 표준시)
