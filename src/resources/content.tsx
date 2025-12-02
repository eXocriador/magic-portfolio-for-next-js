import { Line, Row, Text } from "@once-ui-system/core";
import type {
  About,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
  Contact
} from "@/types";

const person: Person = {
  firstName: "Oleh",
  lastName: "Tatarynov",
  name: `Oleh Tatarynov`,
  role: "Fullstack Web Developer",
  avatar: "/images/avatar.webp",
  email: "exocriador@gmail.com",
  // location: "Oleh Tatarynov", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Ukrainian"], // optional: Leave the array empty if you don't want to display languages
  // Use a valid IANA time zone string here. 'Europe/Kyiv' is appropriate for Ukraine.
  location: "Europe/Kyiv"
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/eXocriador",
    essential: true
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/exocriador/",
    essential: true
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/exocriador",
    essential: false
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system"
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Text as="span" size="xl" weight="strong">
        ONCE UI
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my
      own projects.
    </>
  )
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false
  },
  avatar: {
    display: true
  },
  calendar: {
    display: true,
    link: "https://cal.com"
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm certified Fullstack Web Developer with a passion for transforming
        complex challenges into simple, elegant web solutions. My work spans
        digital interfaces with interactive experiences, and the convergence of
        design and technology.
      </>
    )
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "GoIT",
        description: <>Studied fullstack web development.</>
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>
      }
    ]
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9
          }
        ]
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>
        ],
        images: []
      }
    ]
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma"
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9
          }
        ]
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript"
          },
          {
            name: "Next.js",
            icon: "nextjs"
          },
          {
            name: "Supabase",
            icon: "supabase"
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9
          }
        ]
      }
    ]
  }
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `I'm available for freelance work, contract roles, and collaborations — let's build something together. Use the contact form or reach out via email or socials.`,
  contactDetails: (
    <>
      <div style={{ marginBottom: 12 }}>
        <strong>Email</strong>:{" "}
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <strong>Location</strong>: {person.location} — typically UTC+2 (EEST)
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Availability</strong>: Open to freelance & collaboration,
        currently accepting limited projects.
      </div>
      <div style={{ marginBottom: 12 }}>
        <strong>Response time</strong>: I usually reply within 48 hours.
      </div>
    </>
  ),
  leftCard: {
    blurb: (
      <>
        I help teams design and ship delightful experiences — from prototypes to
        production-grade web apps. If you have an idea, let's talk about scope,
        timelines, and next steps.
      </>
    ),
    ctaEmailLabel: "Email",
    ctaSecondaryLabel: "Message via email"
  },
  form: {
    title: "Send a message",
    description: (
      <>
        Prefer email? Use the left button or copy the address — or fill the
        quick form and open your mail client to send the message.
      </>
    ),
    placeholders: {
      name: "Your name",
      email: "Your email",
      message: "Tell me about your project or what you'd like to talk about..."
    },
    buttons: {
      submit: "Send message",
      copyEmail: "Copy email"
    },
    hints: {
      success: "Ready — open your mail client to send.",
      validation: "Please fill required fields (email & message)."
    }
  }
};

export { person, social, newsletter, home, about, work, contact };
