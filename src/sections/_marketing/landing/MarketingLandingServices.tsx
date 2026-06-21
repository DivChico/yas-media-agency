import { useMemo } from 'react';
import { Stack, Container, Typography, Box } from '@mui/material';
import Iconify from 'src/components/iconify';
import { useLocales } from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  const { t } = useLocales();

  const services = useMemo(() => [
    {
      name: t('service_dm_name'),
      icon: 'carbon:megaphone',
      description: t('service_dm_desc'),
      offerings: [t('service_dm_1'), t('service_dm_2'), t('service_dm_3')],
    },
    {
      name: t('service_cm_name'),
      icon: 'carbon:chart-line',
      description: t('service_cm_desc'),
      offerings: [t('service_cm_1'), t('service_cm_2'), t('service_cm_3')],
    },
    {
      name: t('service_sm_name'),
      icon: 'carbon:share',
      description: t('service_sm_desc'),
      offerings: [t('service_sm_1'), t('service_sm_2'), t('service_sm_3')],
    },
    {
      name: t('service_bi_name'),
      icon: 'carbon:droplet',
      description: t('service_bi_desc'),
      offerings: [t('service_bi_1'), t('service_bi_2'), t('service_bi_3')],
    },
    {
      name: t('service_cc_name'),
      icon: 'carbon:edit',
      description: t('service_cc_desc'),
      offerings: [t('service_cc_1'), t('service_cc_2'), t('service_cc_3')],
    },
    {
      name: t('service_seo_name'),
      icon: 'carbon:search',
      description: t('service_seo_desc'),
      offerings: [t('service_seo_1'), t('service_seo_2'), t('service_seo_3')],
    },
    {
      name: t('service_dt_name'),
      icon: 'carbon:digital',
      description: t('service_dt_desc'),
      offerings: [t('service_dt_1'), t('service_dt_2'), t('service_dt_3')],
    },
    {
      name: t('service_ai_name'),
      icon: 'carbon:machine-learning',
      description: t('service_ai_desc'),
      offerings: [t('service_ai_1'), t('service_ai_2'), t('service_ai_3')],
    },
    {
      name: t('service_crm_name'),
      icon: 'carbon:data-connected',
      description: t('service_crm_desc'),
      offerings: [t('service_crm_1'), t('service_crm_2'), t('service_crm_3')],
    },
  ], [t]);

  return (
    <Container id="services" sx={{ py: { xs: 5, md: 10 }, position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: { xs: 600, md: 900 },
          height: { xs: 600, md: 900 },
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(131,17,212,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Stack
        spacing={3}
        sx={{
          maxWidth: 600,
          mb: { xs: 8, md: 10 },
          mx: 'auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled', letterSpacing: 2 }}>
          {t('services_overline')}
        </Typography>

        <Typography variant="h2" sx={{ color: 'common.white' }}>
          {t('services_title')}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceCardProps = {
  service: {
    name: string;
    icon: string;
    description: string;
    offerings: string[];
  };
};

function ServiceCard({ service }: ServiceCardProps) {
  const { name, icon, description, offerings } = service;

  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 4,
        p: 4,
        transition: 'all 0.3s ease',
        cursor: 'default',
        '&:hover': {
          transform: 'translateY(-4px)',
          background: 'rgba(255,255,255,0.05)',
          boxShadow: '0 0 40px rgba(131,17,212,0.15)',
          borderColor: 'rgba(131,17,212,0.3)',
          '& .icon-wrapper': {
            bgcolor: 'primary.main',
          },
          '& .icon-wrapper svg': {
            color: 'common.white',
          },
        },
      }}
    >
      <Stack spacing={2} alignItems="flex-start">
        <Box
          className="icon-wrapper"
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(131,17,212,0.15)',
            transition: 'all 0.3s ease',
            '& svg': {
              color: 'primary.main',
              transition: 'color 0.3s ease',
            },
          }}
        >
          <Iconify icon={icon} width={28} />
        </Box>

        <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 700 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Stack spacing={1.5} sx={{ mt: 1, width: 1 }}>
          {offerings.map((item) => (
            <Stack key={item} direction="row" spacing={1} alignItems="center">
              <Iconify
                icon="carbon:checkmark"
                width={18}
                sx={{ color: 'primary.main', flexShrink: 0 }}
              />
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
