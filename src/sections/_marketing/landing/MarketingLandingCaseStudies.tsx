import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Container,
  Typography,
} from '@mui/material';

const portfolioItems = [
  { title: 'Brand Identity System', category: 'Branding', gradient: 'linear-gradient(135deg, #8311d4, #2D0054)' },
  { title: 'Social Media Campaign', category: 'Social Media', gradient: 'linear-gradient(135deg, #fbef2d, #8311d4)' },
  { title: 'Digital Transformation', category: 'Digital Strategy', gradient: 'linear-gradient(135deg, #2D0054, #050505)' },
];

const StyledOverlay = styled('div')(({ theme }) => ({
  background: alpha(theme.palette.common.black, 0.4),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: 'opacity 0.4s ease',
}));

const PortfolioCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  cursor: 'pointer',
  height: 320,
  filter: 'grayscale(100%)',
  transition: 'filter 0.5s ease, transform 0.4s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
    transform: 'translateY(-8px)',
    [`& .${StyledOverlay}`]: {
      opacity: 0,
    },
  },
}));

export default function MarketingLandingCaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container
      id="portfolio"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Stack spacing={1} sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Work
        </Typography>
        <Typography variant="h2">Selected Showcase</Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        justifyContent="center"
      >
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={item.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              flex: { md: 1 },
              background: item.gradient,
            }}
          >
            <Stack
              spacing={1}
              alignItems="center"
              justifyContent="center"
              sx={{
                width: 1,
                height: 1,
                zIndex: 9,
                position: 'absolute',
                color: 'common.white',
                textAlign: 'center',
                p: 3,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  opacity: hoveredIndex === index ? 0 : 0.7,
                  transition: 'opacity 0.3s ease',
                  letterSpacing: 2,
                }}
              >
                {item.category}
              </Typography>
              <Typography variant="h4">{item.title}</Typography>
            </Stack>

            <StyledOverlay
              sx={{
                opacity: hoveredIndex === index ? 0 : 1,
              }}
            />
          </PortfolioCard>
        ))}
      </Stack>
    </Container>
  );
}
