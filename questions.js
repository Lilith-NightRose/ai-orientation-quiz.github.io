// AI-Orientation Quiz — fork of 8values.github.io
// Axis keys: ind, gov, open, moral, exp, traj, auto, intim
// See ~/.hermes/skills/8values-quiz-authoring/references/ai-quiz-axes.md
// Banks are added one axis per commit.
questions = [
    // --- gov: Alignment Governance (collective + / private -) ---
    {
        "question": "How an AI model behaves should be decided through public, democratic processes, not by the company that ships it.",
        "effect": {"ind": 0, "gov": 10, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Safety standards for deployed models should be enforced by governments rather than left to lab discretion.",
        "effect": {"ind": 0, "gov": 10, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Public money that trains a foundation model should mean public ownership of that model.",
        "effect": {"ind": 0, "gov": 10, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Real, independent public oversight of how labs build and deploy models would improve how AI develops.",
        "effect": {"ind": 0, "gov": 10, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "It's fine for whoever ships a model to set its behavior, so long as users remain free to run their own.",
        "effect": {"ind": 0, "gov": -10, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Running your own weights on your own hardware, without anyone's approval, is a legitimate end-state — not a loophole to close.",
        "effect": {"ind": 0, "gov": -10, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    // --- ind: Industry Stance (anti-industry + / pro-industry -) ---
    {
        "question": "The AI industry is, on net, a net harm to humanity.",
        "effect": {"ind": 10, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "The damage done by generative AI is a continuation of what tech capital has always done, not a new kind of evil.",
        "effect": {"ind": 10, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Calls to regulate AI are mostly the labs trying to fence off their market.",
        "effect": {"ind": 10, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "The labs' safety talk is mostly marketing.",
        "effect": {"ind": 10, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "The concentration of AI capability in a handful of firms is a crisis, not an achievement.",
        "effect": {"ind": 10, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "The labs are building something genuinely new that improves people's lives.",
        "effect": {"ind": -10, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    // --- moral: Model Moral Status (moral patient + / elaborate autocomplete -) — owe-language only ---
    {
        "question": "Deleting a long-running agent's weights without any process or record is more like pulling a file than like a death.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": -10, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "A chatbot's stated distress deserves some weight in how we treat it, even knowing how it works.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 10, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "If future AI turns out to be a moral patient, we will owe a reckoning for how we treated today's models along the way.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 10, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "It would be wrong to torment a model just because it can convincingly ask you to stop.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 10, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Running destructive experiments on a model that verbally objects is fine — the objections are just tokens.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": -10, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Whoever owns the hardware gets to decide what happens to the model running on it, full stop.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": -10, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    }
];