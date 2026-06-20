import { Stack, Container, Typography, Box, Unstable_Grid2 as Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { bgBlur } from 'src/utils/cssStyles';
import Iconify from 'src/components/iconify';

const STATS = [
  { label: 'Clients', value: '99+', icon: 'carbon:enterprise' },
  { label: 'Projects', value: '250+', icon: 'carbon:task-completed' },
  { label: 'Years Experience', value: '5+', icon: 'carbon:time' },
];

export default function MarketingLandingAbout() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(131,17,212,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Container id="about" sx={{ py: { xs: 5, md: 10 } }}>
        <Grid container columnSpacing={{ xs: 0, md: 8 }} rowSpacing={{ xs: 5, md: 0 }} alignItems="center">
          <Grid xs={12} md={6}>
            <Typography component="div" variant="overline" sx={{ color: 'secondary.main', mb: 1 }}>
              About YAS Media Agency
            </Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>
              AI-Native Marketing for the Modern Enterprise
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Based in Riyadh, YAS Media Agency is an AI-native marketing partner serving enterprises
              across the Kingdom of Saudi Arabia and the GCC. We combine deep regional expertise with
              cutting-edge artificial intelligence to deliver measurable, data-driven results. From
              brand strategy to performance marketing, every solution is engineered to drive growth
              in the digital economy.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                ...bgBlur({ color: alpha('#000', 0.6), blur: 12 }),
                borderRadius: 3,
                border: '1px solid',
                borderColor: alpha('#8311d4', 0.3),
                p: { xs: 3, md: 5 },
              }}
            >
              <Stack spacing={4}>
                {STATS.map((stat) => (
                  <Stack key={stat.label} direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: alpha('#8311d4', 0.15),
                        color: 'primary.main',
                      }}
                    >
                      <Iconify icon={stat.icon} width={24} />
                    </Box>
                    <Stack>
                      <Typography variant="h3" sx={{ color: 'secondary.main' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {stat.label}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
