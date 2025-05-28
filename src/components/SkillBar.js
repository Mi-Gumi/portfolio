import React from 'react';
import styled from 'styled-components';

// 기술 스택 컨테이너
const SkillContainer = styled.div`
  margin: 1rem 0;
`;

// 기술 이름과 점수를 감싸는 컨테이너
const SkillRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

// 기술 이름
const SkillName = styled.span`
  width: 120px;
  font-weight: 500;
  color: #333;
`;

// 점수 표시 컨테이너
const ScoreContainer = styled.div`
  display: flex;
  gap: 4px;
`;

// 개별 사각형 스타일
const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.filled ? '#333' : '#e0e0e0'};
  border-radius: 2px;
`;

const SkillBar = ({ skills }) => {
  return (
    <SkillContainer>
      {skills.map((skill, index) => (
        <SkillRow key={index}>
          <SkillName>{skill.name}</SkillName>
          <ScoreContainer>
            {[...Array(5)].map((_, i) => (
              <Square key={i} filled={i < skill.score} />
            ))}
          </ScoreContainer>
        </SkillRow>
      ))}
    </SkillContainer>
  );
};

export default SkillBar; 