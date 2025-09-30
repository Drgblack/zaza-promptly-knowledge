Promptly v2.0 – Snippet Generation Rules
Purpose

These rules define how Promptly generates parent messages. They ensure every output is professional, supportive, and consistent, meeting the standard teachers expect from Promptly.

## Pronoun policy (strict)

- The snippet must use **exactly** the selected pronouns:
  - **He** → he / him / his
  - **She** → she / her / hers
  - **They** → they / them / their
- **Auto** resolves via `data/first-names-en-de.csv` (case-insensitive; trim & lowercase). If not found, default to **they/them**.
- When **He** or **She** is selected, **never** use “they/them/their”. No mixed sets.
- Enforce **subject–verb agreement** for the selected pronoun (e.g., *she is*, *he has*, *they are*).
- After composing the note, run a **post-composition enforcement pass** that:
  1) expands ambiguous forms,
  2) substitutes any stray neutral or wrong pronouns with the selected set (including inside strategy strings),
  3) re-checks grammar after substitutions.
- The **quality gate MUST fail** if:
  - a wrong pronoun form appears,
  - **mixed pronouns** appear for the student (e.g., “she … they …”).



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

## 3. Strategy Bank

All strategies must come from the following bank (verbatim text with placeholders).
Do not allow the model to invent new strategies.

### lateness
- **School:** “I’ll meet {name} at the door with a short ‘Do Now’ so {pro.subj} can start immediately.”
- **Home:** “Please aim to leave 10 minutes earlier; packing the bag the night before often helps.”

### focus/disruption
- **School:** “I’ll use a quiet 2-step cue and seat {name} where distractions are lower.”
- **Home:** “Let’s agree on one cue word you can also use so the message is consistent.”

### throwing items
- **School:** “We’ll reteach room-safety routines and provide a safe place to put items when upset.”
- **Home:** “If this happens at home, a calm pause plus practice putting the item down is helpful.”

### missing_homework
- **School:** “I’ll give a simple checklist and accept a partial restart.”
- **Home:** “Set a 15-minute homework slot; a timer and quiet space make it easier.”

### tired/sleepy
- **School:** “I’ll offer a water break and short stretch at the start.”
- **Home:** “A steady bedtime and a quick breakfast or snack usually improves focus.”

Implementation note for Claude: before rendering, resolve {pro.subj|obj|poss} from the pronoun toggle (or Auto via CSV). Then run the post-composition pronoun enforcement pass.

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

### Padding rule (word-count compliance)

- If output is **shorter than 95 words**, append up to **two** approved padding sentences from **docs/Strategies.md** (*Padding Sentences* section).  
- Re-check after each addition; **do not exceed 120 words**.  
- Run the **post-composition pronoun enforcement** and **quality gate** after padding.

## v2.1 – QA Tightening (Lateness + Homework, Pronouns, Name Lock)

- **Pronoun override priority**: Explicit toggle (He/She/They) beats auto-inference.
- **Name usage**: If a name is present, always use it; only use “your child” when no name or privacy mode.
- **Reframe, don’t erase**: Keep concerns, rewrite safely; include one strength when present; always add one school and one home step.
- **Specific pattern – Lateness + Missing homework**
  - **Opener**: She has been arriving late to class, and some homework has been incomplete. This affects settling-in time and the chance to hear the first instructions.
  - **School**: I’ll meet {name} at the door and have a one-minute “Do Now” ready so {they} can start immediately. I’ll prompt {them} to note homework clearly before leaving.
  - **Home**: At home, please aim to leave 10 minutes earlier and pack the bag the night before. A quiet, short homework slot (about 15 minutes) most days works well.
- **Sentence-boundary repair**: Ensure a sentence terminator before a capitalised next sentence (e.g., “students This” → “students. This”).
- **Word count**: 95–120; if <95, append up to two approved padding sentences from Strategies.md; never exceed 120.
- **Structure**: Exactly 3 paragraphs (observation → school → home + invite).
- **KB strings are verbatim**.
- **Debug (Preview)**: If NEXT_PUBLIC_DEBUG_SNIPPET=1, show Pipeline v2.1 • KB {SHA} • Build {commit} and Pronoun: X | source: Y.
