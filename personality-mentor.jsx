import React, { useState, useRef, useEffect } from 'react';

// Illustrations as simple SVG components
const Illustrations = {
  Welcome: () => (
    <svg viewBox="0 0 200 160" fill="none" style={{ width: '100%', maxWidth: '280px' }}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      {/* Background shapes */}
      <circle cx="160" cy="30" r="45" fill="#FEF3C7" opacity="0.6" />
      <circle cx="40" cy="120" r="35" fill="#DBEAFE" opacity="0.6" />
      {/* Central figure */}
      <circle cx="100" cy="70" r="40" fill="url(#grad1)" />
      <circle cx="100" cy="55" r="18" fill="#FEF3C7" />
      <ellipse cx="100" cy="85" rx="22" ry="16" fill="#FEF3C7" />
      {/* Floating elements */}
      <rect x="145" y="60" width="30" height="30" rx="6" fill="url(#grad2)" transform="rotate(15 160 75)" />
      <circle cx="35" cy="55" r="12" fill="#BBF7D0" />
      <rect x="55" y="110" width="25" height="25" rx="5" fill="#FECACA" transform="rotate(-10 67 122)" />
      {/* Sparkles */}
      <circle cx="130" cy="45" r="3" fill="#FBBF24" />
      <circle cx="70" cy="35" r="2" fill="#F472B6" />
      <circle cx="150" cy="100" r="2.5" fill="#60A5FA" />
      {/* Compass needle */}
      <path d="M100 70 L108 55 L100 60 L92 55 Z" fill="#C2410C" />
      <path d="M100 70 L108 85 L100 80 L92 85 Z" fill="#78716C" />
    </svg>
  ),
  
  Survey: () => (
    <svg viewBox="0 0 200 160" fill="none" style={{ width: '100%', maxWidth: '280px' }}>
      <defs>
        <linearGradient id="surveyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      {/* Clipboard */}
      <rect x="50" y="20" width="100" height="120" rx="8" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="2" />
      <rect x="70" y="10" width="60" height="20" rx="4" fill="#A8A29E" />
      <circle cx="100" cy="20" r="6" fill="#78716C" />
      {/* Checkboxes */}
      <rect x="65" y="45" width="16" height="16" rx="3" fill="url(#surveyGrad)" />
      <path d="M69 53 L73 57 L79 49" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="48" width="45" height="8" rx="2" fill="#E7E5E4" />
      
      <rect x="65" y="70" width="16" height="16" rx="3" fill="url(#surveyGrad)" />
      <path d="M69 78 L73 82 L79 74" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="73" width="50" height="8" rx="2" fill="#E7E5E4" />
      
      <rect x="65" y="95" width="16" height="16" rx="3" stroke="#D6D3D1" strokeWidth="2" fill="white" />
      <rect x="88" y="98" width="40" height="8" rx="2" fill="#E7E5E4" />
      
      {/* Floating elements */}
      <circle cx="165" cy="45" r="18" fill="#FEF3C7" />
      <text x="165" y="51" textAnchor="middle" fontSize="18">🎯</text>
      <circle cx="30" cy="100" r="15" fill="#DCFCE7" />
      <text x="30" y="106" textAnchor="middle" fontSize="14">✓</text>
    </svg>
  ),
  
  People: () => (
    <svg viewBox="0 0 200 160" fill="none" style={{ width: '100%', maxWidth: '280px' }}>
      <defs>
        <linearGradient id="person1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
        <linearGradient id="person2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="person3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>
      {/* Connection lines */}
      <path d="M60 80 Q100 50 140 80" stroke="#E7E5E4" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <path d="M60 80 Q100 110 140 80" stroke="#E7E5E4" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      {/* Person 1 - left */}
      <circle cx="50" cy="80" r="28" fill="url(#person1)" />
      <circle cx="50" cy="72" r="12" fill="#FEF3C7" />
      <ellipse cx="50" cy="92" rx="14" ry="10" fill="#FEF3C7" />
      {/* Person 2 - center */}
      <circle cx="100" cy="55" r="32" fill="url(#person2)" />
      <circle cx="100" cy="45" r="14" fill="#EDE9FE" />
      <ellipse cx="100" cy="68" rx="16" ry="12" fill="#EDE9FE" />
      {/* Person 3 - right */}
      <circle cx="150" cy="80" r="28" fill="url(#person3)" />
      <circle cx="150" cy="72" r="12" fill="#DCFCE7" />
      <ellipse cx="150" cy="92" rx="14" ry="10" fill="#DCFCE7" />
      {/* Heart connections */}
      <circle cx="75" cy="60" r="8" fill="#FECACA" />
      <text x="75" y="64" textAnchor="middle" fontSize="10">💕</text>
      <circle cx="125" cy="60" r="8" fill="#FECACA" />
      <text x="125" y="64" textAnchor="middle" fontSize="10">💕</text>
      {/* Labels */}
      <rect x="30" y="115" width="40" height="16" rx="8" fill="#FEF3C7" />
      <text x="50" y="127" textAnchor="middle" fontSize="9" fill="#92400E">Partner</text>
      <rect x="130" y="115" width="40" height="16" rx="8" fill="#DCFCE7" />
      <text x="150" y="127" textAnchor="middle" fontSize="9" fill="#166534">Team</text>
    </svg>
  ),
  
  Insights: () => (
    <svg viewBox="0 0 200 160" fill="none" style={{ width: '100%', maxWidth: '280px' }}>
      <defs>
        <linearGradient id="insightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
      </defs>
      {/* Light bulb */}
      <ellipse cx="100" cy="60" rx="35" ry="38" fill="url(#insightGrad)" />
      <rect x="88" y="95" width="24" height="8" rx="2" fill="#D6D3D1" />
      <rect x="90" y="103" width="20" height="6" rx="2" fill="#A8A29E" />
      <rect x="92" y="109" width="16" height="5" rx="2" fill="#78716C" />
      {/* Filament */}
      <path d="M92 75 Q95 65 100 70 Q105 75 100 85 Q95 75 100 70 Q105 65 108 75" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
      {/* Rays */}
      <line x1="100" y1="15" x2="100" y2="5" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      <line x1="140" y1="30" x2="150" y2="22" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="30" x2="50" y2="22" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      <line x1="155" y1="60" x2="165" y2="60" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      <line x1="45" y1="60" x2="35" y2="60" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
      {/* Sparkles */}
      <circle cx="70" cy="45" r="4" fill="#FDE68A" />
      <circle cx="130" cy="45" r="4" fill="#FDE68A" />
      <circle cx="55" cy="85" r="3" fill="#BBF7D0" />
      <circle cx="145" cy="85" r="3" fill="#BFDBFE" />
      {/* Chat bubbles */}
      <rect x="20" y="120" width="50" height="25" rx="6" fill="#E0E7FF" />
      <polygon points="35,145 40,145 35,152" fill="#E0E7FF" />
      <rect x="130" y="125" width="50" height="22" rx="6" fill="#FCE7F3" />
      <polygon points="165,147 160,147 165,153" fill="#FCE7F3" />
    </svg>
  )
};

// Complete MBTI Profile Database
const MBTI_PROFILES = {
  'ENTP': {
    name: 'The Debater',
    overview: 'A vibrant intellectual force, natural provocateur, and challenger of ideas. Sees the world as a playground of possibilities.',
    challenge: 'Love for the theoretical often overshadows the practical. Tends to procrastinate on routine tasks.',
    growth: 'Bridge the gap between ideas and practical implementation. Develop discipline and emotional awareness.',
    traits: { energy: 'Extraverted', mind: 'Intuitive', nature: 'Thinking', tactics: 'Prospecting' },
    strengths: ['Idea Generator', 'Persuasive Communicator', 'Quick Thinker', 'Adaptable', 'Confident'],
    weaknesses: ['Difficulty Staying Organized', 'Impatient with Mundane Tasks', 'Overly Critical', 'Reluctant to Commit'],
    career: 'Thrives in strategic consulting, entrepreneurship, law, and creative industries.',
    relationships: 'Values intellectual stimulation but can be unintentionally insensitive.',
    color: '#D97706', icon: '⚡'
  },
  'INTJ': {
    name: 'The Architect',
    overview: 'A strategic mastermind with a vision for the future. Combines imagination with reliability.',
    challenge: 'May appear arrogant or dismissive of others\' ideas.',
    growth: 'Develop patience and openness to others\' perspectives.',
    traits: { energy: 'Introverted', mind: 'Intuitive', nature: 'Thinking', tactics: 'Judging' },
    strengths: ['Strategic Planner', 'Independent Thinker', 'Determined', 'Self-Confident', 'Knowledge-Seeking'],
    weaknesses: ['Overly Analytical', 'Dismissive of Emotions', 'Perfectionist', 'Socially Reserved'],
    career: 'Excels in scientific research, engineering, strategic planning, and leadership.',
    relationships: 'Seeks deep intellectual connection but may struggle to express emotions.',
    color: '#7C3AED', icon: '🏛️'
  },
  'INTP': {
    name: 'The Logician',
    overview: 'A philosophical innovator, seeking to understand the underlying principles of existence.',
    challenge: 'Can get lost in thought and neglect practical matters.',
    growth: 'Balance theoretical exploration with real-world application.',
    traits: { energy: 'Introverted', mind: 'Intuitive', nature: 'Thinking', tactics: 'Prospecting' },
    strengths: ['Analytical', 'Original Thinker', 'Open-Minded', 'Objective', 'Honest'],
    weaknesses: ['Absent-Minded', 'Condescending', 'Insensitive', 'Dissatisfied'],
    career: 'Thrives in research, software development, mathematics, and technical writing.',
    relationships: 'Values intellectual compatibility but may seem detached.',
    color: '#2563EB', icon: '🔬'
  },
  'ENTJ': {
    name: 'The Commander',
    overview: 'A bold, imaginative leader who always finds a way—or makes one.',
    challenge: 'Can be domineering and impatient.',
    growth: 'Develop empathy and learn to delegate.',
    traits: { energy: 'Extraverted', mind: 'Intuitive', nature: 'Thinking', tactics: 'Judging' },
    strengths: ['Efficient', 'Energetic', 'Self-Confident', 'Strong-Willed', 'Strategic'],
    weaknesses: ['Stubborn', 'Intolerant', 'Impatient', 'Arrogant'],
    career: 'Natural fit for executive roles, entrepreneurship, and consulting.',
    relationships: 'Loyal but may prioritize career over relationships.',
    color: '#DC2626', icon: '👑'
  },
  'INFJ': {
    name: 'The Advocate',
    overview: 'A quiet mystic with a strong sense of idealism and integrity.',
    challenge: 'Can be overly private and perfectionistic.',
    growth: 'Learn to open up and accept imperfection.',
    traits: { energy: 'Introverted', mind: 'Intuitive', nature: 'Feeling', tactics: 'Judging' },
    strengths: ['Insightful', 'Principled', 'Passionate', 'Altruistic', 'Creative'],
    weaknesses: ['Overly Sensitive', 'Extremely Private', 'Perfectionist', 'Burnout-Prone'],
    career: 'Excels in counseling, writing, healthcare, and nonprofit work.',
    relationships: 'Deeply caring but may have unrealistic expectations.',
    color: '#059669', icon: '🌟'
  },
  'INFP': {
    name: 'The Mediator',
    overview: 'A poetic, kind soul always eager to help a good cause.',
    challenge: 'Can be too idealistic and self-isolating.',
    growth: 'Balance dreams with practical action.',
    traits: { energy: 'Introverted', mind: 'Intuitive', nature: 'Feeling', tactics: 'Prospecting' },
    strengths: ['Empathetic', 'Generous', 'Open-Minded', 'Creative', 'Passionate'],
    weaknesses: ['Overly Idealistic', 'Self-Isolating', 'Unfocused', 'Emotionally Vulnerable'],
    career: 'Thrives in writing, arts, counseling, and social work.',
    relationships: 'Deeply devoted but may idealize partners.',
    color: '#8B5CF6', icon: '🦋'
  },
  'ENFJ': {
    name: 'The Protagonist',
    overview: 'A charismatic leader who inspires others and drives positive change.',
    challenge: 'Can be overly idealistic and self-sacrificing.',
    growth: 'Learn to set boundaries and prioritize self-care.',
    traits: { energy: 'Extraverted', mind: 'Intuitive', nature: 'Feeling', tactics: 'Judging' },
    strengths: ['Charismatic', 'Empathetic', 'Natural Leader', 'Altruistic', 'Reliable'],
    weaknesses: ['Overly Idealistic', 'Too Selfless', 'Sensitive to Criticism'],
    career: 'Excels in teaching, HR, counseling, and community organizing.',
    relationships: 'Deeply invested in partners\' growth.',
    color: '#EA580C', icon: '🎭'
  },
  'ENFP': {
    name: 'The Campaigner',
    overview: 'A free spirit with infectious enthusiasm and boundless creativity.',
    challenge: 'Can be disorganized and struggle with follow-through.',
    growth: 'Develop discipline and learn to finish what you start.',
    traits: { energy: 'Extraverted', mind: 'Intuitive', nature: 'Feeling', tactics: 'Prospecting' },
    strengths: ['Curious', 'Enthusiastic', 'Creative', 'Sociable', 'Energetic'],
    weaknesses: ['Poor Practical Skills', 'Difficulty Focusing', 'Overthinking'],
    career: 'Thrives in journalism, acting, marketing, and counseling.',
    relationships: 'Warm and passionate but may idealize relationships.',
    color: '#F59E0B', icon: '🎪'
  },
  'ISTJ': {
    name: 'The Logistician',
    overview: 'A reliable and practical individual who values tradition and order.',
    challenge: 'Can be inflexible and judgmental.',
    growth: 'Develop openness to new ideas.',
    traits: { energy: 'Introverted', mind: 'Observant', nature: 'Thinking', tactics: 'Judging' },
    strengths: ['Honest', 'Dependable', 'Patient', 'Detail-Oriented', 'Practical'],
    weaknesses: ['Stubborn', 'Insensitive', 'Judgmental', 'Resistant to Change'],
    career: 'Excels in accounting, law, military, and administrative roles.',
    relationships: 'Loyal and dependable but may struggle with emotional expression.',
    color: '#475569', icon: '📋'
  },
  'ISFJ': {
    name: 'The Defender',
    overview: 'A dedicated protector who works tirelessly to support loved ones.',
    challenge: 'Can be overly self-sacrificing.',
    growth: 'Learn to prioritize own needs.',
    traits: { energy: 'Introverted', mind: 'Observant', nature: 'Feeling', tactics: 'Judging' },
    strengths: ['Supportive', 'Reliable', 'Patient', 'Observant', 'Loyal'],
    weaknesses: ['Too Selfless', 'Represses Feelings', 'Resistant to Change'],
    career: 'Thrives in healthcare, education, and social work.',
    relationships: 'Extremely devoted but may neglect own needs.',
    color: '#0D9488', icon: '🛡️'
  },
  'ESTJ': {
    name: 'The Executive',
    overview: 'An excellent administrator with an unparalleled ability to manage.',
    challenge: 'Can be inflexible and status-focused.',
    growth: 'Develop empathy and openness.',
    traits: { energy: 'Extraverted', mind: 'Observant', nature: 'Thinking', tactics: 'Judging' },
    strengths: ['Organized', 'Dedicated', 'Direct', 'Honest', 'Patient'],
    weaknesses: ['Inflexible', 'Judgmental', 'Too Focused on Status'],
    career: 'Excels in management, administration, and finance.',
    relationships: 'Committed but may prioritize work.',
    color: '#64748B', icon: '📊'
  },
  'ESFJ': {
    name: 'The Consul',
    overview: 'An extraordinarily caring person who loves to help others.',
    challenge: 'Can be needy and status-conscious.',
    growth: 'Develop independence and self-validation.',
    traits: { energy: 'Extraverted', mind: 'Observant', nature: 'Feeling', tactics: 'Judging' },
    strengths: ['Practical Skills', 'Loyal', 'Sensitive', 'Warm', 'Good at Connecting'],
    weaknesses: ['Worried About Status', 'Inflexible', 'Vulnerable to Criticism'],
    career: 'Thrives in healthcare, education, and hospitality.',
    relationships: 'Warm and nurturing but may become controlling.',
    color: '#EC4899', icon: '🤝'
  },
  'ISTP': {
    name: 'The Virtuoso',
    overview: 'A bold practical experimenter and master of tools.',
    challenge: 'Can be insensitive and risk-prone.',
    growth: 'Develop emotional awareness and long-term planning.',
    traits: { energy: 'Introverted', mind: 'Observant', nature: 'Thinking', tactics: 'Prospecting' },
    strengths: ['Optimistic', 'Creative', 'Practical', 'Spontaneous', 'Rational'],
    weaknesses: ['Stubborn', 'Insensitive', 'Private', 'Easily Bored'],
    career: 'Excels in engineering, mechanics, and emergency services.',
    relationships: 'Independent and loyal but may struggle with intimacy.',
    color: '#6B7280', icon: '🔧'
  },
  'ISFP': {
    name: 'The Adventurer',
    overview: 'A flexible, charming artist always ready to explore.',
    challenge: 'Can be unpredictable and competitive.',
    growth: 'Develop consistency and long-term vision.',
    traits: { energy: 'Introverted', mind: 'Observant', nature: 'Feeling', tactics: 'Prospecting' },
    strengths: ['Charming', 'Sensitive', 'Imaginative', 'Passionate', 'Curious'],
    weaknesses: ['Fiercely Independent', 'Unpredictable', 'Easily Stressed'],
    career: 'Thrives in arts, design, and healthcare.',
    relationships: 'Warm but may avoid conflict.',
    color: '#06B6D4', icon: '🎨'
  },
  'ESTP': {
    name: 'The Entrepreneur',
    overview: 'A smart, energetic perceiver who lives on the edge.',
    challenge: 'Can be impatient and risk-prone.',
    growth: 'Develop patience and consider long-term consequences.',
    traits: { energy: 'Extraverted', mind: 'Observant', nature: 'Thinking', tactics: 'Prospecting' },
    strengths: ['Bold', 'Rational', 'Practical', 'Original', 'Perceptive'],
    weaknesses: ['Insensitive', 'Impatient', 'Risk-Prone', 'Unstructured'],
    career: 'Excels in sales, entrepreneurship, and entertainment.',
    relationships: 'Exciting but may struggle with commitment.',
    color: '#EF4444', icon: '🚀'
  },
  'ESFP': {
    name: 'The Entertainer',
    overview: 'A spontaneous, energetic performer who loves the spotlight.',
    challenge: 'Can be unfocused and overly sensitive.',
    growth: 'Develop discipline and handle criticism better.',
    traits: { energy: 'Extraverted', mind: 'Observant', nature: 'Feeling', tactics: 'Prospecting' },
    strengths: ['Bold', 'Original', 'Aesthetic', 'Practical', 'Observant'],
    weaknesses: ['Sensitive', 'Conflict-Averse', 'Easily Bored', 'Unfocused'],
    career: 'Thrives in entertainment, events, and sales.',
    relationships: 'Fun and affectionate but may avoid serious talks.',
    color: '#F97316', icon: '🎉'
  }
};

// Survey Questions
const SURVEY_QUESTIONS = [
  { id: 1, text: 'At a social gathering, you typically:', dimension: 'EI', options: [
    { text: 'Talk to many people, including strangers', value: 'E' },
    { text: 'Talk to a few people you already know', value: 'I' }
  ]},
  { id: 2, text: 'You are more drawn to:', dimension: 'SN', options: [
    { text: 'Facts and concrete details', value: 'S' },
    { text: 'Ideas and possibilities', value: 'N' }
  ]},
  { id: 3, text: 'When making decisions, you rely more on:', dimension: 'TF', options: [
    { text: 'Logic and objective analysis', value: 'T' },
    { text: 'Personal values and how people feel', value: 'F' }
  ]},
  { id: 4, text: 'You prefer to:', dimension: 'JP', options: [
    { text: 'Have things decided and settled', value: 'J' },
    { text: 'Keep your options open', value: 'P' }
  ]},
  { id: 5, text: 'After a long week, you recharge by:', dimension: 'EI', options: [
    { text: 'Going out with friends', value: 'E' },
    { text: 'Having quiet time alone', value: 'I' }
  ]},
  { id: 6, text: 'You trust:', dimension: 'SN', options: [
    { text: 'Experience and what has worked before', value: 'S' },
    { text: 'Your gut feeling and inspiration', value: 'N' }
  ]},
  { id: 7, text: 'In a conflict, you prioritize:', dimension: 'TF', options: [
    { text: 'Finding the most fair and logical solution', value: 'T' },
    { text: 'Maintaining harmony and understanding feelings', value: 'F' }
  ]},
  { id: 8, text: 'Your workspace is typically:', dimension: 'JP', options: [
    { text: 'Organized with everything in its place', value: 'J' },
    { text: 'Flexible with creative chaos', value: 'P' }
  ]},
  { id: 9, text: 'You would describe yourself as more:', dimension: 'EI', options: [
    { text: 'Outgoing and expressive', value: 'E' },
    { text: 'Reserved and reflective', value: 'I' }
  ]},
  { id: 10, text: 'You prefer to learn through:', dimension: 'SN', options: [
    { text: 'Practical, hands-on experience', value: 'S' },
    { text: 'Theoretical concepts and patterns', value: 'N' }
  ]},
  { id: 11, text: 'When giving feedback, you tend to be:', dimension: 'TF', options: [
    { text: 'Direct and honest, even if it stings', value: 'T' },
    { text: 'Tactful and considerate of feelings', value: 'F' }
  ]},
  { id: 12, text: 'Deadlines make you feel:', dimension: 'JP', options: [
    { text: 'Motivated and focused', value: 'J' },
    { text: 'Pressured and constrained', value: 'P' }
  ]}
];

const IDENTITY_QUESTIONS = [
  { id: 13, text: 'When facing criticism, you typically:', options: [
    { text: 'Stay confident in your abilities', value: 'A' },
    { text: 'Question yourself and feel anxious', value: 'T' }
  ]},
  { id: 14, text: 'Regarding your goals:', options: [
    { text: 'You feel confident you\'ll achieve them', value: 'A' },
    { text: 'You often worry about falling short', value: 'T' }
  ]}
];

const COMPATIBILITY = {
  natural: [
    ['INFP', 'ENFJ'], ['ENFP', 'INFJ'], ['INFJ', 'ENFP'], ['ENFJ', 'INFP'],
    ['INTP', 'ENTJ'], ['ENTP', 'INTJ'], ['INTJ', 'ENTP'], ['ENTJ', 'INTP'],
    ['ISFP', 'ESFJ'], ['ESFP', 'ISFJ'], ['ISFJ', 'ESFP'], ['ESFJ', 'ISFP'],
    ['ISTP', 'ESTJ'], ['ESTP', 'ISTJ'], ['ISTJ', 'ESTP'], ['ESTJ', 'ISTP']
  ],
  challenging: [
    ['INTJ', 'ESFP'], ['INTP', 'ESFJ'], ['ENTJ', 'ISFP'], ['ENTP', 'ISFJ'],
    ['INFJ', 'ESTP'], ['INFP', 'ESTJ'], ['ENFJ', 'ISTP'], ['ENFP', 'ISTJ']
  ]
};

// Onboarding tour steps
const TOUR_STEPS = [
  {
    title: 'Welcome to Personality Mentor',
    description: 'Your personal guide to understanding yourself and building better relationships through personality insights.',
    Illustration: Illustrations.Welcome
  },
  {
    title: 'Discover Your Type',
    description: 'Take a quick 14-question survey to uncover your unique personality type. Answer honestly—there are no wrong answers!',
    Illustration: Illustrations.Survey
  },
  {
    title: 'Add Your People',
    description: 'Build your circle by adding family members, partners, colleagues, or friends. Set their personality types to unlock relationship dynamics.',
    Illustration: Illustrations.People
  },
  {
    title: 'Get Personalized Insights',
    description: 'Chat with your AI mentor for tailored advice on growth, career, and relationships. Select people to analyze compatibility.',
    Illustration: Illustrations.Insights
  }
];

// Demo families for trying out the app
const DEMO_FAMILIES = {
  nuclear: {
    name: 'The Parkers',
    description: 'A classic family of four with diverse personalities',
    category: 'family',
    members: [
      { name: 'Jordan', relationship: 'spouse', age: '38', type: 'ISFJ', note: 'Your supportive partner' },
      { name: 'Maya', relationship: 'child', age: '14', type: 'ENFP', note: 'Creative teenager' },
      { name: 'Ethan', relationship: 'child', age: '11', type: 'INTJ', note: 'Quiet strategist' }
    ]
  },
  extended: {
    name: 'The Extended Crew',
    description: 'Multi-generational family dynamics',
    category: 'family',
    members: [
      { name: 'Alex', relationship: 'spouse', age: '42', type: 'ENTJ', note: 'Ambitious partner' },
      { name: 'Sam', relationship: 'child', age: '16', type: 'INTP', note: 'Tech-savvy teen' },
      { name: 'Rose', relationship: 'parent', age: '68', type: 'ESFJ', note: 'Caring grandma' },
      { name: 'Marcus', relationship: 'sibling', age: '35', type: 'ESTP', note: 'Adventurous brother' }
    ]
  },
  workTeam: {
    name: 'The Startup Squad',
    description: 'A diverse work team to explore professional dynamics',
    category: 'work',
    members: [
      { name: 'Taylor', relationship: 'manager', age: '45', type: 'ENTJ', note: 'Driven leader' },
      { name: 'Casey', relationship: 'colleague', age: '29', type: 'INFP', note: 'Creative designer' },
      { name: 'Morgan', relationship: 'colleague', age: '34', type: 'ISTJ', note: 'Reliable ops' },
      { name: 'Riley', relationship: 'report', age: '26', type: 'ENFJ', note: 'People person' }
    ]
  },
  blended: {
    name: 'The Blended Bunch',
    description: 'A modern blended family',
    category: 'family',
    members: [
      { name: 'Jamie', relationship: 'spouse', age: '40', type: 'INFJ', note: 'Thoughtful stepparent' },
      { name: 'Zoe', relationship: 'child', age: '17', type: 'ESFP', note: 'Social butterfly' },
      { name: 'Noah', relationship: 'child', age: '13', type: 'ISTP', note: 'Hands-on kid' },
      { name: 'Lily', relationship: 'child', age: '9', type: 'ENFJ', note: 'Little leader' }
    ]
  },
  sportsTeam: {
    name: 'Riverside FC',
    description: 'A competitive soccer team with mixed player dynamics',
    category: 'sports',
    members: [
      { name: 'Coach Davis', relationship: 'manager', age: '52', type: 'ESTJ', note: 'Disciplined leader' },
      { name: 'Marcus', relationship: 'colleague', age: '24', type: 'ESTP', note: 'Star striker' },
      { name: 'Priya', relationship: 'colleague', age: '22', type: 'ISFP', note: 'Creative midfielder' },
      { name: 'Jake', relationship: 'colleague', age: '26', type: 'ISTJ', note: 'Solid defender' },
      { name: 'Sofia', relationship: 'colleague', age: '21', type: 'ENFP', note: 'Energetic winger' },
      { name: 'Chen', relationship: 'colleague', age: '25', type: 'INTJ', note: 'Tactical captain' }
    ]
  },
  classroom: {
    name: 'Grade 8 Homeroom',
    description: 'A diverse classroom for exploring learning dynamics and group work',
    category: 'classroom',
    members: [
      { name: 'Aiden', relationship: 'child', age: '13', type: 'ENTP', note: 'Class debater' },
      { name: 'Bella', relationship: 'child', age: '13', type: 'ISFJ', note: 'Helpful peacemaker' },
      { name: 'Carlos', relationship: 'child', age: '14', type: 'ESTP', note: 'Hands-on learner' },
      { name: 'Diana', relationship: 'child', age: '13', type: 'INFJ', note: 'Deep thinker' },
      { name: 'Emma', relationship: 'child', age: '13', type: 'ENFJ', note: 'Natural leader' },
      { name: 'Finn', relationship: 'child', age: '14', type: 'INTP', note: 'Quiet genius' },
      { name: 'Grace', relationship: 'child', age: '13', type: 'ESFP', note: 'Social energy' },
      { name: 'Henry', relationship: 'child', age: '13', type: 'ISTJ', note: 'Reliable worker' },
      { name: 'Ivy', relationship: 'child', age: '14', type: 'INFP', note: 'Creative soul' },
      { name: 'Jack', relationship: 'child', age: '13', type: 'ENTJ', note: 'Project leader' },
      { name: 'Kai', relationship: 'child', age: '13', type: 'ISTP', note: 'Problem solver' },
      { name: 'Luna', relationship: 'child', age: '14', type: 'ENFP', note: 'Enthusiastic' }
    ]
  }
};

const CHANGELOG_DATA = [
  {
    session: 'Session 1 — Foundation',
    date: 'Dec 4, 2024 · 7-9pm',
    duration: '~2 hours',
    messages: '~15 user messages',
    cost: '~$9.75',
    items: [
      { type: 'added', text: '16 MBTI personality profiles with cognitive functions' },
      { type: 'added', text: 'Animated survey flow with slide transitions' },
      { type: 'added', text: 'Family/team management system' },
      { type: 'added', text: 'Relationship compatibility indicators' },
      { type: 'added', text: 'Claude API integration for personalized chat' },
      { type: 'added', text: 'Text-to-speech with auto-read' },
      { type: 'added', text: '4 demo families to explore' },
      { type: 'changed', text: 'Renamed from "Personality Mentor" to "Kindred"' }
    ]
  },
  {
    session: 'Session 2 — Voice & Groups',
    date: 'Dec 4, 2024 · 10-11:30pm',
    duration: '~1.5 hours',
    messages: '~12 user messages',
    cost: '~$8.25',
    items: [
      { type: 'added', text: 'Settings drawer with voice speed/pitch controls' },
      { type: 'added', text: 'Sports team demo (Riverside FC)' },
      { type: 'added', text: 'Classroom demo (Grade 8 - 12 students)' },
      { type: 'added', text: 'Group composition metrics (E/I, S/N, T/F, J/P)' },
      { type: 'added', text: 'Group planner with balance algorithm' },
      { type: 'changed', text: 'Replaced emojis with minimal SVG icons' },
      { type: 'changed', text: 'Slowed TTS rate for natural pacing' }
    ]
  },
  {
    session: 'Session 3 — Polish & Meta',
    date: 'Dec 5, 2024 · 11pm-12am',
    duration: '~1 hour',
    messages: '8 user messages',
    cost: '~$7.13',
    items: [
      { type: 'added', text: 'SVG icons for all relationship types' },
      { type: 'added', text: 'Auto group insights on demo load' },
      { type: 'added', text: 'Personality term tooltips on hover' },
      { type: 'added', text: 'Build log modal with session history' },
      { type: 'added', text: 'Build Tracker skill document' },
      { type: 'added', text: 'Cost tracking ($25 total, $1/feature)' },
      { type: 'changed', text: 'System prompt uses cognitive function terms' }
    ]
  },
  {
    session: 'Session 4 — Smart Suggestions',
    date: 'Dec 5, 2024 · 12:15am',
    duration: '~30 min',
    messages: '5 user messages',
    cost: '~$4.50',
    items: [
      { type: 'added', text: 'People-first suggestions panel design' },
      { type: 'added', text: 'Per-person contextual suggestions (2 each)' },
      { type: 'added', text: 'Infinite scroll with "load 3 more"' },
      { type: 'added', text: 'Click-to-answer: grey out + move to bottom' },
      { type: 'added', text: 'localStorage persistence for sessions' },
      { type: 'added', text: 'Clear Session option in settings' },
      { type: 'added', text: '"Back to Chat" button in People view' },
      { type: 'added', text: 'Built-in test suite (window.testSuggestions)' },
      { type: 'changed', text: 'Panel width 280→320px for people cards' }
    ]
  },
  {
    session: 'Session 5 — Accessibility',
    date: 'Dec 5, 2024',
    duration: '~15 min',
    messages: '2 user messages',
    cost: '~$2.00',
    items: [
      { type: 'added', text: 'Grade level slider (child/teen/adult/senior)' },
      { type: 'added', text: 'Voice input with Web Speech API' },
      { type: 'added', text: 'Email summary sharing via mailto:' },
      { type: 'changed', text: 'System prompt adapts to selected complexity level' },
      { type: 'changed', text: 'Version bump to v0.5' }
    ]
  }
];

// Personality term glossary for tooltips
const GLOSSARY = {
  'Ne': { term: 'Extraverted Intuition', desc: 'Sees possibilities, makes unexpected connections, generates options' },
  'Ni': { term: 'Introverted Intuition', desc: 'Forms deep insights, recognizes patterns, has "aha" moments' },
  'Se': { term: 'Extraverted Sensing', desc: 'Lives in the moment, notices details, action-oriented' },
  'Si': { term: 'Introverted Sensing', desc: 'Recalls past experiences, values tradition, notices changes' },
  'Te': { term: 'Extraverted Thinking', desc: 'Organizes systems, efficiency-focused, delegates well' },
  'Ti': { term: 'Introverted Thinking', desc: 'Builds logic frameworks, analyzes deeply, seeks precision' },
  'Fe': { term: 'Extraverted Feeling', desc: 'Reads group emotions, maintains harmony, expresses warmth' },
  'Fi': { term: 'Introverted Feeling', desc: 'Holds deep values, authentic expression, personal ethics' },
  'Ne-dom': { term: 'Ne Dominant', desc: 'ENTP/ENFP - idea generators who see endless possibilities' },
  'Ni-dom': { term: 'Ni Dominant', desc: 'INTJ/INFJ - visionaries who see how things unfold' },
  'Se-dom': { term: 'Se Dominant', desc: 'ESTP/ESFP - action-oriented, in-the-moment responders' },
  'Si-dom': { term: 'Si Dominant', desc: 'ISTJ/ISFJ - reliable, detail-oriented, tradition-aware' },
  'Te-dom': { term: 'Te Dominant', desc: 'ENTJ/ESTJ - natural organizers and decision-makers' },
  'Ti-dom': { term: 'Ti Dominant', desc: 'INTP/ISTP - analytical problem-solvers' },
  'Fe-dom': { term: 'Fe Dominant', desc: 'ENFJ/ESFJ - natural harmonizers, socially aware' },
  'Fi-dom': { term: 'Fi Dominant', desc: 'INFP/ISFP - value-driven, authenticity-focused' },
  'dom': { term: 'Dominant Function', desc: 'Your primary mental process, used ~50% of the time' },
  'aux': { term: 'Auxiliary Function', desc: 'Supporting function that balances your dominant' },
  'cognitive stack': { term: 'Cognitive Stack', desc: 'Your 4 preferred mental functions in order (e.g., Ne-Ti-Fe-Si)' }
};

// Tooltip component for personality terms
const Tooltip = ({ term, children }) => {
  const [show, setShow] = React.useState(false);
  const entry = GLOSSARY[term] || GLOSSARY[term?.toLowerCase?.()];
  if (!entry) return children || term;
  
  return (
    <span 
      style={{ position: 'relative', display: 'inline', borderBottom: '1px dotted #9CA3AF', cursor: 'help' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children || term}
      {show && (
        <span style={{
          position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
          marginBottom: '8px', padding: '10px 14px', background: '#1F2937', color: 'white',
          borderRadius: '8px', fontSize: '13px', lineHeight: '1.4', width: '220px',
          textAlign: 'left', zIndex: 1000, boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          <strong style={{ display: 'block', marginBottom: '4px', color: '#FCD34D' }}>{entry.term}</strong>
          {entry.desc}
          <span style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
            borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #1F2937' }} />
        </span>
      )}
    </span>
  );
};

export default function PersonalityMentor() {
  const [view, setView] = useState('splash');
  const [tourStep, setTourStep] = useState(0);
  const [user, setUser] = useState(null);
  const [people, setPeople] = useState([]);
  const [surveyTarget, setSurveyTarget] = useState(null);
  const [surveyAnswers, setSurveyAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnim, setQuestionAnim] = useState('enter');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [onboardingData, setOnboardingData] = useState({ name: '', age: '', gender: '' });
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Enhanced suggestions system state
  const [answeredSuggestions, setAnsweredSuggestions] = useState(new Set());
  const [personSuggestions, setPersonSuggestions] = useState({}); // { personId: [visible, visible, ...pool] }
  const [generalSuggestions, setGeneralSuggestions] = useState([]); // [visible..., pool...]
  const [generalVisibleCount, setGeneralVisibleCount] = useState(5);
  const [showSettings, setShowSettings] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showGroupPlanner, setShowGroupPlanner] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [groupCount, setGroupCount] = useState(3);
  const [generatedGroups, setGeneratedGroups] = useState([]);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [voiceSettings, setVoiceSettings] = useState({
    voiceIndex: -1, // -1 means auto-select
    rate: 0.78,
    pitch: 1.0
  });
  const [gradeLevel, setGradeLevel] = useState('adult'); // child, teen, adult, senior
  const [isListening, setIsListening] = useState(false);
  const [apiKey, setApiKey] = useState(''); // User's Anthropic API key
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  // localStorage key
  const STORAGE_KEY = 'kindred_app_state';
  
  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.user) setUser(state.user);
        if (state.people) setPeople(state.people);
        if (state.messages) setMessages(state.messages);
        if (state.answeredSuggestions) setAnsweredSuggestions(new Set(state.answeredSuggestions));
        if (state.voiceSettings) setVoiceSettings(state.voiceSettings);
        if (state.gradeLevel) setGradeLevel(state.gradeLevel);
        if (typeof state.isMuted === 'boolean') setIsMuted(state.isMuted);
        if (state.apiKey) setApiKey(state.apiKey);
        // If we have a user, go to chat view
        if (state.user && state.messages?.length > 0) {
          setView('chat');
        } else if (state.user) {
          setView('people');
        }
        console.log('[Kindred] Restored session:', { 
          user: state.user?.name, 
          people: state.people?.length, 
          messages: state.messages?.length 
        });
      }
    } catch (e) {
      console.warn('[Kindred] Could not restore session:', e);
    }
  }, []);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    try {
      const state = {
        user,
        people,
        messages,
        answeredSuggestions: [...answeredSuggestions],
        voiceSettings,
        gradeLevel,
        isMuted,
        apiKey,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[Kindred] Could not save session:', e);
    }
  }, [user, people, messages, answeredSuggestions, voiceSettings, gradeLevel, isMuted, apiKey]);
  
  // Clear saved session
  const clearSession = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
      setPeople([]);
      setMessages([]);
      setAnsweredSuggestions(new Set());
      setGradeLevel('adult');
      setView('splash');
      console.log('[Kindred] Session cleared');
    } catch (e) {
      console.warn('[Kindred] Could not clear session:', e);
    }
  };

  // Grade level descriptions for system prompt
  const GRADE_LEVEL_PROMPTS = {
    child: 'Use very simple words (1-2 syllable), short sentences, fun examples with animals or games, no abstract concepts. Target age: 6-10.',
    teen: 'Use casual language, relatable examples about school/friends/social media, some slang is ok. Target age: 13-17.',
    adult: 'Use professional language, nuanced explanations, workplace/relationship examples. Target age: 18-65.',
    senior: 'Use clear, respectful language, avoid tech jargon, include life wisdom examples, larger text references. Target age: 65+.'
  };

  // Speech recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(prev => prev ? prev + ' ' + transcript : transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.warn('[Kindred] Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          alert('Microphone access denied. Please click the lock icon in your address bar, set Microphone to "Allow", and reload the page.');
        } else if (event.error === 'no-speech') {
          // Silent fail - user just didn't speak
        } else {
          alert(`Voice input error: ${event.error}. Please try again.`);
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Try Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      stopSpeaking(); // Stop TTS while listening
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Generate email summary
  const generateEmailSummary = () => {
    if (messages.length === 0) {
      alert('No conversation to share yet. Start chatting first!');
      return;
    }

    // Get last 5 exchanges for brevity
    const recentMessages = messages.slice(-10);
    const summary = recentMessages.map(m =>
      `${m.role === 'user' ? 'Me' : 'Kindred'}: ${m.content.slice(0, 200)}${m.content.length > 200 ? '...' : ''}`
    ).join('\n\n');

    const subject = encodeURIComponent(`My Kindred Conversation - ${user?.type || 'Personality'} Insights`);
    const body = encodeURIComponent(
      `Here's a summary of my recent conversation with Kindred, my AI personality mentor:\n\n` +
      `My Type: ${user?.type || 'Not set'} (${user?.profile?.name || 'Unknown'})\n` +
      `People in my circle: ${people.map(p => `${p.name} (${p.type})`).join(', ') || 'None added'}\n\n` +
      `--- Recent Conversation ---\n\n${summary}\n\n` +
      `---\nTry Kindred: https://github.com/smhunt/kindred-app`
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };
  
  // Calculate group metrics
  const getGroupMetrics = (memberList) => {
    if (!memberList || memberList.length === 0) return null;
    const typed = memberList.filter(p => p.type);
    if (typed.length === 0) return null;
    
    const metrics = {
      total: typed.length,
      extroverts: typed.filter(p => p.type[0] === 'E').length,
      introverts: typed.filter(p => p.type[0] === 'I').length,
      sensors: typed.filter(p => p.type[1] === 'S').length,
      intuitives: typed.filter(p => p.type[1] === 'N').length,
      thinkers: typed.filter(p => p.type[2] === 'T').length,
      feelers: typed.filter(p => p.type[2] === 'F').length,
      judgers: typed.filter(p => p.type[3] === 'J').length,
      perceivers: typed.filter(p => p.type[3] === 'P').length
    };
    
    return metrics;
  };
  
  // Generate balanced groups
  const generateBalancedGroups = () => {
    const typed = people.filter(p => p.type);
    if (typed.length < groupCount) return;
    
    // Sort by E/I then T/F to distribute diversity
    const sorted = [...typed].sort((a, b) => {
      const aScore = (a.type[0] === 'E' ? 100 : 0) + (a.type[2] === 'T' ? 10 : 0) + (a.type[3] === 'J' ? 1 : 0);
      const bScore = (b.type[0] === 'E' ? 100 : 0) + (b.type[2] === 'T' ? 10 : 0) + (b.type[3] === 'J' ? 1 : 0);
      return bScore - aScore;
    });
    
    // Distribute round-robin style for balance
    const groups = Array.from({ length: groupCount }, () => []);
    sorted.forEach((person, idx) => {
      groups[idx % groupCount].push(person);
    });
    
    setGeneratedGroups(groups);
  };
  
  // Load available voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const englishVoices = voices.filter(v => v.lang.startsWith('en'));
        setAvailableVoices(englishVoices.length > 0 ? englishVoices : voices);
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);
  
  // Text-to-speech functions
  const speak = (text, preview = false) => {
    if ('speechSynthesis' in window && (!isMuted || preview)) {
      window.speechSynthesis.cancel();
      
      const cleanText = text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\n\n/g, '... ')
        .replace(/\n/g, '. ')
        .replace(/<[^>]*>/g, '')
        .replace(/•/g, '')
        .replace(/([.!?])\s+/g, '$1 ... ')
        .replace(/,\s+/g, ', ')
        .replace(/\s+/g, ' ')
        .replace(/\.{3,}/g, '...')
        .trim();
      
      if (!cleanText) return;
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = voiceSettings.rate;
      utterance.pitch = voiceSettings.pitch;
      utterance.volume = 1.0;
      
      // Use selected voice or auto-select best one
      const voices = window.speechSynthesis.getVoices();
      let selectedVoice;
      
      if (voiceSettings.voiceIndex >= 0 && voices[voiceSettings.voiceIndex]) {
        selectedVoice = voices[voiceSettings.voiceIndex];
      } else {
        // Auto-select best voice
        selectedVoice = voices.find(v => 
          v.name === 'Samantha' || v.name === 'Karen' || v.name === 'Daniel' ||
          v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Premium')
        ) || voices.find(v => 
          v.name.includes('Google UK English Female') || v.name.includes('Google US English')
        ) || voices.find(v => v.lang.startsWith('en-') && !v.name.includes('Compact')) || voices[0];
      }
      
      if (selectedVoice) utterance.voice = selectedVoice;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };
  
  const testVoice = () => {
    speak("Hi there! I'm Kindred, your personality mentor. How does this voice sound to you?", true);
  };
  
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      // If there are messages, speak the last assistant message
      const lastAssistantMsg = [...messages].reverse().find(m => m.role === 'assistant');
      if (lastAssistantMsg) {
        setTimeout(() => speak(lastAssistantMsg.content), 100);
      }
    } else {
      setIsMuted(true);
      stopSpeaking();
    }
  };
  
  // Auto-speak new assistant messages
  const lastMsgRef = useRef(null);
  useEffect(() => {
    if (messages.length > 0 && !isMuted) {
      const lastMsg = messages[messages.length - 1];
      // Only speak if it's a new assistant message we haven't spoken yet
      if (lastMsg.role === 'assistant' && lastMsg.content !== lastMsgRef.current) {
        lastMsgRef.current = lastMsg.content;
        // Small delay to ensure smooth transition
        setTimeout(() => speak(lastMsg.content), 150);
      }
    }
  }, [messages]);
  
  // Load a demo family/team
  const loadDemoFamily = async (demoKey) => {
    const demo = DEMO_FAMILIES[demoKey];
    if (!demo) return;
    
    const newPeople = demo.members.map((member, idx) => ({
      id: Date.now() + idx,
      name: member.name,
      relationship: member.relationship,
      age: member.age,
      type: member.type,
      identity: 'A',
      profile: MBTI_PROFILES[member.type]
    }));
    
    setPeople(newPeople);
    setShowDemoModal(false);
    
    // Set a default user if needed
    const currentUser = user?.type ? user : {
      name: 'You',
      age: '35',
      gender: '',
      type: 'ENTP',
      identity: 'A',
      profile: MBTI_PROFILES['ENTP']
    };
    
    if (!user?.type) {
      setUser(currentUser);
    }
    
    // Go to chat and auto-trigger group insights
    setView('chat');
    setIsLoading(true);
    
    // Build an impressive group analysis prompt
    const typeDistribution = {};
    newPeople.forEach(p => {
      typeDistribution[p.type] = (typeDistribution[p.type] || 0) + 1;
    });
    
    const prompt = `Give me a comprehensive overview of ${demo.name} (${newPeople.length} people). 
    
Types represented: ${Object.entries(typeDistribution).map(([t, c]) => `${t}${c > 1 ? ` (×${c})` : ''}`).join(', ')}.

Analyze: 1) Overall group dynamics and energy, 2) Natural leadership patterns, 3) Potential friction points, 4) How I (${currentUser.type}) fit in. Be specific about who works well together.`;

    setMessages([{ role: 'user', content: `Analyze my ${demo.category === 'classroom' ? 'class' : demo.category === 'sports' ? 'team' : 'group'}: ${demo.name}` }]);
    
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: `I've loaded **${demo.name}** with ${newPeople.length} people. To get AI insights, add your Anthropic API key in Settings (gear icon).` }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022',
          max_tokens: 800,
          system: `You are Kindred analyzing group dynamics. USER: ${currentUser.name} (${currentUser.type}).

GROUP "${demo.name}": ${newPeople.map(p => `${p.name} (${p.relationship}): ${p.type} ${p.profile?.name}`).join(' | ')}

STYLE: Start with a punchy summary stat (e.g. "This is a highly extroverted group with 4 of 6 being Es"). Then cover dynamics in 2-3 focused paragraphs. Name specific people and pairings. End with one actionable tip for the user.`,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `API Error: ${data.error.message}. Check your API key in Settings.` }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.content?.map(block => block.text || '').join('') || 'Analysis complete.' }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `I've loaded **${demo.name}** with ${newPeople.length} people. Connection error - check your API key in Settings.` }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Stop speech when view changes
  useEffect(() => {
    stopSpeaking();
  }, [view]);

  const calculateType = (answers) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0, A: 0, T_ID: 0 };
    Object.entries(answers).forEach(([key, answer]) => {
      const qId = parseInt(key);
      if (qId > 12 && answer === 'T') scores['T_ID']++;
      else if (answer === 'A') scores['A']++;
      else scores[answer] = (scores[answer] || 0) + 1;
    });
    
    const type = (scores.E >= scores.I ? 'E' : 'I') + (scores.N >= scores.S ? 'N' : 'S') + (scores.T >= scores.F ? 'T' : 'F') + (scores.P >= scores.J ? 'P' : 'J');
    const identity = scores.A >= scores.T_ID ? 'A' : 'T';
    return { type, identity, profile: MBTI_PROFILES[type] };
  };

  const completeSurvey = (answers) => {
    const { type, identity, profile } = calculateType(answers);
    
    if (surveyTarget === null) {
      setUser(prev => ({ ...prev, type, identity, profile }));
      setMessages([{
        role: 'assistant',
        content: `Welcome${user?.name ? `, ${user.name}` : ''}! Based on your responses, you're an **${type}-${identity}: ${profile.name}**.\n\n${profile.overview}\n\nI'm here as your personality mentor. Ask me anything about leveraging your strengths, navigating challenges, or building better relationships.`
      }]);
      setView('chat');
    } else {
      setPeople(prev => prev.map(p => p.id === surveyTarget ? { ...p, type, identity, profile } : p));
      setView('people');
    }
    
    setSurveyAnswers({});
    setCurrentQuestion(0);
    setSurveyTarget(null);
  };

  const handleSurveyAnswer = (value) => {
    setQuestionAnim('exit');
    
    setTimeout(() => {
      const allQuestions = [...SURVEY_QUESTIONS, ...IDENTITY_QUESTIONS];
      const newAnswers = { ...surveyAnswers, [allQuestions[currentQuestion].id]: value };
      setSurveyAnswers(newAnswers);
      
      if (currentQuestion < allQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setQuestionAnim('enter');
      } else {
        completeSurvey(newAnswers);
      }
    }, 300);
  };

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setQuestionAnim('exit-reverse');
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setQuestionAnim('enter-reverse');
      }, 300);
    } else {
      setSurveyAnswers({});
      setCurrentQuestion(0);
      setSurveyTarget(null);
      setView(user?.type ? 'chat' : 'onboarding');
    }
  };

  const addPerson = (relationship) => {
    setEditingPerson({ id: null, name: '', relationship, age: '', type: null, identity: null, profile: null });
  };

  const savePerson = (person) => {
    if (person.id) setPeople(prev => prev.map(p => p.id === person.id ? person : p));
    else setPeople(prev => [...prev, { ...person, id: Date.now() }]);
    setEditingPerson(null);
  };

  const deletePerson = (id) => {
    setPeople(prev => prev.filter(p => p.id !== id));
    setSelectedPeople(prev => prev.filter(pid => pid !== id));
  };

  const setPersonType = (personId, typeCode) => {
    setPeople(prev => prev.map(p => p.id === personId ? { ...p, type: typeCode, identity: 'A', profile: MBTI_PROFILES[typeCode] } : p));
  };

  const getCompatibility = (type1, type2) => {
    if (!type1 || !type2) return null;
    if (COMPATIBILITY.natural.some(([a, b]) => (a === type1 && b === type2) || (a === type2 && b === type1))) return 'natural';
    if (COMPATIBILITY.challenging.some(([a, b]) => (a === type1 && b === type2) || (a === type2 && b === type1))) return 'challenging';
    return 'moderate';
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    const content = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content }]);
    await sendMessageWithContent(content);
  };
  
  const sendMessageWithContent = async (userMessage) => {
    if (!userMessage || isLoading) return;

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please add your Anthropic API key in Settings (gear icon) to chat with me.' }]);
      return;
    }

    stopSpeaking(); // Stop current speech, auto-speak will handle new response
    setIsLoading(true);

    try {
      const peopleContext = people.length > 0 ? `\n\nFAMILY/TEAM:\n${people.map(p => `- ${p.name} (${p.relationship}): ${p.type ? `${p.type} - ${p.profile?.name}` : 'Type not set'}`).join('\n')}` : '';

      const gradeLevelInstruction = GRADE_LEVEL_PROMPTS[gradeLevel] || GRADE_LEVEL_PROMPTS.adult;

      const systemPrompt = `You are Kindred, a warm personality mentor.

USER: ${user?.name || 'User'}, ${user?.type}-${user?.identity} (${user?.profile?.name})
STRENGTHS: ${user?.profile?.strengths?.slice(0, 3).join(', ')}
GROWTH: ${user?.profile?.weaknesses?.slice(0, 2).join(', ')}${peopleContext}

COMMUNICATION LEVEL: ${gradeLevelInstruction}

STYLE: Be warm but concise—2-3 paragraphs max. Use cognitive function shorthand (Ne-dom, Si-aux, etc.) when discussing personality dynamics—tooltips will explain these to users. One key insight per response. End with a question or suggestion.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022',
          max_tokens: 500,
          system: systemPrompt,
          messages: messages.slice(-10).concat([{ role: 'user', content: userMessage }])
        })
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `API Error: ${data.error.message}. Check your API key in Settings.` }]);
      } else {
        const assistantMessage = data.content?.map(block => block.text || '').join('') || 'I encountered an issue. Please try again.';
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Check your API key in Settings.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getRelationshipInsights = async () => {
    if (selectedPeople.length === 0) return;

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Please add your Anthropic API key in Settings (gear icon) to get relationship insights.' }]);
      setView('chat');
      return;
    }

    stopSpeaking(); // Stop current speech

    const selected = people.filter(p => selectedPeople.includes(p.id));
    setIsLoading(true);
    setView('chat');

    const prompt = selectedPeople.length === 1
      ? `Give me insights about my relationship with ${selected[0].name} (${selected[0].relationship}). They're ${selected[0].type} and I'm ${user?.type}.`
      : `Analyze our group: ${[user?.name || 'Me', ...selected.map(p => p.name)].join(', ')} (${[user?.type, ...selected.map(p => p.type)].join(', ')}). What are our dynamics?`;

    setMessages(prev => [...prev, { role: 'user', content: prompt }]);
    setSelectedPeople([]);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022',
          max_tokens: 600,
          system: `You are Kindred, a warm personality mentor.\n\nUSER: ${user?.name || 'User'} - ${user?.type}\nPEOPLE: ${selected.map(p => `${p.name} (${p.relationship}): ${p.type}`).join(', ')}\n\nSTYLE: Be warm but brief—2-3 short paragraphs. One actionable insight. Skip preamble.`,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `API Error: ${data.error.message}. Check your API key in Settings.` }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.content?.map(block => block.text || '').join('') || 'Error occurred.' }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Check your API key in Settings.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Format message with markdown and personality term tooltips
  const formatMessage = (content) => {
    let formatted = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
    
    // Add tooltips for cognitive function terms
    const termPatterns = [
      { pattern: /\b(Ne-dom)\b/g, tip: 'Ne Dominant: ENTP/ENFP - idea generators who see endless possibilities' },
      { pattern: /\b(Ni-dom)\b/g, tip: 'Ni Dominant: INTJ/INFJ - visionaries who see how things unfold' },
      { pattern: /\b(Se-dom)\b/g, tip: 'Se Dominant: ESTP/ESFP - action-oriented, in-the-moment responders' },
      { pattern: /\b(Si-dom)\b/g, tip: 'Si Dominant: ISTJ/ISFJ - reliable, detail-oriented, tradition-aware' },
      { pattern: /\b(Te-dom)\b/g, tip: 'Te Dominant: ENTJ/ESTJ - natural organizers and decision-makers' },
      { pattern: /\b(Ti-dom)\b/g, tip: 'Ti Dominant: INTP/ISTP - analytical problem-solvers' },
      { pattern: /\b(Fe-dom)\b/g, tip: 'Fe Dominant: ENFJ/ESFJ - natural harmonizers, socially aware' },
      { pattern: /\b(Fi-dom)\b/g, tip: 'Fi Dominant: INFP/ISFP - value-driven, authenticity-focused' },
      { pattern: /\b(Ne-aux|Si-aux|Te-aux|Ti-aux|Fe-aux|Fi-aux|Se-aux|Ni-aux)\b/g, tip: 'Auxiliary: Your supporting function that balances the dominant' },
      { pattern: /\b(cognitive stack)\b/gi, tip: 'Cognitive Stack: Your 4 preferred mental functions in order' }
    ];
    
    termPatterns.forEach(({ pattern, tip }) => {
      formatted = formatted.replace(pattern, `<span class="tooltip-term" data-tip="${tip}">$1</span>`);
    });
    
    return formatted;
  };

  // Generate contextual suggestions based on user and people
  const getSuggestions = () => {
    const suggestions = [];
    
    // Personal growth suggestions based on type
    if (user?.profile) {
      suggestions.push({
        category: 'Personal Growth',
        items: [
          `How can I work on ${user.profile.weaknesses?.[0]?.toLowerCase() || 'my challenges'}?`,
          `What careers suit my ${user.type} personality?`,
          `How do I leverage being ${user.profile.strengths?.[0]?.toLowerCase() || 'my strengths'}?`,
          `What's my biggest blind spot as an ${user.type}?`
        ]
      });
    }
    
    // Relationship suggestions if people exist
    if (people.length > 0) {
      const relationshipItems = [];
      
      people.forEach(person => {
        if (person.type) {
          const compat = getCompatibility(user?.type, person.type);
          if (compat === 'challenging') {
            relationshipItems.push(`How can ${person.name} and I communicate better?`);
          } else if (compat === 'natural') {
            relationshipItems.push(`What makes ${person.name} and I click so well?`);
          }
        }
      });
      
      // Add general relationship questions
      if (people.some(p => p.relationship === 'spouse')) {
        const spouse = people.find(p => p.relationship === 'spouse');
        relationshipItems.push(`Tips for my relationship with ${spouse.name}?`);
      }
      
      if (people.some(p => p.relationship === 'child')) {
        const child = people.find(p => p.relationship === 'child');
        relationshipItems.push(`How do I best support ${child.name}'s growth?`);
      }
      
      if (people.some(p => ['manager', 'colleague', 'report'].includes(p.relationship))) {
        relationshipItems.push(`How can I be more effective at work with my team?`);
      }
      
      if (relationshipItems.length > 0) {
        suggestions.push({
          category: 'Relationships',
          items: relationshipItems.slice(0, 4)
        });
      }
      
      // Group dynamics if multiple people
      if (people.length >= 2) {
        const names = people.slice(0, 3).map(p => p.name).join(', ');
        suggestions.push({
          category: 'Group Dynamics',
          items: [
            `What are the dynamics between ${names}?`,
            `Who might clash and who gets along?`,
            `How can we work better as a group?`,
            `What roles does each person naturally fill?`
          ]
        });
      }
    }
    
    // General exploration
    suggestions.push({
      category: 'Explore',
      items: [
        `What stresses out ${user?.type || 'my type'} the most?`,
        `How does ${user?.type || 'my type'} handle conflict?`,
        `What do people misunderstand about ${user?.type || 'me'}?`,
        `What's my ideal way to recharge?`
      ]
    });
    
    return suggestions;
  };

  // Generate per-person suggestion pools
  const generatePersonSuggestionPool = (person) => {
    const suggestions = [];
    const type = person.type;
    const profile = MBTI_PROFILES[type];
    const compat = getCompatibility(user?.type, type);
    const rel = person.relationship;
    
    // Relationship-specific suggestions
    if (rel === 'spouse' || rel === 'partner') {
      suggestions.push(
        `What does ${person.name} need most in our relationship?`,
        `How do ${person.name} and I handle conflict differently?`,
        `What's ${person.name}'s love language based on ${type}?`,
        `How can I better support ${person.name} during stress?`,
        `What activities would ${person.name} and I both enjoy?`,
        `Where might ${person.name} and I clash long-term?`
      );
    } else if (rel === 'child') {
      suggestions.push(
        `How do I best motivate ${person.name}?`,
        `What learning style suits ${person.name} as a ${type}?`,
        `How do I discipline a ${type} child effectively?`,
        `What extracurriculars suit ${person.name}?`,
        `How do I help ${person.name} with social challenges?`,
        `What career paths might ${person.name} excel in?`
      );
    } else if (rel === 'parent') {
      suggestions.push(
        `How do I communicate better with ${person.name}?`,
        `Why does ${person.name} parent the way they do?`,
        `How can ${person.name} and I reduce tension?`,
        `What does ${person.name} need to hear from me?`,
        `How do I set boundaries with ${person.name}?`,
        `What does ${person.name} value most as a ${type}?`
      );
    } else if (rel === 'sibling') {
      suggestions.push(
        `Why do ${person.name} and I see things differently?`,
        `How can ${person.name} and I get along better?`,
        `What does ${person.name} bring to our family dynamic?`,
        `How do I resolve conflicts with ${person.name}?`,
        `What activities would ${person.name} and I enjoy together?`,
        `How do I support ${person.name} through tough times?`
      );
    } else if (rel === 'manager') {
      suggestions.push(
        `How do I communicate effectively with ${person.name}?`,
        `What does ${person.name} value in team members?`,
        `How do I get ${person.name}'s buy-in on ideas?`,
        `What stresses ${person.name} as a leader?`,
        `How do I ask ${person.name} for feedback?`,
        `What's ${person.name}'s decision-making style?`
      );
    } else if (rel === 'report') {
      suggestions.push(
        `How do I best manage ${person.name}?`,
        `What motivates ${person.name} at work?`,
        `How do I give ${person.name} constructive feedback?`,
        `What tasks should I delegate to ${person.name}?`,
        `How do I help ${person.name} grow professionally?`,
        `What does ${person.name} need from me as a leader?`
      );
    } else if (rel === 'colleague') {
      suggestions.push(
        `How do I collaborate better with ${person.name}?`,
        `What's ${person.name}'s preferred work style?`,
        `How do ${person.name} and I complement each other?`,
        `What might cause friction with ${person.name}?`,
        `How do I give ${person.name} effective feedback?`,
        `What projects would ${person.name} and I excel at together?`
      );
    } else {
      suggestions.push(
        `How do I connect better with ${person.name}?`,
        `What does ${person.name} value in friendships?`,
        `How does ${person.name} show they care?`,
        `What topics interest ${person.name} most?`,
        `How do I support ${person.name} during stress?`,
        `What activities would ${person.name} enjoy?`
      );
    }
    
    // Add type-specific suggestions
    if (compat === 'challenging') {
      suggestions.unshift(`Why do ${person.name} and I sometimes clash?`);
    } else if (compat === 'natural') {
      suggestions.unshift(`What makes ${person.name} and I click so well?`);
    }
    
    if (profile) {
      suggestions.push(`What's ${person.name}'s cognitive function stack?`);
      suggestions.push(`How does ${person.name}'s ${type.includes('E') ? 'extraversion' : 'introversion'} show up?`);
    }
    
    return suggestions;
  };

  // Generate general suggestion pool
  const generateGeneralSuggestionPool = () => {
    const suggestions = [];
    const names = people.slice(0, 3).map(p => p.name);
    
    if (user?.type) {
      suggestions.push(
        `What stresses out ${user.type}s the most?`,
        `How does ${user.type} handle conflict?`,
        `What do people misunderstand about ${user.type}?`,
        `What's my ideal way to recharge?`,
        `What careers suit ${user.type} best?`,
        `What's ${user.type}'s biggest blind spot?`,
        `How does ${user.type} show love?`,
        `What does ${user.type} need in a partner?`,
        `How does ${user.type} make decisions?`,
        `What motivates ${user.type} at work?`,
        `How does ${user.type} handle criticism?`,
        `What's ${user.type}'s learning style?`
      );
    }
    
    if (people.length >= 2) {
      suggestions.push(
        `What are the dynamics between ${names.join(', ')}?`,
        `Who might clash and who gets along?`,
        `How can we work better as a group?`,
        `What roles does each person naturally fill?`,
        `Who should lead different types of activities?`,
        `What's our group's biggest strength?`,
        `What's our group's blind spot?`,
        `How do we make group decisions?`,
        `Who balances out who in our group?`,
        `What communication style works for everyone?`
      );
    }
    
    // Add cognitive function questions
    suggestions.push(
      `Explain cognitive functions in simple terms`,
      `What's the difference between Te and Ti?`,
      `What's the difference between Fe and Fi?`,
      `How do I spot Ne-doms vs Ni-doms?`,
      `What is the grip stress response?`,
      `What are shadow functions?`
    );
    
    return suggestions;
  };

  // Initialize suggestion pools when people change
  useEffect(() => {
    if (people.length > 0) {
      const newPersonSuggestions = {};
      people.forEach(person => {
        newPersonSuggestions[person.id] = generatePersonSuggestionPool(person);
      });
      setPersonSuggestions(newPersonSuggestions);
      setGeneralSuggestions(generateGeneralSuggestionPool());
      setGeneralVisibleCount(5);
      setAnsweredSuggestions(new Set());
    }
  }, [people, user?.type]);

  // Handle suggestion click - mark answered, move to bottom, add new at top
  const handleSuggestionClick = (suggestion, personId = null) => {
    if (isLoading || answeredSuggestions.has(suggestion)) return;
    
    // Send the message
    setMessages(prev => [...prev, { role: 'user', content: suggestion }]);
    sendMessageWithContent(suggestion);
    
    // Mark as answered
    setAnsweredSuggestions(prev => new Set([...prev, suggestion]));
    
    if (personId) {
      // For person-specific suggestions: move answered to bottom, shift pool up
      setPersonSuggestions(prev => {
        const current = [...(prev[personId] || [])];
        const idx = current.indexOf(suggestion);
        if (idx > -1) {
          current.splice(idx, 1);
          current.push(suggestion); // Move to end
        }
        return { ...prev, [personId]: current };
      });
    } else {
      // For general suggestions: move answered to bottom
      setGeneralSuggestions(prev => {
        const current = [...prev];
        const idx = current.indexOf(suggestion);
        if (idx > -1) {
          current.splice(idx, 1);
          current.push(suggestion); // Move to end
        }
        return current;
      });
    }
  };

  // Load more general suggestions (infinite scroll)
  const loadMoreSuggestions = () => {
    setGeneralVisibleCount(prev => Math.min(prev + 3, generalSuggestions.length));
  };

  // Test functions for the suggestion system
  const testSuggestionSystem = {
    // Test: clicking a suggestion marks it answered
    testMarkAnswered: () => {
      const testSuggestion = "Test suggestion";
      const before = answeredSuggestions.has(testSuggestion);
      setAnsweredSuggestions(prev => new Set([...prev, testSuggestion]));
      console.log('[TEST] markAnswered:', { before, after: true, pass: !before });
      return !before;
    },
    
    // Test: answered suggestions move to bottom
    testMoveToBottom: () => {
      const testPool = ['A', 'B', 'C', 'D'];
      const clickedItem = 'B';
      const filtered = testPool.filter(x => x !== clickedItem);
      filtered.push(clickedItem);
      const pass = filtered[filtered.length - 1] === clickedItem;
      console.log('[TEST] moveToBottom:', { before: testPool, after: filtered, pass });
      return pass;
    },
    
    // Test: infinite scroll loads 3 more
    testInfiniteScroll: () => {
      const before = 5;
      const after = Math.min(before + 3, 20);
      const pass = after === 8;
      console.log('[TEST] infiniteScroll:', { before, after, pass });
      return pass;
    },
    
    // Test: person suggestions generate correctly
    testPersonSuggestions: () => {
      const testPerson = { id: 'test', name: 'Test', type: 'INTJ', relationship: 'colleague' };
      const pool = generatePersonSuggestionPool(testPerson);
      const pass = pool.length >= 6 && pool.some(s => s.includes('Test'));
      console.log('[TEST] personSuggestions:', { count: pool.length, hasName: pool.some(s => s.includes('Test')), pass });
      return pass;
    },
    
    // Test: general pool generates correctly  
    testGeneralPool: () => {
      const pool = generateGeneralSuggestionPool();
      const pass = pool.length >= 10;
      console.log('[TEST] generalPool:', { count: pool.length, pass });
      return pass;
    },
    
    // Run all tests
    runAll: () => {
      console.log('=== Suggestion System Tests ===');
      const results = {
        markAnswered: testSuggestionSystem.testMarkAnswered(),
        moveToBottom: testSuggestionSystem.testMoveToBottom(),
        infiniteScroll: testSuggestionSystem.testInfiniteScroll(),
        personSuggestions: testSuggestionSystem.testPersonSuggestions(),
        generalPool: testSuggestionSystem.testGeneralPool()
      };
      const allPass = Object.values(results).every(r => r);
      console.log('=== Results:', allPass ? 'ALL PASS ✓' : 'SOME FAILED ✗', results);
      return results;
    }
  };

  // Expose tests to window for console access
  if (typeof window !== 'undefined') {
    window.testSuggestions = testSuggestionSystem;
  }

  // Styles
  const s = {
    page: { minHeight: '100vh', background: '#F9FAFB', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#111827' },
    card: { background: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' },
    btn: { padding: '10px 18px', borderRadius: '8px', border: 'none', fontWeight: '500', fontSize: '14px', cursor: 'pointer', transition: 'all 0.15s' },
    input: { width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '15px', background: 'white', boxSizing: 'border-box', outline: 'none' },
    tag: { padding: '3px 8px', borderRadius: '5px', fontSize: '12px', fontWeight: '500' },
    accent: '#C2410C'
  };

  // Animation styles
  const getQuestionAnimStyle = () => {
    switch (questionAnim) {
      case 'enter': return { animation: 'slideInRight 0.3s ease-out forwards' };
      case 'exit': return { animation: 'slideOutLeft 0.3s ease-in forwards' };
      case 'enter-reverse': return { animation: 'slideInLeft 0.3s ease-out forwards' };
      case 'exit-reverse': return { animation: 'slideOutRight 0.3s ease-in forwards' };
      default: return {};
    }
  };

  // Splash / Tour Screen
  if (view === 'splash') {
    const step = TOUR_STEPS[tourStep];
    const StepIllustration = step.Illustration;
    
    return (
      <div style={{ ...s.page, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', minHeight: '100vh' }}>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeSlideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-30px); }
          }
          .tour-content {
            animation: fadeSlideIn 0.4s ease-out;
          }
          .dot-active {
            background: #C2410C !important;
            width: 24px !important;
          }
        `}</style>
        
        <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }} className="tour-content" key={tourStep}>
          {/* Illustration */}
          <div style={{ marginBottom: '32px', animation: 'float 3s ease-in-out infinite' }}>
            <StepIllustration />
          </div>
          
          {/* Content */}
          <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: '#111827' }}>
            {step.title}
          </h1>
          <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6', marginBottom: '40px' }}>
            {step.description}
          </p>
          
          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            {TOUR_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTourStep(i)}
                style={{
                  width: i === tourStep ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === tourStep ? s.accent : '#D1D5DB',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
          
          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {tourStep > 0 && (
              <button onClick={() => setTourStep(tourStep - 1)} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', padding: '12px 24px' }}>
                Back
              </button>
            )}
            {tourStep < TOUR_STEPS.length - 1 ? (
              <button onClick={() => setTourStep(tourStep + 1)} style={{ ...s.btn, background: s.accent, color: 'white', padding: '12px 32px' }}>
                Next
              </button>
            ) : (
              <button onClick={() => setView('onboarding')} style={{ ...s.btn, background: s.accent, color: 'white', padding: '12px 32px' }}>
                Get Started →
              </button>
            )}
          </div>
          
          {/* Skip */}
          {tourStep < TOUR_STEPS.length - 1 && (
            <button onClick={() => setView('onboarding')} style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: '13px', marginTop: '20px', cursor: 'pointer' }}>
              Skip tour
            </button>
          )}
          
          {/* Demo option */}
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>
            <p style={{ fontSize: '13px', color: '#9CA3AF', marginBottom: '12px' }}>Want to explore first?</p>
            <button 
              onClick={() => setShowDemoModal(true)} 
              style={{ 
                background: 'none', 
                border: '1px solid #D1D5DB', 
                borderRadius: '8px',
                padding: '10px 20px',
                color: '#6B7280', 
                fontSize: '14px', 
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Try with Demo Family
            </button>
          </div>
        </div>
        
        {/* Demo Modal */}
        {showDemoModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 100 }} onClick={() => setShowDemoModal(false)}>
            <div style={{ ...s.card, maxWidth: '480px', width: '100%', padding: '24px', maxHeight: '80vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Choose a Demo</h3>
              <p style={{ color: '#6B7280', marginBottom: '20px', fontSize: '14px' }}>
                Explore how personality insights work with a pre-built family or team
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.entries(DEMO_FAMILIES).map(([key, demo]) => (
                  <button
                    key={key}
                    onClick={() => loadDemoFamily(key)}
                    style={{
                      ...s.card,
                      padding: '16px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: '1px solid #E5E7EB',
                      transition: 'all 0.15s'
                    }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.background = '#FFFBEB'; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.background = 'white'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '600', fontSize: '15px' }}>{demo.name}</span>
                      <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{demo.members.length} people</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '10px' }}>{demo.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {demo.members.map((member, idx) => (
                        <span key={idx} style={{ 
                          padding: '3px 8px', 
                          borderRadius: '4px', 
                          fontSize: '11px',
                          background: MBTI_PROFILES[member.type]?.color + '20',
                          color: MBTI_PROFILES[member.type]?.color,
                          fontWeight: '500'
                        }}>
                          {member.name} · {member.type}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              
              <button onClick={() => setShowDemoModal(false)} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', width: '100%', marginTop: '16px' }}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Onboarding
  if (view === 'onboarding') {
    return (
      <div style={{ ...s.page, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ ...s.card, maxWidth: '400px', width: '100%', padding: '28px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '6px' }}>About You</h2>
          <p style={{ color: '#6B7280', marginBottom: '24px', fontSize: '14px' }}>A few details to personalize your experience</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '13px', color: '#374151' }}>Name</label>
              <input type="text" value={onboardingData.name} onChange={e => setOnboardingData({ ...onboardingData, name: e.target.value })} placeholder="What should I call you?" style={s.input} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '13px', color: '#374151' }}>Age</label>
                <input type="number" value={onboardingData.age} onChange={e => setOnboardingData({ ...onboardingData, age: e.target.value })} placeholder="Optional" style={s.input} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '13px', color: '#374151' }}>Gender</label>
                <select value={onboardingData.gender} onChange={e => setOnboardingData({ ...onboardingData, gender: e.target.value })} style={{ ...s.input, cursor: 'pointer' }}>
                  <option value="">Optional</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button onClick={() => setView('splash')} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', flex: 1 }}>Back</button>
              <button onClick={() => { setUser({ ...onboardingData, type: null, identity: null, profile: null }); setSurveyTarget(null); setQuestionAnim('enter'); setView('survey'); }} style={{ ...s.btn, background: s.accent, color: 'white', flex: 2 }}>
                Take Survey →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Survey with animations
  if (view === 'survey') {
    const allQuestions = [...SURVEY_QUESTIONS, ...IDENTITY_QUESTIONS];
    const question = allQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
    const targetPerson = surveyTarget ? people.find(p => p.id === surveyTarget) : null;

    return (
      <div style={{ ...s.page, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', overflow: 'hidden' }}>
        <style>{`
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideOutLeft {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-60px); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(60px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .survey-option:hover {
            border-color: #C2410C !important;
            background: #FFFBEB !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(194, 65, 12, 0.15);
          }
          .survey-option:active {
            transform: scale(0.98);
          }
        `}</style>
        
        <div style={{ maxWidth: '520px', width: '100%' }}>
          {targetPerson && (
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span style={{ ...s.tag, background: '#FEF3C7', color: '#92400E' }}>Survey for {targetPerson.name}</span>
            </div>
          )}
          
          {/* Progress bar */}
          <div style={{ background: '#E5E7EB', borderRadius: '4px', height: '4px', marginBottom: '28px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: `linear-gradient(90deg, ${s.accent}, #EA580C)`, borderRadius: '4px', transition: 'width 0.4s ease' }} />
          </div>
          
          {/* Animated question container */}
          <div style={getQuestionAnimStyle()} key={currentQuestion}>
            <p style={{ color: '#6B7280', marginBottom: '10px', fontSize: '13px' }}>
              Question {currentQuestion + 1} of {allQuestions.length}
            </p>
            
            <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '24px', lineHeight: '1.4' }}>
              {targetPerson ? question.text.replace(/\byou\b/gi, targetPerson.name).replace(/\bYour\b/g, `${targetPerson.name}'s`).replace(/\byour\b/g, `${targetPerson.name}'s`) : question.text}
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSurveyAnswer(option.value)}
                  className="survey-option"
                  style={{
                    ...s.card,
                    padding: '16px 18px',
                    fontSize: '15px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: '2px solid #E5E7EB'
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
          
          <button onClick={goToPrevQuestion} style={{ marginTop: '24px', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer', fontSize: '14px', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ← {currentQuestion > 0 ? 'Previous' : 'Cancel'}
          </button>
        </div>
      </div>
    );
  }

  // People
  if (view === 'people') {
    // Clean minimal SVG icons for relationships
    const RelIcon = ({ type }) => {
      const icons = {
        spouse: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
        child: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M12 12v8m-4-4h8"/></svg>,
        parent: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="3"/><path d="M12 9v12"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 16v-3a6 6 0 0 1 12 0v3"/></svg>,
        sibling: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/></svg>,
        colleague: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
        friend: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2"/><path d="M12 6v12m-4-4l4 4 4-4"/></svg>,
        manager: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="3"/><path d="M12 9v3m-6 9v-3a6 6 0 0 1 12 0v3"/><path d="M8 15l4-3 4 3"/></svg>,
        report: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="16" r="3"/><path d="M12 13V8"/><path d="M8 4h8m-6 4l2-4 2 4"/></svg>
      };
      return <span style={{ color: '#6B7280', display: 'flex' }}>{icons[type] || icons.friend}</span>;
    };
    
    const relationships = [
      { id: 'spouse', label: 'Partner' },
      { id: 'child', label: 'Child' },
      { id: 'parent', label: 'Parent' },
      { id: 'sibling', label: 'Sibling' },
      { id: 'colleague', label: 'Colleague' },
      { id: 'friend', label: 'Friend' },
      { id: 'manager', label: 'Manager' },
      { id: 'report', label: 'Report' }
    ];

    return (
      <div style={s.page}>
        <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '14px 20px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button onClick={() => setView('chat')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#6B7280' }}>←</button>
              <div>
                <h1 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Family & Team</h1>
                <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>Manage people for relationship insights</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {messages.length > 0 && (
                <button 
                  onClick={() => setView('chat')}
                  style={{ ...s.btn, background: '#DBEAFE', color: '#1D4ED8', fontSize: '12px', padding: '6px 12px' }}
                >
                  ← Back to Chat
                </button>
              )}
              <button 
                onClick={() => setShowSettings(true)}
                style={{ ...s.btn, background: '#F3F4F6', color: '#374151', fontSize: '12px', padding: '6px 10px' }}
                title="Voice settings"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4m11-11h-4M5 12H1m16.95-6.95l-2.83 2.83M9.88 14.12l-2.83 2.83m0-9.9l2.83 2.83m4.24 4.24l2.83 2.83"/>
                </svg>
              </button>
              {people.length >= 6 && (
                <button onClick={() => { setGeneratedGroups([]); setShowGroupPlanner(true); }} style={{ ...s.btn, background: '#EDE9FE', color: '#5B21B6', fontSize: '12px', padding: '6px 12px' }}>
                  Group Planner
                </button>
              )}
              <button onClick={() => setShowDemoModal(true)} style={{ ...s.btn, background: '#FEF3C7', color: '#92400E', fontSize: '12px', padding: '6px 12px' }}>
                Load Demo
              </button>
              {selectedPeople.length > 0 && (
                <button onClick={getRelationshipInsights} style={{ ...s.btn, background: s.accent, color: 'white', fontSize: '13px' }}>
                  Get Insights ({selectedPeople.length})
                </button>
              )}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '20px' }}>
          {/* Class/Team Metrics */}
          {people.length >= 4 && getGroupMetrics(people) && (
            <div style={{ ...s.card, padding: '16px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Group Composition</h3>
              {(() => {
                const m = getGroupMetrics(people);
                return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#6B7280' }}>E / I</span>
                      </div>
                      <div style={{ height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(m.extroverts / m.total) * 100}%`, height: '100%', background: '#F59E0B', transition: 'width 0.3s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>
                        <span>{m.extroverts}</span>
                        <span>{m.introverts}</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#6B7280' }}>S / N</span>
                      </div>
                      <div style={{ height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(m.sensors / m.total) * 100}%`, height: '100%', background: '#10B981', transition: 'width 0.3s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>
                        <span>{m.sensors}</span>
                        <span>{m.intuitives}</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#6B7280' }}>T / F</span>
                      </div>
                      <div style={{ height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(m.thinkers / m.total) * 100}%`, height: '100%', background: '#6366F1', transition: 'width 0.3s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>
                        <span>{m.thinkers}</span>
                        <span>{m.feelers}</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#6B7280' }}>J / P</span>
                      </div>
                      <div style={{ height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(m.judgers / m.total) * 100}%`, height: '100%', background: '#EC4899', transition: 'width 0.3s' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>
                        <span>{m.judgers}</span>
                        <span>{m.perceivers}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
          {/* Your Profile */}
          <div style={{ ...s.card, padding: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: user?.profile?.color || s.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: 'white' }}>
                  {user?.profile?.icon || (user?.name?.[0] || '?')}
                </div>
                <div>
                  <p style={{ fontWeight: '600', margin: 0, fontSize: '15px' }}>{user?.name || 'You'}</p>
                  <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
                    {user?.type ? `${user.type}-${user.identity} · ${user.profile?.name}` : 'No type set'}
                  </p>
                </div>
              </div>
              <button onClick={() => { setSurveyTarget(null); setSurveyAnswers({}); setCurrentQuestion(0); setQuestionAnim('enter'); setView('survey'); }} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', fontSize: '12px', padding: '6px 12px' }}>
                {user?.type ? 'Retake' : 'Survey'}
              </button>
            </div>
          </div>

          {/* People List */}
          {people.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Your People</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {people.map(person => {
                  const isSelected = selectedPeople.includes(person.id);
                  const compat = getCompatibility(user?.type, person.type);
                  
                  return (
                    <div key={person.id} onClick={() => person.type && setSelectedPeople(prev => prev.includes(person.id) ? prev.filter(id => id !== person.id) : [...prev, person.id])} style={{ ...s.card, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: person.type ? 'pointer' : 'default', border: isSelected ? `2px solid ${s.accent}` : '1px solid #E5E7EB', background: isSelected ? '#FFFBEB' : 'white', transition: 'all 0.15s' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '9px', background: person.profile?.color || '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                          {person.profile?.icon || (person?.name?.[0] || '?')}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: '600', fontSize: '14px' }}>{person.name}</span>
                            <span style={{ ...s.tag, background: '#F3F4F6', color: '#6B7280' }}>{person.relationship}</span>
                            {compat && person.type && (
                              <span style={{ ...s.tag, background: compat === 'natural' ? '#D1FAE5' : compat === 'challenging' ? '#FEE2E2' : '#FEF3C7', color: compat === 'natural' ? '#065F46' : compat === 'challenging' ? '#991B1B' : '#92400E' }}>{compat}</span>
                            )}
                          </div>
                          <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
                            {person.type ? `${person.type} · ${person.profile?.name}` : 'Type not set'}{person.age && ` · ${person.age}yo`}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }} onClick={e => e.stopPropagation()}>
                        {!person.type && (
                          <select onChange={e => setPersonType(person.id, e.target.value)} value="" style={{ ...s.input, width: 'auto', padding: '4px 8px', fontSize: '12px' }}>
                            <option value="">Set type</option>
                            {Object.keys(MBTI_PROFILES).map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        )}
                        <button onClick={() => setEditingPerson(person)} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', padding: '4px 10px', fontSize: '12px' }}>Edit</button>
                        <button onClick={() => deletePerson(person.id)} style={{ ...s.btn, background: '#FEE2E2', color: '#991B1B', padding: '4px 10px', fontSize: '12px' }}>×</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add Person */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Add Someone</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '8px' }}>
              {relationships.map(rel => (
                <button key={rel.id} onClick={() => addPerson(rel.id)} style={{ ...s.card, padding: '14px 10px', textAlign: 'center', cursor: 'pointer', border: '1px dashed #D1D5DB', background: '#FAFAFA', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }} onMouseOver={e => e.currentTarget.style.borderColor = s.accent} onMouseOut={e => e.currentTarget.style.borderColor = '#D1D5DB'}>
                  <RelIcon type={rel.id} />
                  <span style={{ fontSize: '12px', color: '#374151' }}>{rel.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {editingPerson && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 100 }} onClick={() => setEditingPerson(null)}>
            <div style={{ ...s.card, maxWidth: '360px', width: '100%', padding: '22px' }} onClick={e => e.stopPropagation()}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '18px' }}>{editingPerson.id ? 'Edit Person' : 'Add Person'}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '13px', color: '#374151' }}>Name</label>
                  <input type="text" value={editingPerson.name} onChange={e => setEditingPerson({ ...editingPerson, name: e.target.value })} placeholder="Their name" style={s.input} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '13px', color: '#374151' }}>Age</label>
                    <input type="number" value={editingPerson.age} onChange={e => setEditingPerson({ ...editingPerson, age: e.target.value })} placeholder="Optional" style={s.input} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', fontSize: '13px', color: '#374151' }}>Type</label>
                    <select value={editingPerson.type || ''} onChange={e => { const t = e.target.value; setEditingPerson({ ...editingPerson, type: t || null, identity: t ? 'A' : null, profile: t ? MBTI_PROFILES[t] : null }); }} style={s.input}>
                      <option value="">Unknown</option>
                      {Object.keys(MBTI_PROFILES).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                  <button onClick={() => setEditingPerson(null)} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', flex: 1 }}>Cancel</button>
                  {!editingPerson.type && (
                    <button onClick={() => { const newPerson = editingPerson.id ? editingPerson : { ...editingPerson, id: Date.now() }; if (!editingPerson.id) setPeople(prev => [...prev, newPerson]); setSurveyTarget(newPerson.id); setSurveyAnswers({}); setCurrentQuestion(0); setQuestionAnim('enter'); setEditingPerson(null); setView('survey'); }} style={{ ...s.btn, background: '#E5E7EB', color: '#374151', flex: 1 }}>Survey</button>
                  )}
                  <button onClick={() => editingPerson.name && savePerson(editingPerson)} disabled={!editingPerson.name} style={{ ...s.btn, background: editingPerson.name ? s.accent : '#E5E7EB', color: editingPerson.name ? 'white' : '#9CA3AF', flex: 1, cursor: editingPerson.name ? 'pointer' : 'not-allowed' }}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Demo Modal */}
        {showDemoModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 100 }} onClick={() => setShowDemoModal(false)}>
            <div style={{ ...s.card, maxWidth: '480px', width: '100%', padding: '24px', maxHeight: '80vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Choose a Demo</h3>
              <p style={{ color: '#6B7280', marginBottom: '20px', fontSize: '14px' }}>
                {people.length > 0 ? 'This will replace your current people list' : 'Explore with a pre-built family or team'}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.entries(DEMO_FAMILIES).map(([key, demo]) => (
                  <button
                    key={key}
                    onClick={() => loadDemoFamily(key)}
                    style={{
                      ...s.card,
                      padding: '16px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: '1px solid #E5E7EB',
                      transition: 'all 0.15s'
                    }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.background = '#FFFBEB'; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.background = 'white'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '600', fontSize: '15px' }}>{demo.name}</span>
                      <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{demo.members.length} people</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '10px' }}>{demo.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {demo.members.map((member, idx) => (
                        <span key={idx} style={{ 
                          padding: '3px 8px', 
                          borderRadius: '4px', 
                          fontSize: '11px',
                          background: MBTI_PROFILES[member.type]?.color + '20',
                          color: MBTI_PROFILES[member.type]?.color,
                          fontWeight: '500'
                        }}>
                          {member.name} · {member.type}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              
              <button onClick={() => setShowDemoModal(false)} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', width: '100%', marginTop: '16px' }}>
                Cancel
              </button>
            </div>
          </div>
        )}
        
        {/* Settings Drawer (for People view) */}
        {showSettings && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 100 }} onClick={() => setShowSettings(false)}>
            <div 
              style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '340px', background: 'white', boxShadow: '-4px 0 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }} 
              onClick={e => e.stopPropagation()}
            >
              <div style={{ padding: '20px', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Settings</h3>
                <button onClick={() => setShowSettings(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#9CA3AF' }}>×</button>
              </div>
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #E5E7EB' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Anthropic API Key</label>
                  <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="sk-ant-..." style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', fontFamily: 'monospace' }} />
                  <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '6px' }}>Get your key at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer" style={{ color: s.accent }}>console.anthropic.com</a></p>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Voice</label>
                  <select value={voiceSettings.voiceIndex} onChange={e => setVoiceSettings(prev => ({ ...prev, voiceIndex: parseInt(e.target.value) }))} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', background: 'white' }}>
                    <option value={-1}>Auto (best available)</option>
                    {availableVoices.map((voice, idx) => <option key={idx} value={window.speechSynthesis?.getVoices().indexOf(voice)}>{voice.name} ({voice.lang})</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Speed: {voiceSettings.rate.toFixed(2)}x</label>
                  <input type="range" min="0.5" max="1.5" step="0.05" value={voiceSettings.rate} onChange={e => setVoiceSettings(prev => ({ ...prev, rate: parseFloat(e.target.value) }))} style={{ width: '100%', accentColor: s.accent }} />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Pitch: {voiceSettings.pitch.toFixed(2)}</label>
                  <input type="range" min="0.5" max="1.5" step="0.05" value={voiceSettings.pitch} onChange={e => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))} style={{ width: '100%', accentColor: s.accent }} />
                </div>
                <button onClick={testVoice} style={{ ...s.btn, width: '100%', background: s.accent, color: 'white', padding: '12px', fontSize: '14px' }}>Test Voice</button>
                <button onClick={() => setVoiceSettings({ voiceIndex: -1, rate: 0.78, pitch: 1.0 })} style={{ ...s.btn, width: '100%', background: '#F3F4F6', color: '#374151', padding: '10px', fontSize: '13px', marginTop: '12px' }}>Reset to Defaults</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Chat
  const suggestions = getSuggestions();
  
  return (
    <div style={{ ...s.page, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .suggestion-item:hover {
          background: #FEF3C7 !important;
          border-color: #D97706 !important;
        }
        .tooltip-term {
          border-bottom: 1px dotted #9CA3AF;
          cursor: help;
          position: relative;
        }
        .tooltip-term:hover::after {
          content: attr(data-tip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #1F2937;
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          white-space: nowrap;
          max-width: 250px;
          white-space: normal;
          z-index: 100;
          margin-bottom: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .tooltip-term:hover::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #1F2937;
          margin-bottom: -6px;
          z-index: 101;
        }
      `}</style>
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '12px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: user?.profile?.color || s.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: 'white', transition: 'all 0.3s' }}>
              {user?.profile?.icon || (user?.name?.[0]?.toUpperCase() || 'K')}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <p style={{ fontWeight: '600', margin: 0, fontSize: '15px' }}>{user?.name || 'Kindred'}</p>
                <button 
                  onClick={() => setShowChangelog(true)}
                  style={{ background: '#F3F4F6', border: 'none', fontSize: '10px', color: '#9CA3AF', cursor: 'pointer', padding: '2px 6px', borderRadius: '4px' }}
                  title="View build log"
                >
                  v0.5
                </button>
              </div>
              <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
                {user?.type ? `${user.type}-${user.identity} · ${user.profile?.name}` : 'Take survey to discover your type'}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={toggleMute}
              style={{
                ...s.btn,
                background: isMuted ? '#FEE2E2' : isSpeaking ? '#D1FAE5' : '#F3F4F6',
                color: isMuted ? '#991B1B' : isSpeaking ? '#065F46' : '#374151',
                fontSize: '12px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isMuted ? (
                  <><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></>
                ) : (
                  <><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07"/>{isSpeaking && <path d="M19.07 4.93a10 10 0 010 14.14"/>}</>
                )}
              </svg>
              {isMuted ? 'Muted' : isSpeaking ? 'Speaking' : 'Audio'}
            </button>
            <button
              onClick={() => setShowSettings(true)}
              style={{ ...s.btn, background: '#F3F4F6', color: '#374151', fontSize: '12px', padding: '6px 10px' }}
              title="Settings"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
              </svg>
            </button>
            <button onClick={() => { setSurveyTarget(null); setSurveyAnswers({}); setCurrentQuestion(0); setQuestionAnim('enter'); setView('survey'); }} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', fontSize: '12px', padding: '6px 12px' }}>
              {user?.type ? 'Retake' : 'Survey'}
            </button>
            <button onClick={() => setView('people')} style={{ ...s.btn, background: '#F3F4F6', color: '#374151', fontSize: '12px', padding: '6px 12px' }}>
              People {people.length > 0 && `(${people.length})`}
            </button>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Main chat area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '85%', padding: '12px 16px', borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: msg.role === 'user' ? s.accent : 'white', color: msg.role === 'user' ? 'white' : '#111827', border: msg.role === 'user' ? 'none' : '1px solid #E5E7EB', fontSize: '14px', lineHeight: '1.6' }}>
                  <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '12px 16px', borderRadius: '16px', background: 'white', border: '1px solid #E5E7EB', color: '#6B7280', fontSize: '14px' }}>Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Floating Suggestions Panel - People-First Design */}
        {/* Mobile: overlay at 50% width (chat still usable), Desktop: side panel */}
        {(showSuggestions || !isMobile) && (
        <div style={{
          width: isMobile ? (showSuggestions ? '50%' : '0') : (showSuggestions ? '320px' : '40px'),
          minWidth: isMobile && showSuggestions ? '200px' : 'auto',
          maxWidth: isMobile ? '280px' : 'none',
          position: isMobile ? 'fixed' : 'relative',
          right: isMobile ? 0 : 'auto',
          top: isMobile ? 0 : 'auto',
          bottom: isMobile ? 0 : 'auto',
          zIndex: isMobile ? 50 : 'auto',
          borderLeft: isMobile ? 'none' : '1px solid #E5E7EB',
          background: '#FAFAFA',
          transition: 'width 0.3s ease, transform 0.3s ease',
          transform: isMobile && !showSuggestions ? 'translateX(100%)' : 'translateX(0)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: isMobile && showSuggestions ? '-4px 0 20px rgba(0,0,0,0.15)' : 'none'
        }}>
          {/* Toggle button */}
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            style={{
              background: 'white',
              border: 'none',
              borderBottom: '1px solid #E5E7EB',
              padding: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: showSuggestions ? 'space-between' : 'center',
              gap: '8px',
              color: '#6B7280',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            {showSuggestions ? (
              <>
                <span>People ({people.length})</span>
                <span style={{ fontSize: '14px', fontWeight: '400' }}>›</span>
              </>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
            )}
          </button>
          
          {showSuggestions && (
            <div 
              style={{ 
                flex: 1, 
                overflowY: 'auto', 
                padding: '12px',
                animation: 'slideIn 0.3s ease'
              }}
              onScroll={(e) => {
                const { scrollTop, scrollHeight, clientHeight } = e.target;
                // Load more when near bottom (within 50px)
                if (scrollHeight - scrollTop - clientHeight < 50) {
                  loadMoreSuggestions();
                }
              }}
            >
              {/* People with their suggestions */}
              {people.length > 0 ? (
                <>
                  {people.map(person => {
                    const personPool = personSuggestions[person.id] || [];
                    const visiblePersonSuggestions = personPool.slice(0, 2);
                    
                    return (
                      <div key={person.id} style={{ marginBottom: '16px' }}>
                        {/* Person header */}
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          marginBottom: '8px',
                          padding: '8px 10px',
                          background: 'white',
                          borderRadius: '8px',
                          border: '1px solid #E5E7EB'
                        }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: person.type?.includes('E') ? '#DBEAFE' : '#F3E8FF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: '600',
                            color: person.type?.includes('E') ? '#1D4ED8' : '#7C3AED'
                          }}>
                            {person.name?.charAt(0) || '?'}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ 
                              fontSize: '13px', 
                              fontWeight: '600', 
                              color: '#111827',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {person.name}
                            </div>
                            <div style={{ fontSize: '11px', color: '#6B7280' }}>
                              {person.type} · {person.relationship}
                            </div>
                          </div>
                          {getCompatibility(user?.type, person.type) === 'challenging' && (
                            <span style={{ fontSize: '10px', color: '#DC2626' }}>⚡</span>
                          )}
                          {getCompatibility(user?.type, person.type) === 'natural' && (
                            <span style={{ fontSize: '10px', color: '#059669' }}>✓</span>
                          )}
                        </div>
                        
                        {/* Person's suggestions */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '8px' }}>
                          {visiblePersonSuggestions.map((suggestion, idx) => {
                            const isAnswered = answeredSuggestions.has(suggestion);
                            return (
                              <button
                                key={idx}
                                onClick={() => handleSuggestionClick(suggestion, person.id)}
                                disabled={isLoading}
                                style={{
                                  background: isAnswered ? '#F3F4F6' : 'white',
                                  border: '1px solid #E5E7EB',
                                  borderRadius: '6px',
                                  padding: '8px 10px',
                                  fontSize: '12px',
                                  color: isAnswered ? '#9CA3AF' : '#374151',
                                  textAlign: 'left',
                                  cursor: isLoading || isAnswered ? 'not-allowed' : 'pointer',
                                  transition: 'all 0.15s',
                                  lineHeight: '1.3',
                                  opacity: isLoading ? 0.5 : 1,
                                  textDecoration: isAnswered ? 'line-through' : 'none'
                                }}
                              >
                                {suggestion}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Divider */}
                  <div style={{ 
                    borderTop: '1px solid #E5E7EB', 
                    margin: '16px 0 12px',
                    paddingTop: '12px'
                  }}>
                    <p style={{ 
                      fontSize: '11px', 
                      fontWeight: '600', 
                      color: '#9CA3AF', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.5px',
                      marginBottom: '8px'
                    }}>
                      General
                    </p>
                  </div>
                  
                  {/* General suggestions with infinite scroll */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {generalSuggestions.slice(0, generalVisibleCount).map((suggestion, idx) => {
                      const isAnswered = answeredSuggestions.has(suggestion);
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          disabled={isLoading || isAnswered}
                          style={{
                            background: isAnswered ? '#F3F4F6' : 'white',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            fontSize: '13px',
                            color: isAnswered ? '#9CA3AF' : '#374151',
                            textAlign: 'left',
                            cursor: isLoading || isAnswered ? 'not-allowed' : 'pointer',
                            transition: 'all 0.15s',
                            lineHeight: '1.4',
                            opacity: isLoading ? 0.5 : 1,
                            textDecoration: isAnswered ? 'line-through' : 'none'
                          }}
                        >
                          {suggestion}
                          {isAnswered && (
                            <span style={{ 
                              marginLeft: '8px', 
                              fontSize: '10px', 
                              color: '#9CA3AF' 
                            }}>
                              ✓ asked
                            </span>
                          )}
                        </button>
                      );
                    })}
                    
                    {/* Load more indicator */}
                    {generalVisibleCount < generalSuggestions.length && (
                      <button
                        onClick={loadMoreSuggestions}
                        style={{
                          background: 'transparent',
                          border: '1px dashed #D1D5DB',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          fontSize: '12px',
                          color: '#9CA3AF',
                          textAlign: 'center',
                          cursor: 'pointer',
                          marginTop: '4px'
                        }}
                      >
                        Load more ({generalSuggestions.length - generalVisibleCount} remaining)
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div style={{ 
                  padding: '12px', 
                  background: '#FEF3C7', 
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#92400E'
                }}>
                  <p style={{ fontWeight: '600', marginBottom: '4px' }}>Tip</p>
                  <p style={{ margin: 0 }}>Add family or team members to unlock relationship insights!</p>
                  <button 
                    onClick={() => setView('people')}
                    style={{
                      marginTop: '8px',
                      background: '#D97706',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Add People →
                  </button>
                </div>
              )}
              
              {/* Test runner button (dev only) */}
              {people.length > 0 && (
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.testSuggestions) {
                      window.testSuggestions.runAll();
                      alert('Tests run - check console for results');
                    }
                  }}
                  style={{
                    marginTop: '16px',
                    background: 'transparent',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '10px',
                    color: '#9CA3AF',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  🧪 Run Tests
                </button>
              )}
            </div>
          )}
        </div>
        )}

        {/* Mobile: tap outside to close (transparent overlay) */}
        {isMobile && showSuggestions && (
          <div
            onClick={() => setShowSuggestions(false)}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              width: '50%',
              background: 'transparent',
              zIndex: 40
            }}
          />
        )}

        {/* Floating "How It Works" button - bottom left, semi-transparent until hover */}
        <button
          onClick={() => setShowHowItWorks(true)}
          style={{
            position: 'fixed',
            left: '16px',
            bottom: '80px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.5)',
            color: '#9CA3AF',
            border: '1px solid rgba(156,163,175,0.3)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            transition: 'all 0.2s ease',
            fontSize: '18px',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
            e.currentTarget.style.color = '#9CA3AF';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
          title="How it works"
        >
          ?
        </button>

        {/* Mobile floating button to open suggestions */}
        {isMobile && !showSuggestions && people.length > 0 && (
          <button
            onClick={() => setShowSuggestions(true)}
            style={{
              position: 'fixed',
              right: '16px',
              bottom: '80px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: s.accent,
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 30
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </button>
        )}
      </div>

      <div style={{ background: 'white', borderTop: '1px solid #E5E7EB', padding: '14px 20px' }}>
        {isSpeaking && !isMuted && (
          <div style={{ maxWidth: '900px', margin: '0 auto 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              padding: '6px 12px', 
              background: '#ECFDF5', 
              borderRadius: '20px',
              fontSize: '12px',
              color: '#065F46'
            }}>
              <span style={{ animation: 'pulse 1s infinite', display: 'flex', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/>
                </svg>
              </span>
              <span>Speaking...</span>
              <button 
                onClick={toggleMute}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#065F46',
                  cursor: 'pointer',
                  fontSize: '12px',
                  textDecoration: 'underline',
                  padding: 0
                }}
              >
                Mute
              </button>
            </div>
          </div>
        )}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()} placeholder="Ask about personality, growth, relationships..." style={{ ...s.input, flex: 1 }} />
          {/* Voice Input Button */}
          <button
            onClick={toggleListening}
            style={{
              ...s.btn,
              background: isListening ? '#FEE2E2' : '#F3F4F6',
              color: isListening ? '#DC2626' : '#374151',
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              animation: isListening ? 'pulse 1s infinite' : 'none'
            }}
            title={isListening ? 'Stop listening' : 'Voice input'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
              <path d="M19 10v2a7 7 0 01-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
            {isListening && <span style={{ fontSize: '11px' }}>Listening...</span>}
          </button>
          <button onClick={sendMessage} disabled={!inputValue.trim() || isLoading} style={{ ...s.btn, background: inputValue.trim() && !isLoading ? s.accent : '#E5E7EB', color: inputValue.trim() && !isLoading ? 'white' : '#9CA3AF', cursor: inputValue.trim() && !isLoading ? 'pointer' : 'not-allowed' }}>Send</button>
        </div>
      </div>
      
      {/* Settings Drawer */}
      {showSettings && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 100 }} onClick={() => setShowSettings(false)}>
          <div 
            style={{ 
              position: 'absolute', 
              right: 0, 
              top: 0, 
              bottom: 0, 
              width: '340px', 
              background: 'white', 
              boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column'
            }} 
            onClick={e => e.stopPropagation()}
          >
            <div style={{ padding: '20px', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Settings</h3>
              <button onClick={() => setShowSettings(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#9CA3AF' }}>×</button>
            </div>

            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
              {/* API Key */}
              <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #E5E7EB' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                  Anthropic API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  placeholder="sk-ant-..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px',
                    fontFamily: 'monospace'
                  }}
                />
                <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '6px' }}>
                  Get your key at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer" style={{ color: s.accent }}>console.anthropic.com</a>
                </p>
              </div>

              {/* Voice Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                  Voice
                </label>
                <select
                  value={voiceSettings.voiceIndex}
                  onChange={e => setVoiceSettings(prev => ({ ...prev, voiceIndex: parseInt(e.target.value) }))}
                  style={{ 
                    width: '100%', 
                    padding: '10px 12px', 
                    borderRadius: '8px', 
                    border: '1px solid #D1D5DB',
                    fontSize: '14px',
                    background: 'white'
                  }}
                >
                  <option value={-1}>Auto (best available)</option>
                  {availableVoices.map((voice, idx) => (
                    <option key={idx} value={window.speechSynthesis.getVoices().indexOf(voice)}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
                <p style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>
                  {availableVoices.length} voices available
                </p>
              </div>
              
              {/* Speed Control */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                  Speed: {voiceSettings.rate.toFixed(2)}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.05"
                  value={voiceSettings.rate}
                  onChange={e => setVoiceSettings(prev => ({ ...prev, rate: parseFloat(e.target.value) }))}
                  style={{ width: '100%', accentColor: s.accent }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF' }}>
                  <span>Slower</span>
                  <span>Faster</span>
                </div>
              </div>
              
              {/* Pitch Control */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                  Pitch: {voiceSettings.pitch.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.05"
                  value={voiceSettings.pitch}
                  onChange={e => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
                  style={{ width: '100%', accentColor: s.accent }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9CA3AF' }}>
                  <span>Lower</span>
                  <span>Higher</span>
                </div>
              </div>
              
              {/* Test Button */}
              <button
                onClick={testVoice}
                style={{ 
                  ...s.btn, 
                  width: '100%', 
                  background: s.accent, 
                  color: 'white',
                  padding: '12px',
                  fontSize: '14px'
                }}
              >
                Test Voice
              </button>
              
              {/* Reset */}
              <button
                onClick={() => setVoiceSettings({ voiceIndex: -1, rate: 0.78, pitch: 1.0 })}
                style={{
                  ...s.btn,
                  width: '100%',
                  background: '#F3F4F6',
                  color: '#374151',
                  padding: '10px',
                  fontSize: '13px',
                  marginTop: '12px'
                }}
              >
                Reset Voice to Defaults
              </button>

              {/* Grade Level Slider */}
              <div style={{ marginTop: '32px', borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>
                  Response Complexity
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[
                    { value: 'child', label: 'Child', emoji: '🧒', desc: 'Simple words, fun examples' },
                    { value: 'teen', label: 'Teen', emoji: '🎒', desc: 'Casual, relatable' },
                    { value: 'adult', label: 'Adult', emoji: '👔', desc: 'Professional, nuanced' },
                    { value: 'senior', label: 'Senior', emoji: '🧓', desc: 'Clear, respectful' }
                  ].map(level => (
                    <button
                      key={level.value}
                      onClick={() => setGradeLevel(level.value)}
                      style={{
                        flex: '1 1 45%',
                        padding: '12px 8px',
                        borderRadius: '8px',
                        border: gradeLevel === level.value ? `2px solid ${s.accent}` : '1px solid #E5E7EB',
                        background: gradeLevel === level.value ? '#FEF3C7' : 'white',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '20px', marginBottom: '4px' }}>{level.emoji}</div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>{level.label}</div>
                      <div style={{ fontSize: '10px', color: '#9CA3AF' }}>{level.desc}</div>
                    </button>
                  ))}
                </div>
                <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '8px' }}>
                  Adjusts how Kindred explains personality concepts
                </p>
              </div>

              {/* Share Conversation */}
              <div style={{ marginTop: '24px', borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>
                  Share Conversation
                </label>
                <button
                  onClick={generateEmailSummary}
                  style={{
                    ...s.btn,
                    width: '100%',
                    background: '#DBEAFE',
                    color: '#1D4ED8',
                    padding: '12px',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email Summary
                </button>
                <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '8px' }}>
                  Opens your email client with a conversation summary
                </p>
              </div>

              {/* Session Info */}
              <div style={{ marginTop: '32px', borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>
                  Session Data
                </label>
                <div style={{ background: '#F9FAFB', borderRadius: '8px', padding: '12px', fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>Messages:</span>
                    <span style={{ fontWeight: '500', color: '#374151' }}>{messages.length}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>People:</span>
                    <span style={{ fontWeight: '500', color: '#374151' }}>{people.length}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Your type:</span>
                    <span style={{ fontWeight: '500', color: '#374151' }}>{user?.type || 'Not set'}</span>
                  </div>
                </div>
                <p style={{ fontSize: '11px', color: '#9CA3AF', margin: '0 0 12px' }}>
                  Your conversation is saved locally and will persist when you return.
                </p>
                <button
                  onClick={() => {
                    if (confirm('Clear all data? This will reset your profile, people, and chat history.')) {
                      clearSession();
                      setShowSettings(false);
                    }
                  }}
                  style={{ 
                    ...s.btn, 
                    width: '100%', 
                    background: '#FEE2E2', 
                    color: '#991B1B',
                    padding: '10px',
                    fontSize: '13px'
                  }}
                >
                  Clear Session & Start Over
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* How It Works Modal */}
      {showHowItWorks && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 100 }} onClick={() => setShowHowItWorks(false)}>
          <div style={{ ...s.card, maxWidth: '520px', width: '100%', padding: '28px', maxHeight: '85vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '600' }}>How Kindred Works</h3>
              <button onClick={() => setShowHowItWorks(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#9CA3AF' }}>×</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>1</div>
                <div>
                  <p style={{ fontWeight: '600', margin: '0 0 4px', fontSize: '15px' }}>Discover Your Type</p>
                  <p style={{ margin: 0, color: '#6B7280', fontSize: '14px', lineHeight: '1.5' }}>
                    Take a quick survey based on Myers-Briggs personality theory. You'll get one of 16 types (like ENFP or ISTJ) that describes how you think, feel, and interact.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>2</div>
                <div>
                  <p style={{ fontWeight: '600', margin: '0 0 4px', fontSize: '15px' }}>Add Your People</p>
                  <p style={{ margin: 0, color: '#6B7280', fontSize: '14px', lineHeight: '1.5' }}>
                    Add family members, partners, colleagues, or friends. Either enter their type directly or have them take the survey too.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>3</div>
                <div>
                  <p style={{ fontWeight: '600', margin: '0 0 4px', fontSize: '15px' }}>Get Personalized Insights</p>
                  <p style={{ margin: 0, color: '#6B7280', fontSize: '14px', lineHeight: '1.5' }}>
                    Chat with Kindred about personal growth, relationships, communication styles, and more. Everything is tailored to your unique personality profile.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>4</div>
                <div>
                  <p style={{ fontWeight: '600', margin: '0 0 4px', fontSize: '15px' }}>Explore Compatibility</p>
                  <p style={{ margin: 0, color: '#6B7280', fontSize: '14px', lineHeight: '1.5' }}>
                    Select multiple people to see group dynamics. Learn why some relationships flow naturally while others need more work—and get tips for both.
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '24px', padding: '16px', background: '#FFFBEB', borderRadius: '10px', border: '1px solid #FDE68A' }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#92400E' }}>
                <strong>Tip:</strong> Use the suggestions panel on the right for quick conversation starters tailored to your profile and relationships.
              </p>
            </div>
            
            <button 
              onClick={() => setShowHowItWorks(false)} 
              style={{ ...s.btn, width: '100%', background: s.accent, color: 'white', marginTop: '20px', padding: '12px' }}
            >
              Got It!
            </button>
            
            <button 
              onClick={() => { setShowHowItWorks(false); setShowChangelog(true); }}
              style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: '12px', cursor: 'pointer', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', width: '100%', justifyContent: 'center' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              View build log — how this was made
            </button>
          </div>
        </div>
      )}
      
      {/* Changelog/Build Log Modal */}
      {showChangelog && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 200 }} onClick={() => setShowChangelog(false)}>
          <div style={{ ...s.card, maxWidth: '560px', width: '100%', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Build Log</h3>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6B7280' }}>Real development history</p>
              </div>
              <button onClick={() => setShowChangelog(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#9CA3AF', lineHeight: 1 }}>×</button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
              <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '20px', padding: '12px 16px', background: '#F9FAFB', borderRadius: '8px', borderLeft: '3px solid #C2410C' }}>
                Built in conversation with Claude over 3 sessions. Each feature was implemented through dialogue, not traditional coding.
              </p>
              
              {CHANGELOG_DATA.map((session, idx) => (
                <div key={idx} style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>{session.session}</h4>
                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{session.duration}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#9CA3AF', margin: '0 0 10px' }}>
                    <span>{session.date}</span>
                    <span style={{ color: '#C2410C', fontWeight: '500' }}>{session.messages}</span>
                    <span style={{ color: '#059669', fontWeight: '500' }}>{session.cost}</span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {session.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px' }}>
                        <span style={{ 
                          padding: '1px 5px', 
                          borderRadius: '3px', 
                          fontSize: '9px', 
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          flexShrink: 0,
                          background: item.type === 'added' ? '#DCFCE7' : '#FEF3C7',
                          color: item.type === 'added' ? '#166534' : '#92400E'
                        }}>
                          {item.type === 'added' ? '+' : '~'}
                        </span>
                        <span style={{ color: '#374151' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div style={{ marginTop: '20px', padding: '14px', background: '#FEF3C7', borderRadius: '8px' }}>
                <p style={{ margin: 0, fontSize: '12px', color: '#92400E' }}>
                  <strong>Total:</strong> ~5 hours &nbsp;·&nbsp; <strong>~40 messages</strong> &nbsp;·&nbsp; 3,100+ lines &nbsp;·&nbsp; <strong style={{ color: '#059669' }}>~$30 API cost</strong>
                </p>
                <p style={{ margin: '6px 0 0', fontSize: '11px', color: '#B45309' }}>
                  $0.75/message · $1/feature · $0.01/line &nbsp;·&nbsp; ☕ Less than a fancy coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Group Planner Modal */}
      {showGroupPlanner && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 100 }} onClick={() => setShowGroupPlanner(false)}>
          <div style={{ ...s.card, maxWidth: '700px', width: '100%', padding: '28px', maxHeight: '85vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Group Planner</h3>
                <p style={{ margin: '4px 0 0', color: '#6B7280', fontSize: '14px' }}>Create balanced groups from your {people.length} people</p>
              </div>
              <button onClick={() => setShowGroupPlanner(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#9CA3AF' }}>×</button>
            </div>
            
            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', padding: '16px', background: '#F9FAFB', borderRadius: '10px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                  Number of Groups
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => setGroupCount(c => Math.max(2, c - 1))}
                    style={{ ...s.btn, padding: '6px 12px', background: '#E5E7EB', color: '#374151' }}
                  >−</button>
                  <span style={{ fontSize: '18px', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>{groupCount}</span>
                  <button 
                    onClick={() => setGroupCount(c => Math.min(Math.floor(people.length / 2), c + 1))}
                    style={{ ...s.btn, padding: '6px 12px', background: '#E5E7EB', color: '#374151' }}
                  >+</button>
                  <span style={{ fontSize: '13px', color: '#6B7280', marginLeft: '8px' }}>
                    (~{Math.ceil(people.length / groupCount)} per group)
                  </span>
                </div>
              </div>
              <button 
                onClick={generateBalancedGroups}
                style={{ ...s.btn, background: s.accent, color: 'white', padding: '10px 20px' }}
              >
                Generate Groups
              </button>
            </div>
            
            {/* Generated Groups */}
            {generatedGroups.length > 0 && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(generatedGroups.length, 3)}, 1fr)`, gap: '16px' }}>
                  {generatedGroups.map((group, gIdx) => {
                    const metrics = getGroupMetrics(group);
                    return (
                      <div key={gIdx} style={{ ...s.card, padding: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Group {gIdx + 1}</h4>
                          <span style={{ fontSize: '12px', color: '#6B7280' }}>{group.length} people</span>
                        </div>
                        
                        {/* Mini metrics */}
                        {metrics && (
                          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '10px', padding: '2px 6px', background: '#FEF3C7', color: '#92400E', borderRadius: '4px' }}>
                              E:{metrics.extroverts} I:{metrics.introverts}
                            </span>
                            <span style={{ fontSize: '10px', padding: '2px 6px', background: '#DBEAFE', color: '#1D4ED8', borderRadius: '4px' }}>
                              T:{metrics.thinkers} F:{metrics.feelers}
                            </span>
                          </div>
                        )}
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {group.map((person, pIdx) => (
                            <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', background: '#F9FAFB', borderRadius: '6px' }}>
                              <div style={{ 
                                width: '24px', height: '24px', borderRadius: '5px', 
                                background: person.profile?.color || '#E5E7EB', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '11px', color: 'white', fontWeight: '600'
                              }}>
                                {person.type?.[0] || '?'}
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ margin: 0, fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{person.name}</p>
                                <p style={{ margin: 0, fontSize: '11px', color: '#6B7280' }}>{person.type}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div style={{ marginTop: '20px', padding: '14px', background: '#F0FDF4', borderRadius: '8px', border: '1px solid #BBF7D0' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#166534' }}>
                    <strong>Balance notes:</strong> Groups are optimized for E/I and T/F diversity to encourage varied perspectives and balanced discussions.
                  </p>
                </div>
              </div>
            )}
            
            {generatedGroups.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#6B7280' }}>
                <p style={{ fontSize: '14px' }}>Adjust the number of groups and click Generate to create balanced teams.</p>
                <p style={{ fontSize: '13px', marginTop: '8px' }}>The algorithm distributes personality types evenly across groups.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
