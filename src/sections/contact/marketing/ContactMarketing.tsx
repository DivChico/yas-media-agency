import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Stack,
  Box,
  Link,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
// components
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { useLocales } from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  phone: Yup.string().required('Phone is required'),
  service: Yup.string().required('Please select a service'),
  message: Yup.string().required('Message is required'),
});

type FormValues = Yup.InferType<typeof Schema>;

const SERVICE_OPTIONS: { value: string; labelKey: 'contact_service_dm' | 'contact_service_cm' | 'contact_service_sm' | 'contact_service_bi' | 'contact_service_cc' | 'contact_service_seo' | 'contact_service_dt' | 'contact_service_ai' | 'contact_service_crm' }[] = [
  { value: 'digital-marketing', labelKey: 'contact_service_dm' },
  { value: 'campaign-management', labelKey: 'contact_service_cm' },
  { value: 'social-media', labelKey: 'contact_service_sm' },
  { value: 'brand-identity', labelKey: 'contact_service_bi' },
  { value: 'content-creation', labelKey: 'contact_service_cc' },
  { value: 'seo', labelKey: 'contact_service_seo' },
  { value: 'digital-transformation', labelKey: 'contact_service_dt' },
  { value: 'ai-automation', labelKey: 'contact_service_ai' },
  { value: 'crm', labelKey: 'contact_service_crm' },
];

// ----------------------------------------------------------------------

export default function ContactMarketing() {
  const { t } = useLocales();

  const [open, setOpen] = useState(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('DATA', data);
      reset();
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: 'grey.900', py: { xs: 10, md: 15 } }} id="contact">
        <Container>
          <Grid
            container
            spacing={{ xs: 5, md: 8 }}
            justifyContent="space-between"
          >
            <Grid xs={12} md={6} lg={5}>
              <Typography
                variant="h2"
                sx={{ color: 'common.white', mb: 1.5 }}
              >
                {t('contact_title')}
              </Typography>

              <Typography sx={{ color: 'grey.500', mb: 4, maxWidth: 400 }}>
                {t('contact_subtitle')}
              </Typography>

              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Iconify
                    icon="carbon:email"
                    width={24}
                    sx={{ color: 'primary.main', mt: 0.5 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
                      Email
                    </Typography>
                    <Link
                      href="mailto:hello@yasmedia.com"
                      color="grey.500"
                      variant="body2"
                    >
                      hello@yasmedia.com
                    </Link>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Iconify
                    icon="carbon:phone"
                    width={24}
                    sx={{ color: 'primary.main', mt: 0.5 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
                      Phone
                    </Typography>
                    <Typography color="grey.500" variant="body2">
                      +966 50 993 996
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid xs={12} md={6} lg={6}>
              <Box
                sx={{
                  bgcolor: 'grey.800',
                  borderRadius: 2,
                  p: { xs: 3, md: 5 },
                }}
              >
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Stack spacing={2.5}>
                    <RHFTextField name="name" label={t('contact_name')} placeholder={t('contact_name_placeholder')} />
                    <RHFTextField name="email" label={t('contact_email')} type="email" placeholder={t('contact_email_placeholder')} />
                    <RHFTextField name="phone" label={t('contact_phone')} type="tel" placeholder={t('contact_phone_placeholder')} />

                    <RHFSelect name="service" label={t('contact_service')}>
                      <MenuItem value="" disabled>
                        {t('contact_service_placeholder')}
                      </MenuItem>
                      {SERVICE_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {t(option.labelKey)}
                        </MenuItem>
                      ))}
                    </RHFSelect>

                    <RHFTextField
                      name="message"
                      label={t('contact_message')}
                      placeholder={t('contact_message_placeholder')}
                      multiline
                      rows={4}
                    />
                  </Stack>

                  <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    loading={isSubmitting}
                    sx={{ mt: 3, px: 5 }}
                  >
                    {t('contact_submit')}
                  </LoadingButton>
                </FormProvider>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setOpen(false)}
        >
          {t('contact_success_title')} {t('contact_success_desc')}
        </Alert>
      </Snackbar>
    </>
  );
}
