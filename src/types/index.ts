// Core project type
export interface ArchNode {
  id: string
  label: string
  type: 'input' | 'process' | 'output' | 'storage' | 'external'
  x: number       // percentage (0-100)
  y: number       // percentage (0-100)
  connections: string[]
}

export type ProjectIdentity = 'netra' | 'music' | 'terminal' | 'ai'
export type ProjectStatus = 'active' | 'in-progress' | 'experimental'

export interface Project {
  id: string
  number: string
  title: string
  tagline: string
  identity: ProjectIdentity
  accentColor: string
  category: string
  status: ProjectStatus
  description: string
  longDescription: string
  problem: string
  whyBuilt: string
  architecture: string
  technologies: string[]
  challenges: string[]
  learnings: string[]
  githubUrl?: string
  demoUrl?: string
  architectureNodes?: ArchNode[]
}

export interface TechGroup {
  label: string
  items: string[]
}

export interface FocusItem {
  label: string
  detail: string
  status: 'active' | 'planned' | 'paused'
}
