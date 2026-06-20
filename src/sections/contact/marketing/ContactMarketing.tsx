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

// ----------------------------------------------------------------------

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  phone: Yup.string().required('Phone is required'),
  service: Yup.string().required('Please select a service'),
  message: Yup.string().required('Message is required'),
});

type FormValues = Yup.InferType<typeof Schema>;

const SERVICE_OPTIONS = [
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'campaign-management', label: 'Campaign Management' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'brand-identity', label: 'Brand Identity' },
  { value: 'content-creation', label: 'Content Creation' },
  { value: 'seo', label: 'SEO' },
  { value: 'digital-transformation', label: 'Digital Transformation' },
  { value: 'ai-automation', label: 'AI & Automation' },
  { value: 'crm', label: 'CRM' },
];

// ----------------------------------------------------------------------

export default function ContactMarketing() {
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
                Let&apos;s Build Your Legacy
              </Typography>

              <Typography sx={{ color: 'grey.500', mb: 4, maxWidth: 400 }}>
                Ready to elevate your brand? Fill out the form and our team will
                get back to you within 24 hours.
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
                    <RHFTextField name="name" label="Name" />
                    <RHFTextField name="email" label="Email" type="email" />
                    <RHFTextField name="phone" label="Phone" type="tel" />

                    <RHFSelect name="service" label="Service Interest">
                      <MenuItem value="" disabled>
                        Select a service
                      </MenuItem>
                      {SERVICE_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </RHFSelect>

                    <RHFTextField
                      name="message"
                      label="Message"
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
                    Send Message
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
          Message sent successfully! We&apos;ll be in touch soon.
        </Alert>
      </Snackbar>
    </>
  );
}
