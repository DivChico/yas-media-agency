// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.95),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const glassPanel = {
  background: `rgba(131, 17, 212, 0.08)`,
  backdropFilter: `blur(24px)`,
  WebkitBackdropFilter: `blur(24px)`,
  border: `1px solid rgba(131, 17, 212, 0.25)`,
  borderRadius: 4,
} as const;

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(131,17,212,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container
        sx={{
          pt: { xs: '104px', md: '120px' },
          pb: { xs: 8, md: 0 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          spacing={{ xs: 6, md: 10 }}
        >
          <Box
            sx={{
              ...glassPanel,
              flex: 1,
              p: { xs: 4, md: 6 },
              maxWidth: 680,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <Box sx={{ width: 32, height: 3, bgcolor: 'secondary.main', borderRadius: 2 }} />
              <Typography
                variant="overline"
                sx={{ color: 'secondary.main', letterSpacing: '0.12em', fontWeight: 700 }}
              >
                AI-NATIVE DIGITAL MARKETING AGENCY
              </Typography>
            </Stack>

            <Typography variant="h1" sx={{ fontWeight: 800, lineHeight: 1.1, mb: 1 }}>
              Drive Growth with
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #A855F7 0%, #8311d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              AI-Powered Marketing
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: 540,
                lineHeight: 1.7,
                fontSize: { xs: 14, md: 16 },
              }}
            >
              YAS Media Agency is an AI-Native digital marketing partner for enterprises across
              Saudi Arabia and the GCC. We combine data-driven strategies, AI automation, and
              creative excellence to deliver measurable results.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  fontWeight: 700,
                  fontSize: 15,
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: '0 0 24px rgba(131,17,212,0.4)',
                  },
                }}
                endIcon={<Iconify width={18} icon="carbon:arrow-right" />}
              >
                Start a Project
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(131,17,212,0.5)',
                  color: 'common.white',
                  fontWeight: 700,
                  fontSize: 15,
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  background: 'rgba(131,17,212,0.08)',
                  backdropFilter: 'blur(12px)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'rgba(131,17,212,0.2)',
                  },
                }}
                endIcon={<Iconify width={18} icon="carbon:play" />}
              >
                View Our Work
              </Button>
            </Stack>
          </Box>

          {isMdUp && (
            <Box
              sx={{
                ...glassPanel,
                p: 5,
                textAlign: 'center',
                minWidth: 280,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #fbef2d 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                250+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Projects Delivered
              </Typography>

              <Box sx={{ my: 4, width: 60, height: 2, bgcolor: 'primary.main', mx: 'auto' }} />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #fbef2d 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                98%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Client Satisfaction
              </Typography>

              <Box sx={{ mt: 5, p: 3, borderRadius: 2, background: 'rgba(251,239,45,0.06)', border: '1px solid rgba(251,239,45,0.15)' }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
                  SAUDI ARABIA &bull; GCC
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>
      </Container>
    </StyledRoot>
  );
}
