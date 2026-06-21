// @mui
import { Stack } from '@mui/material';
// hooks
import { useLocales } from 'src/hooks/useLocales';
//
import { NavProps } from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }: NavProps) {
  const { t } = useLocales();

  const navTitleKey = (title: string): 'nav_home' | 'nav_services' | 'nav_portfolio' | 'nav_about' | 'nav_contact' => {
    const map: Record<string, 'nav_home' | 'nav_services' | 'nav_portfolio' | 'nav_about' | 'nav_contact'> = {
      home: 'nav_home',
      services: 'nav_services',
      portfolio: 'nav_portfolio',
      about: 'nav_about',
      contact: 'nav_contact',
    };
    return map[title.toLowerCase()] || 'nav_home';
  };

  const translatedData = data.map((link) => ({
    ...link,
    title: t(navTitleKey(link.title)),
  }));

  return (
    <Stack
      component="nav"
      direction="row"
      spacing={6}
      sx={{
        ml: 6,
        height: 1,
        ...sx,
      }}
    >
      {translatedData.map((link) => (
        <NavList key={link.title} item={link} />
      ))}
    </Stack>
  );
}
