import { useState, useMemo } from 'react';
import {
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import { useLocales } from 'src/hooks/useLocales';

export default function MarketingLandingFaqs() {
  const { t } = useLocales();
  const [expanded, setExpanded] = useState<string | false>(false);

  const faqs = useMemo(() => [
    { question: t('faq_1_q'), answer: t('faq_1_a') },
    { question: t('faq_2_q'), answer: t('faq_2_a') },
    { question: t('faq_3_q'), answer: t('faq_3_a') },
    { question: t('faq_4_q'), answer: t('faq_4_a') },
    { question: t('faq_5_q'), answer: t('faq_5_a') },
  ], [t]);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Stack spacing={1} sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {t('faq_overline')}
        </Typography>
        <Typography variant="h2">{t('faq_title')}</Typography>
      </Stack>

      <Stack spacing={1} sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            expanded={expanded === faq.question}
            onChange={handleChangeExpanded(faq.question)}
            sx={{
              bgcolor: 'grey.900',
              color: 'common.white',
              borderRadius: '12px !important',
              '&:before': { display: 'none' },
              '&.Mui-expanded': {
                bgcolor: 'grey.900',
                boxShadow: '0 0 0 1px #8311d4',
              },
              '& .MuiAccordionSummary-root': {
                borderRadius: 2,
              },
            }}
          >
            <AccordionSummary
              sx={{
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ flexGrow: 1, color: 'common.white' }}>
                {faq.question}
              </Typography>
              <Iconify
                width={24}
                icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                sx={{ color: '#8311d4' }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.8 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}
