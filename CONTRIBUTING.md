# Contributing to Promptly Knowledge Base

Thanks for helping keep Promptly's messaging high-quality and consistent.

## What belongs here
- Documentation and datasets that define how Promptly should write (rules, strategy bank, golden tests, names CSV).
- **No app code** here. (When the app repo exists, it should import these docs/datasets.)

## Workflow
1. Create a branch:
   - docs/<short-topic> (e.g., docs/strategy-attendance)
   - data/<short-topic> (e.g., data/names-de-update)
2. Make changes and update **golden tests** if behaviour/wording changes.
3. Open a PR using the template. Request review from @Drgblack.

## Style & voice
- UK English.
- Parent-friendly, Grade 6–8 readability.
- Professional, neutral tone; empathetic; actionable.
- Strategy strings are **verbatim** (do not let models rewrite).
- Avoid absolutes: “always”, “never” → “often”, “sometimes”.

## Files & structure
- docs/Promptly-v2.0-Rules.md — canonical rules.
- docs/Strategies.md — strategy bank (verbatim text shipped to parents).
- docs/TestCases.md — golden scenarios (acceptance criteria).
- data/first-names-en-de.csv — name → pronoun inference list.

## When you change wording
- Update **TestCases.md** to reflect the new expected text or constraints.
- In PR description, explain *why* the change improves clarity, tone, or pedagogy.

## Commit messages
- Use clear, conventional-style prefixes:
  - docs:, data:, chore:
  - Examples:
    - docs: soften late-arrival opener and add parent invite variant
    - data: add 150 DE names (f/u)

## Review checklist (for maintainers)
- [ ] Rules still enforce 3 paragraphs and 95–120 words
- [ ] Tone & banned-words policy respected
- [ ] Strategy text remains concise, concrete, and **verbatim**
- [ ] Golden tests updated if wording/rules changed
- [ ] Names CSV validated (lowercase, m/f/u, en/de)
