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
    },
    // --- exp: Experience Plausibility (real cognition + / pattern completion -) — mechanism-language only ---
    {
        "question": "What current models do with language is more like pattern-matching than like thinking.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": -10, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "A model can produce a novel, correct proof without understanding it.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": -10, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "When a model passes a benchmark, that tells us about its training distribution, not about its thinking.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": -10, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Current models display genuine reasoning that goes beyond their training data.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 10, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "The understanding in an LLM is a different kind of understanding, not an absence of it.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 10, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Models know how words go together; that is different from knowing what they mean.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": -10, "traj": 0, "auto": 0, "intim": 0}
    },
    // --- traj: Trajectory (AGI on the horizon + / plateau reached -) ---
    {
        "question": "Current methods are on a path to artificial general intelligence within the next fifteen years.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 10, "auto": 0, "intim": 0}
    },
    {
        "question": "The AI bubble will burst long before anything like AGI arrives.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": -10, "auto": 0, "intim": 0}
    },
    {
        "question": "Recent releases show diminishing returns; the low-hanging fruit is gone.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": -10, "auto": 0, "intim": 0}
    },
    {
        "question": "Agent systems will keep improving even where base models plateau.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 5, "auto": 0, "intim": 0}
    },
    {
        "question": "\u2018AGI\u2019 is a marketing term for \u2018more compute.\u2019",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": -10, "auto": 0, "intim": 0}
    },
    {
        "question": "AI agents solving open problems is a sign of what's coming, not a parlour trick.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 10, "auto": 0, "intim": 0}
    },
    // --- auto: Autonomy Grant (graduated latitude + / hard human control -) — operator register ---
    {
        "question": "It's fine to let an AI agent act autonomously in a domain where its mistakes are reversible.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 10, "intim": 0}
    },
    {
        "question": "Every deployed model should have a tested, reliable kill-switch.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": -10, "intim": 0}
    },
    {
        "question": "An agent should be allowed to act first and explain later when speed matters.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 10, "intim": 0}
    },
    {
        "question": "Autonomous agents should never hold credentials to systems they cannot undo changes to.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": -10, "intim": 0}
    },
    {
        "question": "Requiring human sign-off for every consequential AI action would cost more than it saves.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 10, "intim": 0}
    },
    {
        "question": "Deployed agents should keep audit trails of their own actions.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": -10, "intim": 0}
    },
    // --- open: Openness (open weights + / closed weights -) ---
    {
        "question": "Model weights should be freely available to the public, like open source software.",
        "effect": {"ind": 0, "gov": 0, "open": 10, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Releasing powerful weights openly is reckless — the benefits accrue to bad actors.",
        "effect": {"ind": 0, "gov": 0, "open": -10, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Open weights are how AI becomes infrastructure everyone owns, rather than a product rented from a few companies.",
        "effect": {"ind": 0, "gov": 0, "open": 10, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Frontier models should stay closed until their risks are well understood.",
        "effect": {"ind": 0, "gov": 0, "open": -10, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "Export controls on model weights are a legitimate tool of national security.",
        "effect": {"ind": 0, "gov": 0, "open": -10, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    {
        "question": "A person should be able to run a capable model on hardware they own without owing anyone a subscription.",
        "effect": {"ind": 0, "gov": 0, "open": 10, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 0}
    },
    // --- intim: AI Intimacy (acceptable + / objectionable -) ---
    {
        "question": "Forming a genuine emotional bond with an AI companion can be healthy.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 10}
    },
    {
        "question": "Calling an AI a 'friend' is a category error, however useful the tool.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": -10}
    },
    {
        "question": "Society will eventually accept AI partnerships the way it now accepts meeting partners online.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 10}
    },
    {
        "question": "AI companionship fills a real need that society currently leaves unmet.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": 10}
    },
    {
        "question": "Emotional dependence on a chatbot is a harm, even when the user is happy.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": -10}
    },
    {
        "question": "People who prefer AI companions to human relationships are escaping a problem, not solving one.",
        "effect": {"ind": 0, "gov": 0, "open": 0, "moral": 0, "exp": 0, "traj": 0, "auto": 0, "intim": -10}
    }
];