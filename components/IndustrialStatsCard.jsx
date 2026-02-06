// components/IndustrialStatsCard.jsx
'use client';

export default function IndustrialStatsCard({ title, value, icon, trend, accent = 'primary' }) {
  
  const accentColors = {
    primary: 'var(--color-accent-primary)',
    secondary: 'var(--color-accent-secondary)',
    danger: 'var(--color-accent-danger)'
  };

  const cardColor = accentColors[accent];

  return (
    <div className="industrial-card hover:transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-color-text-secondary">{title}</h3>
        <div style={{ color: cardColor, fontSize: '1.5rem' }}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-3">
        <div className="text-4xl font-bold" style={{ color: cardColor }}>
          {value}
        </div>
      </div>
      
      <div className="text-sm text-color-text-muted pt-3 border-t" style={{borderColor: 'var(--color-border)'}}>
        {trend}
      </div>
    </div>
  );
}