// import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
 const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    intro: 'Senior Product Designer leading design system architecture for enterprise tools.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    color: 'red',
    intro: 'Full Stack Engineer developing scalable cloud applications and microservices.',
    tag: 'Underbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    intro: 'Data Scientist specializing in predictive analytics and machine learning models.',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    color: 'indigo',
    intro: 'Corporate Strategy Consultant advising startups on scaling and venture capital.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    color: 'orange',
    intro: 'Operations Manager focusing on supply chain efficiency and team workflow.',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    color: 'teal',
    intro: 'DevOps Architect automating CI/CD pipelines and infrastructure deployment.',
    tag: 'Underbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    color: 'purple',
    intro: 'Digital Marketing Strategist managing multi-channel growth initiatives.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    color: 'cyan',
    intro: 'Financial Analyst structuring risk assessment models for emerging tech.',
    tag: 'Underbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400',
    color: 'violet',
    intro: 'Technical Program Manager overseeing cross-functional engineering teams.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400',
    color: 'pink',
    intro: 'Human Resources Business Partner scaling talent acquisition and culture.',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    color: 'violet',
    intro: 'Cybersecurity Specialist securing network protocol infrastructure and compliance.',
    tag: 'Underbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    color: 'orange',
    intro: 'UX Researcher conducting qualitative usability tests and customer interviews.',
    tag: 'Underserved'
  }
];
const solutions = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    intro: 'Automated yield sweeps, high-APY savings, and AI-driven portfolio management for active earners.',
    tag: 'Satisfied'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
    color: 'red',
    intro: 'Alternative cash-flow credit scoring and zero-interest advances for non-traditional credit histories.',
    tag: 'Underbanked'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400',
    color: 'orange',
    intro: 'Zero-fee borderless checking, instant gig-platform payouts, and ultra-low remittance fees.',
    tag: 'Underserved'
  },
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    color: 'blue',
    intro: 'Automated yield sweeps, high-APY savings, and AI-driven portfolio management for active earners.',
    tag: 'Satisfied'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
    color: 'red',
    intro: 'Alternative cash-flow credit scoring and zero-interest advances for non-traditional credit histories.',
    tag: 'Underbanked'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400',
    color: 'orange',
    intro: 'Zero-fee borderless checking, instant gig-platform payouts, and ultra-low remittance fees.',
    tag: 'Underserved'
  }
];
  return (
    <div >
      
      
      <Section1 users={users}/>
      <Section2 solutions={solutions}/>
    </div>
  )
}

export default App
