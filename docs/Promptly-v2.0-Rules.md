Promptly v2.0 – Snippet Generation Rules
Purpose

These rules define how Promptly generates parent messages. They ensure every output is professional, supportive, and consistent, meeting the standard teachers expect from Promptly.

1. Structure

All outputs must follow a 3-paragraph template:

Opener + Observation

Neutral opener (never exaggerated).

Clear, factual description of concerns.

Always include one positive or growth-oriented line, even if inferred.

School Strategies

1–2 specific steps the teacher will take.

Pulled directly from the strategy bank (not invented by the model).

Home Strategies + Invite

1–2 concrete actions parents can take at home.

Collaborative invite to continue the conversation.

2. Language Rules

Word count: 95–120 words.

Readability: Grade 6–8 (short sentences, plain English).

Tone: Neutral and professional.

Ban list: lazy, naughty, stupid, dumb, bad kid, useless, hopeless.

Softening: Always/never → often/sometimes.

Strength line: Required (e.g. “She has shown strong focus in PE, and we can build on this in other areas”).

Pronouns: Determined by Auto/He/She/They toggle. Must be consistent and grammatically correct.

3. Strategy Bank

All strategies must come from the following bank (verbatim text).
Do not allow the model to generate new strategies.

lateness

School: “I’ll meet {name} at the door with a short ‘Do Now’ so they can start immediately.”

Home: “Please aim to leave 10 minutes earlier; packing the bag the night before often helps.”

focus/disruption

School: “I’ll use a quiet 2-step cue and seat {name} where distractions are lower.”

Home: “Let’s agree on one cue word you can also use so the message is consistent.”

throwing items

School: “We’ll reteach room-safety routines and provide a safe place to put items when upset.”

Home: “If this happens at home, a calm pause + practice putting the item down is helpful.”

missing_homework

School: “I’ll give a simple checklist and accept a partial restart.”

Home: “Set a 15-minute homework slot; a timer and quiet space make it easier.”

tired/sleepy

School: “I’ll offer a water break and short stretch at the start.”

Home: “A steady bedtime and a quick breakfast or snack usually improves focus.”

4. Openers & Invite

Allowed openers:

“I’d like to share an update about {name}.”

“Here’s a quick update on {name}.”

“I wanted to let you know how {name} has been doing.”

Invite (closing line):

“Please let me know a good time for us to discuss next steps together.”

5. Quality Gate

All outputs must pass the quality gate before delivery:

Word count 95–120.

Exactly 3 paragraphs.

≥2 concrete action verbs present (meet, leave, pack, set, use, agree, etc.).

No banned words.

No “delighted” in concern scenarios.

Pronoun agreement correct.

Readability ~Grade 6–8.

If any check fails, regenerate using the same slots with a repair prompt.

6. Golden Test Cases

These scenarios are used for validation:

Sally (lateness + disruption + missing homework): Neutral opener, she/her, growth line included, school & home strategies applied.

Johnny (maths challenge + sport strength): Balanced concern + strength, he/him pronouns, correct strategies.

Ava (praise only): Warm opener, one strength sentence, no extra strategies.

Dylan (sleepy): Supportive tone, tired/sleepy strategies, no blame.

7. Implementation Notes

Parsing → slot-filling → strategy insertion → composition → pronoun enforcement → quality gate → output.

All rules should be enforced deterministically (not left to the model’s discretion).

Teachers should always feel the output is empathetic, actionable, and professional.