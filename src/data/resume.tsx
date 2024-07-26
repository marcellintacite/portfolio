import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aksanti Bahiga Tacite",
  initials: "ABT",
  url: "https://tacitebahiga.vercel.app",
  location: "Bukavu, DR Congo",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer making good stuffs on the internet. I make the web easy for everyone specialy  for French developers. I like solving problems and building solutions.",
  summary:
    "During the pandemic, my passion for developing digital solutions became vital, leading me to my first programming languages (HTML, CSS, and JavaScript). Today, this passion is a core part of my life. I create solutions for businesses and help train local developers to stay updated with the latest web technologies at [DrcMind](https://drcmind.com/).",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Firebase",
    "Postgres",
    "Prisma",
  ],
  contact: {
    email: "tacite.bahiga@gmail.com",
    tel: "+243847723092",
    social: {
      GitHub: {
        url: "https://github.com/marcellintacite",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/aksantibahiga",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/bahigaTacite",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://youtube.com/c/drcmind",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "DrcMind",
      href: "https://drcmind.com/",
      badges: [],
      location: "Remote",
      title: "Web developer & Content Creator",
      logoUrl: "/drcmind.svg",
      start: "May 2022",
      end: "Now",
      description:
        "I implement public web applications for businesses, including Matos (a flagship product sales platform for DrcMind) and DrcMind. I also create some of the best French-language content on web development, which you can find on DrcMind YouTube channel.",
    },
    {
      company: "HNG 9",
      badges: ["Finalist"],
      href: "https://hng.tech/internship",
      location: "Remote",
      title: "Frontend developer Intern",
      logoUrl: "/hng.png",
      start: "September 2022",
      end: "December 2022",
      description:
        "I collaborate with designers to implement user interfaces and contribute to the company’s open-source projects. Additionally, I build real-world applications as part of a development team.",
    },
  ],
  education: [
    {
      school: "Université Catholique de Bukavu",
      href: "https://ucbukavu.ac.cd",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/ucb.png",
      start: "2020",
      end: "2024",
    },

    {
      school: "Ecole d'application",
      href: "https://ispbukavu.ac.cd/",
      degree: "Hight school Diploma in Business and Managment",
      logoUrl: "/edap.jpeg",
      start: "2014",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "DrcMind",
      href: "https://drcmind.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With our [YouTube](https://www.youtube.com/@DrcMind) channel, we decided to implement a separate platform where people without access can follow our courses. This project aims to provide accessible learning resources and ensure that everyone can benefit from our educational content, regardless of their ability to access YouTube.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Daisy UI"],
      links: [
        {
          type: "Website",
          href: "https://drcmind.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://utfs.io/f/f418a643-7d0b-4371-bbc8-be38726aafd7-25kqo.mp4",
    },
    {
      title: "Matos",
      href: "https://matos-drcmind.web.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "DrcMind, being one of the best suppliers of high-end equipment (PCs, accessories, phones), allowed me to work on the client side of the Matos application. This application enables users to view and order equipment online through the platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://matos-drcmind.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://utfs.io/f/667eaa23-8e4c-420d-8acd-0bc19ff514e2-25kqp.mp4",
    },
    {
      title: "Mwandishi AI",
      href: "https://mwandishi-ai.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Mwandishi AI is an AI-powered application using the Gemini model that assists songwriters in writing songs, generating lyrics or suggestions. It also helps users verify their CVs and receive feedback.",
      technologies: [
        "Nextjs",
        "Typescript",
        "Tailwind",
        "Gemini",
        "Supabase",
        "Shadcn UI",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://mwandishi-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://utfs.io/f/b0482d50-cbde-41d9-8e0a-24b141ff49ba-tfzrwu.mp4",
    },
    {
      title: "TingPage",
      href: "https://ting-page.vercel.app//",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "TingPage is a web application (PWA) I designed to help students generate cover pages for their assignments. This tool simplifies the process of creating professional and properly formatted cover pages for academic work.",
      technologies: ["React", "Javascript", "Styled Components"],
      links: [
        {
          type: "Website",
          href: "https://ting-page.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/marcellintacite/TingPage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://utfs.io/f/b9ec4d07-8fd7-4d73-a5aa-1f9684e72bdb-25kqs.mp4",
    },
  ],
  hackathons: [
    {
      title: "Solution Challenge 2023",
      dates: "January  - June, 2023",
      location: "Online, GDSC",
      description:
        "During a hackathon, we developed a Progressive Web App (PWA) called SOS Dokta, which helps people in my town access vital health information and manage their medicines easily. Our project was recognized among the top 100 finalists in the world.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/solution%20challenge%201_al4BjxI.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          type: "Website",
          href: "https://sosdokta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/marcellintacite/sos-dokta-gdsc",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],

  courses: [
    {
      title: "Moderne Web developement",
      dates: "September 2023",
      video: () => (
        <iframe
          width="400"
          height="250"
          className="rounded-lg"
          src="https://www.youtube.com/embed/nf2XHSpI4WA?si=Uc1dIDwR5Gqn4sw_"
          title="YouTube video player"
          // @ts-ignore
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "React js for beginner",
      dates: "September 2023",
      video: () => (
        <iframe
          width="400"
          height="250"
          className="rounded-lg overflow-hidden"
          src="https://www.youtube.com/embed/GeIFHYVTyik?si=BPlMI3GCucL4x7sL"
          title="YouTube video player"
          // @ts-ignore
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "PWAs",
      dates: "September 2023",
      video: () => (
        <iframe
          width="400"
          height="250"
          className="rounded-lg"
          src="https://www.youtube.com/embed/p-8-ym5VYtc?si=LarKq_g-C7zaJtBk"
          title="YouTube video player"
          // @ts-ignore
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "Nextjs",
      dates: "September 2023",
      video: () => (
        <iframe
          width="400"
          height="250"
          className="rounded-lg"
          src="https://www.youtube.com/embed/1EMDpZVFR8A?si=EivVtY2uDWrWSDZl"
          title="YouTube video player"
          // @ts-ignore
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
  events: [
    {
      title: "Google I/O 2023",
      dates: "May 2023",
      location: "Online",
      description:
        "Google I/O is an annual developer conference held by Google in Mountain View, California. I attended the 2023 edition to learn about the latest updates in web development and to network with other developers.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/solution%20challenge%201_al4BjxI.png",
      links: [
        {
          type: "Website",
          href: "https://events.google.com/io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
