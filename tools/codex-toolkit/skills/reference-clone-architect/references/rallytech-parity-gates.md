# RallyTech Parity Gates

Use these labels when reporting clone readiness or downgrade state.

## same.new-class-ready

Use only when all required conditions hold:

- Browser truth capture is available
- Repeatable interaction QA is available
- Raw fetch or equivalent HTML/CSS truth is available
- Framework truth lookup is available
- GitHub review / diff layer is available
- Image generation is available for the variant phase

## degraded-fidelity

Use when browser truth capture, repeatable interaction QA, docs truth, or raw fetch is missing.

Expected fallback behavior:

- Narrow claims to structure-level or screenshot-level fidelity only
- Record evidence gaps explicitly
- Avoid asserting unseen interactions or hidden content

## degraded-variant

Use when the fidelity chain is intact but image generation is unavailable.

Expected fallback behavior:

- Finish the fidelity pass
- Produce only a brand-variant brief, sourced-image plan, or prompt baseline
- Do not claim full same.new-class variation parity

## degraded-review-trace

Use when GitHub review or diff tooling is unavailable in the current session.

Expected fallback behavior:

- Use local git diff and repo notes
- Keep implementation and review artifacts explicit
- Avoid claiming full connector-backed review parity
