import { styled, alpha } from '@mui/material/styles';
import { Stack, Container, Typography, Box } from '@mui/material';
import Iconify from 'src/components/iconify';

const STEPS = [
  {
    step: 1,
    icon: 'carbon:search',
    title: 'Discovery',
    description: 'We analyze your brand, market, and competitors to uncover opportunities.',
  },
  {
    step: 2,
    icon: 'carbon:plan',
    title: 'Strategy',
    description: 'Data-backed strategy tailored to your goals and target audience.',
  },
  {
    step: 3,
    icon: 'carbon:rocket',
    title: 'Execute',
    description: 'AI-powered execution across all channels for maximum impact.',
  },
  {
    step: 4,
    icon: 'carbon:growth',
    title: 'Optimize',
    description: 'Continuous optimization for measurable ROI and sustained growth.',
  },
];

const Connector = styled(Box)(({ theme }) => ({
  width: 2,
  height: 40,
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    width: 60,
    height: 2,
    margin: 'auto 0',
    flexShrink: 0,
  },
}));

export default function MarketingLandingProcess() {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Stack spacing={1} sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          How We Work
        </Typography>
        <Typography variant="h2">From Strategy to Results</Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent="center"
        spacing={{ xs: 0, md: 0 }}
        sx={{ position: 'relative' }}
      >
        {STEPS.map((step, index) => (
          <StepItem key={step.step} step={step} index={index} isLast={index === STEPS.length - 1} />
        ))}
      </Stack>
    </Container>
  );
}

type StepProps = {
  step: { step: number; icon: string; title: string; description: string };
  index: number;
  isLast: boolean;
};

function StepItem({ step, index, isLast }: StepProps) {
  const { icon, title, description } = step;

  return (
    <Stack
      direction={{ xs: 'row', md: 'column' }}
      alignItems="center"
      spacing={2}
      sx={{
        flex: { md: 1 },
        maxWidth: { md: 240 },
        position: 'relative',
        '&:not(:last-of-type)::after': {
          display: { xs: 'none', md: 'block' },
          content: '""',
          position: 'absolute',
          top: 36,
          left: 'calc(100% - 8px)',
          width: 16,
          height: 2,
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: alpha('#8311d4', 0.12),
            border: '1px solid',
            borderColor: alpha('#8311d4', 0.3),
            color: 'primary.main',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          <Iconify icon={icon} width={28} />
          <Box
            sx={{
              position: 'absolute',
              top: -6,
              right: -6,
              width: 22,
              height: 22,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'secondary.main',
              color: '#000',
              typography: 'caption',
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            {step.step}
          </Box>
        </Box>
        {!isLast && (
          <Connector
            sx={{
              display: { xs: 'block', md: 'none' },
              width: 2,
              height: 40,
            }}
          />
        )}
      </Stack>
      <Stack sx={{ textAlign: { xs: 'left', md: 'center' }, mt: { md: 2 } }}>
        <Typography variant="h6" sx={{ color: 'common.white' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
