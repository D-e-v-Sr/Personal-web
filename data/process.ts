export interface ProcessStep {
  /** Two-digit index, e.g. "01". */
  index: string;
  title: string;
  /** One-line description of the phase. */
  summary: string;
  /** Concrete things that happen during this phase. */
  detail: string[];
  /** What you receive at the end of this phase. */
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    summary: 'Understand the problem before touching a component.',
    detail: [
      'A conversation about who the product is for and what currently frustrates them',
      'A look at existing systems, analytics and constraints',
      'A written scope that says what is in and what is out',
    ],
    output: 'Agreed scope and success criteria',
  },
  {
    index: '02',
    title: 'Plan',
    summary: 'Decide the shape of the solution and the stack.',
    detail: [
      'Information architecture and page structure',
      'Data model and API design',
      'Technical approach, timeline and checkpoints',
    ],
    output: 'Technical plan with milestones',
  },
  {
    index: '03',
    title: 'Design',
    summary: 'Interface and interaction, designed per breakpoint.',
    detail: [
      'Layout and type scale at mobile, tablet and desktop',
      'Component and design-token decisions',
      'Motion and state behaviour, kept purposeful',
    ],
    output: 'Reviewed design direction',
  },
  {
    index: '04',
    title: 'Build',
    summary: 'Production code in reviewable increments.',
    detail: [
      'Server-first components, typed end to end',
      'Accessible semantics, keyboard paths and focus handling',
      'Short, visible commits rather than one large push',
    ],
    output: 'A working build on every branch',
  },
  {
    index: '05',
    title: 'Test',
    summary: 'Verify the behaviour, not just the appearance.',
    detail: [
      'Validation and error states covered, including the unhappy paths',
      'Keyboard, screen-size and contrast checks',
      'Performance baselines captured',
    ],
    output: 'Test results and a performance baseline',
  },
  {
    index: '06',
    title: 'Launch',
    summary: 'Ship it, then check it in production.',
    detail: [
      'Deployment, redirects, metadata and analytics configured',
      'Post-launch smoke test on real devices',
      'Monitoring and error reporting in place',
    ],
    output: 'Live site with monitoring',
  },
  {
    index: '07',
    title: 'Improve',
    summary: 'Keep it healthy after handover.',
    detail: [
      'Review real usage against the success criteria',
      'Prioritise fixes by evidence, not taste',
      'Updates, content changes and small wins on a rolling basis',
    ],
    output: 'A product that keeps getting better',
  },
];