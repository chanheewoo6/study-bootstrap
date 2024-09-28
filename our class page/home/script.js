document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.querySelector('#selectMode button:first-child');
  const mainButton = document.querySelector('.selectHomeMode button:first-child');

  // 홈 버튼 클릭 시 /home으로 이동
  homeButton.addEventListener('click', () => {
    window.location.href = '/home';
  });

  // 메인 버튼 클릭 시 /home/main으로 이동
  mainButton.addEventListener('click', () => {
    window.location.href = '/home/main';
  });

  // 항상 index.html 파일이 열려 있을 때 /home으로 도메인 붙이기
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    window.history.replaceState(null, '', '/home');
  }

  // URL에 따라 다른 HTML 콘텐츠 로드
  const contentDiv = document.getElementById('content');
  const loadContent = (url) => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        contentDiv.innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  };

  switch (window.location.pathname) {
    case '/home':
      loadContent('home.html');
      break;
    case '/home/main':
      loadContent('main.html');
      break;
    // 다른 URL에 대한 처리 추가 가능
    default:
      loadContent('default.html');
      break;
  }
});
