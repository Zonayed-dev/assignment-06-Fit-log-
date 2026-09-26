# FitLog — Workout Library

**FitLog** is a responsive workout library built with **Next.js, TypeScript, and Tailwind CSS**. It allows users to browse workouts, view detailed exercise information, add workouts to their plan, and save workouts for later.

## 🔗 Live Demo

**[Visit FitLog](https://assignment-06-fit-log-seven.vercel.app/)**

---

## 📖 About the Project

FitLog is a workout management application designed around a simple goal:

> **Train With Intent. Log Every Set.**

The application fetches workout data from an external API and presents it through a responsive workout library. Users can open individual workout details, add exercises to their plan, and save exercises for later.

---

## ✨ Features

* 🏋️ **Workout Library**

  * Browse workouts fetched from the FitLog API.
  * Responsive workout card layout.
  * Displays muscle groups, equipment, duration, calories, and rating.

* 📋 **Workout Details**

  * View detailed information for each workout.
  * Equipment and difficulty information.
  * Sets and reps.
  * Duration, calories, and rating.
  * Step-by-step workout instructions.

* ➕ **Today's Plan**

  * Add workouts to your personal workout plan.
  * View the total number of exercises.
  * Calculate total workout duration.
  * Calculate total calories.

* 💾 **Save for Later**

  * Save workouts for later access.
  * Saved workout count is displayed in the navigation bar.

* 🔢 **Live Plan & Saved Counters**

  * Navigation badges update according to the current number of planned and saved workouts.

* 💽 **Persistent Data**

  * Plan and saved workouts are stored using browser `localStorage`.
  * Data remains available after refreshing the page.

* 📱 **Responsive Design**

  * Designed for mobile, tablet, and desktop screen sizes.

* 🎨 **Dark Fitness UI**

  * Dark interface with high-contrast typography and a lime accent color.

---

## 🛠️ Technologies Used

* **Next.js** — App Router
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React** — Icons
* **Next.js Image** — Image optimization
* **React Context API** — Shared workout state
* **localStorage** — Client-side persistence
* **Vercel** — Deployment

---

## 🔌 API

FitLog uses the following external API:

```text
https://api.abcz.workers.dev/api/fitlog
```

The application fetches the workout collection and displays the data through the workout library and dynamic workout detail pages.

### Workout Data

Each workout contains information such as:

```text
id
name
image
muscleGroups
equipment
difficulty
duration
caloriesBurned
sets
reps
rating
description
instructions
```

---

## 📂 Project Structure

```text
src/
└── app/
    ├── components/
    │   ├── Footer.tsx
    │   ├── FitLogProvider.tsx
    │   ├── Navbar.tsx
    │   ├── PlanBadges.tsx
    │   ├── WorkoutActions.tsx
    │   └── WorkoutCard.tsx
    │
    ├── data/
    │   └── workouts.ts
    │
    ├── types/
    │   └── workout.ts
    │
    ├── my-plan/
    │   └── page.tsx
    │
    ├── workout/
    │   └── [id]/
    │       └── page.tsx
    │
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
│
├── public/
│   └── assets/
│       ├── banner.png
│       └── logo.png
│
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server


```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🧭 Available Routes

| Route           | Description                       |
| --------------- | --------------------------------- |
| `/`             | Workout library and hero section  |
| `/workout/[id]` | Individual workout details        |
| `/my-plan`      | User's planned and saved workouts |

---

## 🧠 State Management

FitLog uses **React Context API** through `FitLogProvider` to manage shared workout state.

The provider handles:

* Adding workouts to the plan
* Removing workouts from the plan
* Saving workouts
* Removing saved workouts
* Keeping Plan and Saved counts synchronized

The state is persisted in the browser using `localStorage`.

---

## ⚛️ React Server Components

The project uses the **Next.js App Router** and keeps components as Server Components by default.

Server Components are used for data fetching and page rendering, while Client Components are used where browser-side interaction is required, including:

* Workout actions
* Shared workout state
* `localStorage`
* Plan/Saved counters
* My Plan interactions

---

## 🖼️ External Images

Workout images are provided by the API.

The project configures the external image hostname in `next.config.ts` so that the images can be rendered using Next.js `Image`.

```text
img.magnific.com
```

---

## 🎨 Design

FitLog uses a minimal, dark fitness-focused visual style.

### Design characteristics

* Black background
* White typography
* Lime accent color
* Bold uppercase headings
* Responsive workout cards
* High-contrast buttons
* Compact workout statistics
* Mobile-friendly layout

---

## ☁️ Deployment

The application is deployed using **Vercel**.

### Production URL

**https://assignment-06-fit-log-seven.vercel.app/**

---



Built with Next.js and TypeScript as a workout library project.
