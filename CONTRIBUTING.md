# 🤝 Contributing to EcoTrack Dashboard

Welcome to the Web Engineering Division workflow.

## 🔀 Branch Naming

Use:

```

feature/<name>
bugfix/<name>
hotfix/<name>
chore/<name>
docs/<name>

```

Invalid branch names fail CI.

---

## 🛠 Development Workflow

1. Create feature branch
2. Write component logic
3. Add tests
4. Ensure lint passes
5. Open PR
6. Await mentor approval

---

## 🧪 Testing Requirements

- Minimum 80% coverage
- No failing tests
- TypeScript must pass
- Prettier formatting enforced

Run locally:

```bash
npm run lint
npm run build
npm test
```

---

## 🎯 Code Review Expectations

- Clear component separation
- No business logic in UI components
- No duplicated chart logic
- Proper type safety
- Accessibility respected

---

## 🚨 Rejection Conditions

PR will be rejected if:

- CI fails
- Coverage drops
- Poor component structure
- Hardcoded styles instead of Tailwind
- Inline logic instead of extracted functions

---

Maintain professional discipline.
