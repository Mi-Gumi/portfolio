import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 스타일드 컴포넌트는 컴포넌트 외부에 정의하여 리렌더링 시 재생성 방지
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

// 컴포넌트를 memo로 감싸서 props가 변경되지 않으면 리렌더링 방지
const Header = memo(function Header() {
  // 현재 경로에 따라 active 상태를 관리하는 로직
  const [isScrolled, setIsScrolled] = React.useState(false);

  // 스크롤 이벤트 핸들러를 useCallback으로 메모이제이션
  const handleScroll = React.useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  // useEffect로 스크롤 이벤트 리스너 등록
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <HeaderContainer style={{
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <Nav>
        <LogoLink to="/">Portfolio</LogoLink>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
});

export default Header;
