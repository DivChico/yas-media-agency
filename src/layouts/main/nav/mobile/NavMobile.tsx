import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
import NextLink from 'next/link';
// @mui
import { List, Drawer, IconButton, Button, Stack } from '@mui/material';
// hooks
import { useLocales } from 'src/hooks/useLocales';
// config
import { NAV } from 'src/config-global';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
//
import { NavProps } from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

const navTitleKey = (
  title: string
): 'nav_home' | 'nav_services' | 'nav_portfolio' | 'nav_about' | 'nav_contact' => {
  const map: Record<
    string,
    'nav_home' | 'nav_services' | 'nav_portfolio' | 'nav_about' | 'nav_contact'
  > = {
    home: 'nav_home',
    services: 'nav_services',
    portfolio: 'nav_portfolio',
    about: 'nav_about',
    contact: 'nav_contact',
  };
  return map[title.toLowerCase()] || 'nav_home';
};

export default function NavMobile({ data }: NavProps) {
  const { t } = useLocales();
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList
                key={link.title}
                item={{ ...link, title: t(navTitleKey(link.title)) }}
              />
            ))}
          </List>

          <Stack spacing={1.5} sx={{ p: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="inherit"
              component={NextLink}
              href="/contact"
            >
              {t('nav_cta')}
            </Button>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
