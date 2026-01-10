import React, { useState } from 'react';
import { MdMail, MdHub, MdCode, MdArrowForward, MdCheckCircle, MdSend, MdHourglassTop } from 'react-icons/md';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errors, setErrors] = useState<string[]>([]);

  const validate = () => {
    const newErrors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.push("ERR_NULL_USER: 'Name' field cannot be empty.");
    }
    
    if (!formData.email.trim()) {
      newErrors.push("ERR_NULL_ADDR: 'Email' field is required for handshake.");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.push("ERR_INVALID_PROTO: Email format is unrecognized.");
    }
    
    if (!formData.message.trim()) {
      newErrors.push("ERR_NULL_BODY: 'Message' content missing from payload.");
    } else if (formData.message.trim().length < 10) {
      newErrors.push("ERR_SHORT_BODY: Message must be at least 10 characters.");
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
        setErrors(['ERR_CONFIG: Web3Forms key not configured. See SECURE_EMAIL_SETUP.md']);
        return;
      }

      const formPayload = new FormData();
      formPayload.append('access_key', webFormKey);
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);
      formPayload.append('from_name', formData.name);
      formPayload.append('subject', `New Message from ${formData.name}`);
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
      setErrors(['ERR_CONN_TIMEOUT: Failed to transmit data to remote host.']);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-700 dark:text-slate-400 leading-relaxed">
          I'm always open to discussing new roles, project collaborations, or just geeking out about the latest in AI and backend architecture. Reach out through my terminal or direct links.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="space-y-12 lg:sticky lg:top-32">
          <div className="space-y-4">
            {[
              { label: 'Protocol: SMTP', val: 'mawalemandar2004@gmail.com', icon: MdMail, href: 'mailto:mawalemandar2004@gmail.com?cc=mawalemandar2004@gmail.com&subject=Connection%20Request' },
              { label: 'Network: LinkedIn', val: '/in/mandarmawale', icon: MdHub, href: 'https://linkedin.com/in/mandarmawale' },
              { label: 'Repository: GitHub', val: '@MandarMawale-20', icon: MdCode, href: 'https://github.com/MandarMawale-20' }
            ].map((contact, i) => {
              const IconComponent = contact.icon;
              return (
              <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 bg-gray-200 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:border-cyan-500/50 rounded-xl transition-all shadow-xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-lg bg-gray-300 dark:bg-gray-950 flex items-center justify-center border border-gray-300 dark:border-gray-800 group-hover:border-cyan-500/50 text-gray-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono uppercase tracking-widest">{contact.label}</span>
                    <span className="text-gray-900 dark:text-white font-medium text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{contact.val}</span>
                  </div>
                </div>
                <div className="text-gray-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                  <MdArrowForward size={20} />
                </div>
              </a>
              );
            })}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-300 dark:bg-gray-800 px-6 py-4 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[10px] text-gray-600 dark:text-slate-400 font-mono tracking-wide uppercase">root@mandar-portfolio:~/contact</div>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="bg-gray-300 dark:bg-gray-950 border border-gray-300 dark:border-gray-800/50 p-6 rounded-lg font-mono text-sm min-h-[100px] flex flex-col justify-center">
                <p className="text-green-600 dark:text-green-400 mb-1 flex items-center gap-1">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">$</span>./init_secure_comms.sh
                </p>
                
                {status === 'IDLE' && (
                  <p className="text-gray-700 dark:text-slate-500">
                    Establishing encrypted handshake... [WAITING]
                    <span className="blinking-cursor"></span>
                  </p>
                )}
                
                {status === 'SENDING' && (
                  <div className="space-y-1">
                    <p className="text-cyan-600 dark:text-cyan-400">Transmitting payload to remote gateway...</p>
                    <div className="w-full bg-gray-300 dark:bg-gray-800 h-1 rounded overflow-hidden mt-2">
                      <div className="h-full bg-cyan-500 animate-[shimmer_2s_infinite] w-full"></div>
                    </div>
                  </div>
                )}

                {status === 'ERROR' && (
                  <div className="space-y-1">
                    {errors.map((err, i) => (
                      <p key={i} className="text-red-400 flex items-center gap-2">
                        <MdMail size={14} />
                        {err}
                      </p>
                    ))}
                  </div>
                )}

                {status === 'SUCCESS' && (
                  <div className="space-y-1">
                    <p className="text-green-400 font-bold flex items-center gap-2">
                      <MdCheckCircle size={14} />
                      [OK] Handshake successful. Message transmitted.
                    </p>
                    <p className="text-slate-500 text-xs">Awaiting response from system admin...</p>
                    <button 
                      onClick={() => setStatus('IDLE')}
                      className="mt-4 text-cyan-400 text-xs underline uppercase tracking-widest font-bold"
                    >
                      &gt; RESTART_COMMS
                    </button>
                  </div>
                )}
              </div>

              {status !== 'SUCCESS' && (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-bold">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mandar Mawale" 
                        className="w-full bg-gray-300 dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-slate-600 font-mono text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-bold">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="engineer@domain.com" 
                        className="w-full bg-gray-300 dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-slate-600 font-mono text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-bold">Message_Body</label>
                    <textarea 
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="// Describe your proposal, opportunity, or feedback..." 
                      className="w-full bg-gray-300 dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-slate-600 font-mono text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={status === 'SENDING'}
                      className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all group overflow-hidden relative shadow-lg"
                    >
                      <div className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        {status === 'SENDING' ? (
                          <MdHourglassTop size={20} />
                        ) : (
                          <MdSend size={20} />
                        )}
                      </div>
                      <span className="font-mono tracking-widest uppercase relative z-10">
                        {status === 'SENDING' ? '[ TRANSMITTING... ]' : '[ EXECUTE_SEND ]'}
                      </span>
                    </button>
                    <p className="mt-4 text-[9px] text-slate-500 font-mono text-center uppercase tracking-widest">
                      Transmission Protocol: AES-256 Encrypted Handshake
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};