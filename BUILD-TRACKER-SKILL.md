# Build Tracker Skill

A reusable practice for tracking development sessions, generating content, and maintaining project history across Claude and Claude Code.

---

## QUICK START

Add to any project:
```
1. Create BUILD_LOG.md in project root
2. Start each session with: "Resuming [project] - check BUILD_LOG.md"
3. End each session with: "Update BUILD_LOG.md with this session"
```

---

## SKILL COMPONENTS

### 1. Session Tracking

**At session start, log:**
```markdown
## Session [N] - [Date] [Time]
**Focus**: [main goal]
**Starting state**: [what exists]
```

**During session, track:**
- User message count (increment mentally or explicitly)
- Features added/changed
- Decisions made and why
- Pivots or interruptions (these show adaptability)

**At session end, log:**
```markdown
**Duration**: [X] mins
**User messages**: [N]
**Outcome**: [what was built]

### Added
- Feature 1
- Feature 2

### Changed  
- Change 1

### Decisions
- Chose X over Y because Z
```

---

### 2. Stats That Tell Stories

**Track these metrics:**
| Metric | Why It Matters |
|--------|---------------|
| User messages | Shows how little input needed |
| Duration | Real time investment |
| Lines of code | Scale of output |
| Features per message | Efficiency ratio |
| Token usage | Compute cost |
| Cost per feature | ROI story |

**Compelling formats:**
- "34 messages → 2,500 lines of working code"
- "1 feature per 4 user messages"
- "Complete MVP in 3 evening sessions"
- "$25 of compute → production-ready prototype"
- "$1 per feature, $0.01 per line of code"

---

### 3. Cost Tracking

**Token estimation per session:**
```
Input tokens = (system_prompt × turns) + (cumulative_context)
Output tokens = sum of all Claude responses

Rule of thumb:
- System prompt: ~15-20K tokens (with tools/memory)
- Context grows ~5-10K per turn
- Code-heavy outputs: ~3-5K per response
```

**Quick estimation formula:**
```
Per session (N messages):
  Input ≈ N × (system_prompt + N×3000)  
  Output ≈ N × 4000

Example (8 messages):
  Input ≈ 8 × (18000 + 8×3000) = 8 × 42000 = 336K
  Output ≈ 8 × 4000 = 32K
```

**API Pricing (as of Dec 2024):**
| Model | Input (per 1M) | Output (per 1M) |
|-------|----------------|-----------------|
| Claude Opus 4 | $15 | $75 |
| Claude Sonnet 4 | $3 | $15 |
| Claude Haiku | $0.25 | $1.25 |

**Cost tracking table:**
```markdown
| Session | Input Tokens | Output Tokens | Cost (Opus) |
|---------|--------------|---------------|-------------|
| 1 | ~400K | ~50K | $9.75 |
| 2 | ~350K | ~40K | $8.25 |
| **Total** | **750K** | **90K** | **$18.00** |
```

**Derived metrics:**
- Cost per message: Total ÷ message count
- Cost per feature: Total ÷ feature count  
- Cost per line: Total ÷ lines of code

**The story angle:**
> "The entire app cost less than a coffee to build"
> "$1 per feature"
> "$0.01 per line of code"
> "On Pro subscription: $0 incremental"

---

### 3. Screenshot Capture Workflow

**For Claude.ai (artifacts):**
```
1. After completing a visual feature, say:
   "Screenshot checkpoint: [feature name]"
   
2. User can:
   - Take browser screenshot manually
   - Use browser extension (Full Page Screen Capture, etc.)
   - Save artifact preview image
   
3. Name convention: 
   session[N]-[feature]-[state].png
   Example: session2-group-planner-modal.png
```

**For Claude Code:**
```bash
# If app has dev server running:
npx capture-website http://localhost:3000 \
  --output=screenshots/session${N}-${feature}.png \
  --width=1280 --height=800

# Or use Puppeteer script (see below)
```

**Puppeteer capture script:**
```javascript
// scripts/capture.js
const puppeteer = require('puppeteer');

async function capture(url, name, actions = []) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url);
  
  for (const action of actions) {
    if (action.click) await page.click(action.click);
    if (action.wait) await page.waitForTimeout(action.wait);
  }
  
  await page.screenshot({ path: `screenshots/${name}.png` });
  await browser.close();
}

// Usage: node scripts/capture.js
capture('http://localhost:3000', 'session3-tooltips', [
  { click: '[data-demo="classroom"]', wait: 1000 }
]);
```

---

### 4. Agent Definitions

**Changelog Watcher Agent**
```yaml
role: Monitor BUILD_LOG.md for publishable moments
triggers:
  - New feature completed
  - Interesting pivot or decision
  - Milestone reached (MVP, v1.0, etc.)
  
output:
  - Notify Content Agent with feature summary
  - Suggest screenshot opportunities
  - Flag compelling stats
```

**Content Agent**
```yaml
role: Generate social/blog content from build logs
inputs:
  - Feature notifications from Watcher
  - Session stats
  - Screenshots

style_guide:
  voice: Developer's authentic voice (not AI hype)
  lead_with: Human benefit or surprising insight
  include: Specific examples, real numbers
  avoid: "Game-changer", "revolutionary", "10x"
  
outputs:
  - LinkedIn posts (technical + human versions)
  - Blog drafts with code snippets
  - Twitter/X threads
  - README updates
```

**Screenshot Agent** (manual assist)
```yaml
role: Prompt for visual documentation
triggers:
  - UI component completed
  - Before/after change
  - Error state worth showing
  
prompt_template: |
  📸 Screenshot opportunity: [feature]
  Suggested captures:
  1. [state 1 description]
  2. [state 2 description]
  
  Name format: session{N}-{feature}-{state}.png
```

---

### 5. In-App Build Log Component

For React apps, add a build log modal:

```jsx
const BUILD_LOG = [
  {
    session: 'Session 1',
    date: 'Dec 4, 2024 · 7-9pm',
    duration: '~2 hours',
    messages: '15 user messages',
    items: [
      { type: 'added', text: 'Core feature X' },
      { type: 'changed', text: 'Refactored Y' }
    ]
  }
];

// Display with +/~ badges, duration, message counts
// Link from Help/About modal: "View build log"
// Subtle version badge in header opens it
```

---

### 6. Content Templates

**LinkedIn - Technical Audience:**
```markdown
Last night I built [thing] in [time]. Not a prototype—[impressive scope].

The interesting part isn't what I built. It's how.

[3-4 bullet points of what happened each hour]

The surprises:
1. [Unexpected capability]
2. [Craft/quality observation]  
3. [System thinking example]

I run [context]. This changes [implication].

Still skeptical about [caveat]. But this one's real.
```

**LinkedIn - Broader Audience:**
```markdown
I spent last night [human-framed activity].

[Why it matters personally]

[Specific example of output that resonates]

The tech part: [brief mention of AI assist]

But the real insight isn't about AI. It's [human takeaway].
```

**Blog Post Structure:**
```markdown
# [Title]: A [Time] Experiment in [Method]

## The Setup
- Skepticism context
- The idea
- The approach

## The Build
- Hour 1: [Foundation]
- Hour 2: [Features]
- Hour 3: [The Pivot] ← most interesting part
- Hour 4: [Polish]

## What I Learned
1. [Observation about process]
2. [Observation about craft]
3. [Observation about documentation]

## The Result
- Stats
- What's next
- Honest assessment
```

---

### 7. File Structure

```
project/
├── BUILD_LOG.md          # Session history
├── CONTENT_DRAFTS.md     # LinkedIn/blog drafts
├── screenshots/
│   ├── session1-feature-a.png
│   ├── session2-before.png
│   └── session2-after.png
└── scripts/
    └── capture.js        # Screenshot automation
```

---

## INTEGRATION PATTERNS

### Claude.ai Artifacts
- Reference BUILD_LOG.md in conversation
- Ask Claude to "update the build log" at end of session
- Build log modal can be added to any React artifact

### Claude Code
- Keep BUILD_LOG.md in repo root
- Use TodoWrite/TodoRead for session tracking
- Commit log updates with features: `git commit -am "feat: X, updated build log"`

### Memory Integration
- Add to Claude memory: "Track build sessions in BUILD_LOG.md for [project]"
- Memory can store: current session number, last update, pending screenshots

---

## EXAMPLE SESSION FLOW

```
USER: "Let's work on Kindred - check the build log"

CLAUDE: [Reads BUILD_LOG.md]
"Session 4 starting. Last session you added tooltips and the build log modal. 
33 messages across 3 sessions so far. What's the focus today?"

USER: "Add dark mode"

CLAUDE: [Implements dark mode, tracks internally]
"Dark mode complete. That's message 3 this session.

📸 Screenshot opportunity: dark-mode
- session4-dark-mode-light.png (before)
- session4-dark-mode-dark.png (after)

Want me to update the build log?"

USER: "yes, then wrap up"

CLAUDE: [Updates BUILD_LOG.md]
"Session 4 logged:
- Duration: ~25 mins
- Messages: 4
- Added: Dark mode toggle, theme persistence

Total: 37 messages → 2,600 lines across 4 sessions.

Content Agent note: Dark mode + build-in-public angle could make good LinkedIn post."
```

---

## VERSION HISTORY

- v1.0 - Initial skill definition (Dec 2024, Kindred project)

---

## QUICK REFERENCE CARD

```
┌─────────────────────────────────────────────────────────┐
│  BUILD TRACKER - SESSION CHECKLIST                      │
├─────────────────────────────────────────────────────────┤
│  START                                                  │
│  □ Check BUILD_LOG.md for context                       │
│  □ Note session number + start time                     │
│  □ Confirm focus area                                   │
│                                                         │
│  DURING                                                 │
│  □ Count user messages (or ask Claude to)               │
│  □ Note pivots/interruptions                            │
│  □ Flag screenshot opportunities                        │
│                                                         │
│  END                                                    │
│  □ Update BUILD_LOG.md with:                            │
│    - Duration + message count                           │
│    - Added/Changed items                                │
│    - Key decisions                                      │
│    - Estimated tokens/cost                              │
│  □ Calculate running totals                             │
│  □ Flag content-worthy moments                          │
│                                                         │
│  STATS TO TRACK                                         │
│  • Messages this session: ___                           │
│  • Total messages: ___                                  │
│  • Total time: ___                                      │
│  • Lines of code: ___                                   │
│  • Features per message: ___                            │
│  • Est. tokens (in/out): ___K / ___K                    │
│  • Est. API cost: $___                                  │
│                                                         │
│  COST QUICK CALC (Opus)                                 │
│  Input:  ___K × $0.015 = $___                           │
│  Output: ___K × $0.075 = $___                           │
│                                                         │
│  SCREENSHOT NAMING                                      │
│  session[N]-[feature]-[state].png                       │
└─────────────────────────────────────────────────────────┘
```

---

## MEMORY PROMPT

Add this to Claude memory for any project using this skill:

```
Project [NAME] uses Build Tracker skill:
- Track sessions in BUILD_LOG.md
- Count user messages per session  
- Flag screenshot opportunities after visual features
- Generate content drafts from interesting sessions
- Current: Session [N], [X] total messages
```
