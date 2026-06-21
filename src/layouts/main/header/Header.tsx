// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Toolbar, Container } from '@mui/material';
// hooks
import { useLocales } from 'src/hooks/useLocales';
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgBlur } from 'src/utils/cssStyles';
// config
import { HEADER } from 'src/config-global';
// components
import Logo from 'src/components/logo';
import { useSettingsContext } from 'src/components/settings';
//
import { NavMobile, NavDesktop, navConfig } from '../nav';
import HeaderShadow from '../../components/HeaderShadow';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();
  const { t } = useLocales();
  const { onToggleDirection } = useSettingsContext();

  const isMdUp = useResponsive('up', 'md');

  const isOffset = useOffSetTop();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...bgBlur({ color: '#050505' }),
          ...(isOffset && {
            color: 'text.primary',
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ lineHeight: 0 }}>
            <Logo />
          </Box>

          {isMdUp && <NavDesktop data={navConfig} />}

          <Stack
            spacing={2}
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              onClick={onToggleDirection}
              size="small"
              variant="text"
              sx={{
                minWidth: 40,
                color: headerOnDark ? 'common.white' : 'text.secondary',
                fontWeight: 700,
              }}
            >
              {t('lang_switch_to')}
            </Button>

            {isMdUp && (
              <Button
                variant="contained"
                color="inherit"
                href="/#contact"
              >
                {t('nav_cta')}
              </Button>
            )}
          </Stack>

          {!isMdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}
