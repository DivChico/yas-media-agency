import { Stack, Container, Typography, Box } from '@mui/material';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Service = {
  name: string;
  icon: string;
  description: string;
  offerings: string[];
};

const SERVICES: Service[] = [
  {
    name: 'Digital Marketing',
    icon: 'carbon:megaphone',
    description:
      'Performance-driven campaigns across all digital channels with data-backed optimization.',
    offerings: ['Paid Social & Search Ads', 'Display & Programmatic', 'Performance Analytics'],
  },
  {
    name: 'Campaign Management',
    icon: 'carbon:chart-line',
    description:
      'End-to-end campaign strategy, execution, and optimization for maximum ROI.',
    offerings: ['Strategy & Planning', 'A/B Testing & Optimization', 'Budget Management'],
  },
  {
    name: 'Social Media Management',
    icon: 'carbon:share',
    description:
      'Comprehensive social media presence management from content to community.',
    offerings: ['Platform Management', 'Community Engagement', 'Social Listening'],
  },
  {
    name: 'Brand Identity',
    icon: 'carbon:droplet',
    description:
      'Creating distinctive brand identities that resonate with your target audience.',
    offerings: ['Visual Identity Systems', 'Brand Guidelines', 'Brand Strategy'],
  },
  {
    name: 'Content Creation',
    icon: 'carbon:edit',
    description:
      'High-quality content that tells your brand story and drives engagement.',
    offerings: ['Video Production', 'Copywriting', 'Graphic Design'],
  },
  {
    name: 'SEO & Growth',
    icon: 'carbon:search',
    description:
      'Data-driven SEO strategies to improve visibility and drive organic growth.',
    offerings: ['Technical SEO', 'On-Page Optimization', 'Content Strategy'],
  },
  {
    name: 'Digital Transformation',
    icon: 'carbon:digital',
    description:
      'Helping businesses leverage digital technologies to transform operations.',
    offerings: ['Process Automation', 'Digital Strategy', 'Technology Integration'],
  },
  {
    name: 'AI & Automation',
    icon: 'carbon:machine-learning',
    description:
      'Cutting-edge AI solutions to automate and optimize marketing operations.',
    offerings: ['AI-Powered Analytics', 'Marketing Automation', 'Chatbot & CRM Integration'],
  },
  {
    name: 'CRM & Marketing Automation',
    icon: 'carbon:data-connected',
    description:
      'Integrated CRM solutions for better customer relationships and automated marketing.',
    offerings: ['HubSpot/CRM Setup', 'Email Automation', 'Lead Scoring & Nurturing'],
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
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
          Our Services
        </Typography>

        <Typography variant="h2" sx={{ color: 'common.white' }}>
          Everything your brand needs to grow.
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
        {SERVICES.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceCardProps = {
  service: Service;
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
