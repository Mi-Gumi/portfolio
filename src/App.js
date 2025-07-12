import React from 'react';
import Header from './components/Header';
import SkillBar from './components/SkillBar';
import styled from 'styled-components';
import './App.css';

// 전체 앱을 감싸는 최상위 컨테이너
// 100vw로 전체 화면 너비를 사용하고, 가로 스크롤을 방지
const AppContainer = styled.div`
  max-width: 100vw;  // viewport width의 100% 사용
  margin: 0;         // 기본 마진 제거
  padding: 0;        // 기본 패딩 제거
  overflow-x: hidden; // 가로 스크롤 방지
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif; // 한글 최적화 폰트 설정
`;

// 메인 콘텐츠를 감싸는 컨테이너
// 최대 너비를 1200px로 제한하여 큰 화면에서도 가독성 유지
const MainContainer = styled.main`
  max-width: 1200px;  // 최대 너비 제한
  margin: 0 auto;     // 좌우 중앙 정렬
  padding: 0 20px;    // 좌우 여백 추가
`;

// 각 섹션의 공통 스타일
// 최소 높이를 100vh로 설정하여 화면 전체 높이 사용
const Section = styled.section`
  min-height: 100vh;  // 최소 높이를 화면 전체 높이로 설정
  padding: 80px 20px; // 상하 80px, 좌우 20px 여백
  display: flex;      // Flexbox 레이아웃 사용
  flex-direction: column; // 세로 방향 정렬
  justify-content: center; // 수직 중앙 정렬
  align-items: center;    // 수평 중앙 정렬
`;

// 섹션 제목 스타일
// 모든 섹션의 제목에 일관된 스타일 적용
const SectionTitle = styled.h2`
  font-size: 2.5rem;    // 큰 글자 크기
  font-weight: 700;     // 굵은 글씨
  margin-bottom: 2rem;  // 아래 여백
  color: #333;          // 진한 회색
  text-align: center;   // 중앙 정렬
`;

// 섹션 내용을 감싸는 컨테이너
// 최대 너비를 800px로 제한하여 가독성 확보
const SectionContent = styled.div`
  width: 100%;          // 부모 요소의 전체 너비 사용
  max-width: 800px;     // 최대 너비 제한
  margin: 0 auto;       // 중앙 정렬
`;

function App() {
  // 기술 스택 데이터
  const skills = [
    { name: 'HTML/CSS', score: 4 },
    { name: 'JavaScript', score: 4 },
    { name: 'React', score: 3 },
    { name: 'TypeScript', score: 3 },
    { name: 'Node.js', score: 2 },
  ];

  return (
    <AppContainer>
      {/* 상단 네비게이션 바 */}
      <Header />
      
      <MainContainer>
        {/* 홈 섹션 */}
        <Section 
          id="home" 
          style={{ 
            backgroundColor: '#ffffff',  // 흰색 배경
            justifyContent: 'center',    // 수직 중앙 정렬
            alignItems: 'center',        // 수평 중앙 정렬
            textAlign: 'center'          // 텍스트 중앙 정렬
          }}
        >
          <SectionContent>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>안녕하세요</h1>
            <p style={{ fontSize: '1.5rem', color: '#666' }}>at Front to End</p>
          </SectionContent>
        </Section>

        {/* 자기소개 섹션 */}
        <Section 
          id="about" 
          style={{ 
            backgroundColor: '#f8f9fa'  // 연한 회색 배경
          }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionContent>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
              at Front to End
            </p>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>기술 스택</h3>
            <SkillBar skills={skills} />
          </SectionContent>
        </Section>

        {/* 프로젝트 섹션 */}
        <Section 
          id="projects" 
          style={{ 
            backgroundColor: '#ffffff'
          }}
        >
          <SectionTitle>Projects</SectionTitle>
          <SectionContent>
            {/* 그리드 레이아웃으로 프로젝트 카드 배치 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // 반응형 그리드
              gap: '2rem'  // 카드 간 간격
            }}>
              {/* 프로젝트 카드들이 들어갈 자리 */}
            </div>
          </SectionContent>
        </Section>

        {/* 연락처 섹션 */}
        <Section 
          id="contact" 
          style={{ 
            backgroundColor: '#f8f9fa'  // 연한 회색
          }}
        >
          <SectionTitle>Contact</SectionTitle>
          <SectionContent>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#444', 
              textAlign: 'center' 
            }}>
              이메일: woojunjung18@gmail.com<br />
              GitHub: github.com/Mi-Gumi
            </p>
          </SectionContent>
        </Section>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
