// src/components/PortfolioShowcase/index.tsx
import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from 'react-share';

const ShowcaseContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #eee;
    cursor: pointer;
    border-radius: 6px;

    &.active {
      background-color: #0077ff;
      color: white;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  p {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 0.5rem;
    width: 100%;
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover p {
    opacity: 1;
  }

  .share-buttons {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
`;

const PortfolioImage = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
`;

const PortfolioShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const categories = ['All', 'Weddings', 'Nature', 'Portraits'];

  const images: { src: string; alt: string; category: string; description: string }[] = [
    {
      src: '/assets/work1.jpg',
      alt: 'Wedding shoot',
      category: 'Weddings',
      description: 'A candid moment from a summer wedding in Provence.',
    },
    {
      src: '/assets/work2.jpg',
      alt: 'Nature landscape',
      category: 'Nature',
      description: 'Golden hour over the Pyrenees mountains.',
    },
    {
      src: '/assets/work3.jpg',
      alt: 'Urban portrait',
      category: 'Portraits',
      description: 'Street-style portrait in downtown Toulouse.',
    },
  ];

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const shareUrl = 'https://yourdomain.com/gallery';

  return (
    <ShowcaseContainer>
      <SectionTitle>My Portfolio</SectionTitle>

      <CategoryFilter>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </CategoryFilter>

      <Grid>
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ImageCard>
                <PortfolioImage
                  src={img.src}
                  alt={img.alt}
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                />
                <p>{img.description}</p>
                <div className="share-buttons">
                 <FacebookShareButton url={shareUrl}>
                    <span>📘</span>
                  </FacebookShareButton>

                  <TwitterShareButton url={shareUrl} title={img.alt}>
                    <span>🐦</span>
                  </TwitterShareButton>

                  <PinterestShareButton url={shareUrl} media={img.src}>
                    <span>📌</span>
                  </PinterestShareButton>

                </div>
              </ImageCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </Grid>

      {isOpen && (
        <Lightbox
          mainSrc={filteredImages[photoIndex].src}
          nextSrc={filteredImages[(photoIndex + 1) % filteredImages.length].src}
          prevSrc={filteredImages[(photoIndex + filteredImages.length - 1) % filteredImages.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + filteredImages.length - 1) % filteredImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredImages.length)
          }
        />
      )}
    </ShowcaseContainer>
  );
};

export default PortfolioShowcase;
