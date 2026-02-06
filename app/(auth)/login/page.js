// app/(auth)/login/page.js - SIMPLE VERSION
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      router.push('/dashboard/profile')
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '70vh'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ 
            background: '#fee2e2', 
            width: '60px', 
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
          </div>
          <h2 style={{ margin: '0 0 10px 0' }}>Anonymous Login</h2>
          <p style={{ color: '#666', margin: 0 }}>
            No email needed. Get matched instantly while staying private.
          </p>
        </div>

        <button 
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%',
            background: loading ? '#999' : '#dc2626',
            color: 'white',
            border: 'none',
            padding: '15px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: '30px'
          }}
        >
          {loading ? 'Creating Account...' : 'Enter as Guest Fighter'}
        </button>

        <div style={{ color: '#666' }}>
          <h4 style={{ marginTop: 0 }}>How it works:</h4>
          <ol style={{ paddingLeft: '20px' }}>
            <li>Generate anonymous guest account</li>
            <li>Set your weight, height, and skill level</li>
            <li>Find balanced sparring partners near you</li>
          </ol>
        </div>
      </div>
    </div>
  )
}