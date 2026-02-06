// app/dashboard/page.js
import IndustrialStatsCard from '@/components/IndustrialStatsCard';
import { FaUser, FaFistRaised, FaHistory, FaCogs } from 'react-icons/fa';

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6 md:p-10" style={{background: 'radial-gradient(circle at 20% 30%, #1a1d23 0%, #0f0f12 70%)'}}>
      
      {/* HEADER */}
      <header className="mb-10">
        <h1>DASHBOARD MATCH<span style={{color: 'var(--color-accent-primary)'}}>FINDER</span></h1>
        <p className="text-xl text-color-text-secondary">Platform pencari sparring partner — <strong>Kuat, Cepat, Presisi.</strong></p>
      </header>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <IndustrialStatsCard 
          title="Total Pertandingan" 
          value="47" 
          icon={<FaFistRaised />}
          trend="+5 dari bulan lalu"
          accent="primary"
        />
        <IndustrialStatsCard 
          title="Win Rate" 
          value="82%" 
          icon={<FaUser />}
          trend="+3%"
          accent="secondary"
        />
        <IndustrialStatsCard 
          title="Menunggu Konfirmasi" 
          value="3" 
          icon={<FaHistory />}
          trend="Segera respon!"
          accent="danger"
        />
        <IndustrialStatsCard 
          title="Level Kecocokan" 
          value="HIGH" 
          icon={<FaCogs />}
          trend="Profil hampir optimal"
          accent="primary"
        />
      </div>

      {/* MAIN ACTIONS */}
      <div className="industrial-card mb-10">
        <h2 className="text-2xl mb-6 flex items-center gap-3"><FaFistRaised /> AKSI CEPAT</h2>
        <div className="flex flex-wrap gap-4">
          <a href="/find-match" className="industrial-btn industrial-btn-primary">
            TEMUKAN LAWAN BARU
          </a>
          <a href="/profile" className="industrial-btn industrial-btn-secondary">
            EDIT PROFIL
          </a>
          <a href="/history" className="industrial-btn" style={{backgroundColor: '#333', color: '#fff'}}>
            RIWAYAT PERTANDINGAN
          </a>
        </div>
      </div>

      {/* ALERT PROFIL */}
      <div className="industrial-card border-l-4" style={{borderLeftColor: 'var(--color-accent-primary)'}}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl mb-2">🚨 PROFIL ANDA 65% LENGKAP</h3>
            <p className="text-color-text-secondary mb-4">Lengkapi data skill & preferensi untuk meningkatkan kualitas pencocokan hingga 40%.</p>
            <div className="w-full bg-gray-800 h-3 mb-2">
              <div className="bg-gradient-to-r from-var(--color-accent-primary) to-var(--color-accent-secondary) h-3" style={{width: '65%'}}></div>
            </div>
          </div>
          <span className="industrial-badge">PENTING</span>
        </div>
      </div>

    </div>
  );
}