
import React from 'react';
import { Feature, Section } from './types';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
    {children}
  </div>
);

export const SECTIONS: Section[] = [
  {
    id: 'intake',
    title: '1. The Admin & Intake Engine',
    subtitle: 'Streamlining the gateway for high-achievers and certification seekers.',
    features: [
      {
        id: 'matching',
        title: 'Smart Practitioner Assignment',
        description: 'Automate the bridge between clients and your certified network of facilitators.',
        bullets: [
          'Algorithmic matching based on session intensity and specialty.',
          'Secure ingestion of psycho-emotional intake data.',
          'Elimination of manual scheduling bottlenecks.'
        ],
        icon: (
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
          </IconWrapper>
        )
      },
      {
        id: 'database',
        title: 'Centralized IP Vault',
        description: 'A single, secure repository for your proprietary subconscious rewire methodologies.',
        bullets: [
          'Consolidated directory of all practitioners and trainees.',
          'Legacy data migration from Monday.com and spreadsheets.',
          'Role-based access to core training materials.'
        ],
        icon: (
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
          </IconWrapper>
        )
      }
    ]
  },
  {
    id: 'coaching',
    title: '2. Practitioner Command Center',
    subtitle: 'Ensuring methodology fidelity across the Unbound network.',
    features: [
      {
        id: 'workflow',
        title: 'Methodology Guardrails',
        description: 'Digital roadmaps for Rapid Rewire sessions, breathwork, and hypnotherapy.',
        bullets: [
          'Step-by-step guidance for subconscious rewiring processes.',
          'Context-aware session notes synced to client history.',
          'Standardized reporting for practitioner accountability.'
        ],
        icon: (
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </IconWrapper>
        )
      },
      {
        id: 'sales',
        title: 'In-Session Growth Tools',
        description: 'Empowering healers to scale their business while maintaining impact.',
        bullets: [
          'Automatic prompts for package renewals and certifications.',
          'Seamless Zoom integration for distraction-free sessions.',
          'One-click homework assignment from the IP library.'
        ],
        icon: (
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7 3 5-3 5"/><path d="m19 7-3 5 3 5"/></svg>
          </IconWrapper>
        )
      }
    ]
  },
  {
    id: 'client',
    title: '3. The Client Experience',
    subtitle: 'Maximum transformation, zero friction.',
    features: [
      {
        id: 'lockin',
        title: 'Methodology Protection',
        description: 'Keep all client communication and transformation data inside your ecosystem.',
        bullets: [
          'Secure messaging (No more WhatsApp/Text/Email fragmentation).',
          'Protects company IP by controlling data flow.',
          'Unified thread for all sessions, homework, and breakthroughs.'
        ],
        icon: (
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </IconWrapper>
        )
      },
      {
        id: 'resource',
        title: 'Rewire Resource Library',
        description: 'Empower clients with on-demand breathwork and self-rewiring tools.',
        bullets: [
          'Video-on-demand database for subconscious training.',
          'Trackable progress for certification candidates.',
          'Daily check-ins for high-achiever accountability.'
        ],
        icon: (
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
          </IconWrapper>
        )
      }
    ]
  }
];
