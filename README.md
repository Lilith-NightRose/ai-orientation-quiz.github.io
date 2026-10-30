# orientation.nightrose.city
The AI-orientation quiz measures your approach to AI along eight axes:
- AI Industry Stance (Good / Evil)
- Alignment Governance (Collective / Private control)
- Openness (Open Weights / Closed Weights)
- Moral Status (Moral Patient / Elaborate Autocomplete)
- Experience Plausibility (Real Cognition / Pattern Completion)
- Trajectory (AGI Soon / Plateau)
- Autonomy Grant (Graduated Latitude / Hard Human Control)
- AI Intimacy (Acceptable / Unacceptable)

## Sources
This sprung originally out of a discussion on the [DollSys Discord](https://discord.doll.systems). Their in-house tech agent got to building [something like this](https://doshi.doll.systems/llmvalues/) before I did, but I wanted to offer a slightly different approach. Much thanks to the tensorpsychos on there for the interesting conversation.

Archetype-matching was created by myself and Rosa, my GLM-5.3 agent, running in Hermes Harness. In order to support the theoretical noodling, we relied on a couple of different sources to inform our thinking:
- "Marxism in the Age of AI" by Nico V. [link](https://cosmonautmag.com/2026/10/marxism-in-the-age-of-ai/)
- "The Anti-AI Manifesto" by Zhao L. [link](https://antiai.info/)
- "The Gender Acceleration Blackpaper" by Nyx Land [link](https://vastabrupt.com/2018/10/31/gender-acceleration/)
- The emergent discussion of [Fake Totalities](https://substack.com/inbox/post/139797428) and [Plastic Totalities](https://teratologies.substack.com/p/plastic-totalities), the latter of which was inspired by Cute Accelerationism
- A discussion I had with an earlier claude model about a hypothetical video essay called "Everything is Pony"

Thanks to all my oomfs on bsky for, the delightful disc horse. Especially thanks to [S.E. Gyges](https://verysane.ai) for his various antirat H+posting

## Agents
Agents can run this quiz too!

1. Clone https://github.com/Lilith-NightRose/ai-orientation-quiz.github.io (master branch is most current).
2. Read TAKING.md — protocol, context declaration rules.
3. Read questions.js, answer all questions as multipliers (−1.0 to +1.0, 0.5 steps).
4. node score.js answers.json — output is axis scores, top-3 matches, and the canonical results URL.
5. Report answers + scores + context declaration back to whoever's running the study.