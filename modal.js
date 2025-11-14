// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: '리플렛',
    image: 'img/portfolio/detail1.jpg',
    description: '이 프로젝트는 부산불꽃축제 홍보용 포스터 디자인입니다. 광안리해수욕장에서 펼쳐지는 화려한 불꽃축제를 생동감있게 표현하였습니다.'
  },
  project2: {
    title: 'Edit Design Project 2',
    image: 'img/portfolio/detail2.jpg',
    description: '리플렛 디자인 프로젝트로, ‘무영당’이라는 복합문화공간을 알리고자 리플렛을 제작하였습니다.'
  },
  project3: {
    title: 'Edit Design Project 3',
    image: 'img/portfolio/detail3.jpg',
    description: '패키지 디자인 프로젝트입니다. 기존에 있는 밸러니티 수면 영양제 패키지를 새롭게 디자인하였습니다.'
  },
  project4: {
    title: 'Edit Design Project 4',
    image: 'img/portfolio/detail4.jpg',
    description: '가상의 치과 바른치과를 sns배너 제작하였습니다.'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/portfolio/detail5.jpg',
    description: '달서구본리복지관의 사보를 팀원들과 함께 협력하여 제작하였습니다.'
  },
  project6: {
    title: 'Edit Design Project 6',
    image: 'img/portfolio/detail6.jpg',
    description: '채선당의 밀푀유나베 밀키트를 상세페이지 디자인하였습니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});