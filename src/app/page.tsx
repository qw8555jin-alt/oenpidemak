import React from 'react';
import ContactButton from '../components/ContactButton';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {/* Infinite Slider Background */}
        <div className="hero-slider-bg">
          <div className="hero-slider-track">
            {/* Original Images */}
            <div className="hero-slide"><img src="/hero/1.jpeg" alt="Background 1" /></div>
            <div className="hero-slide"><img src="/hero/2.jpeg" alt="Background 2" /></div>
            <div className="hero-slide"><img src="/hero/3.jpeg" alt="Background 3" /></div>
            {/* Duplicated Images for Infinite Effect */}
            <div className="hero-slide"><img src="/hero/1.jpeg" alt="Background 1 clone" /></div>
            <div className="hero-slide"><img src="/hero/2.jpeg" alt="Background 2 clone" /></div>
            <div className="hero-slide"><img src="/hero/3.jpeg" alt="Background 3 clone" /></div>
          </div>
        </div>

        <div className="container hero-content">
          <h1 className="fade-in">
            원피드마케팅은<br/>
            <span className="text-primary">내 영상처럼</span> 만듭니다
          </h1>
          <p className="fade-in delay-1">
            단순한 영상 제작이 아닌 <br className="mobile-br" />
            고객의 반응과 전환을 고려한 숏폼 콘텐츠를 만듭니다.
          </p>
          <div className="fade-in delay-2 hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link 
              href="/portfolio"
              className="btn" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '126px',
                height: '38px',
                padding: 0,
                border: '1px solid rgba(255, 255, 255, 0.6)', 
                borderRadius: '2px', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '400',
                letterSpacing: '1px',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              포트폴리오
            </Link>
          </div>
        </div>

        <div className="slider-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="section container">
        <h2 className="section-title">Why Short-form?</h2>
        <p className="section-subtitle">고객은 이제 숏폼을 보고 찾아옵니다. <br className="mobile-br" />숏폼 마케팅은 이제 선택이 아닌 필수입니다.</p>
        
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#444', fontWeight: '500', wordBreak: 'keep-all' }}>
            혹시 릴스를 보다가 <br />
            가고 싶은 곳, 먹고싶은 것, 사고 싶은 것을 <br />
            <span style={{ display: 'inline-block' }}>발견하고 <strong style={{ color: '#111', fontWeight: '700', borderBottom: '2px solid var(--primary)' }}>구매하신 경험</strong></span> <br />
            있으신가요?
          </p>
          
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#444', fontWeight: '500', marginTop: '32px', wordBreak: 'keep-all' }}>
            연인이나 친구에게 링크를 공유하거나, <br />
            태그된 경험 한 번쯤은 있으실 겁니다
          </p>
          
          <div style={{ marginTop: '48px' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', lineHeight: '1.6', wordBreak: 'keep-all' }}>
              누구나 가지고 있는 익숙한 경험만큼 <br />
              숏폼의 시장은 거대합니다
            </p>
          </div>
        </div>
        
        <div className="panel" style={{ padding: '60px 40px', textAlign: 'center', marginTop: '20px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '40px', wordBreak: 'keep-all' }}>
            왜 대기가 있어도 <br className="mobile-br" /><span className="text-primary">원피드마케팅</span>과 함께할까요?
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px', margin: '0 auto', textAlign: 'left' }}>
            <div className="benefit-card">
              <span className="number">1.</span> 기한을 지킵니다
            </div>
            <div className="benefit-card">
              <span className="number">2.</span> 원하는 걸 바로 캐치합니다
            </div>
            <div className="benefit-card">
              <span className="number">3.</span> 실력으로 보여드립니다
            </div>
            <div className="benefit-card">
              <span className="number">4.</span> 브랜딩을 도와드립니다
            </div>
            <div className="benefit-card">
              <span className="number">5.</span> 전환으로 이어집니다
            </div>
          </div>
          
          <div style={{ marginTop: '56px' }}>
            <p style={{ fontSize: '1.4rem', fontWeight: '700', color: '#222', lineHeight: '1.8', wordBreak: 'keep-all', marginBottom: '32px' }}>
              고객과의 약속을 지키며 실력으로 보장하기 때문입니다.
            </p>
            
            <p style={{ fontSize: '1.2rem', color: '#444', fontWeight: '500', lineHeight: '1.8', wordBreak: 'keep-all', marginBottom: '12px' }}>
              회사를 확장하면서 단 <strong>2명</strong>의 클라이언트분만 추가로 모십니다.
            </p>
            
            <p style={{ fontSize: '1.2rem', color: '#555', fontWeight: '600', marginTop: '16px' }}>
              항상 진실되게 대하겠습니다.
            </p>
          </div>
        </div>

      </section>


      {/* Reviews */}
      <section id="reviews" className="section" style={{ backgroundColor: '#1a1d24' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'block', color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '1px', marginBottom: '12px' }}>Our Partners</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', margin: '0', wordBreak: 'keep-all' }}>확실한 결과로 증명합니다.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>            <div style={{ background: '#fff', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'left', border: '1px solid #f0f0f0' }}>
              <div style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.7', marginBottom: '24px', wordBreak: 'keep-all' }}>
                &quot;요즘 릴스 감성을 진짜 잘 아세요. 저희가 원하는 메시지를 찰떡같이 캐치해서 <strong>조회수 100만 터진 영상</strong> 덕분에 브랜드 인지도도 엄청 올라갔어요!&quot;
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111', margin: 0 }}>뷰티 브랜드 마케팅 담당자</h4>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '32px 24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textAlign: 'left', border: '1px solid #f0f0f0' }}>
              <div style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.7', marginBottom: '24px', wordBreak: 'keep-all' }}>
                &quot;매번 기획부터 촬영까지 알아서 척척 해주시니 너무 편합니다. 무엇보다 <strong>영상을 올린 후 문의량이 3배 이상</strong> 늘어서 매출에 직접적인 도움이 되고 있어요.&quot;
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111', margin: 0 }}>피트니스 센터 원장님</h4>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/portfolio" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 40px', borderRadius: '4px', fontSize: '1.1rem', fontWeight: '700', textDecoration: 'none' }}>
              포트폴리오 바로가기
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title">Work Process</h2>
          <p className="section-subtitle">문의부터 영상 납품까지 <br className="mobile-br" />체계적인 시스템으로 진행됩니다.</p>
          
          <div className="process-grid">
          <div className="process-step">
            <div className="process-icon">📝</div>
            <h4 className="process-title">1. 문의 및 상담</h4>
            <p className="process-desc">
              브랜드 분석을 통해<br />
              가장 알맞은 전략을<br />
              제안해 드립니다.
            </p>
          </div>
          <div className="process-step">
            <div className="process-icon">💡</div>
            <h4 className="process-title">2. 기획안 전달</h4>
            <p className="process-desc">
              플랫폼 알고리즘에<br />
              최적화된 타겟 맞춤형<br />
              대본을 기획합니다.
            </p>
          </div>
          <div className="process-step">
            <div className="process-icon">🎬</div>
            <h4 className="process-title">3. 촬영(선택) 및 편집</h4>
            <p className="process-desc">
              원본 영상 편집은 물론<br />
              필요시 전문 촬영까지<br />
              맞춤형으로 진행됩니다.
            </p>
          </div>
          <div className="process-step">
            <div className="process-icon">🚀</div>
            <h4 className="process-title">4. 피드백 및 납품</h4>
            <p className="process-desc">
              수정 피드백을 거쳐<br />
              플랫폼별 규격에 맞게<br />
              최종 납품합니다.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">지금 바로 숏폼 전문가와 상담해 보세요.</p>
          
          <div className="panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--foreground)' }}>빠르고 친절한 1:1 맞춤 상담</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
              궁금한 점이 있으신가요? <br className="mobile-br" />카카오톡 채널을 통해 문의해 주시면 <br className="pc-br" />
              담당자가 신속하게 답변해 드립니다.
            </p>
            <a href="http://pf.kakao.com/_kxdmxfX/chat" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 40px', fontSize: '1.1rem', backgroundColor: '#FEE500', color: '#000000', borderRadius: '8px', fontWeight: '600', boxShadow: '0 4px 12px rgba(254, 229, 0, 0.4)', textDecoration: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C7.02944 4 3 7.21071 3 11.1714C3 13.7258 4.70837 16.0357 7.24072 17.3325L6.1558 21.2825C6.07542 21.5753 6.3986 21.8021 6.64333 21.6247L11.3931 18.1724C11.5925 18.1882 11.7951 18.1964 12 18.1964C16.9706 18.1964 21 14.9857 21 11.025C21 7.06429 16.9706 4 12 4Z" />
              </svg>
              카카오톡으로 문의하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
