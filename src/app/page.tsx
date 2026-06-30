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
            고객의 반응과 전환을 고려한 <br className="pc-br" />
            숏폼 콘텐츠를 만듭니다.
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

      {/* 2. 핵심 솔루션 제안 */}
      <section id="solution" className="section container">
        <h2 className="section-title">매출 + 브랜딩 + 바이럴<br/>3마리 토끼를 잡는 <span className="text-primary">숏폼 공식</span></h2>
        <p className="section-subtitle">웹사이트 구매 전환율을 극대화하는 원피드마케팅만의 제작 솔루션</p>
        
        <div className="process-grid" style={{ marginTop: '40px' }}>
          <div className="process-step">
            <div className="process-icon">🎣</div>
            <h4 className="process-title">초반 3초 후킹 카피</h4>
            <p className="process-desc">이탈을 막고 시선을 사로잡는 강력한 카피라이팅</p>
          </div>
          <div className="process-step">
            <div className="process-icon">✨</div>
            <h4 className="process-title">브랜드 무드</h4>
            <p className="process-desc">단순 B급 감성이 아닌 브랜드의 아이덴티티 유지</p>
          </div>
          <div className="process-step">
            <div className="process-icon">🛍️</div>
            <h4 className="process-title">상세페이지 정보 전달</h4>
            <p className="process-desc">실제 구매에 필요한 소구점과 제품 스펙 안내</p>
          </div>
          <div className="process-step">
            <div className="process-icon">📸</div>
            <h4 className="process-title">TPO 맞춤 전속 모델</h4>
            <p className="process-desc">타겟 고객과 공감대를 형성하는 맞춤형 모델 캐스팅</p>
          </div>
        </div>
      </section>

      {/* 3. 카테고리 장악 및 베리에이션 전략 */}
      <section className="section section-bg-gray">
        <div className="container">
          <h2 className="section-title">하나의 상품, <span className="text-primary">수십 개의 타겟팅</span></h2>
          <p className="section-subtitle">광고 피로도를 낮추고 플랫폼 내 카테고리를 완벽하게 장악합니다.</p>
          
          <div className="panel" style={{ padding: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}>
              <span className="benefit-card" style={{ fontSize: '1rem', padding: '12px 20px' }}>20대 직장인 X 가격 할인</span>
              <span className="benefit-card" style={{ fontSize: '1rem', padding: '12px 20px' }}>30대 주부 X 기획전</span>
              <span className="benefit-card" style={{ fontSize: '1rem', padding: '12px 20px' }}>10대 학생 X 디자인 강조</span>
              <span className="benefit-card" style={{ fontSize: '1rem', padding: '12px 20px' }}>운동 매니아 X 기능성</span>
              <span className="benefit-card" style={{ fontSize: '1rem', padding: '12px 20px' }}>선물용 X 패키지</span>
              <span className="benefit-card" style={{ fontSize: '1rem', padding: '12px 20px' }}>커플 아이템 X 가성비</span>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              다양한 타겟 페르소나와 메인 소구점을 교차 조합하여<br/>끊임없이 새로운 베리에이션 영상을 생성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 퍼포먼스 성공 사례 데이터 */}
      <section className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,122,0,0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-150px', right: '-50px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,122,0,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title">숫자로 증명하는 <span className="text-primary">퍼포먼스</span></h2>
          <p className="section-subtitle">실제 데이터 기반의 성과로 솔루션의 신뢰도를 증명합니다.</p>
          
          <div className="pricing-grid">
            <div className="pricing-card popular" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
              <div style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '8px' }}>Case 01. 비인기 상품의 역주행</div>
              <div className="pkg-price" style={{ marginBottom: '16px' }}>ROAS 약 700%</div>
              <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                <img src="/images/case_1.png" alt="ROAS 694.6% 성과 데이터" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.6' }}>기존 ROAS 160%에서 폭발적인 상승.<br/>다양한 페르소나 타이틀을 테스트하여<br/>비인기 상품군 매출 150% 성장 달성.</p>
            </div>
            <div className="pricing-card" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
              <div style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '8px' }}>Case 02. 타겟 확장을 통한 완판</div>
              <div className="pkg-price" style={{ marginBottom: '16px' }}>매출 3배 상승</div>
              <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                <img src="/images/case_2.png" alt="매출 3배 상승 성과 데이터" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.6' }}>남성 타겟 제품을 여성 타겟 숏폼으로 확장 기획.<br/>단 1개월 만에 전량 완판 기록.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 타겟 고객 및 인프라 */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)' }}>
        <div className="container">
          <h2 className="section-title">이런 브랜드에게 <span className="text-primary">반드시 필요합니다</span></h2>
          <p className="section-subtitle">단순 대행사가 아닌 자체 프리미엄 인프라를 바탕으로 실행합니다.</p>
          
          <div className="pricing-grid">
            <div className="panel" style={{ padding: '40px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>🎯 맞춤 타겟 고객</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-light)' }}>✓ 플랫폼 의존도를 낮추고 자사몰을 성장시키고 싶은 브랜드</li>
                <li style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-light)' }}>✓ 단순 인플루언서 마케팅 효율에 한계를 느낀 브랜드</li>
                <li style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-light)' }}>✓ 고품질의 숏폼을 대량으로 제작할 리소스가 부족한 브랜드</li>
              </ul>
            </div>
            <div className="panel" style={{ padding: '40px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>🏢 압도적 자체 인프라</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ background: 'var(--secondary)', color: 'var(--foreground)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}># 다수의 전속 모델</span>
                <span style={{ background: 'var(--secondary)', color: 'var(--foreground)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}># 자체 프리미엄 스튜디오</span>
                <span style={{ background: 'var(--secondary)', color: 'var(--foreground)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}># 트렌드 분석 기획팀</span>
                <span style={{ background: 'var(--secondary)', color: 'var(--foreground)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}># 퍼포먼스 전문 편집팀</span>
              </div>
              <p style={{ marginTop: '24px', color: 'var(--text-muted)', lineHeight: '1.6' }}>외부 대행 없이 모든 기획과 촬영, 편집이 자체적으로 이루어져 신속한 피드백 반영과 압도적인 퀄리티를 보장합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 중장기 서비스 로드맵 */}
      <section className="section section-bg-gray" style={{ background: 'linear-gradient(135deg, #fff9f5 0%, #f4f5f7 100%)' }}>
        <div className="container">
          <h2 className="section-title">중장기 파트너십 <span className="text-primary">로드맵</span></h2>
        <p className="section-subtitle">브랜드 고유의 메시지를 찾아내고 각인시키는 체계적인 프로세스</p>
        
        <div className="process-grid">
          <div className="process-step">
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '12px' }}>1개월 차</div>
            <h4 className="process-title">USP 탐색</h4>
            <p className="process-desc">다양한 판매 소구점 도출 및 가설 테스트</p>
          </div>
          <div className="process-step">
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '12px' }}>2개월 차</div>
            <h4 className="process-title">USP 구체화</h4>
            <p className="process-desc">반응도 높은 타겟팅 발굴 및 고도화</p>
          </div>
          <div className="process-step">
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '12px' }}>3~5개월 차</div>
            <h4 className="process-title">메시지 확산</h4>
            <p className="process-desc">검증된 소구점의 대량 베리에이션 생산</p>
          </div>
          <div className="process-step" style={{ borderColor: 'var(--primary)', background: 'rgba(255, 122, 0, 0.05)' }}>
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.2rem', marginBottom: '12px' }}>6개월 차~</div>
            <h4 className="process-title">브랜드 고유화</h4>
            <p className="process-desc">대중에게 확고하게 각인되는 마케팅 플랜 제시</p>
          </div>
        </div>
        </div>
      </section>

      {/* 7. 상품 구성 및 단가 */}
      <section id="pricing" className="section section-dark">
        <div className="container">
          <h2 className="section-title">맞춤형 <span className="text-primary">플랜 & 프라이싱</span></h2>
          <p className="section-subtitle">합리적이고 투명한 프라이싱으로 비즈니스 성장을 지원합니다.</p>
          
          <div className="pricing-grid">
            <div className="pricing-card popular">
              <h3 className="pkg-title">풀 패키지 (A / B / 단일)</h3>
              <p className="pkg-desc">기획부터 맞춤 모델 섭외, 스튜디오 촬영, 편집까지 올인원 제공</p>
              <div className="pkg-price" style={{ fontSize: '2rem' }}>월 150만원<span>부터</span></div>
              <ul className="pkg-features">
                <li>전속 모델 매칭</li>
                <li>자체 스튜디오 촬영 포함</li>
                <li>Meta, TikTok 등 매체 최적화</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="pkg-title">재가공 패키지 (C / D / E)</h3>
              <p className="pkg-desc">보유하신 사진이나 기존 영상 소스를 고효율 숏폼으로 재탄생</p>
              <div className="pkg-price" style={{ fontSize: '2rem' }}>월 90만원<span>부터</span></div>
              <ul className="pkg-features">
                <li>초가성비 퍼포먼스 캠페인</li>
                <li>기존 자산 200% 활용</li>
                <li>빠른 기획 및 편집 속도</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/proposal" className="btn-outline" style={{ padding: '14px 32px', backgroundColor: '#ffffff', color: '#111111', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              상품 소개서 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 8. 팀 전문성 및 클로징 */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">실제 브랜드를 운영해 본 <br className="mobile-br"/><span className="text-primary">전문가들이 만듭니다.</span></h2>
          <p className="section-subtitle">
            저희는 단순한 대행사 직원이 아닙니다.<br/>
            직접 브랜드를 운영하며 매출을 일으켜 본 실무진이 모였습니다.
          </p>
          
          <div className="panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--foreground)' }}>즉각적인 비즈니스 성장 경험하기</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
              브랜드의 아이덴티티를 해치지 않으면서도 <br className="mobile-br"/>압도적인 퍼포먼스를 약속합니다.<br/>
              지금 바로 카카오톡 채널을 통해 문의해 주세요.
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
