# 🌿 EcoTrack Free Tier Roadmap (Batch 2026)

Welcome to the EcoTrack Open-Source Lab. This roadmap is designed for self-motivated developers to contribute to a production-grade sustainability dashboard.

## 📜 The Rules of the Lab

1. **Self-Guided:** Mentors do not provide direct assistance for Free Tier tasks. Use the `lib/` documentation and official Next.js docs.
2. **Quality Gate:** Every PR must pass the GitHub CI (Linting, Build, and 80% Test Coverage).
3. **Clean Code:** We follow the Feature-Based Architecture. Logic belongs in `features/`, reusable UI in `components/`.

---

## 📅 Weekly Milestones

### Week 1: [ET-01] Design System Sprint

- **Objective:** Establish the visual language of EcoTrack.
- **Task:** Build three reusable UI components: `StatsCard`, `ProgressCircle`, and `ActionBadge`.
- **Constraint:** Use Tailwind CSS only. No external UI libraries (Shadcn/Mantine) allowed for this task to ensure lightweight bundles.

### Week 2: [ET-02] The Visualization Sprint

- **Objective:** Make sustainability data readable.
- **Task:** Build the `ActivityChart` component using Chart.js.
- **Constraint:** The chart must be a **Client Component** and must handle "No Data" states gracefully with a placeholder.

### Week 3: [ET-03] Input & Validation Sprint

- **Objective:** Capture user habits accurately.
- **Task:** Create the `LogHabitForm`.
- **Constraint:** Use `react-hook-form`. You must implement validation that prevents negative numbers or future-dated entries.

### Week 4: [ET-04] The Hardening Sprint

- **Objective:** Ensure the dashboard is "Launch-Ready".
- **Task:** Write Unit Tests for your Week 2 & 3 components.
- **Constraint:** Your PR will be rejected if the `npm test` coverage falls below 80%.

---

## 🚀 Ready to Start?

1. Fork the repo.
2. Pick a Week 1 task.
3. Open a PR with the title: `feat(free-tier): Week 1 - [Your Name]`

_Want a dedicated Mentor to review your code? Upgrade to **FastTrack Accelerator (₹399)**._
