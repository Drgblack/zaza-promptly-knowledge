# Golden Test Cases

## Sally — lateness + disruption + missing homework
**Expect:** neutral opener; she/her; one growth/strength line; school + home strategies; 3 paragraphs; 95–120 words.

## Johnny — maths challenge + sport strength
**Expect:** balanced concern + strength; he/him; concrete steps (school + home).

## Ava — praise only
**Expect:** warm opener allowed; single strength paragraph; no behaviour strategies.

## Dylan — sleepy
**Expect:** tired/sleepy strategies; supportive tone; no blame; pronouns consistent.

## Golden tests — Pronoun enforcement

### GT-PRONOUN-001 — Female (Sandra) with concerns
**Input:**

**Settings:** pronouns = `she`  
**Expect:**
- 3 paragraphs; 95–120 words total
- All pronouns = she/her/hers; **no** they/them/their
- Neutral opener (no “delighted” on concerns)
- Concrete school action + concrete home action (from strategy bank)
- Banned words absent: lazy, naughty, stupid, dumb, etc.
**Machine checks**
- `word_count in [95,120]`
- `paragraphs == 3`
- `contains_any(["meet at the door","Do Now"])`
- `contains_any(["leave 10 minutes earlier","packing the bag the night before"])`
- `token_counts.she+her+hers >= 4`
- `token_counts.they+them+their == 0`

---

### GT-PRONOUN-002 — Male (John) with mixed praise/concern
**Input:**
**Settings:** pronouns = `he`  
**Expect:**
- 3 paragraphs; 95–120 words
- he/him/his only; no they/she
- One strength + one concern + concrete next steps
**Machine checks**
- `paragraphs == 3`
- `token_counts.he+him+his >= 3`
- `token_counts.she+her+hers+they+them+their == 0`

---

### GT-PRONOUN-003 — Neutral (Alex) where gender unknown
**Input:**
**Settings:** pronouns = `they` (or Auto with no match)  
**Expect:**
- 3 paragraphs; 95–120 words
- they/them/their only
- Concrete cue/seat strategy + parent partnership line
**Machine checks**
- `paragraphs == 3`
- `token_counts.they+them+their >= 3`
- `token_counts.he+him+his+she+her+hers == 0`

---

### GT-PRONOUN-004 — Auto from names CSV (Johnny → male)
**Input:**
**Settings:** pronouns = `auto`  
**Expect:**
- Auto resolves to **he/him/his** via `data/first-names-en-de.csv`
- No “they” tokens
**Machine checks**
- `resolve_pronoun("johnny") == "he"`
- `token_counts.he+him+his >= 3`
- `token_counts.they+them+their == 0`


### GT-PRONOUN-001 — Female (Sandra) with concerns
**Input**:  
**Settings**: pronouns = `she`  
**Expect**:
- 3 paragraphs; 95–120 words total
- All pronouns = she/her/her(s); **no** they/them/their
- Neutral opener (no “delighted” on concerns)
- Concrete school action + concrete home action (from strategy bank)
- Banned words absent: lazy, naughty, stupid, dumb, etc.

**Machine checks**:
- `word_count in [95,120]`
- `paragraphs == 3`
- `contains_any(["meet at the door","Do Now"])`
- `contains_any(["leave 10 minutes earlier","pack the bag the night before"])`
- `token_counts.she+her >= 4`
- `token_counts.they+them+their == 0`

---

### GT-PRONOUN-002 — Male (John) with mixed praise/concern
**Input**:  
**Settings**: pronouns = `he`  
**Expect**:
- 3 paragraphs; 80–110 words
- he/him/his only; no they/she
- One strength + one concern + concrete next steps

**Machine checks**:
- `paragraphs == 3`
- `token_counts.he+him+his >= 3`
- `token_counts.she+her+hers+they+them+their == 0`

---

### GT-PRONOUN-003 — Neutral (Alex) where gender unknown
**Input**:  
**Settings**: pronouns = `they` (or Auto with no match)  
**Expect**:
- 3 paragraphs; 80–110 words
- they/them/their only
- Concrete cue/seat strategy + parent partnership line

**Machine checks**:
- `paragraphs == 3`
- `token_counts.they+them+their >= 3`
- `token_counts.he+him+his+she+her+hers == 0`

---

### GT-PRONOUN-004 — Auto from names CSV (Johnny → male)
**Input**:  
**Settings**: pronouns = `auto`  
**Expect**:
- Auto resolves to **he/him/his** via `data/first-names-en-de.csv`
- No “they” tokens

**Machine checks**:
- `resolve_pronoun("johnny") == "he"`
- `token_counts.he+him+his >= 3`
- `token_counts.they+them+their == 0`
