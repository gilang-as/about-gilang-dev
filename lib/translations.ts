export type Language = "en" | "id"

export const translations = {
  en: {
    name: "Gilang Adi S",
    title: "Software Engineer & Full-Stack Developer",
    intro:
        "Building scalable web applications using modern technologies. Passionate about clean code, great user experience, and solving complex problems through elegant and maintainable solutions.",
    sections: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      videoBlog: "Video & Blog",
      contact: "Contact",
    },
    about: {
      title: "About",
      paragraphs: [
        "I am a full-stack developer with a strong passion for building intuitive and high-performance web, mobile, and desktop applications. With expertise in modern JavaScript frameworks, Flutter, and cloud technologies, I focus on delivering solutions that are technically robust and user-friendly.",
        "My approach combines clean architecture, best practices, and strong attention to detail. I thrive in collaborative environments and enjoy transforming complex requirements into simple, elegant, and maintainable code.",
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Frontend",
          items: "React • Next.js • TypeScript • Tailwind CSS • Flutter • Swift",
        },
        {
          name: "Backend",
          items:
              "Node.js • Python • Go • PHP • Rust • Swift • Elixir • PostgreSQL • MySQL • TimescaleDB • MongoDB • Redis • REST APIs",
        },
        {
          name: "Tools & Cloud",
          items: "Git • Kubernetes • Docker • AWS • Vercel • CI/CD",
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "KYC System – Floq & Admin Dashboard",
          description:
              "Developed a Know Your Customer (KYC) system using the OneKYC third-party service for active liveness detection and Indonesian ID (KTP) scanning. Implemented facial verification and face matching using Iluma, along with NIK validation through the Dukcapil API.",
          tech:
              "Go • PostgreSQL • AWS • Lambda • Next.js • Ant Design • OneKYC • Iluma",
        },
        {
          title: "KYC System – Binaloka & Admin Dashboard",
          description:
              "Built a KYC feature with OCR integration to extract data from KTP, Driver’s License (SIM), Passport, and other identity documents. Implemented both active and passive liveness face verification and integrated NIK validation with the Dukcapil system.",
          tech:
              "Go • MySQL • Docker • Next.js • Ant Design • Iluma",
        },
        {
          title: "KYC System – XTB Indonesia & Admin Dashboard",
          description:
              "Developed an end-to-end KYC solution with OCR-based document extraction for KTP, Driver’s License, Passport, and other identity documents. Supported active and passive liveness facial verification and integrated NIK validation via the Dukcapil API.",
          tech:
              "Go • MySQL • Docker • Next.js • Ant Design • Iluma",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Software Engineer",
          period: "2020 - Present",
          company: "Reku – PT Rekeningku Dotcom Indonesia",
          description:
              "Developed and maintained multiple core features including Lightning Trade, Staking, IDR and Crypto Deposit/Withdrawal systems, and US Stock Trading. Actively involved in system design, performance optimization, and maintaining scalable backend services.",
        },
      ],
    },
    videoBlog: {
      title: "Video & Blog",
      videos: {
        title: "Recent Videos",
        items: [
          { title: "Building Scalable APIs with Node.js", url: "#" },
          { title: "Next.js 15 – What's New?", url: "#" },
          { title: "TypeScript Best Practices in 2024", url: "#" },
        ],
        moreLink: {
          text: "View More Videos",
          url: "https://youtube.com/@yourchannel",
        },
      },
      articles: {
        title: "Latest Articles",
        items: [
          { title: "Clean Code Principles for React Components", url: "#" },
          { title: "Understanding Database Indexing", url: "#" },
          { title: "Optimizing Web Performance: A Practical Guide", url: "#" },
        ],
        moreLink: {
          text: "View More Articles",
          url: "https://yourblog.com",
        },
      },
    },
    contact: {
      title: "Contact",
      email: {
        label: "Email",
        value: "gilangas@outlook.com",
      },
      social: {
        label: "Social",
        items: [
          { name: "GitHub", url: "https://github.com/gilang-as" },
          { name: "LinkedIn", url: "https://linkedin.com/in/gilang-as" },
        ],
      },
      downloadCV: "Download CV",
    },
    footer: {
      copyright: "© 2025 Gilang Adi S. All rights reserved.",
      madeWith: "Made with love",
    },
  },
  id: {
    name: "Gilang Adi S",
    title: "Software Engineer & Full-Stack Developer",
    intro:
      "Membangun aplikasi web yang scalable dengan teknologi modern. Passionate tentang kode yang bersih, pengalaman pengguna, dan memecahkan masalah kompleks melalui solusi yang elegan.",
    sections: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      videoBlog: "Video & Blog",
      contact: "Kontak",
    },
    about: {
      title: "Tentang",
      paragraphs: [
        "Saya adalah full-stack developer dengan passion untuk membuat aplikasi web, mobile, desktop yang intuitif dan performan. Dengan keahlian dalam framework JavaScript atau Flutter modern dan teknologi cloud, saya fokus pada penyampaian solusi yang robust secara teknis dan user-friendly.",
        "Pendekatan saya menggabungkan arsitektur yang bersih, praktik terbaik, dan perhatian kuat terhadap detail. Saya berkembang dalam lingkungan kolaboratif dan menikmati mengubah persyaratan kompleks menjadi kode yang sederhana dan elegan.",
      ],
    },
    skills: {
      title: "Keahlian",
      categories: [
        {
          name: "Frontend",
          items: "React • Next.js • TypeScript • Tailwind CSS • Flutter • Swift",
        },
        {
          name: "Backend",
          items: "Node.js • Python • Go • PHP • Rust • Swift • Elixir • PostgreSQL • MySQL • TimescaleDB • MongoDB • Redis • REST APIs • etc",
        },
        {
          name: "Alat & Cloud",
          items: "Git • Kubernetes •  Docker • AWS • Vercel • CI/CD",
        },
      ],
    },
    projects: {
      title: "Proyek",
      items: [
        {
          title: "KYC Feature Floq & Frontend Admin",
          description: "Membangun sistem KYC (Know Your Customer) dengan memanfaatkan third-party OneKYC untuk active liveness detection dan pemindaian KTP, kemudian melakukan verifikasi dan pencocokan wajah menggunakan third-party Iluma, serta validasi NIK melalui API Dukcapil.",
          tech: "Go • PostgreSQL • AWS • Lambda • Next.JS • AntDesign • OneKYC • Iluma",
        },
        {
          title: "KYC Feature Binaloka & Frontend Admin",
          description: "Mengembangkan fitur KYC (Know Your Customer) dengan integrasi OCR untuk mengekstraksi data dari KTP, SIM, Paspor, dan dokumen identitas lainnya, dilengkapi dengan verifikasi wajah melalui active liveness maupun passive liveness, serta validasi NIK ke sistem Dukcapil.",
          tech: "Go • MySQL • Docker • Next.JS • AntDesign • Iluma",
        },
        {
          title: "KYC Feature XTB Indonesia & Frontend Admin",
          description: "Mengembangkan fitur KYC (Know Your Customer) dengan integrasi OCR untuk mengekstraksi data dari KTP, SIM, Paspor, dan dokumen identitas lainnya, dilengkapi dengan verifikasi wajah melalui active liveness maupun passive liveness, serta validasi NIK ke sistem Dukcapil.",
          tech: "Go • MySQL • Docker • Next.JS • AntDesign • Iluma",
        },
      ],
    },
    experience: {
      title: "Pengalaman",
      items: [
        {
          title: "Software Enginerr",
          period: "2020 - Sekarang",
          company: "Reku - PT Rekeningku Dotcom Indonesia",
          description:
            "Membuat dan mengembangkan beberapa fitur seperti Lightning Trade, Staking, Deposit/Withdraw IDR dan Crypto Coin, US Stock Trading.",
        },
      ],
    },
    videoBlog: {
      title: "Video & Blog",
      videos: {
        title: "Video Terbaru",
        items: [
          { title: "Membangun API yang Scalable dengan Node.js", url: "#" },
          { title: "Next.js 15 - Apa yang Baru?", url: "#" },
          { title: "Praktik Terbaik TypeScript di 2024", url: "#" },
        ],
        moreLink: { text: "Lihat Lebih Banyak Video", url: "#" },
      },
      articles: {
        title: "Artikel Terbaru",
        items: [
          { title: "Prinsip Clean Code untuk Komponen React", url: "#" },
          { title: "Memahami Pengindeksan Database", url: "#" },
          { title: "Mengoptimalkan Performa Web: Panduan Praktis", url: "#" },
        ],
        moreLink: { text: "Lihat Lebih Banyak Artikel", url: "#" },
      },
    },
    contact: {
      title: "Kontak",
      email: {
        label: "Email",
        value: "gilangas@outlook.com",
      },
      social: {
        label: "Sosial Media",
        items: [
          { name: "GitHub", url: "https://github.com/gilang-as" },
          { name: "LinkedIn", url: "https://linkedin.com/in/gilang-as" },
        ],
      },
      downloadCV: "Unduh CV",
    },
    footer: {
      copyright: "© 2025 Gilang Adi S. All rights reserved.",
      madeWith: "Made with love",
    },
  },
}
