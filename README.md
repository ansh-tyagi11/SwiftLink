# LinkShortly

A modern, feature-rich URL shortening service built with Next.js, MongoDB, and NextAuth. Transform long URLs into short, shareable links with advanced analytics, user authentication, and OTP verification.

## 🚀 Features

- **URL Shortening**: Convert long URLs into compact, shareable short links
- **User Authentication**: Secure sign-up and login with NextAuth
- **OTP Verification**: Email-based OTP verification for enhanced security
- **Analytics Dashboard**: Track link clicks and visitor statistics
- **Link Management**: View, and delete your shortened links
- **User Settings**: Customize your profile and update you password
- **Dark Mode**: Full dark mode support for better user experience
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Email Notifications**: Automated emails for verification and alerts

## 📋 Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js, Argon2 (password hashing)
- **Email Service**: Nodemailer
- **Utilities**: nanoid (short ID generation), React Toastify (notifications)

## 📁 Project Structure

```
LinkShortly/
├── app/                                  # Next.js app directory (main application)
│   ├── globals.css                       # Global styles
│   ├── layout.js                         # Root layout wrapper
│   ├── page.js                           # Landing page
│   │
│   ├── (protected)/                      # Protected routes (requires authentication)
│   │   ├── layout.js                     # Protected routes layout
│   │   ├── home/
│   │   │   └── page.js                   # User dashboard/home page
│   │   ├── allLinks/
│   │   │   └── page.js                   # View all user's shortened links
│   │   ├── settings/
│   │   │   └── page.js                   # User account settings page
│   │   └── hooks/
│   │       ├── useUserData.js            # Hook for fetching user data
│   │       └── useUserLinks.js           # Hook for fetching user's links
│   │
│   ├── [shortId]/                        # Dynamic route for short link redirect
│   │   └── page.js                       # Handles short URL redirects
│   │
│   ├── api/                              # API routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js              # NextAuth configuration and handlers
│   │   ├── shorten/
│   │   │   └── route.js                  # API endpoint to create shortened URLs
│   │   ├── verify-otp/
│   │   │   └── route.js                  # OTP verification endpoint
│   │   ├── verifyUser/
│   │   │   └── route.js                  # User verification endpoint
│   │   └── logout/
│   │       └── route.js                  # Logout endpoint
│   │
│   ├── login/
│   │   └── page.js                       # Login page
│   ├── sign-up/
│   │   └── page.js                       # Sign up page
│   ├── otp/
│   │   ├── page.js                       # OTP verification page
│   │   └── VerifyClient.js               # OTP client component
│   ├── about/
│   │   └── page.js                       # About page
│   ├── contact/
│   │   └── page.js                       # Contact page
│   ├── privacy-policy/
│   │   └── page.js                       # Privacy policy page
│   │
│   └── hooks/
│       └── isActive.js                   # Hook to check if user session is active
│
├── components/                           # Reusable React components
│   ├── Navbar.js                         # Top navigation bar
│   ├── TopNavBar.js                      # Alternative top navigation
│   ├── SideBar.js                        # Sidebar component
│   ├── Footer.js                         # Footer component
│   └── SessionWrapper.js                 # Session provider wrapper
│
├── db/                                   # Database configuration
│   └── connectDB.js                      # MongoDB connection utility
│
├── models/                               # MongoDB Mongoose models
│   ├── User.js                           # User schema and model
│   ├── ShortUrl.js                       # Short URL schema and model
│   ├── Click.js                          # Click analytics schema
│   └── OtpStore.js                       # OTP storage schema
│
├── lib/                                  # Utility libraries and helpers
│   ├── mailer.js                         # Email sending utility
│   └── otpEmail.js                       # OTP email template generator
│
├── actions/                              # Server actions
│   └── useractions.js                    # User-related server actions
│
├── public/                               # Static assets
│
├── jsconfig.json                         # JavaScript configuration
├── next.config.mjs                       # Next.js configuration
├── postcss.config.mjs                    # PostCSS configuration
├── package.json                          # Project dependencies and scripts
└── README.md                             # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB instance (local or cloud)
- Email service credentials (for OTP functionality)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ansh-tyagi11/LinkShortly.git
   cd LinkShortly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```
   MONGODB_URI=mongodb://your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   GOOGLE_ID=your_googleid_here
   GOOGLE_SECRET=your_secret_key_here
   GITHUB_ID=your_githubid_here
   GITHUB_SECRET=your_secret_key_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Usage

### Creating a Shortened URL

1. Log in to your account or sign up
2. Complete OTP verification
3. Navigate to the home dashboard
4. Enter your long URL in the input field
5. Click "Shorten" to generate a short link
6. Share or copy the generated short link

### Managing Links

- **View All Links**: Go to "All Links" to see all your shortened URLs
- **Delete Link**: Remove links you no longer need
- **Analytics**: Track clicks and visitor information

### Account Settings

- Update profile information
- Change password
- Enable/disable notifications
- Manage privacy preferences

## 🔐 Authentication

LinkShortly uses **NextAuth.js** with:
- Email/password authentication
- OTP-based verification for enhanced security
- Argon2 password hashing for secure credential storage
- Session management

## 📧 Email Configuration

The application sends emails for:
- OTP verification during signup/login
- Password reset requests
- Account notifications

**Email Setup**: Configure your SMTP credentials in `.env.local`

## 🗄️ Database Models

### User
- Email, password, profile info
- Account status, verification status

### ShortUrl
- Original URL, short ID
- User reference, creation date
- Click count, expiration

### OtpStore
- Email, OTP code
- Expiration time, attempts

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Bug Reports & Support

Found a bug? Have a suggestion? 
- Open an issue on GitHub
- Contact us through the contact page
- Email: contact.linkshortly@gmail.com

## 📞 Contact

- **Email**: contact.linkshortly@gmail.com
- **Website**: [link-shortly-shortly.vercel.app](https://link-shortly-shortly.vercel.app/)
- **GitHub**: [GitHub Repository](https://github.com/ansh-tyagi11/LinkShortly)

## ✨ Acknowledgments

- Next.js for the amazing framework
- MongoDB for reliable database
- Tailwind CSS for beautiful styling
- NextAuth.js for secure authentication
- All contributors and supporters