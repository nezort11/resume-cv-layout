import * as React from 'react';

import {
  Box,
  Stack,
  Typography,
  SvgIcon,
  SvgIconProps,
  TypographyProps,
} from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  COLOR_INDIGO,
  COLOR_WHITE,
  COLOR_CARAMEL,
  COLOR_SAFFRON,
  COLOR_SOAP,
} from './theme';

const UxIcon = (props: SvgIconProps) => (
  <SvgIcon
    {...props}
    viewBox="0 0 16 16"
    sx={{ width: 16, height: 16, fill: 'none', ...props?.sx }}
  >
    <g clip-path="url(#clip0_1_246)">
      <path
        d="M4.5 6.25H2C1.72386 6.25 1.5 6.47386 1.5 6.75V9.25C1.5 9.52614 1.72386 9.75 2 9.75H4.5C4.77614 9.75 5 9.52614 5 9.25V6.75C5 6.47386 4.77614 6.25 4.5 6.25Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 2.5H10.5C10.2239 2.5 10 2.72386 10 3V6C10 6.27614 10.2239 6.5 10.5 6.5H13.5C13.7761 6.5 14 6.27614 14 6V3C14 2.72386 13.7761 2.5 13.5 2.5Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 9.5H10.5C10.2239 9.5 10 9.72386 10 10V13C10 13.2761 10.2239 13.5 10.5 13.5H13.5C13.7761 13.5 14 13.2761 14 13V10C14 9.72386 13.7761 9.5 13.5 9.5Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8H7.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.5H9.00001C8.8028 11.5008 8.60737 11.4626 8.42501 11.3875C8.24265 11.3124 8.07696 11.202 7.93751 11.0625C7.79806 10.923 7.6876 10.7574 7.61251 10.575C7.53742 10.3926 7.49919 10.1972 7.50001 10V6C7.49919 5.80278 7.53742 5.60736 7.61251 5.425C7.6876 5.24263 7.79806 5.07695 7.93751 4.93749C8.07696 4.79804 8.24265 4.68758 8.42501 4.61249C8.60737 4.53741 8.8028 4.49917 9.00001 4.5H10"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_246">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

const UiIcon = (props: SvgIconProps) => (
  <SvgIcon
    viewBox="0 0 16 16"
    {...props}
    sx={{ width: 16, height: 16, fill: 'none', ...props?.sx }}
  >
    <g clip-path="url(#clip0_1_255)">
      <path
        d="M6.5 6.5V13"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.5H14"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3H2.5C2.22386 3 2 3.22386 2 3.5V12.5C2 12.7761 2.22386 13 2.5 13H13.5C13.7761 13 14 12.7761 14 12.5V3.5C14 3.22386 13.7761 3 13.5 3Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_255">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

const UxResearchIcon = (props: SvgIconProps) => (
  <SvgIcon
    viewBox="0 0 16 16"
    {...props}
    sx={{ width: 16, height: 16, fill: 'none', ...props?.sx }}
  >
    <g clip-path="url(#clip0_1_262)">
      <path
        d="M12.5 14H3.5C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5L13 5.5V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8536C12.7598 13.9473 12.6326 14 12.5 14Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 2V5.5H13"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.98767 10.4875L9.98767 11.4875"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 11C8.7165 11 9.5 10.2165 9.5 9.25C9.5 8.2835 8.7165 7.5 7.75 7.5C6.7835 7.5 6 8.2835 6 9.25C6 10.2165 6.7835 11 7.75 11Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_262">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

interface HeadingOutlinedProps {
  children?: React.ReactNode;
}

const HeadingOutlined = ({
  children,
  ...restProps
}: HeadingOutlinedProps & TypographyProps) => (
  <Box>
    <Typography
      variant="h5"
      {...restProps}
      sx={{
        fontSize: '20px',
        fontWeight: 900,
        lineHeight: '24px',
        width: '50%',
        marginBottom: 2,
        ...restProps?.sx,
      }}
    >
      {children}
    </Typography>
    <Box
      sx={{
        width: '56px',
        height: '8px',
        backgroundColor: COLOR_SAFFRON,
        borderRadius: 0.25,
        marginBottom: 4,
      }}
    />
  </Box>
);

const Text = (typographyProps: TypographyProps) => (
  <Typography
    {...typographyProps}
    sx={{
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '16px',

      ...typographyProps?.sx,
    }}
  >
    {typographyProps?.children}
  </Typography>
);

interface ArrowListItemProps {
  children?: React.ReactNode;
  arrowProps?: SvgIconProps;
  typographyProps?: TypographyProps;
}

const ArrowListItem = ({
  children,
  arrowProps,
  typographyProps,
}: ArrowListItemProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <ArrowForwardIcon
      {...arrowProps}
      sx={{ marginRight: 1, ...arrowProps?.sx }}
    />
    <Text {...typographyProps}>{children}</Text>
  </Box>
);

interface SoftwareListItemProps {
  children?: React.ReactNode;
}

const SoftwareListItem = ({ children }: SoftwareListItemProps) => (
  <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
    <ArrowForwardIcon sx={{ marginX: 1 }} />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: COLOR_SOAP,
        borderRadius: 0.5,
      }}
    >
      <Text sx={{ marginLeft: 1 }}>{children}</Text>
    </Box>
  </Box>
);

interface CursoProps {
  title?: ReactNode;
  date?: ReactNode;
}

const Curso = ({ title, date }) => (
  <Box>
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px',
        marginBottom: 1,
      }}
    >
      {title}
    </Typography>
    <Typography sx={{ fontWeight: 300, fontSize: '10px', lineHeight: '16px' }}>
      {date}
    </Typography>
  </Box>
);

const funcionesPrincipales = [
  'User Interface Design (UI)',
  'Research (Desktop Research, Benchmarking & Heuristic Analysis)',
  'Prototyping',
  'Design Ops',
  'Design Systems',
];

const funcionesPrincipales2 = [
  'Research (Desktop Research, Benchmarking & Heuristic Analysis)',
  'User Interview & User Testing',
  'Product Strategy',
  'User Interface Design (UI)',
  'Design System',
  'Prototyping',
];

const principales = [
  'User Experience Design (UX)',
  'User Interface Design (UI)',
  'UX Research',
];

const metodologias = ['Agile', 'Lean UX', 'Design Thinking'];

const extras = ['HTML', 'CSS', 'JavaScript'];

const software = ['Adobe XD', 'InVision', 'Miro'];

const software2 = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Microsoft Office',
  'Visual Studio Code',
];

const cursos = [
  { title: '2022 – Curso de UI', date: 'Abr. 2022 – Jun. 2022 (3 meses)' },
  {
    title: '2022 – Curso de Diseño UX/UI Avanzado',
    date: 'Nov. 2021 – Feb. 2022 (4 meses)',
  },
  {
    title: '2021 – Curso de Diseño UX/UI',
    date: 'Sept. 2022 – Dic. 2022 (4 meses)',
  },
];

const cursos2 = [
  { title: '2021 – Carrera de Diseño de Interfaces (UI)', date: '13 cursos' },
];

const App = () => (
  <Box>
    <Box
      sx={{
        paddingX: 5.5,
        paddingTop: 14,
        paddingBottom: 10,
        backgroundColor: COLOR_INDIGO,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexBasis: '50%', marginRight: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '64px',
              fontWeight: 900,
              lineHeight: '80px',
              color: COLOR_WHITE,
              marginBottom: 2,
            }}
          >
            Dylan Nuñez
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '24px',
              color: COLOR_WHITE,
              marginBottom: 6,
            }}
          >
            UX/UI Designer
          </Typography>
          <Text
            sx={{
              fontSize: '12px',
              color: COLOR_WHITE,
            }}
          >
            Me dedicó a crear productos usables, accesibles e inclusivos a
            través de la investigación y el diseño. Busco ser una persona
            polivalente pero con ciertas habilidades bien definidas, por eso
            enfoco mi carrera en la experiencia de usuario mientras aprendo
            sobre otras disciplinas en mi tiempo libre.
          </Text>
        </Box>
        <Box sx={{ flexBasis: '50%', marginLeft: 2 }}>
          <Box
            component="img"
            src="https://www.dropbox.com/s/iloci9oj1lx29zw/avatar.jpg?dl=1"
            alt="avatar"
            sx={{
              display: 'block',
              width: '100%',
              aspectRation: '1 / 1',
              borderRadius: 2,
              marginBottom: 2,
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MailOutlineIcon sx={{ color: COLOR_CARAMEL, marginRight: 1 }} />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '16px',
                  color: COLOR_WHITE,
                }}
              >
                dylunez@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LinkedInIcon sx={{ color: COLOR_CARAMEL, marginRight: 1 }} />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '16px',
                  color: COLOR_WHITE,
                }}
              >
                @dylunez
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box sx={{ paddingX: 5.5, paddingTop: 7, paddingBottom: 11 }}>
      <HeadingOutlined>Experiencia laborar y personal</HeadingOutlined>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexBasis: '50%', marginRight: 2 }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 1,
            }}
          >
            Práctica profesional
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: 1,
            }}
          >
            BNA+ | Design System
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '10px',
              lineHeight: '16px',
              marginBottom: 2,
            }}
          >
            Abr. 2022 – Jun. 2022 (3 meses)
          </Typography>
          <Text sx={{ marginBottom: 3 }}>
            Durante el proyecto, me encargué de elaborar un nuevo design system
            para una app móvil basado en principios y patrones que se enfoquen
            en un proceso de trabajo ágil, la inclusión de los usuarios y los
            valores de la empresa. Este trabajo dio como resultado un diseño
            fácil de iterar, accesible para los usuarios y alineado con la
            marca.
          </Text>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 1,
            }}
          >
            Funciones principales
          </Typography>
          <Stack spacing={1} sx={{ marginBottom: 3 }}>
            {funcionesPrincipales.map((funcionesPrincipale) => (
              <ArrowListItem key={funcionesPrincipale}>
                {funcionesPrincipale}
              </ArrowListItem>
            ))}
          </Stack>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 1,
            }}
          >
            Frameworks & Tools
          </Typography>
          <Box>
            <ArrowListItem>Figma & Miro.</ArrowListItem>
          </Box>
        </Box>
        <Box sx={{ flexBasis: '50%', marginLeft: 2 }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 1,
            }}
          >
            Práctica profesional
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: 1,
            }}
          >
            Disney+ | Caso de estudio y rediseño
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '10px',
              lineHeight: '16px',
              marginBottom: 2,
            }}
          >
            Dic. 2021 – Feb. 2022 (3 meses)
          </Typography>
          <Text sx={{ marginBottom: 3 }}>
            El objetivo de este proyecto fue presentar una propuesta de diseño
            que resuelva los problemas de usabilidad en la aplicación. Para
            ello, me encargaba de hacer el análisis heurístico, el research y
            las entrevistas a los usuarios, con el objetivo de reunir
            información que me permitiese elaborar una nueva interfaz para la
            aplicación.
          </Text>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 1,
            }}
          >
            Funciones principales
          </Typography>
          <Stack spacing={1} sx={{ marginBottom: 3 }}>
            {funcionesPrincipales2.map((funcionesPrincipale) => (
              <ArrowListItem key={funcionesPrincipale}>
                {funcionesPrincipale}
              </ArrowListItem>
            ))}
          </Stack>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 1,
            }}
          >
            Frameworks & Tools
          </Typography>
          <Box>
            <ArrowListItem>
              Design Thinking, The Elements of User Experience, Lean UX, Figma &
              Miro
            </ArrowListItem>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box
      sx={{
        paddingX: 5.5,
        paddingTop: 9,
        paddingBottom: 8,
        backgroundColor: COLOR_INDIGO,
      }}
    >
      <HeadingOutlined sx={{ color: COLOR_WHITE }}>
        Habilidades y métodos
      </HeadingOutlined>

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexBasis: '50%', marginRight: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '16px',
              color: COLOR_WHITE,
              marginBottom: 3,
            }}
          >
            Principales
          </Typography>
          <Stack spacing={3}>
            {principales.map((principale) => (
              <Box
                sx={{ display: 'flex', alignItems: 'center' }}
                key={principale}
              >
                <UxIcon sx={{ marginRight: 1 }} />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: COLOR_WHITE,
                  }}
                >
                  {principale}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{ flexBasis: '50%', marginLeft: 2 }}>
          <Box sx={{ marginBottom: 4 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '10px',
                lineHeight: '16px',
                color: COLOR_WHITE,
                marginBottom: 1,
              }}
            >
              Secundarias
            </Typography>

            <Text sx={{ color: COLOR_WHITE }}>
              Communication, Design System, Atomic Design, Design Patterns,
              Wireframes, Prototypes, Usability, Accessibility, UX Research,
              Benchmarking, Flows, Information Architecture, Visual Design & Web
              Design.
            </Text>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexBasis: '50%' }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '10px',
                  lineHeight: '16px',
                  color: COLOR_WHITE,
                  marginBottom: 1,
                }}
              >
                Metodologías de trabajo
              </Typography>
              <Stack spacing={1}>
                {metodologias.map((metodologia) => (
                  <ArrowListItem
                    arrowProps={{ sx: { color: COLOR_WHITE } }}
                    typographyProps={{ sx: { color: COLOR_WHITE } }}
                    key={metodologia}
                  >
                    {metodologia}
                  </ArrowListItem>
                ))}
              </Stack>
            </Box>
            <Box sx={{ flexBasis: '50%' }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '10px',
                  lineHeight: '16px',
                  color: COLOR_WHITE,
                  marginBottom: 1,
                }}
              >
                Extras
              </Typography>
              <Stack spacing={1}>
                {extras.map((extra) => (
                  <ArrowListItem
                    arrowProps={{ sx: { color: COLOR_WHITE } }}
                    typographyProps={{ sx: { color: COLOR_WHITE } }}
                    key={extra}
                  >
                    {extra}
                  </ArrowListItem>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box sx={{ paddingX: 5.5, paddingTop: 7, paddingBottom: 11 }}>
      <HeadingOutlined>Software</HeadingOutlined>

      <Box sx={{ display: 'flex', marginBottom: 7 }}>
        <Box sx={{ flexBasis: '50%', marginRight: 2 }}>
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
              <Box
                sx={{
                  paddingX: 1,
                  display: 'flex',
                  backgroundColor: COLOR_INDIGO,
                  borderTopLeftRadius: '2px',
                  borderBottomLeftRadius: '2px',
                }}
              >
                <ArrowForwardIcon sx={{ color: COLOR_WHITE }} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: COLOR_SOAP,
                  borderTopRightRadius: '2px',
                  borderBottomRightRadius: '2px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '10px',
                    lineHeight: '16px',
                    marginLeft: 1,
                  }}
                >
                  Figma
                </Typography>
              </Box>
            </Box>
            {software.map((softwareItem) => (
              <SoftwareListItem key={softwareItem}>
                {softwareItem}
              </SoftwareListItem>
            ))}
          </Stack>
        </Box>
        <Box sx={{ flexBasis: '50%', marginLeft: 2 }}>
          <Stack spacing={1}>
            {software2.map((softwareItem) => (
              <SoftwareListItem key={softwareItem}>
                {softwareItem}
              </SoftwareListItem>
            ))}
          </Stack>
        </Box>
      </Box>

      <HeadingOutlined>Cursos</HeadingOutlined>
      <Box sx={{ display: 'flex', marginBottom: 7 }}>
        <Box sx={{ flexBasis: '50%', marginRight: 2 }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 2,
            }}
          >
            Corderhouse
          </Typography>
          <Stack spacing={2}>
            {cursos.map((curso) => (
              <Curso key={curso.title} title={curso.title} date={curso.date} />
            ))}
          </Stack>
        </Box>
        <Box sx={{ flexBasis: '50%', marginLeft: 2 }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
              marginBottom: 2,
            }}
          >
            Platzi
          </Typography>
          {cursos2.map((curso) => (
            <Curso key={curso.title} title={curso.title} date={curso.date} />
          ))}
        </Box>
      </Box>

      <HeadingOutlined>Idiomas</HeadingOutlined>

      <ArrowListItem>Inglés: A2</ArrowListItem>
    </Box>
  </Box>
);

export default App;
