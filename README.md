# 3D Developer Portfolio

A modern, interactive, and responsive developer portfolio website built with Next.js, TypeScript, and Tailwind CSS. Featuring 3D animations, glassmorphism design, and a fully functional blog system.

## 🚀 Features

- **3D Animations:** Interactive 3D elements and smooth transitions.
- **Glassmorphism Design:** Modern UI with blur effects and semi-transparent layers.
- **Responsive Layout:** Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Blog Section:** 
  - Search and Category filtering.
  - Modal view for reading articles.
  - Estimated reading time and tags.
  - Social media integration in articles.
- **Project Showcase:** Detailed display of projects with filtering.
- **Contact Form:** Integrated email sending functionality via Resend.
- **Dark/Light Theme:** Adaptive styling for text and components.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & GSAP
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **Email Service:** [Resend](https://resend.com/)

## 📂 Project Structure

```
├── public/          # Static assets (images, models, CV)
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # Reusable React components
│   │   ├── sections/# Page sections (Hero, About, Blog, etc.)
│   │   ├── ui/      # UI primitives (Buttons, Cards, Modals)
│   ├── data/        # Configuration and static data
│   ├── lib/         # Utilities and helper functions
```

## 🏃‍♂️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdifatah-com/3D-Portfolio-.git
   cd 3D-Portfolio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your Resend API key (optional for development, required for contact form):
   ```env
   RESEND_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Blog System

The newly added Blog section features a custom implementation allowing for:
- **Filtering:** Filter posts by category (Technology, Frontend, Design, etc.).
- **Search:** Real-time search by title, description, or tags.
- **Interactive Reading:** Click on any card to open a focus modal with the full article and social sharing links.

## 👤 Author

**Abdifatah**
- Frontend Developer
- Founder of Gravity Tech Community

[GitHub](https://github.com/abdifatah-com) | [LinkedIn](https://www.linkedin.com/in/abdifatah-faisal)
