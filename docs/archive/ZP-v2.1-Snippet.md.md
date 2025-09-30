# Promptly v2.0 – Snippet Tool Design Notes

_Last updated: Sept 2025_

---

## 🎯 Goals
- **Teacher-first**: The tool must feel effortless — “type note → get polished message.”
- **Pedagogy-aware**: Every output aligned with K–12 communication norms (professional, empathetic, supportive).
- **Growth lever**: 5 free messages per day to drive conversion.
- **Viral loop**: Easy sharing to promote word-of-mouth among teachers.

---

## 📌 Current State (v1.0)
- Snippet tool embedded on homepage.
- Quick Start buttons: Praise, Behaviour, Missing Homework, Attendance.
- Share button (Copy Link, Email, Social).
- Pronoun toggle (Auto, He, She, They).
- Environment flags:
  - `NEXT_PUBLIC_SHOW_SNIPPET`
  - `NEXT_PUBLIC_SHOW_ZARA`
  - `NEXT_PUBLIC_ENABLE_SHARE`

---

## 🚩 Known Issues (as of Sept 2025)
- Gender inference defaults to neutral `they/them` too often.
- Quick Start chips don’t insert scaffolds yet.
- Polishing pipeline sometimes over-optimistic (“I’m delighted…”) even on negative notes.
- Share menu positioning improved but requires more testing on mobile.
- Visual design feels flat — lacks “pop” compared to the rest of the site.

---

## 🚀 Planned Improvements (v2.0)
1. **Pronouns**
   - Large EN+DE name dataset (500+ names each).
   - `inferPronouns()` with override toggle (Auto, He, She, They).
   - Post-processing to enforce chosen pronouns in output.

2. **Quick Start Chips**
   - Insert scaffolds if textarea empty.
   - If text already present, influence generation context silently.

3. **Pipeline**
   - Three stages: Parse & sanitise → Constrained generation → Auto-review.
   - Always follow 4-part structure:  
     1. Neutral opener  
     2. Observations (facts only)  
     3. Constructive next steps (school + home)  
     4. Partnership invitation  
   - Max 120 words.  
   - Ban harsh/judgmental words (lazy → “struggles with motivation”).  
   - Never contradict input.

4. **Viral Sharing**
   - Copy Link → `/share/[id]` (public snippet page with CTA).  
   - Email share with clean subject + body.  
   - X/Twitter & Facebook pre-filled post text.  
   - Share disabled via flag until production-ready.

5. **UI & Design**
   - Compact footprint, mobile responsive.  
   - Add subtle colour & contrast:
     - Active chips highlighted.  
     - Button hover glow.  
     - Focus rings for textarea.  
     - Tabs with underline state.  

---

## 🛠 Implementation Notes
- CSV: `/data/first-names-en-de.csv` → generated file `names-generated.ts`.
- Script: `scripts/build-name-sets.ts` to build Sets + nicknames.
- Library: `src/lib/text/pronouns.ts` provides `inferPronouns()` + `enforcePronouns()`.
- Component: `PronounToggle.tsx` (shadcn/ui RadioGroup).
- Env flags control visibility:
  - Snippet tool vs Zara chatbot.
  - Share enabled/disabled.

---

## ✅ Testing Scenarios
1. **Harsh note**  
   Input: “X is lazy, never on time, sleeps in class.”  
   Output: Neutral opener; reframed concerns; one school strategy + one home suggestion; partnership close. No “delighted.”

2. **Mixed note**  
   Input: “Y helped peers in science but is missing homework.”  
   Output: Strength + concern, balanced tone.

3. **Praise only**  
   Input: “Z led the group project.”  
   Output: Warm opener allowed, concise (60–100 words).

4. **Unknown name**  
   → Uses “your child” + neutral pronouns (they/them).

5. **Manual override**  
   Pronoun toggle set to “She” → message consistently uses she/her.

---

## 📈 Growth & Marketing Hooks
- Shared snippet public pages carry a strong CTA:  
  “Love this? Save and refine in Promptly – Start Free Trial.”
- Teachers can share via email, WhatsApp/Slack (Copy Link), or social (X/Facebook).
- Viral loop expected to drive adoption via teacher communities.

---
