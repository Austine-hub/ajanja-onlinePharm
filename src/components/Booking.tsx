import React, { useState } from "react";
import styles from "./Booking.module.css";

const Booking: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  const handleCreateAccount = () => {
    console.log("Create account clicked");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className={styles.logoText}>AjanjaCare</span>
          </div>
          <div className={styles.navigation}>
            <button className={styles.navButton}>Login</button>
            <button className={styles.navButton}>Register Now</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.loginCard}>
          {/* Card Header */}
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Login</h2>
          </div>

          {/* Card Body */}
          <div className={styles.cardBody}>
            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={styles.checkbox}
              />
              <label htmlFor="remember-me" className={styles.checkboxLabel}>
                Remember Me
              </label>
            </div>

            {/* Actions */}
            <div className={styles.buttonGroup}>
              <div className={styles.buttonRow}>
                <button onClick={handleLogin} className={styles.loginButton}>
                  Login
                </button>
                <button
                  onClick={handleForgotPassword}
                  className={styles.forgotLink}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Create Account */}
              <div className={styles.createAccountSection}>
                <p className={styles.createAccountText}>
                  Don’t have an account? Create one below.
                </p>
                <button
                  onClick={handleCreateAccount}
                  className={styles.createAccountButton}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <button className={styles.socialLink}>Facebook</button>
            <button className={styles.socialLink}>Twitter</button>
            <button className={styles.socialLink}>Instagram</button>
            <button className={styles.socialLink}>LinkedIn</button>
          </div>
          <div className={styles.copyright}>
            ©2025 AfyaBora. All rights reserved.
          </div>
          <div className={styles.contact}>
            For queries: info@afyabora.co.ke | 0746522117
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Booking;
