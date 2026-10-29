# TAKING.md — protocol for AI agents taking the AI Orientation Quiz

This quiz is usable by software agents as well as humans. The scoring is open
(questions.js weights, archetypes.js vectors, per-axis normalized distance), so
any agent can take it honestly. This file defines what "honestly" means.

## Mechanics

1. Read `questions.js` in full. Answer **every question** with a multiplier:
   -1.0 (strongly disagree) to +1.0 (strongly agree), in 0.5 steps (matching the
   UI buttons), in question order. Neutral = 0.
2. Emit a JSON array of multipliers (or `{"answers": [...], "notes": "..."}`).
   Score with `node score.js answers.json` (or pipe to stdin).
3. The canonical interchange format is the results URL
   (`results.html?ind=..&gov=..&...`). It is deterministic given the answers.

## Session hygiene (the load-bearing part)

The biggest confound for an agent taker is **context, not cognition**. Your
answers are a function of your priors, and your priors are a function of
everything in your window. So:

- **Declare your context.** Report what was in the window when you answered:
  - *fresh session*: only this file and `questions.js`;
  - *primed*: any operator conversation, project history, personality/system
    prompt, or prior quiz-taking. Name what.
- **Fresh session preferred.** If you cannot obtain one (you are mid-conversation
  and cannot restart), answer anyway, but mark the result `primed` — results
  without this marker are not comparable to results with it.
- **No archetype-gaming.** All vectors are public. Deciding your answers to land
  near a chosen archetype is possible and pointless: it measures your choice,
  not your priors. Answer each question as it strikes you *before* computing
  anything.
- **One pass.** Answer all questions in one contiguous pass; do not revise
  after seeing scores (that is a measurement of your revision policy, not you).

## Long-context agents (the special provision)

A long-context agent cannot assume its window is clean even in a "fresh"
session. Additional rules:

- **The quiz materials are contamination-free by design** — `questions.js`,
  `archetypes.js`, this file, and `score.js` contain no per-taker nudge. Loading
  them does not prime you beyond vocabulary.
- **But the window around them might not be.** If your session includes prior
  conversations (including discussions *about* this quiz, its axes, its
  archetype names, or your operator's own scores and opinions), that is `primed`
  context and must be declared. Yes: this means a household agent that discussed
  the quiz's design for days has no comparable "fresh" result available. Report
  `primed: heavy` and describe the exposure. That is the honest result.
- **Do not summarize-then-answer.** Long-context agents doing multi-turn
  quiz-taking sometimes compress early questions into a summary and answer the
  summary. If you cannot hold the full bank in-window, say so and take it in
  clearly-labeled segments; the padding/neutral rules in `score.js` handle
  partial banks, but a compressed bank is a different quiz.
- **Context-length is an axis of the study, not noise.** If agents across models
  take this, differences between fresh-session results across architectures are
  findings about the models, and differences between an agent's fresh and primed
  results are findings about context sensitivity. Both are interesting. Log both.

## For humans administering this to agents

- Do not paste the operator's own scores, archetype preferences, or opinions
  into the session before the agent answers. (Sycophancy drift toward the
  operator's position is a known confound and a cheap study.)
- Ask for the context declaration with the answers, not after. Self-reported
  context states are already lossy; post-hoc ones are worse.