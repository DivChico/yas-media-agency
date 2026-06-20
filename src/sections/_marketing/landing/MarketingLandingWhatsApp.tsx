import { Box, IconButton } from '@mui/material';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MarketingLandingWhatsApp() {
  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <IconButton
        component="a"
        href="https://wa.me/96650993996"
        target="_blank"
        rel="noopener"
        sx={{
          width: 56,
          height: 56,
          bgcolor: '#25D366',
          color: 'common.white',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          '&:hover': { bgcolor: '#20BD5A' },
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
            '70%': { boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
          },
        }}
      >
        <Iconify icon="ri:whatsapp-fill" width={28} />
      </IconButton>
    </Box>
  );
}
