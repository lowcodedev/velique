'use client';

import React from 'react';

export default function Page() {
  return (
    <div style={{ background: '#09090b', color: '#fafafa', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <header style={{ marginBottom: '40px' }}>
        {/* VELIQUE OLD LOGO */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>VELIQUE</h1>
      </header>
      
      <main style={{ maxWidth: '500px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Elevate Your Style</h2>
        <p style={{ color: '#a1a1aa', marginBottom: '32px', lineHeight: '1.6' }}>Join our exclusive waitlist to get early access to the future of fashion curation.</p>
        
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '10px', width: '100%' }}>
          <input type="email" placeholder="Enter your email" required style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid #27272a', background: '#18181b', color: '#fff', fontSize: '1rem' }} />
          <button type="submit" style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', background: '#fff', color: '#000', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>Join Waitlist</button>
        </form>
      </main>
    </div>
  );
}
