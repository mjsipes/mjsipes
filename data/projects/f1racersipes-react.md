## F1 Racer Sipes 🏎️

**Live App: https://www.f1racersipes.com/**

F1 Racer Sipes is my passion project - a multiplayer racing game that evolved from a class assignment into something I'm truly proud of. This game is an evolution of the classic racing concept, where players not only race with random prompts but can create their own challenges.

### The Journey Behind the Tech

This project started during my junior year in a software development class. After learning about WebSockets during a lecture, I was completely fascinated by the server-client architecture and realized it could be used to build something really cool - a multiplayer game where servers host races and clients are the players.

I convinced my team to create this typing game inspired by Typeracer, and named it F1Racer. I poured my heart into it, even working from 5PM to 5AM every day during Thanksgiving break to make it happen. It became my favorite class project ever, and taught me so much about web development.

### Technical Evolution

What started as a JavaServlets project has grown into a modern web application as I've used it to learn new technologies:

- **Frontend**: Rebuilt with React.js - a huge step up from my first JavaScript experience
- **Backend**: Migrated to Supabase, giving me a PostgreSQL database with real-time capabilities
- **Authentication**: Implemented secure user management through Supabase Auth
- **Real-time Multiplayer**: Upgraded from basic WebSockets to Supabase Realtime Channels
- **AI Integration**: Added custom edge functions connecting to OpenAI's GPT API for dynamic game content
- **Deployment**: Hosted on Vercel - finally making it accessible to others online!

### Cool Features I've Built

- **Live Multiplayer Racing**: Real-time competition using bidirectional pub/sub channels
- **Custom Race Creation**: Players can create their own racing challenges
- **AI-Enhanced Content**: Server-side functions that generate personalized prompts
- **Responsive Design**: Works across different devices and screen sizes
- **Game State Management**: Sophisticated handling of the race lifecycle

### What's Next

I plan to continue using this project as my sandbox for learning new technologies. Future plans include:
- Implementing AI bots that you can race against
- Creating more advanced GUI elements for a better player experience

This project has been incredibly special to my learning journey as a computer science major and aspiring software developer. Every feature represents something new I've learned, and I'm excited to keep building on it!

---

## Development Reference

### Quick Commands
```
npm start     # Run dev server at http://localhost:3000
npm test      # Run tests
npm run build # Build for production
```

### Useful Links
- [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Deployment guide](https://facebook.github.io/create-react-app/docs/deployment)
- [Code splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Bundle analysis](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [PWA configuration](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Build troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
