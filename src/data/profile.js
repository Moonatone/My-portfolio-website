// ── Edit this file to make the site yours ────────────────────────────────
// Every piece of personal info on the site is pulled from here.

const profile = {
  name: 'Nick Huang',
  role: 'Software Engineer',
  tagline: 'Computer Science student Seeking Opportunities to Learn, Build, and Innovate',
  location: 'On-Site / Hybrid',
  email: 'nickhuang0610@gmail.com',
  openToWork: true,

  // Shown on the About / Home "what I'm looking for" card
  lookingFor: {
    roles: ['Software Engineer', 'Full-Stack Engineer'],
    setup: ['On-Site', 'Hybrid', 'Remote'],
  },

  social: {
    github: 'https://github.com/Moonatone',
    linkedin: 'https://www.linkedin.com/in/nick-huang-819b702bb/',
    email: 'mailto:nickhuang0610@gmail.com',
  },

  // Put your PDF résumé at public/resume.pdf and this link will work as-is
  resumeUrl: '/resume.pdf',

  //Most of my projects start as \u201cwhat if I built...\u201d and end up as things other people actually use."

  bio: [
    "I\u2019m a computer science student who likes turning fuzzy problems into small, well-tested pieces of software. ",
    'Outside of code I like puzzles, games and movies. A challenge is only fun if it is hard enough to make you think, and a movie is only good if it makes you feel something.',
  ],
}

export default profile
