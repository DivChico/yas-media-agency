import { Container, Typography, Stack, Box } from '@mui/material';

export default function OurClientsMarketing() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={1} sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Trusted By
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: 'center' }}
      >
        <Box
          sx={{
            px: { xs: 5, md: 8 },
            py: { xs: 4, md: 6 },
            borderRadius: 4,
            background: 'rgba(131, 17, 212, 0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(131, 17, 212, 0.2)',
            minWidth: 240,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #fbef2d, #8311d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
            }}
          >
            99+
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, color: 'common.white' }}>
            Global Clients
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ color: 'grey.400', maxWidth: 420, fontWeight: 400 }}
        >
          Partnering with enterprises across Saudi Arabia and the GCC
        </Typography>
      </Stack>
    </Container>
  );
}
