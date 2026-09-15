import type { Project, TechGroup, FocusItem } from '@/types'

// ─── Projects ──────────────────────────────────────────────────────────────────
// Update content here — UI components read from this file.

export const projects: Project[] = [
  {
    id: 'netra',
    number: '01',
    title: 'Netra',
    tagline: 'Unified connectivity & audio management for Linux desktop',
    identity: 'netra',
    accentColor: '#22D3EE',
    category: 'Linux · Rust · Systems',
    status: 'in-progress',
    description:
      'A modern Linux desktop application that consolidates Wi-Fi, Bluetooth, hotspot, audio routing, and device management into a single coherent interface — eliminating the need to juggle nmcli, bluetoothctl, and audio settings panels.',
    longDescription:
      'Linux desktop networking is fragmented by design. Every subsystem — NetworkManager for Wi-Fi, BlueZ for Bluetooth, PipeWire for audio — exposes state through D-Bus with different conventions and update models. Netra speaks directly to all of them, maintaining a unified reactive state layer and presenting it through a desktop-quality UI.',
    problem:
      'Network and audio management on Linux requires knowing three different CLI tools and navigating multiple system settings panels. No single interface provides a programmable, real-time view of connectivity state.',
    whyBuilt:
      'I wanted to understand how Linux actually represents network state — not at the settings-app level, but at the D-Bus message level. Netra is what happens when you follow that curiosity through to a real application.',
    architecture:
      'Rust backend communicates with NetworkManager, BlueZ, and PipeWire directly via D-Bus using zbus. Each subsystem has its own typed module. A reactive state layer aggregates updates and exposes them to the UI. No polling — everything is event-driven.',
    technologies: ['Rust', 'zbus', 'D-Bus', 'NetworkManager', 'BlueZ', 'PipeWire', 'Linux', 'GTK4'],
    challenges: [
      'Navigating underdocumented D-Bus interfaces for BlueZ device discovery and PipeWire audio graph management',
      'Managing concurrent state updates from three independent system daemons without race conditions',
      'Handling kernel-level driver edge cases in Wi-Fi scanning and hotspot creation that vary by hardware',
      'Designing a reactive architecture that reflects true system state in near-realtime without polling',
    ],
    learnings: [
      'How NetworkManager models connection state as a finite state machine over D-Bus',
      'Practical Rust ownership patterns for managing raw file descriptors and async D-Bus streams',
      'How PipeWire represents audio graphs — nodes, ports, links — and how to mutate them programmatically',
      'The gap between what Linux API documentation describes and what drivers actually implement',
    ],
    githubUrl: 'https://github.com/vijaygovindBiju/netra',
    architectureNodes: [
      { id: 'ui',      label: 'UI Layer',       type: 'output',   x: 50,  y: 10,  connections: ['state'] },
      { id: 'state',   label: 'State Manager',  type: 'process',  x: 50,  y: 32,  connections: ['nm', 'bluez', 'pw'] },
      { id: 'nm',      label: 'NetworkMgr',     type: 'external', x: 15,  y: 58,  connections: ['dbus'] },
      { id: 'bluez',   label: 'BlueZ',          type: 'external', x: 50,  y: 58,  connections: ['dbus'] },
      { id: 'pw',      label: 'PipeWire',       type: 'external', x: 85,  y: 58,  connections: ['dbus'] },
      { id: 'dbus',    label: 'D-Bus',          type: 'process',  x: 50,  y: 80,  connections: ['kernel'] },
      { id: 'kernel',  label: 'Linux Kernel',   type: 'storage',  x: 50,  y: 96,  connections: [] },
    ],
  },
  {
    id: 'hybrid-music',
    number: '02',
    title: 'Hybrid Music App',
    tagline: 'Local + online music with production-grade Flutter architecture',
    identity: 'music',
    accentColor: '#818CF8',
    category: 'Flutter · Mobile · Audio',
    status: 'in-progress',
    description:
      'A Flutter music application combining local device music with online music capabilities — built around strict feature-based architecture, Riverpod state management, and a repository pattern that makes local and remote data sources interchangeable.',
    longDescription:
      'Most mobile music apps are either purely local or require a cloud subscription. This app handles both — discover music on your device, search online, cache for offline playback — without the architecture degrading into a tangled mess. The design discipline is the point.',
    problem:
      'Building a music app that handles both local and remote sources cleanly is an architectural challenge. The naive approach couples UI to data source. The right approach requires deliberate layering.',
    whyBuilt:
      'I wanted to build a real Flutter app where the architecture is the primary engineering challenge, not the UI. The goal was to implement a clean layered architecture that could be understood, tested, and extended independently at each layer.',
    architecture:
      'Strict feature-based folder structure. Each feature owns its data, domain, and presentation. Riverpod handles dependency injection. Repositories define interfaces — local and remote data sources are interchangeable behind the same contract. Audio state is isolated from UI state.',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'just_audio', 'on_audio_query', 'Dio', 'Hive', 'REST APIs'],
    challenges: [
      'Designing a Repository interface that works identically whether the data source is a local file system or a remote API',
      'Keeping Riverpod providers composable, testable, and free of business logic',
      'Isolating audio playback state from UI state to prevent background playback from breaking during navigation',
      'Implementing a cache layer that handles partial offline states gracefully without UI errors',
    ],
    learnings: [
      'How to structure a Flutter feature module for independent scalability and testing',
      'The meaningful difference between UI state, server state, and domain state in a real application',
      'How just_audio manages audio focus, background playback, and platform audio sessions',
      'Practical tradeoffs between different Riverpod provider types in a layered architecture',
    ],
    githubUrl: 'https://github.com/vijaygovindBiju/hybrid-music',
    architectureNodes: [
      { id: 'ui',     label: 'Flutter UI',      type: 'output',   x: 50, y: 8,  connections: ['riverpod'] },
      { id: 'riverpod', label: 'Riverpod',      type: 'process',  x: 50, y: 28, connections: ['repo'] },
      { id: 'repo',   label: 'Repository',      type: 'process',  x: 50, y: 50, connections: ['local', 'remote'] },
      { id: 'local',  label: 'Local Source',    type: 'storage',  x: 22, y: 72, connections: ['device'] },
      { id: 'remote', label: 'Remote Source',   type: 'external', x: 78, y: 72, connections: ['api'] },
      { id: 'device', label: 'Device Storage',  type: 'storage',  x: 22, y: 92, connections: [] },
      { id: 'api',    label: 'Music APIs',       type: 'external', x: 78, y: 92, connections: [] },
    ],
  },
  {
    id: 'impostert',
    number: '03',
    title: 'Impostert',
    tagline: 'A custom terminal — understanding PTYs and process I/O from scratch',
    identity: 'terminal',
    accentColor: '#F59E0B',
    category: 'Rust · Linux · Terminal',
    status: 'experimental',
    description:
      'A Rust terminal emulator built to understand how terminals actually work — PTY allocation, shell process spawning, stdin/stdout/stderr multiplexing, signal forwarding, and ANSI escape sequence parsing. Built to learn, not to compete with existing terminals.',
    longDescription:
      'Every developer uses a terminal every day without knowing what it is. A terminal is not a shell. A PTY is not a pipe. Understanding these distinctions requires building — not reading documentation. Impostert is that construction process turned into a project.',
    problem:
      'Terminals are treated as black boxes. Most developers have no accurate mental model of what happens between pressing a key and seeing output. I wanted to change that by building it.',
    whyBuilt:
      'The best way to understand a system is to build it. Implementing a terminal forces you to understand the full stack of Linux process I/O — PTYs, ANSI sequences, signal handling, and process groups at a level that documentation alone cannot provide.',
    architecture:
      'Rust core allocates a PTY master using nix, spawns a shell subprocess attached to the PTY slave, and runs a bidirectional I/O loop. Input from the user flows to the subprocess. Output from the subprocess is parsed for ANSI escape sequences and rendered to a cell grid. The event loop is non-blocking.',
    technologies: ['Rust', 'nix', 'PTY', 'ANSI escape sequences', 'Linux', 'process management', 'async I/O'],
    challenges: [
      'Understanding the semantic difference between a PTY master, PTY slave, and a regular Unix pipe',
      'Correctly forwarding SIGWINCH, SIGINT, and other signals through the PTY without losing them',
      'Parsing ANSI/VT100 escape sequences correctly — edge cases are numerous and poorly specified',
      'Building a non-blocking event loop that handles user input and process output without one starving the other',
    ],
    learnings: [
      'How PTY pairs work at the kernel level — the master is a control interface, the slave appears as a tty to the subprocess',
      'How shells detect interactive vs non-interactive execution by inspecting whether stdin is a tty',
      'The structure of ANSI/VT100 escape sequences — CSI, SGR, cursor control, and why terminal compatibility is hard',
      'Rust ownership patterns for safely managing raw file descriptors across async contexts',
    ],
    githubUrl: 'https://github.com/vijaygovindBiju/impostert',
    architectureNodes: [
      { id: 'keyboard', label: 'Keyboard',      type: 'input',    x: 20, y: 8,  connections: ['eventloop'] },
      { id: 'display',  label: 'Display',       type: 'output',   x: 80, y: 8,  connections: [] },
      { id: 'eventloop',label: 'Event Loop',    type: 'process',  x: 50, y: 32, connections: ['pty_master'] },
      { id: 'pty_master',label: 'PTY Master',   type: 'process',  x: 50, y: 56, connections: ['pty_slave'] },
      { id: 'pty_slave', label: 'PTY Slave',    type: 'process',  x: 50, y: 76, connections: ['shell'] },
      { id: 'shell',     label: 'Shell Process',type: 'external', x: 50, y: 94, connections: [] },
    ],
  },
  {
    id: 'lifeline-ai',
    number: '04',
    title: 'LifeLine AI',
    tagline: 'Where backend engineering meets intelligent system design',
    identity: 'ai',
    accentColor: '#38BDF8',
    category: 'AI · Backend · Intelligent Systems',
    status: 'in-progress',
    description:
      'My flagship AI project — combining backend architecture, data pipelines, and AI integration to build a system with real engineering depth. Architecture decisions, data modeling, and API design are mine. AI tools accelerate implementation, not design.',
    longDescription:
      'Most portfolio AI projects are a UI wrapper around a single API call. LifeLine AI is the answer to that problem: a project where AI integration is a component of a larger, properly engineered system, not the entire product. The data pipeline, the API layer, the state management — all designed with care.',
    problem:
      'AI projects in portfolios frequently lack engineering depth — they demonstrate API usage, not system design. I want to build something where the architecture is as important as the AI capability.',
    whyBuilt:
      'I am actively building toward AI Engineering. LifeLine AI is the project where I learn what that means in practice — data pipelines, model integration, API design, and the software engineering discipline that makes AI systems reliable.',
    architecture:
      'Backend services handle data ingestion and transformation. A pipeline layer processes and prepares data for model inference. An API layer exposes capabilities to clients with clean contracts. Each layer has defined interfaces and tests independently.',
    technologies: ['Python', 'FastAPI', 'NumPy', 'Pandas', 'scikit-learn', 'REST APIs', 'Machine Learning'],
    challenges: [
      'Designing a data pipeline that stays robust when upstream schema changes or data is missing',
      'Separating ML model concerns from application business logic to maintain testability',
      'Building an API that is useful, honest about what it can and cannot do, and follows good engineering practices',
      'Maintaining architectural ownership while using AI tools for implementation acceleration',
    ],
    learnings: [
      'How to design an AI feature as a backend service component rather than an isolated notebook',
      'The data engineering fundamentals that make ML pipelines reproducible and reliable',
      'The difference between a demo-quality AI integration and a production-quality one',
      'How to maintain engineering judgment and system ownership when using AI coding agents',
    ],
    githubUrl: 'https://github.com/vijaygovindBiju/lifeline-ai',
    architectureNodes: [
      { id: 'client',   label: 'Client',         type: 'input',    x: 50, y: 6,  connections: ['api'] },
      { id: 'api',      label: 'FastAPI',         type: 'process',  x: 50, y: 26, connections: ['pipeline', 'service'] },
      { id: 'pipeline', label: 'Data Pipeline',  type: 'process',  x: 25, y: 50, connections: ['model'] },
      { id: 'service',  label: 'App Service',    type: 'process',  x: 75, y: 50, connections: ['model'] },
      { id: 'model',    label: 'ML Model',       type: 'process',  x: 50, y: 72, connections: ['storage'] },
      { id: 'storage',  label: 'Data Store',     type: 'storage',  x: 50, y: 92, connections: [] },
    ],
  },
]

// ─── Tech Stack ────────────────────────────────────────────────────────────────

export const techStack: TechGroup[] = [
  {
    label: 'LANGUAGES',
    items: ['Python', 'Rust', 'Dart', 'SQL', 'TypeScript'],
  },
  {
    label: 'FRAMEWORKS',
    items: ['Flutter', 'Riverpod', 'React', 'FastAPI'],
  },
  {
    label: 'SYSTEMS',
    items: ['Linux', 'D-Bus', 'PipeWire', 'NetworkManager', 'PTY / Process I/O'],
  },
  {
    label: 'AI & DATA',
    items: ['Machine Learning', 'NumPy', 'Pandas', 'scikit-learn'],
  },
]

// ─── Current Focus ─────────────────────────────────────────────────────────────

export const currentFocus: FocusItem[] = [
  {
    label: 'Software Engineering',
    detail: 'Architecture, system design, clean boundaries',
    status: 'active',
  },
  {
    label: 'Rust + Linux Systems',
    detail: 'D-Bus, PTY, kernel interfaces, low-level I/O',
    status: 'active',
  },
  {
    label: 'AI Engineering',
    detail: 'Pipelines, model integration, production patterns',
    status: 'active',
  },
  {
    label: 'Flutter',
    detail: 'Scalable mobile architecture with Riverpod',
    status: 'active',
  },
]

// ─── Engineering Philosophy ─────────────────────────────────────────────────────

export const philosophy = [
  {
    title: 'Architecture First',
    body: 'Define system boundaries and module responsibilities before writing implementation. The design should be visible in the code.',
    icon: 'layers',
  },
  {
    title: 'Systems Thinking',
    body: 'Understanding what happens underneath abstractions — D-Bus, PTYs, audio graphs, kernel interfaces — produces better software at every layer.',
    icon: 'cpu',
  },
  {
    title: 'Build to Learn',
    body: 'Building a terminal teaches you more about terminals than documentation. Building a network manager teaches you more about D-Bus than reading specs.',
    icon: 'code',
  },
  {
    title: 'AI-Assisted, Not AI-Designed',
    body: 'Coding agents accelerate boilerplate, refactoring, and testing. Architecture and engineering judgment remain human responsibilities.',
    icon: 'bot',
  },
]

// ─── Contact ───────────────────────────────────────────────────────────────────

export const contacts = [
  {
    icon: 'github',
    label: 'GitHub',
    handle: '@vijaygovindBiju',
    href: 'https://github.com/vijaygovindBiju',
    description: 'Source code and active projects',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    handle: 'Vijay Govind Biju',
    href: 'https://www.linkedin.com/in/vijaygovind-biju-273b17347',
    description: 'Professional profile',
  },
  {
    icon: 'mail',
    label: 'Email',
    handle: 'vijaygovindbiju@gmail.com',
    href: 'mailto:vijaygovindbiju@gmail.com',
    description: 'Direct conversation',
  },
]
