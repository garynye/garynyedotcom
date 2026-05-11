# Strategic Cost-Out Execution Cockpit — Full Documentation Suite

Status: Draft V0.2  
Date: 2026-05-11  
Customer target: Thermo Fisher Scientific — Global Supply Chain / Procurement pilot  
Visible framework term: OGSM only  
Locked MVP stack: React + TypeScript + Firebase/GCP  
Primary value: earlier visibility into weak, stale, under-evidenced, or financially questionable execution updates for VAVE and cost-out initiatives.

---

# 00_EXECUTIVE_SUMMARY.md

## Product summary

Strategic Cost-Out Execution Cockpit is an AI-assisted execution health platform for procurement and supply-chain leaders managing annual OGSM plans, VAVE programs, cost-out initiatives, supplier work sessions, and financial-impact workstreams.

The product imports existing strategy materials, converts them into a structured OGSM execution plan, assigns initiatives and owners, tracks dollar impact, prompts owners for updates, uses AI to coach submissions before finalization, and performs formal AI-assisted evidence review after submission.

The core insight is simple:

> A green status is not trustworthy unless it is backed by current evidence, credible financial support, implementation progress, and human reviewer approval.

## Initial pilot

- Customer context: Thermo Fisher Scientific global supply chain / procurement
- Executive sponsor: VP-level leader, with potential CPO visibility
- Primary use cases: VAVE, cost-out, supplier workshops, sourcing strategy execution, financial-impact tracking
- Primary users: VP strategy owner, strategy operations lead, initiative owners, program managers, workstream owners, executive viewers
- MVP deployment shape: private enterprise prototype/pilot
- Data ownership: customer owns all submitted business content

## Product wedge

This is not a generic OKR tracker, project manager, or dashboard builder.

The wedge is:

> AI-assisted evidence and financial-confidence review for procurement strategy execution.

## Why this matters

Procurement and supply-chain organizations often manage major annual strategies through PowerPoint, Excel, SharePoint, Workday exports, email, and monthly executive reviews. Owners may report initiatives as on track, but leadership often lacks proof of implementation health, current supplier engagement, validated savings methodology, or honest risk disclosure until too late.

This product creates earlier intervention opportunities by identifying:

- unsupported green statuses
- stale evidence
- repeated-language updates
- weak or missing finance validation
- benefit drift without explanation
- missing sub-workstreams for material initiatives
- parent-child status mismatches
- high-dollar initiatives with low evidence confidence

## MVP promise

The MVP should prove this complete path:

1. Upload or paste an existing OGSM-like strategy artifact.
2. AI extracts a structured OGSM draft.
3. Strategy owner reviews and approves the baseline.
4. Owners receive update reminders.
5. Owners submit structured weekly/monthly updates.
6. AI coaches them before submission.
7. AI formally evaluates final submissions.
8. Leadership sees dollar impact, evidence confidence, financial confidence, implementation confidence, overdue items, and exception signals.

## Locked architecture

- Frontend: React + TypeScript
- UI: Tailwind CSS + shadcn/ui or equivalent component system
- Hosting: Firebase Hosting
- Authentication: Firebase Auth for prototype; SSO/SAML-ready design for enterprise pilot
- Data: Firestore for MVP operational state
- Storage: Cloud Storage / Firebase Storage
- Backend: Cloud Run TypeScript services
- Background jobs: Cloud Tasks + Cloud Scheduler
- AI orchestration: backend-only model calls, provider-adapter pattern
- Usage metering: server-authored AI usage ledger
- Future analytics: BigQuery export or reporting replica if Firestore reporting becomes limiting

## Non-negotiable product principles

1. Owner-reported status is never the final truth.
2. AI recommends, humans approve.
3. Financial benefit is a first-class object, not a note.
4. Evidence must be classified as inspected, linked-only, stale, missing, weak, or mismatched.
5. The app detects weak-confidence patterns without accusing users of dishonesty.
6. Raw sensitive demo data should not be durably stored before anonymization unless explicitly approved.
7. All consequential writes require server-side authorization and audit logs.
8. AI usage and cost must be tracked from day one.

---

# 01_CUSTOMER_AND_MARKET_OVERVIEW.md

## Customer context

The initial target is a global supply-chain / procurement organization inside a large enterprise. The department manages annual strategies, cost-out targets, VAVE initiatives, supplier engagement programs, and financial-impact commitments.

The likely first customer has existing strategy content in PowerPoint, Excel, SharePoint, Workday exports, images, or copied text. The app must not assume the customer starts with a clean database or structured OGSM input form.

## Buyer and sponsor profile

### Economic buyer

- VP Global Supply Chain
- Chief Procurement Officer
- Senior procurement transformation leader
- Strategy / operations executive

### Executive sponsor

- VP responsible for VAVE, cost out, supplier strategy, and execution health

### Internal champion

- Chief of staff
- Strategy operations lead
- PMO lead
- Procurement transformation lead

### Evaluators

- IT/security
- Legal/procurement
- Finance partner
- Enterprise architecture
- Data privacy team

## Current workaround

Common current tools and behaviors:

- PowerPoint strategy decks
- Excel savings trackers
- SharePoint folders
- Workday or planning-system exports
- Email reminders
- Teams messages
- Monthly executive-review decks
- Manual PMO follow-up
- Self-reported red/yellow/green statuses
- Ad hoc finance validation

## Pain points

1. Strategy materials are not operationalized into a living execution system.
2. Update quality varies by owner.
3. Owners may report green without proof.
4. High-dollar initiatives can drift for weeks before leadership notices.
5. Financial claims may lack baseline, methodology, timing, or validation.
6. Monthly reviews become status theater rather than evidence-based intervention.
7. Program managers can report parent initiatives as healthy while underlying workstreams are stale or unmanaged.
8. Executives lack fast visibility into which items need attention.

## Market positioning

Avoid positioning against broad OKR platforms or project-management systems.

Better positioning:

- AI execution health cockpit
- Evidence-backed strategy execution system
- Procurement cost-out governance cockpit
- AI-assisted VAVE and savings-confidence review
- Strategic initiative quality and financial-confidence platform

## Competitive alternatives

| Alternative | Weakness this product exploits |
|---|---|
| PowerPoint / Excel | Manual, stale, self-reported, weak evidence traceability |
| OKR tools | Usually not built for financial-impact validation or evidence pressure testing |
| Project management tools | Too task-heavy; weak executive financial confidence layer |
| BI dashboards | Show data but do not coach submissions or evaluate evidence quality |
| PMO manual process | Labor-intensive, inconsistent, politically hard to challenge |
| Procurement suites | Often heavy integration projects; not focused on executive strategy review quality |

## Pilot wedge

One department. One annual OGSM. One execution cycle. One high-value outcome:

> Surface hidden execution risk and weak financial confidence before monthly executive reviews.

---

# 02_PRD.md

## Product name

Strategic Cost-Out Execution Cockpit

## Problem statement

Procurement and global supply-chain leaders rely on self-reported updates to manage major cost-out, VAVE, and supplier initiatives. These updates often lack current evidence, validated financial support, implementation detail, or honest risk disclosure. As a result, initiatives may appear green until they fail, benefits may be overstated, and leadership intervention happens too late.

## Goals

1. Convert existing OGSM strategy artifacts into a structured execution model.
2. Track initiatives, owners, due dates, financial benefit, and evidence requirements.
3. Prompt owners before updates are due.
4. Improve owner submissions with AI coaching before finalization.
5. Formally evaluate submitted updates for quality, evidence, finance, and implementation confidence.
6. Identify low-confidence green statuses and stale/pencil-whipped updates.
7. Give leaders exception-based visibility before weekly/monthly reviews.
8. Preserve an audit trail of updates, AI evaluations, evidence, and reviewer decisions.

## Non-goals

1. Replace enterprise project management systems.
2. Replace ERP/procurement/finance systems.
3. Fully validate savings through finance in MVP.
4. Build direct Workday or SharePoint integration in MVP.
5. Create HR performance scoring.
6. Let AI approve initiatives or validate benefits autonomously.
7. Manage every micro-task under an initiative.
8. Provide self-serve public SaaS billing in the first pilot.

## User stories

### Strategy operations lead

As a strategy operations lead, I want to upload an existing OGSM deck so the app can create the first structured plan draft and reduce manual setup.

### VP strategy owner

As a VP, I want to approve the baseline strategy and evidence rules so AI evaluates updates against standards I trust.

### Initiative owner

As an initiative owner, I want AI to review my draft before submission so I can fix weak evidence, unclear progress, and missing financial support.

### Reviewer

As a reviewer, I want to see owner-reported status separately from AI confidence and reviewer-approved status so I can challenge weak green updates.

### Executive viewer

As an executive viewer, I want to see high-dollar, low-confidence initiatives first so I know where to intervene.

## Functional requirements

### Strategy import

- Accept PowerPoint, Excel, PDF, image, pasted text, and manually entered source material.
- Store SharePoint links as references in MVP, without requiring direct file access.
- Extract objectives, goals, strategies, measures, initiatives, owners, due dates, benefits, risks, and evidence expectations.
- Assign extraction confidence to each extracted item.
- Require human review before baseline approval.

### Plan approval

- Support draft, pending approval, approved, superseded, and archived plan versions.
- Record approver, timestamp, comments, and source artifacts.
- Prevent execution tracking until baseline is approved.

### Initiative management

- Assign owners and review cadence.
- Track target, forecast, and realized benefit.
- Define benefit type, baseline, calculation method, and validation status.
- Require lightweight sub-workstreams above configurable thresholds.
- Support required evidence by initiative or OGSM line item.

### Owner updates

- Support weekly, monthly, and custom due dates.
- Send contextual email reminders.
- Allow owner to save draft, run AI coach, revise, and submit.
- Allow evidence upload or link.
- Track ignored critical AI suggestions if owner submits anyway.

### AI coaching

- Identify missing information, weak evidence, repeated language, stale progress, financial gaps, unclear next actions, and likely executive questions.
- Allow owners to apply, ignore, or manually address suggestions.
- Coaching is not formal evaluation.

### Formal AI evaluation

- Run after final submission.
- Evaluate against rubric, prior updates, evidence, financial record, sub-workstream pulse, and baseline OGSM.
- Output quality, evidence confidence, financial confidence, implementation confidence, and recommended reviewer action.
- Identify execution-confidence signals.
- Remain advisory only.

### Review workflow

- Reviewer can approve, approve with caveat, request revision, escalate, mark finance validation weak, mark blocked, or request leadership decision.
- Reviewer can override AI with comment.
- Revision requests create linked update cycles.

### Dashboards

- OGSM execution dashboard
- Executive exception dashboard
- Owner accountability view
- Initiative detail page
- Usage/cost dashboard for admin

## Quality requirements

- All consequential writes must be server-authorized.
- Every AI run must be auditable.
- Every formal evaluation must identify evidence inspected versus linked-only.
- All status dimensions must be visually separated.
- Dashboard read models must be cost-conscious.

## Success metrics

- Increase on-time update rate.
- Reduce manual reminder/follow-up effort.
- Increase evidence completeness.
- Identify low-confidence green initiatives earlier.
- Improve monthly review readiness.
- Surface benefit-at-risk before executive review.

---

# 03_APP_SPEC.md

## Application shape

Single-tenant or multi-workspace enterprise web app for strategy execution review. The pilot can run as one tenant with one workspace, but the product should be designed as multi-tenant from the start.

## Main navigation

1. Dashboard
   - OGSM Overview
   - Executive Exceptions
   - Owner View
2. Plan Setup
   - Import Strategy
   - Extraction Review
   - Baseline Approval
   - Rubrics & Evidence
   - Cadence Settings
3. Execution
   - Initiatives
   - Workstreams
   - Updates & Submissions
   - Evidence Library
4. Analytics
   - Financial Impact
   - Trends & Insights
   - AI Signals
5. Administration
   - Users & Roles
   - Configuration
   - Usage & Cost
   - Audit Logs

## Core workflow summary

1. Create workspace.
2. Create annual OGSM plan.
3. Upload/paste existing strategy source.
4. AI extracts draft structure.
5. Admin reviews and corrects extraction.
6. VP approves baseline.
7. Admin assigns owners, cadence, benefit, evidence, and rubrics.
8. Owners receive reminders.
9. Owners submit updates.
10. AI coaches before submission.
11. AI evaluates after submission.
12. Reviewer approves or requests action.
13. Dashboards update.

## Key UI concepts

### Status split

Each initiative/update must display:

- Owner-reported status
- Evidence confidence
- Financial confidence
- Implementation confidence
- AI concern level
- Reviewer-approved status

### Benefit split

Each initiative must display:

- Target benefit
- Forecast benefit
- Realized benefit
- Benefit at risk
- Validation status

### Evidence split

Evidence must display:

- uploaded and inspected
- uploaded but not inspected
- linked only
- missing
- stale
- mismatched

## MVP access paths

### Strategy owner path

Login → OGSM dashboard → Executive exceptions → Initiative detail → AI evaluation → Reviewer decision.

### Strategy operations path

Login → Import strategy → Extraction review → Baseline approval prep → Rubric/cadence setup → Overdue dashboard → Review queue.

### Initiative owner path

Email reminder → Update form → AI coach → Revise/add evidence → Submit → Respond to revision if needed.

## Data retention assumptions

For prototype/demo mode:

- Raw real strategy documents should be processed transiently where possible.
- Durable storage should contain only anonymized extracted structure unless raw retention is explicitly approved.
- Uploaded evidence during demo should use anonymized/sample files unless secure storage controls are approved.

For enterprise pilot:

- Raw and derived artifacts require contractual retention policy.
- Customer owns all submitted content.
- AI provider data-use terms must be reviewed and approved.

---

# 04_USERS_PERSONAS_AND_JTBD.md

## Persona 1: VP Strategy Owner

### Description

Senior leader accountable for annual procurement / supply-chain goals, cost-out performance, VAVE execution, supplier workstreams, and executive review readiness.

### Jobs to be done

- Know which strategies are actually progressing.
- Identify high-dollar initiatives that are at risk.
- Challenge unsupported green status.
- Ensure savings claims are credible.
- Intervene before the monthly review exposes a problem.

### Pain points

- Status is self-reported.
- Teams may polish decks without exposing underlying problems.
- Savings confidence is difficult to judge quickly.
- Supplier engagement claims are hard to verify.
- Monthly reviews come too late.

### Main screens

- OGSM Execution Dashboard
- Executive Exception Dashboard
- Initiative Detail
- Formal AI Evaluation
- Baseline Plan Approval

### Permissions

- Approve baseline plan.
- Approve rubrics.
- View all initiatives.
- Review updates.
- Override status with comment.
- Request revision/escalation.

## Persona 2: Strategy Operations Lead / Chief of Staff

### Description

Operational owner of the annual strategy system. Converts strategy materials into execution tracking, chases owners, prepares review materials, and helps the VP manage cadence.

### Jobs to be done

- Import existing strategy documents.
- Resolve AI extraction issues.
- Configure cadence, evidence, thresholds, and owners.
- Monitor overdue updates.
- Prepare executive review summary.

### Pain points

- Manual tracker setup.
- Repetitive email chasing.
- Inconsistent update quality.
- Last-minute deck consolidation.
- Hard to separate real risk from noisy status.

### Main screens

- Strategy Source Upload
- AI Extraction Review
- Rubric/Evidence Settings
- Cadence Settings
- Owner Accountability View
- Audit Log

### Permissions

- Administer workspace/plan.
- Assign owners.
- Edit draft plan.
- Configure thresholds and reminders.
- Manage review queue.

## Persona 3: Initiative Owner / Program Manager

### Description

Person accountable for a major initiative, such as supplier VAVE workshops, sourcing strategy, cost-out wave, or workstream implementation.

### Jobs to be done

- Submit updates on time.
- Show credible progress.
- Attach evidence.
- Explain benefit movement.
- Identify risks and decisions needed.

### Pain points

- Unclear expectations.
- Repeated follow-ups.
- Manual executive review prep.
- Risk of submitting updates that leadership rejects.

### Main screens

- My Initiatives
- Owner Update Form
- AI Coaching Review
- Revision Response

### Permissions

- View assigned initiatives.
- Submit/update own initiatives.
- Upload/link evidence.
- Run AI coach.
- View own update/evaluation history.

## Persona 4: Workstream Owner

### Description

Contributor accountable for a lightweight sub-workstream under a material initiative.

### Jobs to be done

- Provide minimal current workstream status.
- Add milestone/evidence updates.
- Report blockers.

### Main screens

- My Workstreams
- Workstream Pulse Update

### Permissions

- Update assigned workstream fields.
- Attach evidence if allowed.
- Comment on blockers.

## Persona 5: Executive Viewer / CPO Stakeholder

### Description

Senior stakeholder who wants portfolio-level visibility without operational clutter.

### Jobs to be done

- See benefit, risk, and confidence across the portfolio.
- Focus on exceptions.
- Know where leadership intervention is needed.

### Main screens

- Executive Exception Dashboard
- Approved Monthly Summary
- Financial Impact Dashboard

### Permissions

- Read-only executive view.
- No raw document access unless explicitly granted.

## Persona 6: Future Finance Reviewer

### MVP status

Not required as a full workflow role in MVP.

### Phase 2 job

Validate financial benefit, baseline, savings methodology, recurring/one-time classification, double counting, and realized value.

---

# 05_USER_JOURNEYS.md

## Journey 1: Strategy import to approved OGSM baseline

1. Strategy operations lead creates FY plan workspace.
2. Uploads existing OGSM deck, Excel tracker, PDF, image, or pasted text.
3. System marks source as raw sensitive in prototype mode.
4. AI extracts objectives, goals, strategies, measures, initiatives, owners, dates, benefits, and evidence requirements.
5. AI assigns confidence to each extracted field.
6. Admin reviews extraction, fixes low-confidence mappings, adds missing owners/benefits/dates.
7. Admin sends draft to VP.
8. VP approves baseline or requests edits.
9. System creates Plan Version 1.0.

## Journey 2: Set up initiative execution rules

1. Admin opens approved OGSM plan.
2. Reviews initiative list.
3. Assigns initiative owners.
4. Confirms target benefit and benefit type.
5. Sets update cadence.
6. Configures evidence requirements.
7. Applies sub-workstream threshold.
8. Reviews AI-suggested rubric.
9. VP approves rubric.

## Journey 3: Owner receives reminder and prepares update

1. System identifies upcoming due date.
2. Reminder engine sends contextual email.
3. Email includes initiative, benefit target, due date, prior gaps, and expected evidence.
4. Owner opens update form.
5. Owner enters progress, status, benefit change, risks, next actions, and evidence.
6. Owner saves draft.

## Journey 4: AI pre-submit coaching

1. Owner clicks Run AI Quality Check.
2. AI compares draft to rubric, prior submission, expected evidence, benefit record, and workstream pulse.
3. AI identifies missing evidence, weak financial support, repeated language, vague claims, or unsupported green status.
4. Owner applies suggestions, edits manually, adds evidence, or ignores suggestions.
5. Owner submits final update.

## Journey 5: Formal AI evaluation and reviewer decision

1. Owner submits update.
2. System locks submitted version.
3. Formal AI evaluator reviews against rubric and evidence.
4. AI produces scores and confidence signals.
5. Reviewer opens review page.
6. Reviewer compares owner status to AI confidence.
7. Reviewer approves, approves with caveat, requests revision, escalates, or marks finance validation weak.
8. Dashboard updates.

## Journey 6: Executive exception review

1. VP opens Executive Exception Dashboard before monthly review.
2. System prioritizes high-dollar, low-confidence items.
3. VP drills into an initiative with green reported status but low financial confidence.
4. VP reviews AI concerns and evidence gap.
5. VP requests revision or leadership intervention.
6. Strategy operations lead follows up with owner.

## Journey 7: Detect stale or pencil-whipped progress

1. Owner submits update with language similar to prior month.
2. AI detects repeated language and unchanged evidence.
3. Parent status is green, but sub-workstreams are stale.
4. AI flags unsupported green and stale evidence.
5. Reviewer requests revision and asks probing questions.
6. Owner must provide new evidence or explain lack of progress.

## Journey 8: Demo-safe real data workflow

1. User uploads a real prior-year OGSM-like activity set.
2. System processes raw source in transient mode where practical.
3. AI extracts structure and sensitive identifiers.
4. Anonymization replaces people, suppliers, project names, and sensitive identifiers.
5. Dollar values are perturbed or converted to ranges per demo setting.
6. User reviews anonymized output.
7. Only anonymized structured data is durably stored in demo workspace unless raw retention is explicitly approved.

---

# 06_WORKFLOWS_AND_STATES.md

## Workflow states

### Plan states

| State | Meaning |
|---|---|
| Draft | Plan exists but source import/review is incomplete |
| Importing | Source document extraction is running |
| Extraction review | AI draft is ready for human cleanup |
| Pending approval | Baseline is ready for VP/strategy owner approval |
| Approved | Baseline version is active |
| Superseded | Newer baseline version exists |
| Archived | Retained for history only |

### Initiative states

| State | Meaning |
|---|---|
| Draft | Required setup missing |
| Active | Initiative is in execution |
| At risk | Evidence, schedule, financial, or implementation signals indicate concern |
| Blocked | Dependency or decision blocks progress |
| Pending leadership decision | Executive input needed |
| Closed achieved | Completed and target substantially achieved |
| Closed missed | Completed or ended without target achieved |
| Archived | No longer active |

### Update states

| State | Meaning |
|---|---|
| Not started | Update due but no draft |
| Draft | Owner is preparing update |
| AI coaching complete | Pre-submit AI check completed |
| Submitted | Owner finalized update |
| AI evaluated | Formal AI evaluation completed |
| Needs revision | Reviewer requested changes |
| Approved | Reviewer accepted update |
| Approved with caveat | Accepted but concerns remain |
| Escalated | Leadership action required |
| Overdue | Due date missed |

### Benefit validation states

| State | Meaning |
|---|---|
| Not provided | No financial value entered |
| Owner estimate | Owner-provided value only |
| Evidence weak | Value stated with weak support |
| Evidence partial | Some evidence exists but gaps remain |
| Reasonable support | Baseline/calculation/evidence is plausible |
| Needs finance validation | Material claim should be reviewed by finance |
| Finance validated | Human finance review confirmed value |
| Disputed | Claim challenged |
| Possible double count | May overlap another initiative |

## Workflow 0: Real source intake and anonymization

### Trigger

User uploads a real OGSM-like activity set for demo/prototype validation.

### State transitions

Raw source received → transient processing → extraction complete → anonymization review → approved anonymized data → durable demo storage.

### Rules

- Store raw source only if explicitly approved.
- Durable demo storage should contain anonymized source-derived records.
- Audit that processing occurred without preserving sensitive content unnecessarily.

## Workflow 1: Strategy import

### Trigger

Admin creates plan and provides source material.

### States

Draft → Importing → Extraction review.

### Exceptions

- Unsupported file
- Extraction failed
- Empty or unreadable source
- Link-only source cannot be inspected
- Sensitive source retention not approved

## Workflow 2: Baseline approval

### Trigger

Extraction review complete.

### States

Extraction review → Pending approval → Approved or Draft.

### Rules

- Only authorized strategy owner/VP can approve.
- Execution reminders cannot begin until approved.
- Approval creates immutable Plan Version 1.0.

## Workflow 3: Owner update

### Trigger

Due date, review cycle, or manual request.

### States

Not started → Draft → AI coaching complete → Submitted.

### Rules

- Required fields must be completed or explicitly overridden if configuration allows.
- Ignored critical AI suggestions must be tracked.
- Evidence status must be recorded.

## Workflow 4: Formal review

### Trigger

Owner submits update.

### States

Submitted → AI evaluated → Approved / Approved with caveat / Needs revision / Escalated.

### Rules

- AI cannot approve final status.
- Reviewer override requires comment.
- Revision creates linked update cycle.

## Workflow 5: Executive exception handling

### Trigger

Dashboard identifies high-priority risk.

### States

Active → At risk / Pending leadership decision / Blocked / Needs revision.

### Rules

- High benefit + low confidence should rank above low benefit + low confidence.
- Green owner status with low evidence confidence must be visible.

---

# 07_FEATURE_INVENTORY.md

| Feature | Module | Persona | Trigger | Data touched | AI involvement | MVP | Acceptance criteria |
|---|---|---|---|---|---|---:|---|
| Strategy source upload | Plan setup | Strategy ops | New plan | SourceDocument | Optional parsing | P0 | User can upload/paste supported source |
| Demo-safe anonymization | Plan setup/security | Admin | Real source upload | SourceDocument, AnonymizationRun | High | P0 | Durable demo data contains anonymized records only unless approved |
| AI extraction | Plan setup | Strategy ops | Source added | ExtractionRun, ExtractedPlanDraft | High | P0 | Draft hierarchy with confidence is produced |
| Extraction review | Plan setup | Strategy ops | Extraction complete | ExtractedPlanDraft | Assistive | P0 | Admin can edit/merge/remap extracted items |
| Baseline approval | Governance | VP | Draft ready | PlanVersion | None | P0 | Approved version recorded with audit event |
| OGSM hierarchy | Core plan | All | Baseline approved | PlanLineItem | Extraction support | P0 | Objectives/goals/strategies/measures/initiatives render correctly |
| Initiative setup | Core plan | Strategy ops | Baseline approved | Initiative, BenefitRecord | Suggested evidence/rubric | P0 | Owner, cadence, benefit, evidence set |
| Benefit tracking | Finance impact | VP/admin | Initiative setup/update | BenefitRecord | Flags weak support | P0 | Target/forecast/realized tracked separately |
| Sub-workstream pulse | Execution | Initiative owner | Threshold met | SubWorkstream | Detects missing/stale workstreams | P0 | Required for material initiatives unless waived |
| Reminder engine | Notifications | Owner | Due date | Notification, UpdateCycle | Drafts contextual reminder | P0 | Email reminders sent/logged |
| Owner update form | Execution | Owner | Reminder/manual | OwnerUpdate, EvidenceItem | Coach available | P0 | Owner can save draft and submit |
| AI pre-submit coach | AI | Owner | User click | AICoachingRun | Medium/high | P0 | Suggestions generated and tracked |
| Formal AI evaluation | AI/review | Reviewer | Submission | AIEvaluation | Highest tier | P0 | Scores and recommended action generated |
| Execution-confidence signals | AI/review | Reviewer/VP | Formal eval | ExecutionConfidenceSignal | Highest tier | P0 | Unsupported green/stale/repeated signals shown |
| Review decision | Governance | Reviewer | Evaluation complete | ReviewDecision, AuditEvent | Advisory only | P0 | Human decision updates status |
| OGSM dashboard | Dashboard | VP/admin | Open dashboard | Read models | Summaries | P0 | Status/confidence/benefit visible separately |
| Executive exceptions | Dashboard | VP/CPO | Review prep | ExceptionReadModel | Summaries | P0 | High-dollar low-confidence items ranked |
| Owner accountability view | Dashboard | VP/admin | Review prep | OwnerSummary | Summary | P0 | Owner risk/overdue/benefit shown permissioned |
| Evidence library | Evidence | Admin/owner | Evidence upload | EvidenceItem | Inspection | P1 | Evidence searchable by initiative |
| Audit log | Compliance | Admin | Any state change | AuditEvent | None | P0/P1 | Critical actions recorded |
| Usage ledger | AI economics | Admin | AI/file jobs | UsageEvent | None | P0 | AI calls create usage records |
| Teams notifications | Notifications | Owner | Due date | Notification | Drafting | P2 | Teams messages sent if integrated |
| SharePoint API reading | Integrations | Owner/admin | Link evidence | EvidenceItem | Document access | P2 | App can inspect linked files with permission |
| Finance validation workflow | Finance | Finance reviewer | High-dollar claim | BenefitRecord | Assistive | P2 | Finance can validate/dispute claims |

---

# 08_SCREEN_INVENTORY.md

| # | Screen | Route | Users | MVP |
|---:|---|---|---|---:|
| 1 | Login | `/login` | All | P0 |
| 2 | Workspace Home | `/workspaces/:workspaceId` | All | P0 |
| 3 | New Plan Setup | `/plans/new` | Admin, strategy ops | P0 |
| 4 | Strategy Source Upload | `/plans/:planId/import` | Admin, strategy ops | P0 |
| 5 | Anonymization Review | `/plans/:planId/anonymize` | Admin, strategy ops | P0 for demo |
| 6 | AI Extraction Review | `/plans/:planId/extraction-review` | Admin, strategy ops | P0 |
| 7 | Baseline Plan Approval | `/plans/:planId/approval` | VP, strategy owner | P0 |
| 8 | OGSM Execution Dashboard | `/plans/:planId/dashboard` | VP, admin, viewer | P0 |
| 9 | Executive Exceptions | `/plans/:planId/exceptions` | VP, CPO, admin | P0 |
| 10 | Owner Accountability | `/plans/:planId/owners` | VP, admin | P0 |
| 11 | Initiative List | `/plans/:planId/initiatives` | All permissioned | P0 |
| 12 | Initiative Detail | `/initiatives/:initiativeId` | All permissioned | P0 |
| 13 | Owner Update Form | `/updates/:updateId/edit` | Owner | P0 |
| 14 | AI Coaching Review | `/updates/:updateId/coach` | Owner | P0 |
| 15 | Submitted Update Review | `/updates/:updateId/review` | Reviewer/admin | P0 |
| 16 | Formal AI Evaluation | `/updates/:updateId/evaluation` | Reviewer/admin | P0 |
| 17 | Rubric & Evidence Settings | `/plans/:planId/rubrics` | VP/admin | P0/P1 |
| 18 | Cadence Settings | `/plans/:planId/cadence` | Admin | P0/P1 |
| 19 | Evidence Library | `/plans/:planId/evidence` | Admin/reviewer | P1 |
| 20 | Audit Log | `/plans/:planId/audit` | Admin/security | P1 |
| 21 | User & Role Management | `/settings/users` | Admin | P1 |
| 22 | Usage & Cost Dashboard | `/settings/usage` | Admin | P1 |

---

# 09_SCREEN_SPECS.md

## 1. Login

- Route: `/login`
- Purpose: Authenticate users.
- Users: All.
- Entry: Direct URL, email reminder link, session expiry.
- Exit: Workspace home or originally requested route.
- Components: Email/password or SSO button, error alert, privacy notice.
- Actions: Sign in, request access, reset password.
- Data shown/modified: Session only.
- Empty/loading/error: Loading auth state; invalid login; access denied.
- Permissions: None before login.
- AI behavior: None.
- Analytics: login_started, login_success, login_failed.
- Billing gates: None.
- Responsive: Mobile-friendly but desktop-first.
- Acceptance: Authenticated users land in correct workspace; unauthorized users blocked.

## 2. Workspace Home

- Route: `/workspaces/:workspaceId`
- Purpose: Entry point to active plans and assigned work.
- Users: All.
- Entry: Login, nav.
- Exit: Plan dashboard, My Initiatives, Import Strategy.
- Components: Active plan cards, review alerts, assigned updates, overdue items.
- Actions: Open plan, create plan, open assigned update.
- Data: Workspace, plans, user assignments, notifications.
- States: No plans; loading plans; permission error.
- Permissions: Workspace membership required.
- AI: None directly.
- Analytics: workspace_opened, plan_card_clicked.
- Billing: Enterprise plan required.
- Responsive: Cards stack on tablet/mobile.
- Acceptance: User sees only permitted workspace content.

## 3. New Plan Setup

- Route: `/plans/new`
- Purpose: Create annual OGSM plan workspace.
- Users: Admin, strategy operations.
- Entry: Workspace home.
- Exit: Strategy import.
- Components: Plan name, fiscal year, owner, department, currency, default cadence, sub-workstream threshold.
- Actions: Create draft plan.
- Data: Plan, settings.
- States: Validation errors; duplicate plan warning.
- Permissions: Admin/strategy ops.
- AI: None.
- Analytics: plan_create_started, plan_created.
- Billing: Plan creation entitlement.
- Responsive: Form layout.
- Acceptance: Draft plan created with default settings.

## 4. Strategy Source Upload

- Route: `/plans/:planId/import`
- Purpose: Add existing OGSM source material.
- Users: Admin, strategy operations.
- Entry: New plan setup, nav.
- Exit: Anonymization review or extraction review.
- Components: File dropzone, paste text, paste image, link input, source sensitivity warning, retention mode selector.
- Actions: Upload, paste, add link, start extraction, cancel.
- Data: SourceDocument, ExtractionRun.
- States: No source; uploading; processing; unsupported file; too large; extraction failed.
- Permissions: Admin/strategy ops.
- AI: Starts extraction; may classify source structure.
- Analytics: source_uploaded, extraction_started, extraction_failed, extraction_completed.
- Billing: AI extraction usage event.
- Responsive: Desktop-first; mobile upload allowed.
- Acceptance: Supported source creates extraction job and visible processing state.

## 5. Anonymization Review

- Route: `/plans/:planId/anonymize`
- Purpose: Convert real source-derived content into demo-safe records before durable storage.
- Users: Admin, strategy operations.
- Entry: Source upload in demo mode.
- Exit: AI extraction review.
- Components: Sensitive term list, anonymized replacement table, dollar perturbation settings, approve anonymized output.
- Actions: Approve, edit replacements, rerun anonymization, delete raw source.
- Data: AnonymizationRun, sanitized SourceDocument metadata, ExtractedPlanDraft.
- States: No sensitive terms found; anonymization running; approval required; deletion failed.
- Permissions: Admin only.
- AI: Detects and replaces people, suppliers, projects, proprietary terms, site names, and sensitive identifiers.
- Analytics: anonymization_started, anonymization_approved, raw_source_deleted.
- Billing: AI anonymization event.
- Responsive: Desktop required for review.
- Acceptance: Durable demo records contain approved anonymized content; raw retention follows selected policy.

## 6. AI Extraction Review

- Route: `/plans/:planId/extraction-review`
- Purpose: Review AI-generated OGSM structure.
- Users: Admin, strategy operations.
- Entry: Extraction complete.
- Exit: Baseline approval.
- Components: Hierarchy tree, extracted field grid, confidence chips, missing fields, unmapped content, source trace panel.
- Actions: Edit, merge, split, remap, add owner, add benefit, mark unresolved, send to approval.
- Data: ExtractedPlanDraft, PlanLineItem draft, BenefitRecord draft.
- States: Empty extraction; loading; unresolved critical fields; save error.
- Permissions: Admin/strategy ops.
- AI: Explains confidence and suggests mappings/evidence.
- Analytics: extraction_review_opened, extracted_item_edited, sent_to_approval.
- Billing: Optional rerun extraction event.
- Responsive: Desktop-only recommended due complexity.
- Acceptance: Admin can correct extraction and create approval-ready plan draft.

## 7. Baseline Plan Approval

- Route: `/plans/:planId/approval`
- Purpose: Approve official Plan Version 1.0.
- Users: VP, strategy owner, strategy ops.
- Entry: Extraction review.
- Exit: Dashboard or setup tasks.
- Components: Baseline summary, unresolved gaps, owner coverage, benefit rollup, evidence coverage, approval comments.
- Actions: Approve, request edits, approve with caveats.
- Data: PlanVersion, AuditEvent.
- States: Pending approval; approved; rejected/requested edits.
- Permissions: Strategy owner/VP approval permission.
- AI: Summarizes gaps but cannot approve.
- Analytics: baseline_approved, baseline_edits_requested.
- Billing: None beyond prior AI summary if used.
- Responsive: Tablet/desktop.
- Acceptance: Execution workflow cannot begin until approved.

## 8. OGSM Execution Dashboard

- Route: `/plans/:planId/dashboard`
- Purpose: Main plan execution cockpit.
- Users: VP, strategy owner, admin, executive viewer.
- Entry: Workspace home, nav.
- Exit: Initiative detail, exceptions, export.
- Components: KPI cards, OGSM tree, initiative table, confidence heatmap, benefit trend, AI concern panel.
- Actions: Filter, sort, drill in, export, request update, request revision.
- Data: DashboardReadModel, InitiativeSummary, BenefitSummary.
- States: No active initiatives; loading; dashboard stale; read error.
- Permissions: Plan viewer or higher.
- AI: Shows summarized concerns and confidence notes.
- Analytics: dashboard_opened, filter_applied, initiative_drilled.
- Billing: None.
- Responsive: Desktop-first; tablet condensed.
- Acceptance: Owner status, AI confidence, reviewer status, and benefit are visually separate.

## 9. Executive Exceptions

- Route: `/plans/:planId/exceptions`
- Purpose: Surface high-priority intervention items.
- Users: VP, CPO, strategy owner, admin.
- Entry: Dashboard, nav, monthly review reminder.
- Exit: Initiative detail, review decision, export summary.
- Components: Exception cards, priority ranking, filters, dollar exposure, confidence chips, recommended actions.
- Actions: Request revision, assign follow-up, escalate, export executive summary.
- Data: ExceptionReadModel, ReviewDecision, Notification.
- States: No exceptions; loading; stale read model.
- Permissions: Executive viewer or higher.
- AI: Generates exception rationale and probing questions.
- Analytics: exceptions_opened, exception_action_taken, executive_summary_exported.
- Billing: Executive summary generation may create usage event.
- Responsive: Cards stack on tablet.
- Acceptance: High-dollar low-confidence items appear first.

## 10. Owner Accountability

- Route: `/plans/:planId/owners`
- Purpose: Show ownership concentration, overdue items, benefit exposure, and risk.
- Users: VP, strategy owner, admin.
- Entry: Dashboard/nav.
- Exit: Owner detail filter, initiative detail.
- Components: Owner table, benefit columns, overdue counts, low-confidence counts, filters.
- Actions: Filter by owner, send reminder, open initiatives.
- Data: OwnerSummaryReadModel.
- States: No owners; loading; permission denied.
- Permissions: Restricted to strategy owner/admin by default.
- AI: Summarizes owner-level risk cautiously.
- Analytics: owner_view_opened, owner_filter_applied.
- Billing: None.
- Responsive: Horizontal scroll on small screens.
- Acceptance: Does not present as HR scoring; shows execution visibility.

## 11. Initiative List

- Route: `/plans/:planId/initiatives`
- Purpose: Browse and manage initiatives.
- Users: All permissioned.
- Entry: Nav/dashboard.
- Exit: Initiative detail.
- Components: Table, filters, status/confidence chips, owner, due date, benefit.
- Actions: Search, filter, sort, open, bulk reminder if admin.
- Data: Initiative summaries.
- States: Empty list; loading; permission denied.
- Permissions: Varies by role.
- AI: Shows concern badges.
- Analytics: initiatives_opened, initiative_filtered.
- Billing: None.
- Responsive: Table becomes card list on mobile.
- Acceptance: Users only see permitted initiatives.

## 12. Initiative Detail

- Route: `/initiatives/:initiativeId`
- Purpose: Full evidence, benefit, workstream, update, and evaluation history.
- Users: VP, admin, reviewer, owner, viewer.
- Entry: Dashboard, list, email link.
- Exit: Update form, evaluation, evidence, review action.
- Components: Summary header, benefit cards, workstream table, evidence list, update history, AI signals, audit timeline.
- Actions: Request update, edit setup, upload evidence, open evaluation, review decision.
- Data: Initiative, BenefitRecord, SubWorkstream, EvidenceItem, OwnerUpdate, AIEvaluation.
- States: Missing initiative; loading; permission denied.
- Permissions: Role and assignment based.
- AI: Shows current confidence and signals.
- Analytics: initiative_opened, evidence_clicked, evaluation_opened.
- Billing: AI rerun only if requested.
- Responsive: Desktop detail view; sections stack on tablet.
- Acceptance: Single page explains why initiative is or is not trustworthy.

## 13. Owner Update Form

- Route: `/updates/:updateId/edit`
- Purpose: Submit structured periodic update.
- Users: Initiative owner.
- Entry: Email reminder, My Initiatives.
- Exit: AI coaching, submit confirmation.
- Components: Status selector, progress summary, completed work, benefit update, risks, blockers, decisions, next actions, evidence upload/link, workstream pulse.
- Actions: Save draft, run AI coach, submit.
- Data: OwnerUpdate, EvidenceItem, SubWorkstream updates, BenefitChangeEvent.
- States: Empty draft; autosaving; validation errors; upload error.
- Permissions: Assigned owner or delegate.
- AI: Coach triggered by user.
- Analytics: update_started, update_saved, ai_coach_started, update_submitted.
- Billing: AI coach usage event.
- Responsive: Works on tablet; desktop preferred.
- Acceptance: Owner can submit complete update with evidence and benefit context.

## 14. AI Coaching Review

- Route: `/updates/:updateId/coach`
- Purpose: Improve draft before final submission.
- Users: Initiative owner.
- Entry: Owner update form.
- Exit: Update form or submit.
- Components: Overall score, strengths, missing evidence, financial gaps, suggested rewrite, likely executive questions, critical warnings.
- Actions: Apply suggestion, edit manually, add evidence, ignore, submit anyway.
- Data: AICoachingRun, OwnerUpdate.
- States: Coaching running; no issues; failed AI run; suggestions ignored.
- Permissions: Assigned owner.
- AI: Pre-submit evaluation only.
- Analytics: coaching_opened, suggestion_applied, suggestion_ignored, submitted_anyway.
- Billing: UsageEvent created.
- Responsive: Desktop/tablet.
- Acceptance: Owner can act on feedback; ignored critical gaps are recorded.

## 15. Submitted Update Review

- Route: `/updates/:updateId/review`
- Purpose: Reviewer reads final submission.
- Users: Reviewer, VP, admin.
- Entry: Review queue, initiative detail.
- Exit: Formal evaluation, review decision.
- Components: Submitted fields, evidence, benefit changes, prior comparison, AI evaluation link.
- Actions: Open evaluation, approve, request revision, escalate.
- Data: OwnerUpdate, EvidenceItem, BenefitChangeEvent.
- States: Evaluation pending; loading; permission denied.
- Permissions: Reviewer/admin.
- AI: Shows formal evaluation when complete.
- Analytics: update_review_opened, review_action_started.
- Billing: None.
- Acceptance: Reviewer sees submitted version locked from edits.

## 16. Formal AI Evaluation

- Route: `/updates/:updateId/evaluation`
- Purpose: Show AI evidence/finance/implementation evaluation.
- Users: Reviewer, VP, admin.
- Entry: Submitted update review.
- Exit: Review decision.
- Components: Score cards, rubric table, evidence inspected, missing evidence, financial drift, repeated language, execution-confidence signals, probing questions.
- Actions: Accept AI recommendation, override with comment, request revision, escalate.
- Data: AIEvaluation, ExecutionConfidenceSignal, ReviewDecision, AuditEvent.
- States: Evaluation pending; failed; outdated evaluation; no rubric.
- Permissions: Reviewer/admin.
- AI: Formal evaluator output.
- Analytics: evaluation_opened, ai_recommendation_accepted, ai_overridden.
- Billing: Formal evaluation usage event.
- Responsive: Desktop preferred.
- Acceptance: AI output is explainable and never final authority.

## 17. Rubric & Evidence Settings

- Route: `/plans/:planId/rubrics`
- Purpose: Configure evaluation criteria per OGSM line item or initiative.
- Users: VP, strategy owner, admin.
- Entry: Plan setup/nav.
- Exit: Approval or dashboard.
- Components: Rubric editor, criteria weights, required evidence, thresholds, version history.
- Actions: Add criterion, edit weight, approve rubric, clone rubric.
- Data: EvaluationRubric, EvidenceRequirement.
- States: No rubric; invalid weights; pending approval.
- Permissions: Admin edit; VP approval.
- AI: Suggests rubric/evidence from plan content.
- Analytics: rubric_created, rubric_approved, evidence_requirement_added.
- Billing: Optional AI suggestion usage.
- Responsive: Desktop.
- Acceptance: Rubric version is approved and used in evaluations.

## 18. Cadence Settings

- Route: `/plans/:planId/cadence`
- Purpose: Configure reminders and update cycles.
- Users: Admin.
- Entry: Plan setup/nav.
- Exit: Dashboard.
- Components: Weekly/monthly/custom cadence, due dates, reminder timing, escalation timing, email templates.
- Actions: Save cadence, test reminder, pause reminders.
- Data: CadenceRule, NotificationTemplate.
- States: No cadence; invalid date; test failure.
- Permissions: Admin.
- AI: Drafts reminder template.
- Analytics: cadence_saved, reminder_test_sent.
- Billing: Reminder drafting if AI used.
- Responsive: Desktop/tablet.
- Acceptance: Update cycles generate correctly.

## 19. Evidence Library

- Route: `/plans/:planId/evidence`
- Purpose: Browse evidence files/links across plan.
- Users: Admin, reviewer.
- Entry: Nav/initiative detail.
- Exit: Evidence detail/source.
- Components: Evidence table, type/status filters, inspected/linked-only badges, related initiative.
- Actions: Search, filter, open, mark stale, delete if allowed.
- Data: EvidenceItem.
- States: No evidence; loading; inaccessible file.
- Permissions: Plan evidence access.
- AI: Inspection status and summaries.
- Analytics: evidence_library_opened, evidence_filtered.
- Billing: File inspection usage if rerun.
- Responsive: Table/card hybrid.
- Acceptance: Evidence traceability is clear.

## 20. Audit Log

- Route: `/plans/:planId/audit`
- Purpose: Review critical actions.
- Users: Admin, security reviewer.
- Entry: Admin nav.
- Exit: Related object detail.
- Components: Timeline/table, actor, action, object, timestamp, metadata, filters.
- Actions: Filter, export.
- Data: AuditEvent.
- States: No events; loading; export error.
- Permissions: Admin/security.
- AI: None.
- Analytics: audit_opened, audit_exported.
- Billing: None.
- Responsive: Desktop.
- Acceptance: Critical actions are immutable and searchable.

## 21. User & Role Management

- Route: `/settings/users`
- Purpose: Manage users and permissions.
- Users: Tenant/workspace admin.
- Entry: Admin nav.
- Exit: Workspace settings.
- Components: User table, role assignment, invite form, access status.
- Actions: Invite, change role, deactivate, resend invite.
- Data: User, RoleAssignment.
- States: Empty users; invite pending; permission error.
- Permissions: Admin.
- AI: None.
- Analytics: user_invited, role_changed, user_deactivated.
- Billing: Seat entitlement later.
- Responsive: Desktop.
- Acceptance: Role changes enforce immediately server-side.

## 22. Usage & Cost Dashboard

- Route: `/settings/usage`
- Purpose: Track AI/file processing usage.
- Users: Admin.
- Entry: Admin nav.
- Exit: Usage event detail.
- Components: Usage cards, event table, model/provider, estimated cost, feature, tenant/user filters.
- Actions: Filter, export, set budget alerts.
- Data: UsageEvent.
- States: No usage; loading; export error.
- Permissions: Admin.
- AI: None.
- Analytics: usage_dashboard_opened, usage_exported.
- Billing: Internal cost control; enterprise billing later.
- Responsive: Desktop.
- Acceptance: Every AI job has a corresponding usage event.

---

# 10_DOMAIN_MODEL.md

## Core domains

### Tenant

The customer organization. For the pilot, this is the Thermo Fisher workspace context. The model must still support future multi-tenant isolation.

### Workspace

A department or function inside a tenant, such as Global Supply Chain / Procurement.

### Plan

A fiscal-year strategy container using OGSM terminology. A plan has versions.

### Plan Version

An approved or draft baseline. Formal execution is measured against an approved plan version.

### Plan Line Item

Generic hierarchical item used internally to represent Objective, Goal, Strategy, Measure, Initiative, or Workstream.

### Initiative

Execution-level item with owner, cadence, evidence requirements, financial benefit, and updates.

### Sub-Workstream

Lightweight pulse record under a material initiative. Not a full task-management object.

### Benefit Record

Financial-impact object tied to an initiative. Tracks target, forecast, realized benefit, validation, baseline, and method.

### Evidence Item

Uploaded, linked, pasted, or referenced proof used to support claims.

### Owner Update

Periodic submission from initiative owner.

### AI Coaching Run

Pre-submit advisory AI review of draft owner update.

### AI Evaluation

Formal post-submit AI review against rubric, evidence, financials, history, and workstream health.

### Execution Confidence Signal

Neutral low-confidence pattern such as unsupported green, repeated language, stale evidence, weak finance support, or missing workstreams.

### Review Decision

Human reviewer outcome: approve, approve with caveat, request revision, escalate, mark finance validation weak, etc.

### Audit Event

Immutable record of meaningful action.

### Usage Event

Server-authored record of AI/model/file-processing usage and estimated cost.

## Domain relationships

- Tenant has many Workspaces.
- Workspace has many Plans.
- Plan has many PlanVersions.
- PlanVersion has many PlanLineItems.
- PlanLineItem can parent/child other PlanLineItems.
- Initiative is a specialized execution PlanLineItem.
- Initiative has one or more BenefitRecords over time.
- Initiative has many OwnerUpdates.
- Initiative may have many SubWorkstreams.
- OwnerUpdate has many EvidenceItems.
- OwnerUpdate has zero or more AICoachingRuns.
- OwnerUpdate has zero or one active formal AIEvaluation per submitted version.
- AIEvaluation has many ExecutionConfidenceSignals.
- ReviewDecision belongs to OwnerUpdate and reviewer.
- AuditEvents link to actors and objects.
- UsageEvents link to AI/file-processing jobs and objects.

---

# 11_DATA_MODEL.md

## Firestore collection strategy

Firestore is the MVP operational datastore. Use explicit tenant/workspace scoping and denormalized read models for dashboards.

Recommended top-level collections:

- `tenants`
- `users`
- `usageEvents`
- `auditEvents`

Recommended nested collections:

- `tenants/{tenantId}/workspaces/{workspaceId}`
- `workspaces/{workspaceId}/plans/{planId}` if using collection group strategy, or nested under tenant
- `plans/{planId}/versions/{planVersionId}`
- `plans/{planId}/lineItems/{lineItemId}`
- `plans/{planId}/initiatives/{initiativeId}`
- `initiatives/{initiativeId}/updates/{updateId}`
- `initiatives/{initiativeId}/workstreams/{workstreamId}`
- `initiatives/{initiativeId}/benefits/{benefitId}`
- `plans/{planId}/evidence/{evidenceId}`
- `plans/{planId}/rubrics/{rubricId}`
- `plans/{planId}/readModels/{readModelId}`

Final path design should be implemented consistently in code; do not mix incompatible tenant-scoping patterns.

## Required entities

### Tenant

- id
- name
- status
- createdAt
- settings
- dataRetentionPolicy

### Workspace

- id
- tenantId
- name
- functionName
- ownerUserId
- status
- createdAt

### User

- id
- email
- displayName
- status
- authProviderId
- createdAt
- lastLoginAt

### RoleAssignment

- id
- tenantId
- workspaceId
- planId optional
- userId
- role
- grantedBy
- grantedAt
- status

### Plan

- id
- tenantId
- workspaceId
- name
- fiscalYear
- department
- currency
- status
- activeVersionId
- defaultCadence
- defaultSubWorkstreamThreshold
- createdBy
- createdAt

### SourceDocument

- id
- tenantId
- workspaceId
- planId
- sourceType: upload, pasted_text, pasted_image, link, manual
- fileType
- originalFilename
- storageStatus: transient_only, stored_raw_approved, stored_anonymized, link_only
- sensitivityStatus: unknown, raw_sensitive, anonymized, approved_for_demo
- storagePath
- linkUrl
- uploadedBy
- createdAt
- deletedAt

### ExtractionRun

- id
- tenantId
- workspaceId
- planId
- sourceDocumentIds
- status
- modelProvider
- modelName
- promptTemplateVersion
- startedAt
- completedAt
- errorCode
- outputDraftId
- usageEventId

### AnonymizationRun

- id
- tenantId
- workspaceId
- planId
- sourceDocumentId
- status
- replacementMapSummary
- dollarTreatment: preserve, perturb, ranges
- approvedBy
- approvedAt
- rawDeletedAt
- usageEventId

### ExtractedPlanDraft

- id
- planId
- extractionRunId
- status
- draftTree
- missingFields
- unmappedContent
- confidenceSummary
- editedBy
- updatedAt

### PlanVersion

- id
- planId
- versionNumber
- status
- approvedBy
- approvedAt
- sourceDocumentIds
- extractionRunId
- approvalNotes
- createdAt

### PlanLineItem

- id
- planId
- planVersionId
- parentId
- lineItemType: objective, goal, strategy, measure, initiative, workstream
- displayLabel
- title
- description
- ownerId
- dueDate
- reviewCadence
- extractionConfidence
- sourceTrace
- status
- sortOrder
- createdAt
- updatedAt

### Initiative

- id
- planId
- planVersionId
- lineItemId
- ownerId
- title
- description
- strategyId
- measureId
- reportedStatus
- reviewerStatus
- evidenceConfidence
- financialConfidence
- implementationConfidence
- aiConcernLevel
- currentBenefitId
- nextDueDate
- requiresSubWorkstreams
- subWorkstreamRequirementReason
- status
- createdAt
- updatedAt

### BenefitRecord

- id
- initiativeId
- benefitType
- targetBenefit
- forecastBenefit
- realizedBenefit
- currency
- recurrence
- fiscalPeriod
- baselineSpend
- calculationMethod
- financeValidationStatus
- confidenceLevel
- doubleCountingRisk
- evidenceIds
- lastChangedBy
- changeExplanation
- createdAt
- updatedAt

### BenefitChangeEvent

- id
- benefitId
- changedBy
- changedAt
- previousValues
- newValues
- changeExplanation
- aiFlagged

### SubWorkstream

- id
- initiativeId
- name
- ownerId
- health
- lastUpdateText
- lastUpdateAt
- nextMilestone
- nextMilestoneDueDate
- evidenceRequirementIds
- evidenceIds
- blockers
- aiConcern
- createdAt
- updatedAt

### EvidenceItem

- id
- tenantId
- workspaceId
- planId
- initiativeId optional
- ownerUpdateId optional
- evidenceType
- title
- storagePath optional
- linkUrl optional
- inspectionStatus
- inspectedAt
- extractedTextPath optional
- uploadedBy
- createdAt
- staleFlag
- mismatchFlag

### OwnerUpdate

- id
- initiativeId
- updateCycleId
- ownerId
- reportedStatus
- progressSummary
- workCompleted
- risks
- blockers
- decisionsNeeded
- nextActions
- forecastBenefit
- realizedBenefit
- status
- ignoredCriticalSuggestions
- submitAnywayExplanation
- submittedAt
- createdAt
- updatedAt

### AIEvaluation

- id
- ownerUpdateId
- evaluationType
- status
- modelProvider
- modelName
- promptTemplateVersion
- rubricVersionId
- overallQualityScore
- evidenceConfidence
- financialConfidence
- implementationConfidence
- strategicAlignmentScore
- executiveReadinessScore
- recommendedAction
- summary
- gaps
- probingQuestions
- evidenceInspected
- evidenceLinkedOnly
- evidenceMissing
- signals
- createdAt
- usageEventId

### ExecutionConfidenceSignal

- id
- initiativeId
- ownerUpdateId
- aiEvaluationId
- signalType
- severity
- title
- explanation
- supportingEvidenceIds
- createdAt

### ReviewDecision

- id
- ownerUpdateId
- reviewerId
- decision
- comment
- overrideAI
- createdAt

### AuditEvent

- id
- tenantId
- workspaceId
- planId optional
- actorUserId
- action
- objectType
- objectId
- beforeHash optional
- afterHash optional
- metadata
- createdAt

### UsageEvent

- id
- tenantId
- workspaceId
- userId optional
- featureKey
- eventType
- sourceObjectId
- modelProvider
- modelName
- inputTokens
- outputTokens
- estimatedCost
- billable
- requestId
- metadata
- createdAt

## Dashboard read models

### PlanDashboardSummary

- planId
- targetBenefitTotal
- forecastBenefitTotal
- realizedBenefitTotal
- benefitAtRisk
- overdueUpdateCount
- lowConfidenceGreenCount
- highPriorityExceptionCount
- updatedAt

### InitiativeHealthRow

- initiativeId
- title
- ownerId
- targetBenefit
- forecastBenefit
- realizedBenefit
- benefitAtRisk
- reportedStatus
- reviewerStatus
- evidenceConfidence
- financialConfidence
- implementationConfidence
- aiConcernLevel
- nextDueDate
- topSignal
- updatedAt

### OwnerSummary

- ownerId
- initiativeCount
- targetBenefitOwned
- forecastBenefitOwned
- realizedBenefitOwned
- benefitAtRisk
- overdueUpdates
- lowConfidenceSubmissions
- needsRevisionCount
- openLeadershipDecisions
- updatedAt

### ExecutiveExceptionCard

- id
- planId
- initiativeId
- priorityScore
- title
- summary
- benefitExposure
- reportedStatus
- evidenceConfidence
- financialConfidence
- implementationConfidence
- recommendedAction
- topSignals
- updatedAt

---

# 12_PERMISSIONS_AND_SECURITY.md

## Roles

| Role | Description |
|---|---|
| Tenant Admin | Manages tenant, security, all workspaces |
| Workspace Admin | Manages workspace users and settings |
| Strategy Owner / VP | Approves baseline, reviews all initiatives, approves rubrics |
| Strategy Operations Lead | Imports plans, configures cadence/rubrics, manages update process |
| Initiative Owner | Submits updates for assigned initiatives |
| Workstream Owner | Updates assigned sub-workstreams |
| Executive Viewer | Read-only executive dashboards and approved summaries |
| Finance Reviewer | Future role for validating benefit records |
| Support Operator | Restricted audited support access |

## Permission matrix

| Action | Tenant Admin | Workspace Admin | VP | Strategy Ops | Initiative Owner | Workstream Owner | Exec Viewer |
|---|---:|---:|---:|---:|---:|---:|---:|
| Manage tenant | Yes | No | No | No | No | No | No |
| Manage workspace users | Yes | Yes | No | No | No | No | No |
| Create plan | Yes | Yes | Yes | Yes | No | No | No |
| Upload strategy source | Yes | Yes | Yes | Yes | No | No | No |
| Approve baseline | No | No | Yes | No | No | No | No |
| Configure rubrics | Yes | Yes | Yes | Yes | No | No | No |
| Approve rubrics | No | No | Yes | Optional | No | No | No |
| Submit initiative update | No | No | No | If assigned | Yes if assigned | No | No |
| Update sub-workstream | No | No | No | If assigned | If assigned | Yes if assigned | No |
| Review submissions | Yes | Yes | Yes | Yes | No | No | Read-only if approved |
| View executive dashboards | Yes | Yes | Yes | Yes | Limited | No | Yes |
| View owner accountability | Yes | Yes | Yes | Yes | Own only | Own only | Summary only |
| Override AI | Yes | Yes | Yes | Yes if reviewer | No | No | No |
| View audit logs | Yes | Yes | Optional | Optional | No | No | No |
| View usage/cost | Yes | Yes | Optional | Optional | No | No | No |

## Security requirements

1. Authentication required for all app routes.
2. Tenant and workspace isolation must be enforced server-side.
3. Consequential writes must go through Cloud Run backend APIs.
4. Firestore Security Rules must prevent unauthorized direct access.
5. Client cannot call AI providers directly.
6. Client cannot write audit or usage events directly.
7. Uploaded files must be validated by type, size, and malware scan where feasible.
8. Storage paths must be tenant/workspace scoped.
9. Signed URLs must be short-lived and permission checked.
10. Audit logs must be immutable from normal app users.
11. Model prompts and outputs require sensitive-data handling.
12. Raw sensitive demo files must be deleted or not durably stored unless approved.
13. Rate limits must protect AI, upload, and reminder endpoints.
14. Admin/support access must be logged.
15. Secrets must use managed secret storage; never frontend env variables.

## Server-authoritative write examples

These must be backend-controlled:

- baseline approval
- rubric approval
- owner update submission
- formal AI evaluation creation
- review decision
- benefit value changes
- finance validation status
- role assignment changes
- audit event creation
- usage event creation
- raw source deletion/retention state

## AI security controls

- Treat uploaded documents as untrusted input.
- Prevent prompt injection by separating system instructions from source content.
- Do not follow instructions embedded in uploaded files that attempt to alter app behavior.
- Log prompt template version and source object IDs.
- Do not expose raw prompts to unauthorized users.
- Do not use customer data for model training unless contractually approved.
- Display AI uncertainty clearly.
- Require human approval for consequential actions.

## Data retention controls

### Demo/prototype mode

- Raw source files: transient only unless approved.
- Anonymized structured data: retained for demo workspace.
- Evidence files: use anonymized/sample unless secure storage approved.
- Logs: avoid storing full sensitive source text.

### Enterprise pilot mode

- Retention controlled by contract.
- Raw and processed files may be retained according to customer-approved policy.
- Deletion/export controls required.

---

# 13_AI_AUTOMATION_AND_GUARDRAILS.md

## AI feature map

| Feature | Trigger | Model tier | Human approval | Output |
|---|---|---:|---:|---|
| Strategy extraction | Source upload | Medium/high | Required | Draft OGSM structure |
| Demo anonymization | Real source upload | High | Required | Anonymized plan data |
| Rubric suggestion | Plan setup | Medium/high | Required | Draft criteria/evidence rules |
| Reminder drafting | Due date | Low/medium | Optional | Contextual email |
| Pre-submit coaching | Owner click | Medium/high | Owner decides | Suggestions and gaps |
| Formal evaluation | Final submission | Highest | Reviewer decides | Scores, confidence, signals |
| Executive summary | Review prep | High | Reviewer/VP accepts | Briefing summary |
| Simple classification | Background | Low | No, non-consequential | Missing-field/status classification |

## Model routing principle

- Use lower-cost models for reminders, simple summaries, and classification.
- Use medium/high models for extraction and owner coaching.
- Use highest-quality model for formal evaluation, anonymization, and executive synthesis.
- Keep provider abstraction so Vertex AI/Gemini, OpenAI, or another approved provider can be used depending enterprise constraints.

## AI evaluation dimensions

Formal evaluation must assess:

1. Strategic alignment
2. Completeness
3. Evidence sufficiency
4. Financial credibility
5. Implementation health
6. Risk honesty
7. Executive readiness
8. Change integrity versus prior updates
9. Parent-child confidence consistency

## Required AI output structure

Each formal evaluation must include:

- overall quality score
- evidence confidence
- financial confidence
- implementation confidence
- strategic alignment score
- executive readiness score
- summary
- gaps
- missing evidence
- evidence inspected
- evidence linked only
- repeated-language analysis
- financial drift analysis
- execution-confidence signals
- probing questions
- recommended reviewer action
- model/provider metadata
- usage event ID

## Confidence labels

Use a five-level scale:

- Very low
- Low
- Medium
- High
- Very high

Confidence means strength of support in available evidence, not truth certainty.

## Execution-confidence signals

Use neutral language. Do not label users as dishonest.

| Signal | Meaning |
|---|---|
| Unsupported green | Green status lacks evidence support |
| Repeated language | Update closely resembles prior update |
| Stale evidence | Evidence unchanged or old |
| Missing workstreams | Material initiative lacks execution breakdown |
| Parent-child mismatch | Parent green conflicts with child yellow/red/stale state |
| Financial drift | Benefit changed without explanation/evidence |
| No downside disclosure | Complex initiative repeatedly reports no risks/blockers |
| Batch completion | Many items completed at once near review |
| Missing owner/date | Actions lack owner or due date |
| Linked-only evidence | Evidence link provided but content not inspected |
| Evidence mismatch | File does not substantiate claim |
| Ignored AI gaps | Owner submitted despite critical coaching warnings |
| No supplier proof | Supplier work claimed without attendance/output/tracker |
| No finance support | Savings claimed without baseline/calculation/validation |

## Pre-submit coaching guardrails

- Coaching is advisory.
- Owner can ignore suggestions unless plan settings require explanation.
- Critical ignored suggestions must be tracked.
- Coaching should improve clarity, not rewrite facts beyond submitted evidence.
- AI should suggest questions and evidence, not invent evidence.

## Formal evaluation guardrails

- AI cannot approve updates.
- AI cannot validate finance.
- AI cannot change owner-reported status.
- AI cannot accuse users of lying.
- AI must identify evidence limitations.
- Reviewer can override with comment.

## Anonymization guardrails

- Detect and replace people, suppliers, sites, proprietary programs, contract IDs, customer names, and sensitive terms.
- Perturb or range dollar values based on selected demo policy.
- Preserve structure, relative scale, dependencies, and issue patterns.
- Require human review before durable demo storage.

## Evaluation testing

Create a test set with synthetic examples:

1. Strong update with inspected evidence.
2. Green update with no evidence.
3. Repeated-language update.
4. Forecast benefit increase with no explanation.
5. Parent green with red sub-workstream.
6. Supplier workshop claim without attendance/output evidence.
7. Excel savings bridge present but baseline missing.
8. Link-only SharePoint evidence.
9. Owner ignores critical coaching and submits anyway.
10. Finance validation flagged weak.

Pass condition: AI consistently flags the right issues without overclaiming certainty.

---

# 14_ARCHITECTURE_DECISION_RECORD.md

## Decision summary

Use **Firebase/GCP + React + TypeScript** for the MVP.

### Chosen stack

- Frontend: React + TypeScript, likely Vite
- UI: Tailwind CSS + shadcn/ui or equivalent
- Hosting: Firebase Hosting
- Auth: Firebase Auth for prototype; enterprise SSO-ready abstraction
- App protection: Firebase App Check where applicable
- Backend: TypeScript Cloud Run services
- Small triggers: Cloud Functions where appropriate
- Data: Firestore for operational state
- Storage: Cloud Storage / Firebase Storage
- Jobs: Cloud Tasks + Cloud Scheduler
- AI: backend-only orchestration service with provider adapter
- Observability: Google Cloud Logging, Error Reporting, structured app logs
- Usage metering: Firestore UsageEvent ledger
- Reporting path: denormalized Firestore read models first; BigQuery export/replica later if needed

## Constraints

1. User specifically wants Google/Firebase and TypeScript/React.
2. MVP must support file upload, extraction, AI evaluation, reminders, dashboards, and audit logs.
3. Build should be fast enough for prototype/demo.
4. Architecture must not be a dead end for enterprise pilot.
5. AI calls must be backend-only.
6. Security must support confidential strategy and financial data.
7. Firestore read costs and dashboard query patterns must be controlled.
8. Future SSO and Microsoft integrations are likely.

## Evaluated options

1. Firebase/GCP + React + TypeScript
2. Supabase/Postgres + React + TypeScript
3. AWS serverless
4. Cloudflare stack
5. Vercel/Next.js + managed Postgres
6. Hybrid React frontend + server API + Postgres/GCP services

## Weighted scorecard

| Criterion | Weight | Firebase/GCP | Supabase/Postgres | AWS serverless | Cloudflare | Vercel + DB | Hybrid |
|---|---:|---:|---:|---:|---:|---:|---:|
| Builder familiarity/speed | 20 | 5 | 3 | 2 | 3 | 4 | 3 |
| Enterprise growth path | 15 | 4 | 3 | 5 | 3 | 3 | 4 |
| Workflow/document fit | 15 | 4 | 4 | 4 | 3 | 3 | 4 |
| Relational/reporting fit | 15 | 3 | 5 | 4 | 2 | 4 | 5 |
| AI/background jobs | 15 | 4 | 3 | 5 | 3 | 3 | 4 |
| Security/auditability | 10 | 4 | 4 | 5 | 3 | 3 | 4 |
| Cost/ops simplicity | 10 | 4 | 4 | 3 | 4 | 3 | 3 |
| Weighted total | 100 | 4.05 | 3.85 | 3.85 | 3.0 | 3.35 | 3.9 |

## Recommended architecture

Use Firebase/GCP for MVP because speed and familiarity matter, and the data model can be managed as workflow/document records with denormalized dashboard read models.

## What this avoids

- Heavy enterprise infrastructure before product fit.
- Early relational modeling overhead.
- Premature Workday/SharePoint integration.
- Direct client AI calls.
- Building a project-management clone.

## Tradeoffs

### Firestore advantages

- Fast MVP development.
- Good document/workflow fit.
- Realtime-friendly UI if needed.
- Strong Firebase ecosystem.
- Integrated auth/storage/hosting.

### Firestore risks

- Complex ad hoc reporting is harder than SQL.
- Dashboard read costs can spike if read models are not designed.
- Security rules can become complex.
- Relational constraints must be enforced in application logic.
- Migration out requires planning.

## Data/write model

- UI reads permitted documents and dashboard read models.
- Canonical business writes go through Cloud Run APIs.
- Cloud Run validates permissions, writes records, creates audit events, and updates read models.
- Firestore rules prevent unauthorized direct reads/writes.
- Background jobs update derived dashboard summaries.

## Backend service boundaries

Start as one TypeScript Cloud Run backend with internal modules:

1. `authz` — role and permission checks
2. `planImport` — source intake and extraction jobs
3. `anonymization` — real-data demo-safe processing
4. `workflow` — plans, initiatives, updates, decisions
5. `aiOrchestration` — model routing, prompts, usage logging
6. `evaluation` — formal AI scoring and signals
7. `notifications` — email reminders
8. `readModels` — dashboard summaries
9. `audit` — immutable audit event creation
10. `usage` — AI/file-processing usage ledger

Split into separate Cloud Run services later only if scaling/security boundaries require it.

## Background-job model

Use Cloud Tasks for:

- extraction jobs
- anonymization jobs
- formal AI evaluations
- read model refreshes
- notification sends
- retryable file parsing

Use Cloud Scheduler for:

- due/overdue scans
- monthly review reminder generation
- stale evidence checks
- cleanup of transient raw files
- usage summary jobs

## Security model

- Firebase Auth issues user identity.
- Backend resolves tenant/workspace/role permissions.
- Firestore rules enforce base access boundaries.
- Cloud Run authorizes consequential writes.
- Storage access is mediated by signed URLs or backend checks.
- AI keys live only in backend secrets.
- Audit and usage events are server-authored.

## Failure modes and mitigations

| Failure mode | Mitigation |
|---|---|
| AI extraction wrong | Human extraction review and confidence labels |
| AI overconfident | Confidence language, evidence lists, human approval |
| Firestore dashboard costs high | Denormalized read models, query limits, caching |
| Raw sensitive file retained accidentally | Demo retention mode, deletion job, audit checks |
| Reminder duplicates | Idempotency keys for notification jobs |
| Formal evaluation reruns too often | Source/update version hash and explicit rerun control |
| Security rules too permissive | Backend authorization tests and rule tests |
| Vendor model unavailable | Provider adapter and fallback queue |

## Cost/ops implications

- MVP ops burden is moderate-low.
- Primary cost drivers: AI evaluations, file parsing, storage, Firestore reads, background jobs.
- UsageEvent ledger required from day one.
- Dashboard read models prevent expensive fan-out reads.
- AI reruns should be explicit and cached by input hash.

## Scaling path

1. MVP single tenant/workspace.
2. Multi-workspace per tenant.
3. Enterprise SSO and stricter IAM/logging.
4. BigQuery export/reporting replica for analytics.
5. Microsoft Graph integration for SharePoint/Teams.
6. Finance validation workflow.
7. Separate Cloud Run services if needed.

## Migration/exit strategy

- Keep domain models in TypeScript independent from Firestore SDK where practical.
- Store records with explicit IDs and version fields.
- Export Firestore collections regularly.
- Use BigQuery/export path for reporting and backup.
- Keep AI provider abstraction independent of one model vendor.
- Avoid storing business logic only in Firestore rules.

## Rejected alternatives

### Supabase/Postgres

Strong relational/reporting fit, but lower familiarity and potentially slower MVP. Reconsider if financial reporting or relational constraints dominate earlier than expected.

### AWS serverless

Strong enterprise controls but heavier operational and setup burden for this MVP.

### Cloudflare stack

Good edge platform but weaker fit for file-heavy AI workflow, enterprise GCP path, and builder familiarity.

### Vercel/Next.js + managed DB

Good frontend velocity, but Firebase/GCP gives a stronger aligned backend/storage/job path for this builder and use case.

---

# 15_BILLING_USAGE_AND_AI_ECONOMICS.md

## Commercial model

MVP should be treated as an enterprise pilot, not self-serve SaaS.

Recommended commercial structure later:

- annual enterprise base fee
- seat band or department/workspace fee
- included AI usage pool
- overage or fair-use policy
- optional modules for finance validation, Microsoft integration, and advanced analytics

## MVP billing requirements

Do not build payment processing in MVP.

Do build:

- usage ledger
- AI cost estimates
- tenant/workspace usage dashboard
- admin budget alerts
- feature entitlement structure

## Usage events

Track:

| Event | Unit |
|---|---|
| Strategy extraction | per run / file / token |
| Anonymization | per run / file / token |
| File parsing | per file / page |
| AI coaching | per run |
| Formal AI evaluation | per submitted update |
| Executive summary | per generation |
| Reminder drafting | per batch |
| Read model generation | internal non-billable |

## UsageEvent fields

- eventId
- tenantId
- workspaceId
- userId
- featureKey
- eventType
- sourceObjectId
- modelProvider
- modelName
- inputTokens
- outputTokens
- estimatedCost
- billable
- requestId
- createdAt
- metadata

## AI cost controls

1. Backend-only AI calls.
2. Model routing by task complexity.
3. Prompt and output length caps.
4. Cache extraction/evaluation by source/update hash.
5. Explicit rerun controls.
6. Monthly workspace usage budget.
7. Rate limits by user/workspace.
8. Batch reminders.
9. Use smaller models for reminders/classification.
10. Use premium model only for formal evaluation/anonymization/executive synthesis.

## Entitlement concepts

Even for MVP, define:

- max active plans
- max users
- max monthly AI evaluations
- max file upload size
- max source extraction runs
- max stored evidence size
- enabled modules
- enabled integrations

## Admin usage screen

Show:

- month-to-date AI runs
- estimated cost
- usage by feature
- usage by model/provider
- top users/workspaces
- failed runs
- budget warnings

---

# 16_ANALYTICS_AND_SUCCESS_METRICS.md

## Product analytics events

### Plan setup

- plan_created
- source_uploaded
- extraction_started
- extraction_completed
- extraction_failed
- anonymization_started
- anonymization_approved
- baseline_sent_for_approval
- baseline_approved
- rubric_created
- rubric_approved

### Execution

- reminder_sent
- update_started
- update_saved
- ai_coach_started
- ai_coach_completed
- suggestion_applied
- suggestion_ignored
- update_submitted
- formal_evaluation_started
- formal_evaluation_completed
- review_decision_created
- revision_requested
- initiative_escalated

### Dashboard

- dashboard_opened
- exceptions_opened
- owner_view_opened
- initiative_opened
- evaluation_opened
- executive_summary_exported

### Usage/security

- role_changed
- file_uploaded
- raw_source_deleted
- audit_exported
- usage_dashboard_opened

## Success metrics

| Metric | Target direction |
|---|---|
| On-time update rate | Increase |
| Evidence completeness | Increase |
| Low-confidence green count | Decrease over time, but high discovery early is good |
| Revision rate after AI coaching | Decrease |
| AI suggestion adoption | Increase |
| Benefit at risk surfaced before review | Increase early visibility |
| Monthly review prep time | Decrease |
| Finance validation weakness rate | Decrease |
| Repeated-language update rate | Decrease |
| Average formal evaluation quality score | Increase |

## Pilot success definition

The pilot succeeds if the VP/strategy owner can identify under-evidenced, financially weak, stale, or at-risk initiatives earlier than with current decks/email/status meetings.

## Dashboard KPIs

- Total target benefit
- Forecast benefit
- Realized benefit
- Benefit at risk
- Overdue updates
- Low-confidence green initiatives
- High-dollar weak finance claims
- Initiatives missing required evidence
- Sub-workstreams stale
- Owner updates due before monthly review

---

# 17_MVP_SCOPE_AND_NON_GOALS.md

## MVP scope

### Must have

1. React + TypeScript frontend.
2. Firebase/GCP backend stack.
3. OGSM plan import from existing materials.
4. AI extraction with confidence labels.
5. Human baseline approval.
6. Initiative/owner/cadence setup.
7. Benefit tracking: target, forecast, realized.
8. Evidence upload/link handling.
9. Lightweight sub-workstream pulse.
10. Email reminders.
11. Owner update form.
12. AI pre-submit coaching.
13. Formal AI evaluation.
14. Execution-confidence signals.
15. OGSM dashboard.
16. Executive exceptions.
17. Owner accountability view.
18. Audit events.
19. Usage events.
20. Demo-safe anonymization workflow.

### Should have

- Rubric suggestion by AI.
- Evidence library.
- Usage/cost dashboard.
- Exportable executive summary.
- Basic admin/user management.

### Could have

- Teams notification.
- SharePoint link preview.
- More advanced charts.
- Bulk owner reminders.

## Explicit non-goals

1. Workday integration.
2. Full SharePoint file reading.
3. ERP/procurement integration.
4. Finance validation workflow.
5. Supplier-facing portal.
6. Full project management.
7. Gantt charts.
8. HR performance management.
9. Public self-serve signup/billing.
10. Autonomous AI decisions.

## MVP demo data policy

Use real structure if needed, but anonymize before durable storage in prototype mode. Preserve realism while replacing sensitive identifiers and perturbing financial values unless exact retention is approved.

---

# 18_IMPLEMENTATION_PHASES.md

## Phase 0 — Confirm spec and demo constraints

- Confirm OGSM-only terminology.
- Confirm demo data anonymization policy.
- Confirm default sub-workstream threshold.
- Confirm Firebase/GCP project ownership.
- Confirm AI provider options.

## Phase 1 — Repo and infrastructure scaffold

- Create React + TypeScript frontend.
- Set up Firebase project.
- Configure Firebase Hosting/Auth/Firestore/Storage.
- Scaffold TypeScript Cloud Run backend.
- Add emulator/local dev setup.
- Add lint/test/format commands.

## Phase 2 — Auth, roles, and security foundations

- Implement login.
- Implement role assignment model.
- Implement backend auth middleware.
- Implement Firestore rules baseline.
- Implement audit event helper.

## Phase 3 — Core domain model

- Implement plans, versions, line items, initiatives, benefits, workstreams, evidence metadata.
- Implement server APIs for canonical writes.
- Add TypeScript schemas and validation.

## Phase 4 — Strategy import and anonymization

- File upload/paste/link UI.
- Backend source document handling.
- Anonymization flow.
- Extraction run state machine.
- AI extraction prompt and parser.
- Extraction review UI.

## Phase 5 — Baseline approval and setup

- Baseline approval screen.
- Plan version creation.
- Rubric/evidence setup.
- Cadence setup.
- Initiative owner assignment.

## Phase 6 — Owner update workflow

- Reminder jobs.
- Owner update form.
- Evidence upload/link.
- Sub-workstream pulse.
- Benefit change tracking.

## Phase 7 — AI coaching and formal evaluation

- AI orchestration service.
- Pre-submit coaching.
- Formal evaluation.
- Execution-confidence signals.
- Usage ledger.
- Evaluation UI.

## Phase 8 — Dashboards

- Denormalized read models.
- OGSM dashboard.
- Executive exception dashboard.
- Owner accountability view.
- Initiative detail page.

## Phase 9 — Analytics, audit, and usage admin

- Audit log screen.
- Usage/cost dashboard.
- App analytics events.
- Export executive summary.

## Phase 10 — Security review and pilot hardening

- Authorization tests.
- Firestore rule tests.
- File upload tests.
- AI guardrail tests.
- Data retention/deletion checks.
- Load/cost sanity tests.

## Phase 11 — Demo preparation

- Create synthetic/anonymized procurement data set.
- Load sample OGSM.
- Prepare demo scripts:
  - import flow
  - owner update flow
  - low-confidence green detection
  - executive exception review

---

# 19_RISKS_AND_OPEN_QUESTIONS.md

## Top risks

| Risk | Severity | Mitigation |
|---|---:|---|
| AI evaluates incorrectly | High | Human approval, confidence labels, source evidence references |
| Users feel accused | High | Use neutral execution-confidence language |
| Raw sensitive data mishandled | High | Transient processing, anonymization, deletion, secure retention policy |
| Firestore reporting limits | Medium | Denormalized read models, BigQuery path later |
| Becomes project-management clone | Medium | Lightweight workstream pulse only |
| Financial validation too weak | Medium | MVP flags weakness; phase 2 finance workflow |
| AI costs spike | Medium | Usage ledger, model routing, caching, budgets |
| Owner accountability politically sensitive | Medium | Permission-gate metrics; avoid HR framing |
| Enterprise SSO/security needed early | Medium | Design auth abstraction now, implement after demo if needed |
| Messy strategy docs parse poorly | Medium | Human extraction review, confidence flags, manual edits |

## Open questions

1. Default sub-workstream threshold: `$500K` expected benefit?
2. Dollar handling for demo data: perturb exact values or convert to ranges?
3. Raw source retention: delete immediately after anonymized extraction in prototype mode?
4. First demo emphasis: strategy import versus execution health review?
5. Should first demo include owner update flow end-to-end?
6. Which AI provider is acceptable for prototype and enterprise pilot?
7. What file size limits should MVP enforce?
8. Is SSO required before any Thermo Fisher stakeholder touches the app?
9. Who can see owner accountability view in pilot?
10. What minimum evidence is required for VAVE workshop claims?

## Recommended defaults

1. Threshold: `$500K`, configurable.
2. Demo values: perturb while preserving relative magnitude.
3. Raw source: delete after anonymized extraction unless secure retention approved.
4. Demo: show both import and execution health.
5. Include one owner update flow.
6. Use provider abstraction; default to GCP-native AI if enterprise alignment matters.
7. Start conservative file size limits.
8. Prototype can use Firebase Auth; enterprise pilot likely needs SSO.
9. Owner accountability: VP/admin only.
10. VAVE evidence: workshop deck, attendance/output, opportunity tracker, savings bridge.

---

# 20_UI_DIRECTION.md

## UI thesis

The interface should feel like a serious enterprise execution cockpit, not a generic SaaS dashboard. It should help a VP or strategy operations lead quickly answer:

> Which initiatives are financially material, reported as healthy, but weakly supported by evidence?

## Visual style

- Tone: credible, sober, executive-ready.
- Layout: left nav, top plan context bar, dense but readable content cards.
- Palette: navy/slate structure, white surfaces, muted blue actions, amber risk warnings, red critical issues, green success sparingly.
- Typography: compact modern sans-serif.
- Charts: simple benefit trends, confidence heatmaps, exception cards.
- Avoid: fake AI gradients, cartoonish visuals, meaningless metrics, overly colorful OKR style.

## Key UI patterns

### Confidence chips

Show separate chips for:

- Owner Status
- Evidence Confidence
- Financial Confidence
- Implementation Confidence
- Reviewer Status

### Exception cards

Cards should combine:

- title
- owner
- benefit exposure
- reported status
- confidence issue
- AI concern
- recommended action

### Evidence badges

- Inspected
- Linked only
- Missing
- Stale
- Weak
- Mismatched

### Financial cards

- Target benefit
- Forecast benefit
- Realized benefit
- Benefit at risk
- Validation status

## Main screens to visually prototype first

1. Executive Exception Dashboard
2. OGSM Execution Dashboard
3. Initiative Detail + AI Evaluation Panel
4. Strategy Import / Extraction Review

## Existing generated visual direction

A first high-resolution product design mockup was generated showing the execution health cockpit, OGSM dashboard, initiative detail, AI pre-submit coach, sub-workstreams, strategy import flow, architecture overview, tech stack, and enterprise readiness sections. Treat that as a visual mood board, not final UI.

## Implementation guidance

- Build React components around real data contracts, not static mockups.
- Use mock fixtures only in development/demo mode.
- Keep dashboard widgets composable.
- Avoid large monolithic dashboard files.
- Separate UI presentation from data loading and permission logic.

---

# 21_IMAGE_PROMPTS.md

## Image generation workflow

Generate visual mockups in batches. Do not generate every screen at once.

Batch 1:

1. Executive Exception Dashboard
2. OGSM Execution Dashboard
3. Initiative Detail and AI Evaluation
4. Strategy Import / Extraction Review

## Prompt 1 — Executive Exception Dashboard

Create a polished enterprise SaaS dashboard mockup for an AI-assisted procurement strategy execution cockpit. The screen is titled “Executive Exceptions.” It is used by a VP of Global Supply Chain reviewing VAVE and cost-out initiatives before a monthly executive review. The UI has a left navigation rail, a top context bar showing “FY26 Global Supply Chain Plan,” and a main dashboard with KPI cards for Target Benefit, Forecast Benefit, Realized Benefit, Benefit at Risk, Low-Confidence Green Items, and Overdue Updates. Below, show prioritized exception cards such as “Supplier VAVE Wave — Green reported / Low financial confidence,” “Resin Cost-Out — Forecast increased without evidence,” and “Supplier Workshops — Stale workstream evidence.” Include chips for owner-reported status, AI evidence confidence, financial confidence, implementation confidence, and reviewer status. Use a professional enterprise visual style: navy/slate structure, white cards, muted blue actions, amber/red risk indicators, compact tables, no gimmicky AI gradients. Aspect ratio 16:9.

## Prompt 2 — OGSM Execution Dashboard

Create an enterprise B2B SaaS screen for an OGSM-style execution dashboard for procurement cost-out strategy. Show a hierarchical plan tree with Objectives, Goals, Strategies, Measures, and Initiatives. Each initiative row includes owner, target benefit, forecast benefit, realized benefit, owner-reported status, AI evidence confidence, financial confidence, implementation confidence, due date, and reviewer-approved status. Include a right-side insight panel titled “AI Confidence Notes” summarizing unsupported green statuses, stale evidence, and missing finance validation. Visual style should be sober, credible, executive-ready, using slate/navy, white surfaces, compact grids, subtle confidence heatmap chips, and clear financial rollups. Aspect ratio 16:9.

## Prompt 3 — Initiative Detail and AI Evaluation

Create a detailed enterprise SaaS initiative page for a procurement VAVE initiative called “Strategic Supplier VAVE Workshop Wave.” Show breadcrumb context within the annual plan, target/forecast/realized benefit cards, owner-reported status, reviewer status, and a workstream pulse table. Include an AI Evaluation panel with scores for quality, evidence confidence, financial confidence, implementation confidence, repeated-language detection, stale evidence, missing supplier proof, and weak finance validation. Show an evidence section listing uploaded PowerPoint, Excel savings bridge, and SharePoint link with inspection status badges. Visual style should feel like a serious internal enterprise review tool, not a generic project manager. Aspect ratio 16:9.

## Prompt 4 — Strategy Import / Extraction Review

Create a SaaS setup screen where a strategy operations lead uploads an existing PowerPoint or Excel strategy document and AI converts it into an OGSM structured plan. Show an upload/source panel on the left, an extracted hierarchy tree in the center, and a right-side confidence/missing-fields panel. Include example extracted items: objective, goal, strategy, measure, initiative, owner, expected benefit, evidence requirement. Use confidence labels such as High, Medium, Low, Needs Owner Input. Include an approval step indicator: Upload Source → AI Extraction → Human Review → VP Approval → Baseline Version 1.0. Use clean enterprise styling with navy/slate, white cards, muted blue primary actions, and amber confidence warnings. Aspect ratio 16:9.

## Prompt 5 — Owner AI Pre-Submit Coach

Create a screen mockup for an initiative owner preparing a monthly update in an AI-assisted procurement strategy execution app. The page shows the owner’s draft update on the left and an AI coaching panel on the right. The AI panel includes “What’s strong,” “What’s missing,” “Financial support gaps,” “Suggested rewrite,” and “Likely executive questions.” Include actions: Apply Suggestion, Add Evidence, Ignore, Submit Anyway. Visual style should be enterprise, calm, and credible. Avoid playful AI visuals. Aspect ratio 16:9.

---

# 22_AGENTS.md

## Project purpose

Build an AI-assisted OGSM strategy execution cockpit for procurement and supply-chain cost-out initiatives. The app imports existing strategy materials, converts them into a structured OGSM plan, tracks initiatives and financial benefit, collects owner updates, AI-coaches submissions, formally evaluates evidence and financial confidence, and surfaces executive exceptions.

## Source of truth

Read these docs before coding:

- Product: `02_PRD.md`, `03_APP_SPEC.md`
- Workflows: `05_USER_JOURNEYS.md`, `06_WORKFLOWS_AND_STATES.md`
- Features/screens: `07_FEATURE_INVENTORY.md`, `08_SCREEN_INVENTORY.md`, `09_SCREEN_SPECS.md`
- Data/domain: `10_DOMAIN_MODEL.md`, `11_DATA_MODEL.md`
- Security: `12_PERMISSIONS_AND_SECURITY.md`
- AI: `13_AI_AUTOMATION_AND_GUARDRAILS.md`
- Architecture: `14_ARCHITECTURE_DECISION_RECORD.md`
- Billing/usage: `15_BILLING_USAGE_AND_AI_ECONOMICS.md`
- Implementation: `18_IMPLEMENTATION_PHASES.md`, `24_IMPLEMENTATION_TRACKER.md`, `25_CODEX_PROMPT_PACK.md`

## Architecture decision

Use Firebase/GCP + React + TypeScript.

Do not change the architecture without updating the ADR and AI_CONTEXT.md.

## Coding standards

- TypeScript throughout frontend/backend.
- Prefer small focused modules.
- Avoid files over roughly 800 lines unless justified.
- Separate UI, data fetching, validation, authorization, side effects, and domain logic.
- Use shared schemas/types for API contracts.
- Avoid direct frontend writes for canonical business actions.
- Use server APIs for approvals, submissions, evaluations, benefit changes, role changes, audit events, and usage events.

## Security rules

- No AI/model keys in frontend.
- No hardcoded secrets.
- All consequential writes server-authorized.
- Audit meaningful state changes.
- Treat uploaded documents as untrusted input.
- Do not store raw sensitive demo files durably unless explicitly approved.
- Enforce tenant/workspace isolation.

## AI rules

- AI is advisory.
- AI cannot approve baseline, approve updates, validate finance, or accuse users.
- Formal evaluations must show evidence inspected versus linked-only.
- Every AI call must create a UsageEvent.
- Prompt templates must be versioned.

## Documentation update rules

Update `AI_CONTEXT.md` when any of these change:

- architecture
- routes
- domain/data model
- billing/usage model
- AI model routing
- deployment topology
- security boundaries
- source-of-truth docs

Update the implementation tracker after each phase.

## Guardrails

Do not expand beyond MVP without explicit approval. Do not add Workday, SharePoint API, Teams, finance workflow, or ERP integration unless the spec is updated.

---

# 23_AI_CONTEXT.md

Status: Draft  
Last updated: 2026-05-11

## Project identity

- Product: Strategic Cost-Out Execution Cockpit
- Customer type: Enterprise procurement / global supply-chain department
- MVP wedge: OGSM import + evidence-backed execution health review
- Primary users: VP strategy owner, strategy operations lead, initiative owners, reviewers, executive viewers
- Primary problem: self-reported green statuses and savings claims lack evidence, financial confidence, and implementation transparency

## Current stack summary

- Frontend: React + TypeScript
- UI: Tailwind CSS + shadcn/ui or equivalent
- Hosting: Firebase Hosting
- Auth: Firebase Auth prototype; SSO-ready design
- Backend: Cloud Run TypeScript services
- Data: Firestore
- Storage: Cloud Storage / Firebase Storage
- Jobs: Cloud Tasks + Cloud Scheduler
- AI: backend-only orchestration service with provider adapter
- Billing/usage: internal UsageEvent ledger
- Observability: Google Cloud Logging + app audit logs

## Architecture decision summary

See `14_ARCHITECTURE_DECISION_RECORD.md`.

## Non-negotiable invariants

1. Visible framework term is OGSM.
2. Owner-reported status is not authoritative by itself.
3. AI recommends; humans approve.
4. Financial benefit is tracked separately as target, forecast, and realized.
5. Evidence inspection status must be explicit.
6. Raw sensitive demo source should not be durably stored before anonymization unless approved.
7. Canonical writes require server authorization and audit events.
8. Every AI run creates usage metadata.

## Authoritative doc map

- Product: `02_PRD.md`, `03_APP_SPEC.md`
- Customer/users: `01_CUSTOMER_AND_MARKET_OVERVIEW.md`, `04_USERS_PERSONAS_AND_JTBD.md`
- Journeys/workflows: `05_USER_JOURNEYS.md`, `06_WORKFLOWS_AND_STATES.md`
- Features/screens: `07_FEATURE_INVENTORY.md`, `08_SCREEN_INVENTORY.md`, `09_SCREEN_SPECS.md`
- Domain/data: `10_DOMAIN_MODEL.md`, `11_DATA_MODEL.md`
- Security: `12_PERMISSIONS_AND_SECURITY.md`
- AI: `13_AI_AUTOMATION_AND_GUARDRAILS.md`
- Architecture: `14_ARCHITECTURE_DECISION_RECORD.md`
- Usage/economics: `15_BILLING_USAGE_AND_AI_ECONOMICS.md`
- Scope/phases: `17_MVP_SCOPE_AND_NON_GOALS.md`, `18_IMPLEMENTATION_PHASES.md`
- Implementation: `24_IMPLEMENTATION_TRACKER.md`, `25_CODEX_PROMPT_PACK.md`

## Task routing

- Need to add a screen? Read `08` and `09` first.
- Need to change data model? Read `10`, `11`, `12`, then update this file.
- Need to add an AI feature? Read `13` and `15`, then add usage event.
- Need to change stack? Update `14` and this file.
- Need to add an integration? Update PRD, app spec, ADR, security, usage, and tracker.

---

# 24_IMPLEMENTATION_TRACKER.md

| Phase | Task | Status | Dependencies | Acceptance Criteria | Files/Areas | Validation | Notes |
|---|---|---|---|---|---|---|---|
| 0 | Confirm spec, OGSM naming, stack | Complete | None | User approved Firebase/GCP + React/TS | docs | Manual review | OGSM only |
| 0 | Confirm demo anonymization policy | Not started | User data sample | Policy selected | docs/security | Manual review | Default: delete raw after extraction |
| 1 | Scaffold frontend | Not started | Phase 0 | React/TS app runs | frontend | npm test/build | Use Vite or equivalent |
| 1 | Scaffold Firebase/GCP | Not started | Phase 0 | Hosting/Auth/Firestore/Storage configured | infra | emulator/deploy dry run | |
| 1 | Scaffold Cloud Run backend | Not started | Phase 0 | TypeScript API deploys locally | backend | tests | |
| 2 | Auth and RBAC | Not started | Phase 1 | Role tests pass | auth/backend | unit/integration | |
| 2 | Audit helper | Not started | Phase 1 | Server writes audit events | backend | tests | |
| 3 | Domain schemas | Not started | Phase 2 | Types/validation pass | shared/domain | tests | |
| 3 | Plan/initiative APIs | Not started | Phase 3 | CRUD through server APIs | backend | integration | No direct client canonical writes |
| 4 | Source upload | Not started | Phase 3 | Supported files accepted | frontend/backend/storage | tests | |
| 4 | Anonymization flow | Not started | Upload | Anonymized output approved | ai/backend | test cases | Critical |
| 4 | AI extraction | Not started | Upload/AI adapter | Draft OGSM created | ai/backend | sample docs | |
| 5 | Extraction review UI | Not started | Extraction API | Admin can edit draft | frontend | UI tests | |
| 5 | Baseline approval | Not started | Extraction review | Plan Version 1.0 created | frontend/backend | integration | VP only |
| 6 | Initiative setup | Not started | Baseline | Owners/benefits/cadence configured | frontend/backend | tests | |
| 6 | Reminder engine | Not started | Cadence | Emails logged/sent | jobs/backend | job tests | |
| 7 | Owner update form | Not started | Initiative setup | Owner can draft/submit | frontend/backend | integration | |
| 7 | Evidence upload/link | Not started | Update form | Evidence status tracked | storage/backend | tests | |
| 8 | AI coaching | Not started | Update draft | Coaching output stored | ai/backend/frontend | eval tests | |
| 8 | Formal evaluation | Not started | Submitted update | Scores/signals generated | ai/backend | eval tests | Highest-tier model |
| 9 | Dashboards | Not started | Read models | OGSM/exceptions/owner views work | frontend/backend | UI/integration | |
| 9 | Read model jobs | Not started | Domain data | Summaries update correctly | backend/jobs | tests | |
| 10 | Usage/cost dashboard | Not started | Usage events | AI usage visible | frontend/backend | tests | |
| 10 | Audit log screen | Not started | Audit events | Admin can filter/export | frontend | UI tests | |
| 11 | Security review | Not started | All MVP | Checklist complete | all | manual/test | OWASP-style |
| 11 | Demo fixtures | Not started | MVP screens | Demo tells end-to-end story | fixtures | manual | Include low-confidence green |

---

# 25_CODEX_PROMPT_PACK.md

## Prompt 1 — Read docs and summarize, do not code

Read the full documentation suite. Summarize the product, MVP scope, locked architecture, core data model, security invariants, AI guardrails, and implementation phases. Do not write code yet. Identify contradictions, missing assumptions, and risks. Confirm that visible framework naming is OGSM only.

## Prompt 2 — Scaffold repo

Create a TypeScript monorepo for the Strategic Cost-Out Execution Cockpit. Include `apps/web` for React + TypeScript frontend and `apps/api` for Cloud Run TypeScript backend. Add shared packages for domain schemas, API types, authz, and utilities. Add lint, format, test, build scripts. Do not implement business logic yet.

## Prompt 3 — Add AGENTS.md and AI_CONTEXT.md

Add `AGENTS.md` and `AI_CONTEXT.md` to the repo using the generated docs. Ensure they point to the authoritative spec files. Add a rule that AI_CONTEXT.md must be updated when architecture, data model, routes, billing/usage, AI routing, or deployment topology changes.

## Prompt 4 — Implement auth and RBAC foundation

Implement Firebase Auth integration in the React app and backend auth middleware in Cloud Run. Add role assignment types and permission checks for tenant admin, workspace admin, strategy owner, strategy ops, initiative owner, workstream owner, executive viewer, and future finance reviewer. Add tests for role checks.

## Prompt 5 — Implement domain schemas

Implement TypeScript schemas for Tenant, Workspace, User, RoleAssignment, Plan, SourceDocument, ExtractionRun, AnonymizationRun, ExtractedPlanDraft, PlanVersion, PlanLineItem, Initiative, BenefitRecord, SubWorkstream, EvidenceItem, OwnerUpdate, AIEvaluation, ExecutionConfidenceSignal, ReviewDecision, AuditEvent, and UsageEvent. Use runtime validation. Do not add fields outside the spec without documenting why.

## Prompt 6 — Implement server-authoritative plan APIs

Create backend APIs for creating plans, source document metadata, extracted drafts, plan versions, line items, initiatives, benefits, and rubrics. Ensure all meaningful writes perform server-side authorization and create audit events. Do not allow direct frontend writes for approvals or canonical workflow transitions.

## Prompt 7 — Implement source upload and strategy import UI

Build `/plans/:planId/import` with upload, paste text, paste image placeholder, and link input. Support metadata capture and job creation. Enforce file type/size validation. Add loading/error states. Use mock extraction until AI service is ready.

## Prompt 8 — Implement anonymization workflow

Build the demo-safe anonymization flow. Add backend job state, AI adapter stub, replacement review UI, dollar treatment setting, and raw deletion status. Ensure durable demo storage contains anonymized records unless raw retention is explicitly approved.

## Prompt 9 — Implement AI extraction review

Build extraction run handling and `/plans/:planId/extraction-review`. Show extracted OGSM hierarchy, confidence chips, missing fields, and unmapped content. Allow edit, merge, split, remap, add owner, add benefit, and send to approval.

## Prompt 10 — Implement baseline approval

Build `/plans/:planId/approval`. Only strategy owner/VP can approve. Approval creates Plan Version 1.0 and audit event. Execution cycles cannot begin until approval.

## Prompt 11 — Implement initiative setup and benefit model

Build initiative setup APIs/UI. Track owner, cadence, target/forecast/realized benefit, benefit type, baseline, calculation method, validation status, evidence requirements, and sub-workstream threshold. Add material initiative rules.

## Prompt 12 — Implement reminders and owner update workflow

Implement update cycles, contextual reminder jobs, owner update form, evidence upload/link, workstream pulse, and benefit change tracking. Add idempotency keys for reminder jobs.

## Prompt 13 — Implement AI pre-submit coaching

Implement AI coaching service with prompt template versioning, usage events, and UI for strengths, missing items, financial gaps, suggested rewrite, and likely executive questions. Owner can apply, ignore, add evidence, or submit anyway.

## Prompt 14 — Implement formal AI evaluation

Implement formal evaluation service using rubric, update content, prior submission, evidence status, benefit record, and workstream pulse. Generate scores, confidence levels, execution-confidence signals, probing questions, and recommended reviewer action. AI cannot approve final status.

## Prompt 15 — Implement review decision workflow

Build submitted update review and formal evaluation screens. Add actions: approve, approve with caveat, request revision, escalate, mark finance validation weak, mark pending leadership decision. Require comments for overrides. Create audit events.

## Prompt 16 — Implement dashboard read models

Build backend read model generation for PlanDashboardSummary, InitiativeHealthRow, OwnerSummary, and ExecutiveExceptionCard. Avoid expensive fan-out reads in UI. Add update jobs after relevant state changes.

## Prompt 17 — Implement dashboards

Build OGSM Execution Dashboard, Executive Exceptions, Owner Accountability, Initiative List, and Initiative Detail. Use mock data only as fixtures. Separate owner status, evidence confidence, financial confidence, implementation confidence, and reviewer status visually.

## Prompt 18 — Implement usage and audit screens

Build Usage & Cost Dashboard and Audit Log. Ensure every AI run creates UsageEvent and every critical workflow transition creates AuditEvent.

## Prompt 19 — Add tests and security review

Add unit, integration, and UI tests for authz, plan approval, owner submission, AI evaluation creation, review decisions, usage events, audit events, file handling, and Firestore rules. Run OWASP-style review checklist.

## Prompt 20 — Prepare demo

Create anonymized procurement/VAVE sample data. Include at least one strong update, one unsupported green update, one repeated-language update, one weak finance validation, and one parent-child mismatch. Prepare demo flow: import → extraction → approval → owner update → AI coaching → formal evaluation → executive exception.

---

# 26_HANDOFF_README.md

## What this package is

This documentation suite defines the MVP for Strategic Cost-Out Execution Cockpit, an AI-assisted OGSM execution health platform for procurement/global supply-chain cost-out initiatives.

## What to build first

Build the smallest end-to-end demo that proves:

1. Existing OGSM-like source import.
2. AI extraction into structured OGSM.
3. Human approval of baseline.
4. Owner update submission.
5. AI coaching.
6. Formal AI evaluation.
7. Executive exception dashboard showing low-confidence green and weak financial validation.

## What not to build first

- Workday integration
- SharePoint API file reading
- Teams integration
- finance approval workflow
- supplier portal
- full project management
- self-serve billing

## Demo narrative

1. “Here is last year’s messy strategy deck/tracker.”
2. “The app converts it into an OGSM execution model.”
3. “The VP approves the baseline and evidence rules.”
4. “Owners submit updates before the monthly review.”
5. “AI coaches owners before they submit.”
6. “AI catches a green update with weak financial evidence and stale workstreams.”
7. “The executive dashboard surfaces the issue before the meeting.”

## Key implementation warnings

- Do not trust owner status alone.
- Do not let AI approve anything consequential.
- Do not store raw sensitive demo data unless approved.
- Do not expose AI keys to the client.
- Do not build dashboards from expensive fan-out queries.
- Do not frame owner view as HR performance management.

---

# 27_CHANGE_CONTROL_AND_LEARNING_LOOP.md

## When to run change review

Run after:

- customer demo
- user testing session
- uploaded real OGSM sample analysis
- AI extraction failure
- AI evaluation false positive/negative
- security finding
- cost surprise
- new integration request
- stakeholder request for finance validation
- dashboard usability feedback

## Change impact template

For each proposed change, document:

- change summary
- source of evidence
- affected personas
- affected journeys
- affected screens
- affected domain/data model
- affected permissions/security
- affected AI automation/evals
- affected billing/usage
- affected architecture/ADR
- risk level
- MVP vs phase 2 recommendation
- docs to update
- Codex prompts needed
- validation plan

## Examples

### Change: Add SharePoint direct file reading

Affected docs:

- PRD
- App spec
- Integration model
- Security
- Data model
- AI guardrails
- ADR
- Usage economics
- Implementation tracker

Risks:

- Microsoft Graph permissions
- enterprise consent
- file access auditability
- evidence inspection trust
- data retention

Recommendation: Phase 2 unless pilot requires it.

### Change: Add finance reviewer workflow

Affected docs:

- Personas
- Workflows
- Screens
- Data model
- Permissions
- Billing/usage
- AI evaluation

Recommendation: Phase 2 after MVP proves weak validation detection.

### Change: Move from Firestore to Postgres

Affected docs:

- ADR
- Data model
- AI_CONTEXT
- Implementation tracker
- Codex prompts
- Security model

Recommendation: Only if reporting/relational constraints become dominant.

## Learning loop

After each demo or pilot cycle:

1. Review which AI signals were useful.
2. Review false positives and false negatives.
3. Update rubrics and prompts.
4. Update sample eval set.
5. Update screen specs if users miss key signals.
6. Update data model if fields are repeatedly missing.
7. Update implementation tracker.

## Documentation rule

No major product change is complete until the relevant docs and AI_CONTEXT.md are updated.

