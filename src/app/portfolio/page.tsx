"use client";

import React from 'react';
import ContactButton from '../../components/ContactButton';
import LazyVideo from '../../components/LazyVideo';

const portfolioData = [
  {
    category: '뷰티',
    videos: [
      { id: 'b1', title: '네일아트', src: '/portfolio_videos/뷰티/네일아트 포트폴리오.mp4', views: '1.2M' },
      { id: 'b2', title: '속눈썹펌', src: '/portfolio_videos/뷰티/속눈썹펌 포트폴리오.mp4', views: '854K' },
    ]
  },
  {
    category: '음식 (F&B)',
    videos: [
      { id: 'f1', title: '도쿄맛집', src: '/portfolio_videos/음식/도쿄맛집.mp4', views: '2.1M' },
      { id: 'f2', title: '영천영화', src: '/portfolio_videos/음식/영천영화.mp4', views: '500K' },
      { id: 'f3', title: '외국인맛집', src: '/portfolio_videos/음식/외국인맛집 포트폴리오.mp4', views: '1.8M' },
      { id: 'f4', title: '케이크', src: '/portfolio_videos/음식/케이크 포트폴리오.mp4', views: '920K' },
    ]
  },
  {
    category: '인테리어',
    videos: [
      { id: 'i1', title: '인테리어1', src: '/portfolio_videos/인테리어/인테리어1.mp4', views: '1.1M' },
      { id: 'i2', title: '인테리어2', src: '/portfolio_videos/인테리어/인테리어2.mp4', views: '3.4M' },
      { id: 'i3', title: '인테리어3', src: '/portfolio_videos/인테리어/인테리어3.mp4', views: '760K' },
    ]
  },
  {
    category: '건강/피트니스',
    videos: [
      { id: 'h1', title: '거북목 교정', src: '/portfolio_videos/피트니스/거북목 포트폴리오.mp4', views: '2.8M' },
      { id: 'h2', title: '필라테스 1', src: '/portfolio_videos/피트니스/필라테스 1.mp4', views: '1.5M' },
      { id: 'h3', title: '필라테스 2', src: '/portfolio_videos/피트니스/필라테스2.mp4', views: '450K' },
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#111', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Portfolio</h1>
          <p style={{ fontSize: '1.2rem', color: '#aaa' }}>
            원피드마케팅이 만들어낸 압도적인 숏폼 레퍼런스입니다.
          </p>
        </div>

        {portfolioData.map((section) => (
          <div key={section.category} style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#fff', marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
              {section.category}
            </h2>
            <div className="portfolio-grid">
              {section.videos.map((item) => (
                <div key={item.id} className="portfolio-item" style={{ padding: 0 }}>
                  <LazyVideo 
                    src={item.src} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '12px', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                    <div style={{ color: '#aaa', fontSize: '0.85rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      {item.views}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px 0', borderTop: '1px solid #333' }}>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '32px', lineHeight: '1.6', wordBreak: 'keep-all' }}>
            견적은 기획, 편집, 촬영, 업종 등 필요하신 부분에 따라 다르게 측정됩니다.<br/>
            문의해주시면 견적안내 드리겠습니다.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="http://pf.kakao.com/_kxdmxfX/chat" target="_blank" rel="noopener noreferrer" className="btn-primary" 
               style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 40px', fontSize: '1.1rem', backgroundColor: '#FEE500', color: '#000000', borderRadius: '8px', fontWeight: '600', boxShadow: '0 4px 12px rgba(254, 229, 0, 0.4)', textDecoration: 'none' }}
               onClick={() => {
                 if (typeof window !== 'undefined' && (window as any).fbq) {
                   (window as any).fbq('track', 'Contact');
                 }
               }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C7.02944 4 3 7.21071 3 11.1714C3 13.7258 4.70837 16.0357 7.24072 17.3325L6.1558 21.2825C6.07542 21.5753 6.3986 21.8021 6.64333 21.6247L11.3931 18.1724C11.5925 18.1882 11.7951 18.1964 12 18.1964C16.9706 18.1964 21 14.9857 21 11.025C21 7.06429 16.9706 4 12 4Z" />
              </svg>
              카카오톡 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
