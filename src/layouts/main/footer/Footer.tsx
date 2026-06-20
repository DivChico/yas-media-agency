// @mui
import { Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const navLinks = [
  { title: 'About Us', path: '/' },
  { title: 'Services', path: '/#services' },
  { title: 'Portfolio', path: '/#portfolio' },
  { title: 'Contact', path: '/#contact' },
];

const socialLinks = [
  { icon: 'ri:instagram-fill', href: 'https://www.instagram.com/yasmedia.sa/' },
  { icon: 'ri:behance-fill', href: 'https://www.behance.net/yasmedia' },
  { icon: 'ri:whatsapp-fill', href: 'https://wa.me/966500000000' },
];

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <footer>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Stack
          spacing={4}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ md: 'flex-start' }}
        >
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <Logo />
            <Typography variant="body2" sx={{ color: 'grey.500', lineHeight: 1.8 }}>
              AI-Native Digital Marketing Agency based in Riyadh, Saudi Arabia. We partner with
              enterprises across KSA and GCC to drive growth through data-driven marketing, AI
              automation, and creative excellence.
            </Typography>
          </Stack>

          <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  variant="body2"
                  sx={{ color: 'grey.500', '&:hover': { color: 'primary.main' } }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>

            <Stack direction="row" alignItems="center">
              {socialLinks.map((social) => (
                <IconButton
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  sx={{ color: 'grey.500', '&:hover': { color: 'primary.main' } }}
                >
                  <Iconify icon={social.icon} />
                </IconButton>
              ))}
            </Stack>

            <Typography variant="caption" sx={{ color: 'grey.500' }}>
              info@yasmedia.com
            </Typography>
          </Stack>
        </Stack>
      </Container>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />

      <Container>
        <Stack sx={{ py: 3, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'grey.600' }}>
            &copy; 2025 YAS Media Agency. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
}
