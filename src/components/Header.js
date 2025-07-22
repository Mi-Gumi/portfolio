import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255,255,255,0.97)' : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 10px rgba(0,0,0,0.08)' : 'none'};
  transition: background 0.3s, box-shadow 0.3s;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 64px;
    right: 0;
    background: rgba(255,255,255,0.98);
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    width: 180px;
    padding: 1.5rem 0;
    z-index: 1100;
    gap: 1.5rem;
    border-radius: 0 0 0 12px;
  }
`;

const NavLink = styled.a`
  color: #222;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #007bff;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #007bff;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 24px;
  height: 3px;
  margin: 5px 0;
  background: #222;
  border-radius: 2px;
  transition: 0.3s;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // 모바일 메뉴 열릴 때 스크롤 막기
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo onClick={() => scrollToSection('home')}>Portfolio</Logo>
        <MenuButton onClick={() => setMenuOpen((v) => !v)} aria-label="메뉴 열기">
          <Bar />
          <Bar />
          <Bar />
        </MenuButton>
        <NavLinks open={menuOpen}>
          <li><NavLink onClick={() => scrollToSection('about')}>About</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
