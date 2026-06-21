import { useLocales } from 'src/hooks/useLocales';
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, Box } from '@mui/material';
import { bgGradient } from 'src/utils/cssStyles';
import Iconify from 'src/components/iconify';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    direction: '135deg',
    startColor: alpha('#2D0054', 0.9),
    endColor: alpha('#050505', 0.95),
  }),
  padding: theme.spacing(10, 0),
  overflow: 'hidden',
  position: 'relative',
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: alpha('#8311d4', 0.2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function MarketingLandingFreeSEO() {
  const { t } = useLocales();
  return (
    <StyledRoot>
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(131,17,212,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,239,45,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Container id="cta" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            sx={{
              maxWidth: 640,
              background: `linear-gradient(135deg, #F1F5F9 0%, #A855F7 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('cta_title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 500 }}
          >
            {t('cta_subtitle')}
          </Typography>
          <Button
            size="large"
            variant="contained"
            href="/#contact"
            sx={{
              mt: 2,
              px: 5,
              py: 1.5,
              borderRadius: '12px',
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: `0 0 24px ${alpha('#8311d4', 0.5)}`,
              },
            }}
            endIcon={<Iconify icon="carbon:arrow-right" />}
          >
            {t('cta_button')}
          </Button>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
