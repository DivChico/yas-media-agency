// next
import { useRouter } from 'next/router';
import NextLink from 'next/link';
// @mui
import { Link, Stack, Button, Divider, Container, Typography, IconButton, StackProps } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import { _socials } from 'src/_mock';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
//
import { navConfig } from '../nav/config-navigation';

// ----------------------------------------------------------------------

export default function Footer() {
  const isMdUp = useResponsive('up', 'md');

  const { pathname } = useRouter();

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Logo single />

      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2023. All rights reserved
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ md: 'flex-start' }}
        >
          <Stack spacing={3} sx={{ maxWidth: 320 }}>
            <Logo />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              The starting point for your next project based on easy-to-customize Material-UI ©
              helps you build apps faster and better.
            </Typography>
          </Stack>

          <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
            {isMdUp && (
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                {navConfig.map((link) => (
                  <Link
                    key={link.title}
                    component={NextLink}
                    href={link.path}
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Stack>
            )}

            <Stack direction="row" alignItems="center">
              {_socials.map((social) => (
                <IconButton key={social.value} color="primary">
                  <Iconify icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Divider />
      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2023. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}
