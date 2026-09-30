import React, { useState } from 'react';
import { MdMail, MdHub, MdCode, MdArrowForward, MdCheckCircle, MdHourglassTop, MdContentCopy, MdCheck, MdErrorOutline, MdDescription } from 'react-icons/md';
import { SectionHeader } from './common/SectionHeader';

const inputClass =
  'w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-strong)] font-mono text-sm placeholder-[var(--faint)] focus:border-[var(--accent)] outline-none transition-colors';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errors, setErrors] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const validate = () => {
    const newErrors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.push("Please enter your name.");
    }

    if (!formData.email.trim()) {
      newErrors.push("Please provide an email address.");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.push("Please enter a valid email address.");
    }

    if (!formData.message.trim()) {
      newErrors.push("Please enter a message.");
    } else if (formData.message.trim().length < 10) {
      newErrors.push("Your message must be at least 10 characters long.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    if (!validate()) {
      setStatus('ERROR');
      return;
    }
    setStatus('SENDING');

    try {
      // Using Web3Forms API for secure email transmission (free, no backend needed)
      const webFormKey = import.meta.env.VITE_WEB3FORMS_KEY;

      if (!webFormKey) {
        setStatus('ERROR');
        setErrors(['Form configuration error. Please try reaching out directly via email.']);
        return;
      }

      const formPayload = new FormData();
      formPayload.append('access_key', webFormKey);
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);
      formPayload.append('from_name', formData.name);
      formPayload.append('subject', `New Inquiry from ${formData.name}`);
      formPayload.append('redirect', window.location.href);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setStatus('ERROR');
      setErrors(['Failed to send message. Please try again later or email me directly.']);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks: {
    id: string;
    label: string;
    val: string;
    icon: React.ElementType;
    href: string;
    copyable?: boolean;
    download?: boolean;
  }[] = [
    { id: 'email', label: 'Email Address', val: 'mawalemandar2004@gmail.com', icon: MdMail, href: 'mailto:mawalemandar2004@gmail.com?subject=Connection%20Request', copyable: true },
    { id: 'linkedin', label: 'LinkedIn Profile', val: 'linkedin.com/in/mandar-mawale', icon: MdHub, href: 'https://www.linkedin.com/in/mandar-mawale/', copyable: true },
    { id: 'github', label: 'GitHub Repository', val: 'github.com/MandarMawale-20', icon: MdCode, href: 'https://github.com/MandarMawale-20', copyable: true },
    { id: 'resume', label: 'Resume (PDF)', val: 'Mandar_Mawale.pdf', icon: MdDescription, href: '/Mandar_Mawale.pdf', download: true }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <SectionHeader
          cmd="./contact.sh --open"
          title="Let's Connect"
          sub="Have a problem worth building? I am always interested in interesting AI, software and product problems."
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        <div className="space-y-3">
          {contactLinks.map((contact, i) => {
            const IconComponent = contact.icon;
            const isMailto = contact.href.startsWith('mailto:');
            return (
              <a
                key={i}
                href={contact.href}
                download={contact.download ? contact.val : undefined}
                target={isMailto ? undefined : '_blank'}
                rel={isMailto ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between p-4 panel hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 shrink-0 rounded-md bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] transition-colors">
                    <IconComponent size={20} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-semibold text-[var(--faint)] uppercase tracking-wider">
                      {contact.label}
                    </span>
                    <span className="text-[var(--text-strong)] font-bold text-sm md:text-base truncate">
                      {contact.val}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {contact.copyable && (
                    <button
                      onClick={(e) => handleCopy(e, contact.val, contact.id)}
                      className="p-2 text-[var(--faint)] hover:text-[var(--accent)] transition-colors"
                      title="Copy to clipboard"
                      aria-label={`Copy ${contact.label}`}
                    >
                      {copiedId === contact.id
                        ? <MdCheck size={18} className="text-[var(--ok)]" />
                        : <MdContentCopy size={18} />}
                    </button>
                  )}
                  <div className="p-2 text-[var(--faint)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all">
                    <MdArrowForward size={18} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="panel p-6 md:p-8">
          {status === 'SUCCESS' ? (
            <div role="status" aria-live="polite" className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-[var(--surface-2)] border border-[var(--ok)] text-[var(--ok)] rounded-lg flex items-center justify-center">
                <MdCheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-strong)]">Message Sent!</h3>
              <p className="text-[var(--muted)]">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button onClick={() => setStatus('IDLE')} className="btn-ghost mt-4">
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {status === 'ERROR' && (
                <div
                  id="form-errors"
                  role="alert"
                  aria-live="assertive"
                  className="p-4 bg-[var(--surface-2)] border border-[var(--danger)] rounded-lg space-y-2"
                >
                  {errors.map((err, i) => (
                    <p key={i} className="text-sm text-[var(--danger)] flex items-center gap-2 font-medium">
                      <MdErrorOutline size={16} />
                      {err}
                    </p>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-[var(--faint)] uppercase tracking-wider">
                    $ name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    aria-describedby={status === 'ERROR' ? 'form-errors' : undefined}
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-[var(--faint)] uppercase tracking-wider">
                    $ email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    aria-describedby={status === 'ERROR' ? 'form-errors' : undefined}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-[var(--faint)] uppercase tracking-wider">
                    $ message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    required
                    aria-describedby={status === 'ERROR' ? 'form-errors' : undefined}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we collaborate?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button type="submit" disabled={status === 'SENDING'} className="btn-ink w-full !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'SENDING' ? (
                  <>
                    <MdHourglassTop size={16} className="animate-spin" />
                    <span>sending…</span>
                  </>
                ) : (
                  <>
                    <span className="text-[var(--accent)]">$</span>
                    <span>./send.sh</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
