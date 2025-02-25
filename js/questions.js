// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
  },
  {
    numb: 2,
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    options: [
      'Common Style Sheet',
      'Colorful Style Sheet',
      'Computer Style Sheet',
      'Cascading Style Sheet',
    ],
  },
  {
    numb: 3,
    question: 'What does PHP stand for?',
    answer: 'Hypertext Preprocessor',
    options: [
      'Hypertext Programming',
      'Hypertext Preprocessor',
      'Hypertext Preprogramming',
      'Hometext Preprocessor',
    ],
  },
  {
    numb: 4,
    question: 'What does SQL stand for?',
    answer: 'Structured Query Language',
    options: [
      'Stylish Question Language',
      'Statement Question Language',
      'Stylesheet Query Language',
      'Structured Query Language',
    ],
  },
  {
    numb: 5,
    question: 'What does XML stand for?',
    answer: 'eXtensible Markup Language',
    options: [
      'eXecutable Multiple Language',
      'eXTra Multi-Program Language',
      'eXamine Multiple Language',
      'eXtensible Markup Language',
    ],
  },
  {
    numb: 6,
    question: 'What does JSON stand for?',
    answer: 'JavaScript Object Notation',
    options: [
      'JavaScript Online Notation',
      'JavaScript Oriented Notation',
      'JavaScript Object Notation',
      'Java Syntax Object Notation',
    ],
  },
  {
    numb: 7,
    question: 'What does API stand for?',
    answer: 'Application Programming Interface',
    options: [
      'Application Programming Interface',
      'Application Protocol Interface',
      'Automated Programming Interface',
      'Application Process Interaction',
    ],
  },
  {
    numb: 8,
    question: 'What does HTTP stand for?',
    answer: 'Hypertext Transfer Protocol',
    options: [
      'Hyper Transfer Text Protocol',
      'Hypertext Translation Protocol',
      'Hypertext Transfer Process',
      'Hypertext Transfer Protocol',
    ],
  },
  {
    numb: 9,
    question: 'What does HTTPS stand for?',
    answer: 'Hypertext Transfer Protocol Secure',
    options: [
      'Hyper Transfer Text Protocol Secure',
      'Hypertext Transfer Protocol Secure',
      'Hypertext Transfer Security Protocol',
      'Hypertext Transmission Secure',
    ],
  },
  {
    numb: 10,
    question: 'What does DOM stand for?',
    answer: 'Document Object Model',
    options: [
      'Data Object Management',
      'Document Oriented Module',
      'Display Object Model',
      'Document Object Model',
    ],
  },
  {
    numb: 11,
    question: 'What does URL stand for?',
    answer: 'Uniform Resource Locator',
    options: [
      'Unified Resource Locator',
      'Uniform Resource Link',
      'Universal Resource Link',
      'Uniform Resource Locator',
    ],
  },
  {
    numb: 12,
    question: 'What does IP stand for?',
    answer: 'Internet Protocol',
    options: [
      'Internet Process',
      'Internal Protocol',
      'Internet Protocol',
      'Interface Program',
    ],
  },
  {
    numb: 13,
    question: 'What does CPU stand for?',
    answer: 'Central Processing Unit',
    options: [
      'Central Processing Unit',
      'Central Programming Unit',
      'Computer Processing Unit',
      'Central Program Unit',
    ],
  },
  {
    numb: 14,
    question: 'What does RAM stand for?',
    answer: 'Random Access Memory',
    options: [
      'Read Access Memory',
      'Random Access Memory',
      'Read And Memory',
      'Random And Memory',
    ],
  },
  {
    numb: 15,
    question: 'What does ROM stand for?',
    answer: 'Read Only Memory',
    options: [
      'Read Online Memory',
      'Read Only Memory',
      'Random Only Memory',
      'Run Only Memory',
    ],
  },
  {
    numb: 16,
    question: 'What does DNS stand for?',
    answer: 'Domain Name System',
    options: [
      'Data Name System',
      'Domain Name System',
      'Digital Network System',
      'Domain Network Service',
    ],
  },
  {
    numb: 17,
    question: 'What does LAN stand for?',
    answer: 'Local Area Network',
    options: [
      'Local Area Network',
      'Local Access Network',
      'Logical Area Network',
      'Linked Area Network',
    ],
  },
  {
    numb: 18,
    question: 'What does WAN stand for?',
    answer: 'Wide Area Network',
    options: [
      'Wireless Area Network',
      'Wide Area Network',
      'Wide Access Network',
      'Wireless Access Network',
    ],
  },
  {
    numb: 19,
    question: 'What does GUI stand for?',
    answer: 'Graphical User Interface',
    options: [
      'General User Interface',
      'Graphical Unified Interface',
      'Generic User Interface',
      'Graphical User Interface',
    ],
  },
  {
    numb: 20,
    question: 'What does SEO stand for?',
    answer: 'Search Engine Optimization',
    options: [
      'Search Engine Organizer',
      'Search Engine Optimization',
      'Simplified Engine Optimization',
      'Search Engine Operation',
    ],
  },
  {
    numb: 21,
    question: 'What does TCP stand for?',
    answer: 'Transmission Control Protocol',
    options: [
      'Transfer Control Protocol',
      'Transmission Core Protocol',
      'Transfer Core Protocol',
      'Transmission Control Protocol',
    ],
  },
  {
    numb: 22,
    question: 'What does FTP stand for?',
    answer: 'File Transfer Protocol',
    options: [
      'File Transmission Protocol',
      'File Tracking Protocol',
      'File Transfer Protocol',
      'File Transfer Process',
    ],
  },
  {
    numb: 23,
    question: 'What does CLI stand for?',
    answer: 'Command Line Interface',
    options: [
      'Command Line Interface',
      'Command Link Interface',
      'Command Language Interface',
      'Common Line Interface',
    ],
  },
  {
    numb: 23,
    question: 'What does CLI stand for?',
    answer: 'Command Line Interface',
    options: [
      'Command Language Interface',
      'Command Link Interface',
      'Command Line Interface',
      'Common Line Interface',
    ],
  },
  {
    numb: 24,
    question: 'What does GPU stand for?',
    answer: 'Graphics Processing Unit',
    options: [
      'Graphics Processing Unit',
      'Graphical Processing Unit',
      'General Processing Unit',
      'Graphical Program Unit',
    ],
  },
  {
    numb: 25,
    question: 'What does VPN stand for?',
    answer: 'Virtual Private Network',
    options: [
      'Virtual Private Network',
      'Virtual Protected Network',
      'Virtual Public Network',
      'Verified Private Network',
    ],
  },
  {
    numb: 26,
    question: 'What does AI stand for?',
    answer: 'Artificial Intelligence',
    options: [
      'Artificial Information',
      'Artificial Intelligence',
      'Automated Information',
      'Automated Intelligence',
    ],
  },
  {
    numb: 27,
    question: 'What does IoT stand for?',
    answer: 'Internet of Things',
    options: [
      'Internet of Things',
      'Internet of Tools',
      'Internet of Technology',
      'Integration of Things',
    ],
  },
  {
    numb: 28,
    question: 'What does OS stand for?',
    answer: 'Operating System',
    options: [
      'Operational System',
      'Operating Software',
      'Operating System',
      'Organized System',
    ],
  },
  {
    numb: 29,
    question: 'What does URL stand for?',
    answer: 'Uniform Resource Locator',
    options: [
      'Uniform Resource Locator',
      'Unified Resource Locator',
      'Universal Resource Locator',
      'Uniform Reference Link',
    ],
  },
  {
    numb: 30,
    question: 'What does USB stand for?',
    answer: 'Universal Serial Bus',
    options: [
      'Unified System Bus',
      'Universal Serial Bus',
      'Universal System Bus',
      'Unique Serial Bus',
    ],
  },
  {
    numb: 31,
    question: 'What does SDK stand for?',
    answer: 'Software Development Kit',
    options: [
      'System Design Kit',
      'System Development Kit',
      'Software Development Kit',
      'Software Design Kit',
    ],
  },
  {
    numb: 32,
    question: 'What does CDN stand for?',
    answer: 'Content Delivery Network',
    options: [
      'Content Delivery Network',
      'Content Distribution Node',
      'Central Data Network',
      'Content Design Network',
    ],
  },
  {
    numb: 33,
    question: 'What does B2B stand for?',
    answer: 'Business to Business',
    options: [
      'Business to Buyer',
      'Business to Business',
      'Buyer to Business',
      'Business to Broker',
    ],
  },
  {
    numb: 34,
    question: 'What does B2C stand for?',
    answer: 'Business to Consumer',
    options: [
      'Business to Consumer',
      'Business to Customer',
      'Buyer to Consumer',
      'Business to Company',
    ],
  },
  {
    numb: 35,
    question: 'What does SEO stand for?',
    answer: 'Search Engine Optimization',
    options: [
      'Search Engine Organizer',
      'Simplified Engine Operation',
      'Search Engine Operator',
      'Search Engine Optimization',
    ],
  },
  {
    numb: 36,
    question: 'What does CDN stand for?',
    answer: 'Content Delivery Network',
    options: [
      'Content Delivery Network',
      'Content Design Network',
      'Central Data Node',
      'Content Distribution Network',
    ],
  },
  {
    numb: 37,
    question: 'What does SaaS stand for?',
    answer: 'Software as a Service',
    options: [
      'Software as a Service',
      'Server as a Service',
      'System as a Service',
      'Software and Systems',
    ],
  },
  {
    numb: 38,
    question: 'What does PWA stand for?',
    answer: 'Progressive Web App',
    options: [
      'Progressive Web App',
      'Programmed Web App',
      'Personal Web App',
      'Public Web Application',
    ],
  },
  {
    numb: 39,
    question: 'What does CRUD stand for?',
    answer: 'Create, Read, Update, Delete',
    options: [
      'Create, Review, Update, Delete',
      'Create, Read, Update, Delete',
      'Create, Read, Use, Delete',
      'Create, Rename, Update, Delete',
    ],
  },
  {
    numb: 40,
    question: 'What does DNS stand for?',
    answer: 'Domain Name System',
    options: [
      'Domain Network Server',
      'Domain Name System',
      'Data Network Service',
      'Domain Name Server',
    ],
  },
  {
    numb: 41,
    question: 'What does HTTP stand for?',
    answer: 'Hypertext Transfer Protocol',
    options: [
      'Hypertext Transfer Protocol',
      'Hyper Transfer Technology Protocol',
      'Hyper Transfer Text Protocol',
      'Hypertext Transmission Process',
    ],
  },
  {
    numb: 42,
    question: 'What does HTTPS stand for?',
    answer: 'Hypertext Transfer Protocol Secure',
    options: [
      'Hyper Transfer Protocol Secure',
      'Hypertext Secure Transmission',
      'Hypertext Transfer System Secure',
      'Hypertext Transfer Protocol Secure',
    ],
  },
  {
    numb: 43,
    question: 'What does SMTP stand for?',
    answer: 'Simple Mail Transfer Protocol',
    options: [
      'Secure Mail Transfer Protocol',
      'Simple Messaging Transfer Protocol',
      'Simple Mail Transfer Protocol',
      'Secure Messaging Transfer Protocol',
    ],
  },
  {
    numb: 44,
    question: 'What does VPN stand for?',
    answer: 'Virtual Private Network',
    options: [
      'Virtual Public Network',
      'Virtual Private Network',
      'Verified Private Network',
      'Virtual Personal Network',
    ],
  },
  {
    numb: 45,
    question: 'What does MAC stand for?',
    answer: 'Media Access Control',
    options: [
      'Machine Access Control',
      'Media Authorization Code',
      'Machine Authorization Code',
      'Media Access Control',
    ],
  },
  {
    numb: 46,
    question: 'What does DNS stand for?',
    answer: 'Domain Name System',
    options: [
      'Data Name Server',
      'Domain Network System',
      'Domain Name System',
      'Data Network Server',
    ],
  },
  {
    numb: 47,
    question: 'What does SSH stand for?',
    answer: 'Secure Shell',
    options: [
      'Secure Server Host',
      'Secure Shell',
      'Super Secure Host',
      'System Shell Host',
    ],
  },
  {
    numb: 48,
    question: 'What does XML stand for?',
    answer: 'eXtensible Markup Language',
    options: [
      'eXecutable Multi Language',
      'eXtensible Markup Language',
      'eXtra Markup Language',
      'eXtensible Multiple Language',
    ],
  },
  {
    numb: 49,
    question: 'What does JVM stand for?',
    answer: 'Java Virtual Machine',
    options: [
      'Java Verified Machine',
      'Java Virtual Machine',
      'Java Version Manager',
      'Java View Machine',
    ],
  },
  {
    numb: 50,
    question: 'What does REST stand for?',
    answer: 'Representational State Transfer',
    options: [
      'Representational State Transfer',
      'Remote System Transfer',
      'Representational System Transfer',
      'Remote State Transfer',
    ],
  },
]

