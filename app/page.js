export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>🥊</div>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>MATCHFINDER</h1>
        <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>
          Find balanced sparring partners based on weight, height, skill level, and location.
          Anonymous login. Verified fighters. Real gyms.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="/dashboard" style={{
            background: '#dc2626',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            Find Sparring Partner
          </a>
          <a href="/login" style={{
            border: '2px solid #dc2626',
            color: '#dc2626',
            padding: '15px 30px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            Anonymous Login
          </a>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '20px',
        marginTop: '60px'
      }}>
        {[
          { title: 'Verified Fighters', desc: 'Height & weight verified with photo proof' },
          { title: 'Balanced Matching', desc: 'Match based on weight, height, and skill level' },
          { title: 'Gym Integration', desc: 'Book sparring sessions at verified partner gyms' },
          { title: 'No Account Needed', desc: 'Anonymous login with guest sessions' }
        ].map((item, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p style={{ color: '#666' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}