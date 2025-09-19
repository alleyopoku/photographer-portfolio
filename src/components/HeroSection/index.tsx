// src/components/HeroSection/index.tsx
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const FeaturedImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const IntroText = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fcc;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <FeaturedImage src="/assets/featured.jpg" alt="Featured photograph" />
      <IntroText>Hello, I'm a professional photographer capturing moments that matter.</IntroText>
      <CTAButton>View Portfolio</CTAButton>
    </HeroContainer>
  );
};

export default HeroSection;
