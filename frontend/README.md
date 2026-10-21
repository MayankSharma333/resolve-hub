# ResolveHub - Frontend

ResolveHub ek IT service desk / ticket management tool hai. Ye uska React frontend hai, jisme Employee, Agent aur Admin ke alag dashboards hain.

## Tech Stack

- React (Vite)
- React Router
- Axios

## Chalane ke steps

```bash
npm install
npm run dev
```

App `http://localhost:5173` pe khulega. Login page pe Employee / Agent / Admin demo buttons se role choose kar sakte ho.

## Folder Structure

```text
src/
├── components/   # Navbar, Sidebar, StatCard, StatusBadge, TicketCard, TicketForm, Loading
├── pages/        # Login, Register, Dashboards, MyTickets, TicketDetails, Admin pages
├── services/     # api.js, authService, ticketService, userService
├── routes/       # AppRoutes.jsx
├── context/      # AuthContext.jsx
├── hooks/        # useAuth.js
└── utils/        # constants.js, helpers.js
```

## Status

Abhi frontend dummy data pe chal raha hai. Backend (Spring Boot) ready hone par `services/` ke through API se connect kiya jayega.