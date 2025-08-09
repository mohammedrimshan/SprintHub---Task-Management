# 🚀 SprintHub
**Ultimate Task Management System**

SprintHub is a sleek, modern task & user management app built with Next.js frontend and Nest.js backend, rocking MongoDB and clean repo architecture. Perfect for leveling up your dev skills while building something real-world and complex.

![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)
![Next.js](https://img.shields.io/badge/Next.js-React%20Framework-black)
![Nest.js](https://img.shields.io/badge/Nest.js-Backend-red)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Why SprintHub?

### 🔐 **Authentication & Security**
- User authentication & profile editing with email/password & OAuth integration

### 📝 **Complete CRUD Operations**
- Full CRUD on tasks with status, priority & assignment management

### 👥 **Role-Based Access Control**
- Role-based access control with Users vs Admins having different powers

### 📊 **Admin Dashboard**
- Comprehensive admin dashboard for managing users, tasks & blocking users

### 🔔 **Real-time Notifications**
- Real-time notifications & sweet UI filters/search for better UX

### 📱 **Modern UI/UX**
- Clean, responsive design with intuitive user interface

## 🛠 Tech Stack

| Frontend | Backend | Database | Styling | Authentication |
|----------|---------|----------|---------|----------------|
| Next.js | Nest.js | MongoDB Atlas | Tailwind CSS | NextAuth.js |
| React | TypeScript | Mongoose | React Context | OAuth (Google) |

## 🏗 Project Structure & Features

### 📄 **Pages**
- `/signup` & `/login` - User authentication pages
- `/profile` - User information editing
- `/tasks` - Task list with filters & search functionality
- `/tasks/[id]` - Task detail & edit page
- Admin dashboard - User & task management with role-based guards

### 🔧 **API Routes**
- Comprehensive API routes for task & user CRUD with middleware

## 📁 Backend Architecture

```
taskflow-backend/
├── src/
│   ├── auth/                     # Authentication logic
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   ├── jwt.strategy.ts
│   │   └── interfaces/
│   │       └── jwt-payload.interface.ts
│   ├── users/                    # User management
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   ├── users.repository.ts
│   │   ├── schemas/
│   │   │   └── user.schema.ts
│   │   └── dto/
│   │       ├── create-user.dto.ts
│   │       ├── update-user.dto.ts
│   │       └── block-user.dto.ts
│   ├── tasks/                    # Task management
│   │   ├── tasks.module.ts
│   │   ├── tasks.service.ts
│   │   ├── tasks.controller.ts
│   │   ├── tasks.repository.ts
│   │   ├── schemas/
│   │   │   └── task.schema.ts
│   │   └── dto/
│   │       ├── create-task.dto.ts
│   │       ├── update-task.dto.ts
│   │       └── assign-task.dto.ts
│   ├── common/                   # Shared utilities
│   │   ├── repositories/
│   │   │   └── base.repository.ts
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   └── interfaces/
│   │       ├── role.enum.ts
│   │       └── base-document.interface.ts
│   ├── app.module.ts
│   ├── main.ts
│   └── config/
│       ├── database.config.ts
│       └── env.config.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### 1. 📥 Clone the Repository
```bash
git clone https://github.com/mohammedrimshan/SprintHub---Task-Management.git
```

### 2. 📦 Install Dependencies
```bash
cd SprintHub---Task-Management
npm install
```

### 3. ⚙️ Setup Environment Variables
Create a `.env` file with the following keys:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. ▶️ Run the Application
```bash
# Backend
npm run start:server

# Frontend
npm run dev
```

### 5. 🌐 Open Your Browser
Navigate to **http://localhost:3000** and start managing your tasks like a pro! 🎉

## 🛣 Future Roadmap

### ⚡ Real-time Features
Add real-time notifications with WebSockets for instant updates

### ⏱ Pomodoro Integration
Integrate Pomodoro timer for enhanced productivity tracking

### 👥 Team Collaboration
Team collaboration & chat features for better communication

### 📈 Analytics Dashboard
Advanced analytics dashboard for task progress and productivity insights

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### 🔗 Quick Links
- [View on GitHub](https://github.com/mohammedrimshan/SprintHub---Task-Management)
- [Fork Repository](https://github.com/mohammedrimshan/SprintHub---Task-Management/fork)
- [Report Issues](https://github.com/mohammedrimshan/SprintHub---Task-Management/issues)

## 📝 License

MIT License © Mohammed Rimshan

---

**Built with ❤️ for developers who love clean code and great UX**

## 📊 Project Stats

- **Language**: 100% TypeScript
- **Framework**: Next.js + Nest.js
- **Database**: MongoDB
- **Authentication**: NextAuth.js + OAuth
- **Styling**: Tailwind CSS

## 🙋‍♂️ Support

If you find this project helpful, please give it a ⭐ on GitHub!

For questions or support, feel free to:
- Open an [issue](https://github.com/mohammedrimshan/SprintHub---Task-Management/issues)
- Start a [discussion](https://github.com/mohammedrimshan/SprintHub---Task-Management/discussions)
- Contact via email (if available in profile)

---

*Happy coding! 🎯*
