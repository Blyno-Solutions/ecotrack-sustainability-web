# 🏗 EcoTrack Dashboard Architecture

## 🧠 Architectural Philosophy

EcoTrack uses a Feature-Based Frontend Architecture.

Goal:

- Scalability
- Reusability
- Maintainability
- Clear separation of concerns

---

## 📂 Layer Breakdown

### 1️⃣ App Router (`app`)

- Route-level logic
- Layout wrappers
- Server components

No heavy business logic here.

---

### 2️⃣ Components (`components`)

Reusable UI blocks:

- Buttons
- Cards
- Charts
- Layout containers

Must remain presentation-focused.

---

### 3️⃣ Features (`features`)

Each feature owns:

- Components
- Hooks
- Services
- Types

Example:

```

features/dashboard/
├── components/
├── services/
├── hooks/
└── types.ts

```

Encapsulation prevents spaghetti growth.

---

### 4️⃣ Lib (`/lib`)

Shared utilities:

- API client
- Constants
- Formatters
- Helpers

---

## 📊 Data Flow

```

Page → Feature Hook → Service → API → Response → Chart Component

```

All business calculations happen in feature layer.

---

## 🎮 Gamification Logic

Green Score calculation should:

- Be isolated in logic folder
- Be testable independently
- Not depend on UI components

---

## 📱 Responsiveness Strategy

- Mobile-first Tailwind classes
- Layout components abstracted
- Reusable spacing system

---

## 🔐 Future-Ready Design

Prepared for:

- Backend API integration
- Authentication layer
- Dark mode
- Real-time updates
- PWA support

---

## 🏢 Engineering Principles

- Clean folder boundaries
- No feature leakage
- Strict TypeScript
- CI enforced standards
- Branch protection mandatory
