import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import testimonials from '../../data/testimonials.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ✅ Define the type
interface Testimonial {
  name: string;
  quote: string;
  logo: string;
  image: string;
}

// ✅ Styled components
const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 0 auto;

  img.logo {
    height: 40px;
    margin-bottom: 1rem;
  }

  img.client {
    width: 100%;
    border-radius: 8px;
    margin-top: 1rem;
  }

  p {
    font-style: italic;
    margin: 1rem 0;
  }

  h4 {
    margin-top: 0.5rem;
    font-weight: bold;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// ✅ Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// ✅ Single testimonial component
const TestimonialItem = ({ t, index }: { t: Testimonial; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <TestimonialCard
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img src={t.logo} alt={`${t.name} logo`} className="logo" />
      <p>"{t.quote}"</p>
      <h4>{t.name}</h4>
      <img src={t.image} alt={`${t.name} photo`} className="client" />
    </TestimonialCard>
  );
};

// ✅ Main component
const Testimonials = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Grid>
      {isMobile ? (
        <Slider {...settings}>
          {testimonials.map((t: Testimonial, index: number) => (
            <TestimonialItem key={index} t={t} index={index} />
          ))}
        </Slider>
      ) : (
        testimonials.map((t: Testimonial, index: number) => (
          <TestimonialItem key={index} t={t} index={index} />
        ))
      )}
    </Grid>
  );
};

export default Testimonials;
