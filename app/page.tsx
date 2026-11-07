'use client';

import React, { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ 
      background: '#0a0a0c', 
      color: '#ffffff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      padding: '24px', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Premium Ambient Background Glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
      
      {/* Decorative Subtle Grid Lines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', width: '100%' }}>
        {/* VELIQUE ORIGINAL LOGO BRANDING */}
        <header style={{ marginBottom: '56px' }}>
          <h1 style={{ 
            fontSize: '2.75rem', 
            fontWeight: '800', 
            letterSpacing: '0.18em', 
            background: 'linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>VELIQUE</h1>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.4em', color: '#71717a', textTransform: 'uppercase', display: 'block', marginTop: '8px' }}>Fashion Curation</span>
        </header>
        
        {/* Main Interface Content */}
        <main>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '99px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: '0.8rem', color: '#9a9a1a1', fontWeight: '500', letterSpacing: '0.05em' }}>Coming Winter 2026</span>
          </div>

          <h2 style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1.15', marginBottom: '20px', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #d4d4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Elevate Your Style</h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.125rem', marginBottom: '40px', lineHeight: '1.625', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Join our exclusive digital waitlist to unlock early entry into the future of automated luxury wardrobe compilation.
          </p>
          
          {/* Action Call Layout */}
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', smDirection: 'row', gap: '12px', width: '100%', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', padding: '8px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email" 
                  required 
                  style={{ flex: 1, padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: '#09090b', color: '#fff', fontSize: '0.95rem', outline: 'none' }} 
                />
                <button type="submit" style={{ padding: '14px 28px', borderRadius: '10px', border: 'none', background: '#ffffff', color: '#09090b', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', transition: 'all 0.2s ease', boxShadow: '0 4px 12px rgba(255,255,255,0.1)' }}>
                  Join Waitlist
                </button>
              </div>
            </form>
          ) : (
            <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', padding: '20px', borderRadius: '12px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
              <p style={{ color: '#10b981', fontWeight: '600', margin: '0 0 4px 0' }}>✓ You are on the list!</p>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', margin: 0 }}>We have reserved your early access pass for {email}.</p>
            </div>
          )}
        </main>

        <footer style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '24px' }}>
          <p style={{ fontSize: '0.8rem', color: '#52525b', margin: 0 }}>&copy; {new Date().getFullYear()} VELIQUE. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
