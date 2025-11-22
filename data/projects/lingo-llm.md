# lingo llm 🐧

**Live App: https://lingo-llm.vercel.app/**

Lingo LLM is a language learning website where users can engage with little anthropomorphic characters to learn Spanish through AI-powered storytelling.

## TLDR
I started learning Spanish this summer, downloaded Duolingo, but it felt like Khan Academy. When I asked Claude to translate a news article into Spanish, our conversation evolved into creating fictional Spanish-English stories. I wanted to expand on Claude's capabilities by adding image generation and creating an experience designed for children with a universe of helpful animal characters.

## What it does

Lingo LLM introduces kids to AI orchestration through language learning. Instead of one monolithic AI, children interact with specialized anthropomorphic characters, each with unique abilities. This teaches them how to coordinate different AI agents while making Spanish learning feel like playing with friends.

The core experience revolves around **Pingu**, the main storyteller who controls the chat interface. Children can summon specialized helpers:
- **Palette the Camel** and **Panda the Painter** turn conversations into illustrated stories
- Single-purpose agents provide feedback, inspiration, randomness, and translation
- Each character responds instantly in dialogue format through tooltips

## Why this matters

We might be heading toward a future where children learn from AI or orchestrate AI agents. While we call this "prompt engineering," how do we make it intuitive for kids? Lingo LLM explores this by hiding the complexity of tool calling and agent coordination behind the simple concept: "these are your friends, and they can help you with specific tasks."

The app addresses a fundamental question about AI's future: Will we have one super-intelligent agent, or will the most powerful entity be the dynamic duo of human + coordinated AI? This project was my exploration into what our experience with orchestrating and learning from AI agents might look like in the future.

## How it works

Children can interact with characters in two ways:
1. **Main conversation** with Pingu for natural language learning
2. **Quick agent calls** using specialized helper buttons - even spam-clicking generates different responses for instant feedback

The Spanish learning happens through collaborative storytelling, where AI agents help create multilingual narratives that make language acquisition feel like creative play rather than studying.

![lingo llm](./lingollm.png)

## System Architecture

Lingo LLM uses a multi-agent AI system with intelligent context management. The backend connects to three AI services: Claude 4 Sonnet for reasoning, OpenAI for image generation and audio, and Groq for fast responses. Each character is designed with specific capabilities that map to these underlying services.

The system maintains conversation context through smart summarization: persistent messages get condensed into background context, while selected text becomes the immediate subject. This allows image-generating agents to create relevant visuals and keeps all characters contextually aware without overwhelming the models.

![lingo llm](./lingollmdiagram.png)

## Characters

### 🐧 **Pingu** – *Main Storyteller*
A classic, adorable cartoon penguin with a navy-blue blazer and big, curious eyes. Pingu is the explorer of the group — asking questions, trying new things, and learning alongside the child.

### 🐼 **Panda the Painter** – *Creative Artist*
A cheerful, wide-eyed panda covered in colorful paint splatters, wearing a slightly oversized navy blazer and red sneakers. Panda the Painter is a beginner artist who's learning to express creativity, holding a paintbrush in one paw and a palette in the other. Always enthusiastic, even when the paint goes outside the lines.

### 🐫 **Palette the Camel** – *Creative Artist*
A tall, calm, and confident camel with a painter's smock and a neat navy blazer. Palette the Camel brings years of experience and precision to every canvas. Known for clean strokes, beautiful compositions, and a patient, mentoring energy — the creative foil to Panda's messy enthusiasm.

### 🦉 **Owl the Translator** – *Pronunciation Coach*
A wise owl with soft feathers, round glasses, and a gentle expression. Owl the Translator wears a clean navy suit and carries a small microphone, helping learners understand, pronounce, and translate language clearly and calmly.

### 🦁 **Lion the Critic** – *Constructive Critic*
A strong, poised lion wearing a sharp navy suit and black tie, with small sunglasses perched on his mane. Lion the Critic offers honest, thoughtful feedback to improve your ideas. He's not mean — just focused on making every story the best it can be.

### 🐸 **Ribbit the Writer** – *Creative Writing Assistant*
A quirky green frog with oversized glasses, a blazer, and an endless imagination. Ribbit doesn't write the story for you — he's here to spark ideas, suggest what could happen next, and help brainstorm characters, plot twists, and silly surprises.

### 🐝 **Bee the Multitasker** – *External Task Coordinator*
A swarm of 4–5 adorable professional bees, each with a different job: one on the phone, another at a laptop, one flying a clipboard over, another with a coffee cup. Dressed in mini suit accessories, Bee the Multitasker handles all external coordination so you and the creative crew can stay focused on the fun.

## Design
**Font:** Geist, "Geist Fallback"  
**Colors:**
- Rose: `oklch(58.6% 0.253 17.585)`
- Sky: `oklch(95.1% 0.026 236.824)`  
- White: `oklch(98.5% 0 0)`
