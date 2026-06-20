import { useState } from 'react';
import {
  Stack,
  Container,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Iconify from 'src/components/iconify';

const faqs = [
  {
    question: 'What services does YAS Media Agency offer?',
    answer:
      'We offer a full spectrum of digital marketing services including social media management, content creation, paid advertising (PPC), search engine optimization (SEO), branding & identity design, web development, influencer marketing, and AI-powered marketing analytics. Every service is tailored to your business goals.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We primarily serve mid-to-large enterprises across Saudi Arabia and the wider GCC region. Our expertise spans real estate, retail & e-commerce, hospitality, fintech, healthcare, entertainment, and government sectors. We understand the regional market landscape and cultural nuances.',
  },
  {
    question: 'How do you use AI in marketing?',
    answer:
      'AI is embedded in everything we do. We use machine learning for predictive audience targeting, AI-driven content personalization, automated campaign optimization, sentiment analysis on social listening, and generative AI for creative assets at scale. This means faster results and better ROI for our clients.',
  },
  {
    question: 'What is the typical engagement process?',
    answer:
      'Our process follows a proven four-phase framework: Discovery (audit, research, goal-setting) → Strategy (roadmap, creative direction, channel planning) → Execute (campaign launch, content production, deployment) → Optimize (real-time analytics, A/B testing, refinement). We stay agile and iterate based on data.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Timelines depend on the scope of work and channels involved. Typically, clients see initial measurable results within 30–60 days for paid campaigns and content marketing. SEO and brand-building efforts gain meaningful traction within 3–6 months. We set clear milestones and provide transparent reporting from day one.',
  },
];

export default function MarketingLandingFaqs() {
  const [expanded, setExpanded] = useState<string | false>(false);

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
          FAQ
        </Typography>
        <Typography variant="h2">Frequently Asked Questions</Typography>
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
