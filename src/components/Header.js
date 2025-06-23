import React, { memo } from 'react';
import styled from 'styled-components';

// 헤더 컨테이너 스타일 컴포넌트
// fixed 포지션으로 상단에 고정
const HeaderContainer = styled.header`
  position: fixed;  // 화면 상단에 고정
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);  // 반투명 배경
  backdrop-filter: blur(5px);  // 배경 블러 효과
  z-index: 1000;  // 다른 요소들 위에 표시
  transition: all 0.3s ease;  // 부드러운 전환 효과
`;

// 네비게이션 바 스타일 컴포넌트
const Nav = styled.nav`
  max-width: 90vw;  // 메인 콘텐츠와 동일한 너비로 설정
  margin: 0 auto;   // 중앙 정렬
  padding: 1rem 2rem; // 내부 여백
  display: flex;      // Flexbox 레이아웃
  justify-content: space-between;  // 요소들 사이 공간 분배
  align-items: center;  // 수직 중앙 정렬
`;

// 네비게이션 링크들을 감싸는 컨테이너
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;  // 링크 사이 간격
  
  // 모바일 화면에서 네비게이션 숨김
  @media (max-width: 768px) {
    display: none;
  }
`;

// 로고 스타일 컴포넌트
const Logo = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;  // 클릭 가능함을 표시
`;

// 네비게이션 링크 스타일 컴포넌트
const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 510;
  position: relative;  // 하단 밑줄 효과를 위한 상대 위치
  cursor: pointer;
  
  // 호버 시 나타나는 밑줄 효과
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;  // 부드러운 너비 변화
  }
  
  // 호버 시 밑줄이 전체 너비로 확장
  &:hover::after {
    width: 100%;
  }
`;

// Header 컴포넌트를 memo로 감싸서 불필요한 리렌더링 방지
const Header = memo(function Header() {
  // 스크롤 상태를 관리하는 state
  const [isScrolled, setIsScrolled] = React.useState(false);

  // 스크롤 이벤트 핸들러
  // useCallback으로 메모이제이션하여 성능 최적화
  const handleScroll = React.useCallback(() => {
    // 스크롤 위치가 50px을 넘으면 true
    setIsScrolled(window.scrollY > 50);
  }, []);

  // 특정 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 부드러운 스크롤 효과 적용
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 컴포넌트 마운트 시 스크롤 이벤트 리스너 등록
  // 컴포넌트 언마운트 시 리스너 제거
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <HeaderContainer style={{
      // 스크롤 시 그림자 효과 추가
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <Nav>
        {/* 로고 클릭 시 홈 섹션으로 스크롤 */}
        <Logo onClick={() => scrollToSection('home')}>Portfolio</Logo>
        <NavLinks>
          {/* 각 네비게이션 링크 클릭 시 해당 섹션으로 스크롤 */}
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>About Me</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
});

export default Header;
