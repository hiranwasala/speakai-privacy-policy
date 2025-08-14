import './App.css';

function App() {
  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
      <h1>Privacy Policy for SpeakAI</h1>
      <p><strong>Last updated:</strong> August 14, 2025</p>

      <p>
        SpeakAI (“we,” “our,” or “us”) values your privacy and is committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and protect information when you use our mobile
        application.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect limited personal information when you create an account:</p>
      <ul>
        <li><strong>Name</strong> (if provided)</li>
        <li><strong>Email address</strong></li>
        <li>
          <strong>Authentication credentials</strong>
          <ul>
            <li>Firebase Authentication (email/password)</li>
            <li>Google Sign-In (when you choose this option)</li>
          </ul>
        </li>
      </ul>
      <p>
        We do <strong>not</strong> collect any voice recordings on our servers.
        Audio recorded in the app stays <strong>locally on your device</strong>.
      </p>

      <h3>Microphone Access</h3>
      <p>
        Our app requests microphone permission (<code>RECORD_AUDIO</code>) so you can speak
        and interact with AI features. We do <strong>not</strong> store or upload any
        voice recordings to our servers — all audio is processed locally on your device.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Create and manage your account</li>
        <li>Provide app features and services</li>
        <li>Improve our app experience</li>
      </ul>

      <h2>3. Third-Party Services We Use</h2>
      <p>Our app uses trusted third-party services:</p>
      <ul>
        <li>
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase Authentication
          </a>{" "}
          – for secure login and account management (including Google Sign-In integration)
        </li>
        <li>
          <a
            href="https://elevenlabs.io/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            ElevenLabs API
          </a>{" "}
          – for AI-powered voice generation
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Gemini API
          </a>{" "}
          – for AI-generated responses and conversation features
        </li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <ul>
        <li>Your personal data is securely stored by Firebase Authentication.</li>
        <li>Voice recordings remain <strong>only</strong> on your device and are never uploaded to our servers.</li>
        <li>We implement reasonable security measures to protect your data from unauthorized access.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <p>
        We do <strong>not</strong> sell, rent, or trade your personal information.
        We only share information when required by law or when necessary to provide our services.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access, update, or delete your account information</li>
        <li>Request clarification about our data usage</li>
      </ul>

      <h3>6.1 Account Deletion</h3>
      <p>
        If you wish to delete your SpeakAI account and associated data, please email{" "}
        <strong>speakai86.app@gmail.com</strong> with the subject line{" "}
        <em>“Account Deletion Request”</em>. We will process your request within{" "}
        <strong>7 business days</strong>. Once completed, all account data, including
        recent practice history, and settings, will be permanently deleted
        from our systems. 
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be
        posted here with a revised “Last updated” date.
      </p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p>📧 <strong>speakai86.app@gmail.com</strong></p>
    </div>
  );
}

export default App;
