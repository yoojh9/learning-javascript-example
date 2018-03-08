const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
  '<script src="stuff.js">';

// 태그를 대소문자 구분 없이 모두 찾고 싶다면?
// 파이프(|)는 대체를 뜻하는 메타 문자
// ig는 대소문자를 가리지 않고(i) 전체를(g) 검색하라는 뜻
// g 플래그가 없으면 일치하는 것 중 첫번째만 반환한다.
// 이 정규식의 의미는 '텍스트에서 area, a, link, script, source를 대소문자 가리지 않고 모두 찾으라'라는 뜻
// area를 a보다 먼저 쓴 이유는 만약 a를 area보다 먼저 썼다면, 텍스트 내에 area가 있더라고 a를 먼저 소비하므로 area는 찾지 못한다.
// 따라서 이렇게 겹치는 경우 큰 것을 먼저 쓴다.
const matches = html.match(/area|a|href|script|source/ig);
console.log(matches); // [ 'a', 'href', 'a', 'a', 'a', 'a', 'Script', 'script' ]
