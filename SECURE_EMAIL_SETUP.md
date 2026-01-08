# Email Form Configuration

## Setup Instructions

### 1. CV Download (Already Configured ✅)
- Place your actual CV PDF at: `public/Mandar_Mawale_CV_2024.pdf`
- Users can now download it directly from the Resume section
- Currently uses a placeholder - replace with your real CV file

### 2. Email With CC (Already Configured ✅)
- Click the email link to open mailto with CC to your own email
- Users can send you emails with automatic CC copy
- No setup needed - it uses the native mailto: protocol

### 3. Secure Contact Form (REQUIRES SETUP)
This uses Web3Forms for secure, spam-free email handling:

**Steps:**
1. Visit https://web3forms.com (completely free)
2. Create account with your Gmail
3. Copy your Access Key
4. Create a `.env.local` file in your project root:
   ```
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
5. Update Contact.tsx line with your key:
   ```tsx
   formPayload.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);
   ```

### Why Web3Forms?
- ✅ Free (no credit card needed)
- ✅ Secure email delivery
- ✅ Spam protected
- ✅ Works without backend server
- ✅ GDPR compliant
- ✅ No form data stored
- ✅ AES-256 encryption ready

### Security Features Implemented:
1. **Input Validation** - All fields validated before submission
2. **Email Format Check** - Prevents invalid emails
3. **Message Length Validation** - Minimum 10 characters
4. **Environment Variables** - API keys never exposed in code
5. **CORS Protection** - Web3Forms handles CORS
6. **No Data Storage** - Messages deleted after sending
7. **Rate Limiting** - Built into Web3Forms (free plan: 100/month)

### Alternative Options (if preferred):
- **Formspree** - https://formspree.io (Similar to Web3Forms)
- **SendGrid** - https://sendgrid.com (More features, slightly complex)
- **Custom Backend** - Node.js/Express + Gmail API (More control)

### Testing:
1. Fill the form with valid data
2. Click "EXECUTE_SEND"
3. Should show success message
4. Email arrives in your inbox
