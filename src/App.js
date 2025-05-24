import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import './App.css';

// 전체 앱 컨테이너 스타일
const AppContainer = styled.div`
  max-width: 100vw;  // 전체 화면 너비 사용
  margin: 0;         // 기본 마진 제거
  padding: 0;        // 기본 패딩 제거
  overflow-x: hidden; // 가로 스크롤 방지
`;

// 메인 콘텐츠를 감싸는 컨테이너 스타일 컴포넌트
const MainContainer = styled.main`
  max-width: 90vw;  // 화면 너비의 90%를 사용
  margin: 0 auto;   // 중앙 정렬
  padding: 0 20px;  // 좌우 여백
`;

// 섹션 스타일 컴포넌트
const Section = styled.section`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Section 
          id="home" 
          style={{ 
            backgroundColor: '#F8F9FA',  // 연한 회색
          }}
        >
          <h1>메인</h1>
        </Section>
        <Section 
          id="about" 
          style={{ 
            backgroundColor: '#E3F2FD',  // 연한 파란색
          }}
        >
          <h1>나</h1>
        </Section>
        <Section 
          id="projects" 
          style={{ 
            backgroundColor: '#F3E5F5',  // 연한 보라색
          }}
        >
          <h1>일</h1>
        </Section>
        <Section 
          id="contact" 
          style={{ 
            backgroundColor: '#E8F5E9',  // 연한 초록색
          }}
        >
          <h1>ㄱㄱ</h1>
        </Section>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
