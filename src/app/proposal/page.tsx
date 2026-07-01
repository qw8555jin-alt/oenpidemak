"use client";

import React, { useEffect, useRef, useState } from 'react';
import './presentation.css';
import SlideNav from '../../components/SlideNav';
import Link from 'next/link';

export default function ProposalPresentation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 10;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the index of the intersecting slide
            const index = slideRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setCurrentSlide(index);
              // Add animation class
              entry.target.classList.add('is-visible');
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5, // Trigger when 50% of the slide is visible
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    if (slideRefs.current[index]) {
      slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="presentation-container" ref={containerRef}>
      <SlideNav totalSlides={totalSlides} currentSlide={currentSlide} onDotClick={scrollToSlide} />
      
      {/* Navigation back to main site */}
      <div style={{ position: 'fixed', top: '30px', left: '40px', zIndex: 100 }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>← Home</span>
        </Link>
      </div>

      {/* Slide 1: Intro */}
      <section 
        className="slide" 
        ref={(el) => { slideRefs.current[0] = el; }}
        style={{ 
          background: 'linear-gradient(rgba(13, 15, 18, 0.7), rgba(13, 15, 18, 0.9)), url("/images/slide_bg_intro.png") no-repeat center center / cover' 
        }}
      >
        <div className="slide-content text-center" style={{ textAlign: 'center' }}>
          <div className="glass-panel animate-up" style={{ display: 'inline-block', maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 800, letterSpacing: '4px', display: 'block', marginBottom: '16px', fontSize: '1.2rem' }}>ONEFEED MARKETING</span>
            <h1 className="slide-title" style={{ fontSize: '4.5rem', marginBottom: '24px' }}>
              퍼포먼스 <span style={{ color: 'var(--primary)' }}>바이럴 숏폼</span> 제작
            </h1>
            <p className="slide-subtitle" style={{ fontSize: '1.6rem', margin: 0 }}>
              진짜 효율 중심의 숏폼 소재만을 제작합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 2: Problem & Solution */}
      <section className="slide" ref={(el) => { slideRefs.current[1] = el; }}>
        <div className="slide-content">
          <div className="text-center animate-up" style={{ textAlign: 'center' }}>
            <h2 className="slide-title">
              인플루언서 협찬?<br/>
              고퀄 영상?<br/>
              <span style={{ color: 'var(--primary)' }}>광고 효율 나오셨나요?</span>
            </h2>
          </div>
          
          <div className="grid-3" style={{ marginTop: '60px' }}>
            <div className="problem-card animate-up delay-100">
              <h3>기존 프로덕션 숏폼</h3>
              <ul>
                <li>'예쁘다'로 끝</li>
                <li>고비용 저효율</li>
                <li>소구 포인트 없음</li>
                <li>영상미 중심 기획</li>
                <li>영상 피로도 UP</li>
              </ul>
            </div>
            
            <div className="problem-card animate-up delay-200">
              <h3>기존 인플루언서 숏폼</h3>
              <ul>
                <li>단순 상품 설명</li>
                <li>전환 포인트 없음</li>
                <li>인플루언서'만' 보임</li>
                <li>2차 활용 불가 / 높은 비용</li>
                <li>영상 피로도 UP</li>
              </ul>
            </div>

            <div className="solution-card animate-up delay-300">
              <h3>원피드마케팅 숏폼</h3>
              <ul>
                <li>USP 중심 기획</li>
                <li>ROAS, 광고 효율 UP</li>
                <li>수십개 베리에이션 피로도↓</li>
                <li>TPO에 맞는 바이럴 효과</li>
                <li>명확한 B&A 표현</li>
                <li>대량 생산 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Target Audience */}
      <section className="slide" ref={(el) => { slideRefs.current[2] = el; }}>
        <div className="slide-content">
          <h2 className="slide-title text-center animate-up" style={{ textAlign: 'center' }}>어떤 브랜드에게 <span style={{ color: 'var(--primary)' }}>필요한가요?</span></h2>
          
          <div className="grid-3" style={{ marginTop: '60px' }}>
            {[
              "퍼포먼스 마케팅에 활용할 영상소재의 대량생산이 필요한 브랜드",
              "성과가 보이지 않는 MCN 마케팅에 목매는 브랜드",
              "높은 비용으로 영상 제작했지만 광고효율은 더 떨어진 브랜드",
              "퍼포먼스와 바이럴효과를 동시에 진행하고 싶은 브랜드",
              "안정적인 1등을 원하거나 1등을 뛰어넘고 싶은 브랜드",
              "4개 플랫폼(메타, 틱톡, 유튜브, GFA)에 동시 활용할 브랜드",
              "지속적인 DA 소재 공급으로 빠르게 성장하고 싶은 브랜드",
              "저비용 고효율의 숏폼 마케팅을 하고 싶은 브랜드",
              "기획+촬영+편집+모델+디자인 올인원으로 제작하고 싶은 브랜드"
            ].map((text, i) => (
              <div key={i} className={`target-tag animate-up delay-${(i%3)*100 + 100}`}>
                {text}
              </div>
            ))}
          </div>
          
          <div className="text-center animate-up delay-400" style={{ marginTop: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 700 }}>"하나라도 해당 된다면, 지금 바로 상담하세요!"</p>
          </div>
        </div>
      </section>

      {/* Slide 4: AI Process */}
      <section 
        className="slide" 
        ref={(el) => { slideRefs.current[3] = el; }}
        style={{ 
          background: 'linear-gradient(rgba(13, 15, 18, 0.8), rgba(13, 15, 18, 0.95)), url("/images/slide_bg_ai.png") no-repeat center center / cover' 
        }}
      >
        <div className="slide-content text-center" style={{ textAlign: 'center' }}>
          <h2 className="slide-title animate-up">자체개발 AI 솔루션<br/>실시간 DA 데이터 <span style={{ color: 'var(--primary)' }}>딥러닝</span></h2>
          
          <div className="grid-3" style={{ marginTop: '80px' }}>
            <div className="glass-panel animate-up delay-100" style={{ padding: '40px 32px' }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '16px' }}>01</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>수집</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>경쟁사, 동일 카테고리 상품의 매체별 광고소재를 실시간으로 수집, 업데이트합니다.</p>
            </div>
            <div className="glass-panel animate-up delay-200" style={{ padding: '40px 32px' }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '16px' }}>02</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>분류</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>플랫폼별 반응률 높은 주제, 디자인 트렌드 등 특성에 맞게 자동으로 분류합니다.</p>
            </div>
            <div className="glass-panel animate-up delay-300" style={{ padding: '40px 32px' }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '16px' }}>03</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>분석</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>분류된 특성들은 자체개발 AI툴의 프롬프트 매개변수로 변환되어 학습됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Algorithm */}
      <section className="slide" ref={(el) => { slideRefs.current[4] = el; }}>
        <div className="slide-content text-center" style={{ textAlign: 'center' }}>
          <h2 className="slide-title animate-up">분석 데이터 기반 <br/><span style={{ color: 'var(--primary)' }}>알고리즘 영상 기획</span></h2>
          <p className="slide-subtitle animate-up delay-100">메인 소구, 기획전, 할인, 타겟 페르소나의 무한한 베리에이션</p>
          
          <div className="glass-panel animate-up delay-200" style={{ maxWidth: '900px', margin: '0 auto', background: 'rgba(255,255,255,0.02)' }}>
            <div className="algo-tags-wrapper">
              <div className="algo-tags-grid">
              {[
                "메인 소구 A", "C + 타겟 페르소나 7", "기획전 + TPO 1", "할인 + 메인소구 A",
                "메인 소구 B", "B + 타겟 페르소나 4", "기획전 + TPO 2", "할인 + 메인소구 B",
                "메인 소구 C", "A + 타겟 페르소나 1", "기획전 + TPO 3", "할인 + 메인소구 C",
                "메인 소구 D", "D + 타겟 페르소나 10", "할인 혜택", "상품 포커스"
              ].map((tag, i) => (
                <div key={i} style={{ 
                  background: 'rgba(255,122,0,0.1)', 
                  border: '1px solid rgba(255,122,0,0.3)', 
                  padding: '16px', 
                  borderRadius: '8px',
                  fontWeight: 500,
                  color: '#fff'
                }}>
                  {tag}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Models */}
      <section 
        className="slide" 
        ref={(el) => { slideRefs.current[5] = el; }}
        style={{ 
          background: 'linear-gradient(to right, rgba(13, 15, 18, 1) 0%, rgba(13, 15, 18, 0.4) 100%), url("/images/slide_bg_model.png") no-repeat right center / cover' 
        }}
      >
        <div className="slide-content">
          <div className="animate-up" style={{ maxWidth: '600px' }}>
            <h2 className="slide-title" style={{ fontSize: '3.5rem', lineHeight: 1.3 }}>
              매월 <span style={{ color: 'var(--primary)' }}>새로운 전속모델</span>이<br/>캐스팅됩니다
            </h2>
            <p className="slide-subtitle" style={{ fontSize: '1.4rem', color: '#fff', marginTop: '24px' }}>
              국내 최대규모 모델 에이전시들과 독점계약 체결
            </p>
            <div style={{ 
              marginTop: '40px', 
              display: 'inline-block', 
              padding: '16px 32px', 
              border: '2px solid rgba(255,255,255,0.2)', 
              borderRadius: '30px',
              backdropFilter: 'blur(8px)',
              background: 'rgba(0,0,0,0.3)'
            }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>TPO에 맞는 최적의 모델 매칭</span>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7: Service Process */}
      <section className="slide" ref={(el) => { slideRefs.current[6] = el; }}>
        <div className="slide-content">
          <h2 className="slide-title text-center animate-up" style={{ textAlign: 'center' }}>진행 프로세스 & <span style={{ color: 'var(--primary)' }}>타임라인</span></h2>
          
          <div className="glass-panel animate-up delay-100 process-glass-panel" style={{ marginTop: '40px' }}>
            <div className="process-wrapper">
              <div className="process-inner">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* STEP 01 */}
                  <div>
                    <div className="process-step-label">STEP 01</div>
                    <div className="process-step-title">사전요청 자료 전달</div>
                  </div>
                  
                  {/* STEP 02 */}
                  <div>
                    <div className="process-step-label">STEP 02</div>
                    <div className="process-step-title">주차별 기획안 전달<br/>모델 리스트 전달</div>
                  </div>

                  {/* Wrapper for 3-5 with bracket */}
                  <div className="process-bracket-group">
                    {/* Bracket */}
                    <div className="process-bracket-line"></div>
                    <div className="process-bracket-text">
                      영상 6개 기준<br/>약 2주 소요
                    </div>

                    {/* STEP 03 */}
                    <div>
                      <div className="process-step-label">STEP 03</div>
                      <div className="process-step-title">촬영, 편집, 디자인</div>
                    </div>
                    {/* STEP 04 */}
                    <div>
                      <div className="process-step-label">STEP 04</div>
                      <div className="process-step-title">1차 완성본 공유 및 수정</div>
                    </div>
                    {/* STEP 05 */}
                    <div>
                      <div className="process-step-label">STEP 05</div>
                      <div className="process-step-title">최종본 전달 (시딩 진행)</div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className="timeline animate-up delay-200">
              <div className="timeline-step">
                <div className="timeline-circle">1</div>
                <h4>USP 탐색 (1개월차)</h4>
                <p>4~6개 셀링포인트 설정 폭넓게 기획</p>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">2</div>
                <h4>USP 구체화 (2개월차)</h4>
                <p>타겟 뾰족하게 설정 (1~2개 소구점)</p>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">3</div>
                <h4>USP 확산 (3~5개월차)</h4>
                <p>동일 메시지를 다양한 형태로 확산</p>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">6+</div>
                <h4>USP 고유화 (6개월차~)</h4>
                <p>지속적인 각인, 고유명사화</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Pricing 1 (A, B, 단일건) */}
      <section className="slide" ref={(el) => { slideRefs.current[7] = el; }}>
        <div className="slide-content dark-pricing">
          <h2 className="slide-title animate-up" style={{ marginBottom: '16px' }}>
            Pricing<br/>
            상품 및 가격<br/>
            <span style={{ color: 'var(--primary)', fontSize: '1.4rem', fontWeight: 600, display: 'inline-block', marginTop: '8px' }}>(모델, 촬영 포함 타입)</span>
          </h2>
          
          <div className="pricing-detailed-wrapper animate-up delay-100">
            <div className="pricing-detailed-table">
              <div className="pt-header-grid">
                <div className="pt-header-cell pt-empty"></div>
                <div className="pt-header-cell">
                  <div className="pt-type-title">A_Type</div>
                  <div className="pt-type-desc">매달 끊임없는 퍼포먼스 숏폼소재를 제공하여 바이럴 효과와 함께 안정적이고 빠르게 브랜드를 성장시킵니다.</div>
                </div>
                <div className="pt-header-cell">
                  <div className="pt-type-title">B_Type</div>
                  <div className="pt-type-desc">매달 끊임없는 퍼포먼스 숏폼소재를 제공하여 바이럴 효과와 함께 안정적이고 빠르게 브랜드를 성장시킵니다.</div>
                </div>
                <div className="pt-header-cell">
                  <div className="pt-type-title">단일건</div>
                  <div className="pt-type-desc">A,B타입의 단일 상품입니다.<br/>단발적인 트래픽 캠페인, 테스트 소재로 활용하기 적합합니다.</div>
                </div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label text-cyan">활용 매체</div>
                <div className="pt-media-pill">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0064e0' }}>
                    <svg width="24" height="24" fill="#0064e0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>
                    Meta
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#000000' }}>
                    <svg width="24" height="24" fill="#000000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    TikTok
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF0000' }}>
                    <svg width="24" height="24" fill="#FF0000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.931 9.99-1.441-.601 1.717-.913a4.48 4.48 0 0 0 1.874-6.078 4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193 4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192 4.525 4.525 0 0 0-2.678-3.904ZM9.597 15.19V8.824l6.007 3.184z"/></svg>
                    Shorts
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8a2be2' }}>
                    <svg width="24" height="24" fill="#8a2be2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#8a2be2" strokeWidth="2" fill="none"/><path d="M10 8l6 4-6 4z" fill="#8a2be2"/></svg>
                    Clip
                  </span>
                </div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">제공 영상 개수</div>
                <div className="pt-cell">12</div>
                <div className="pt-cell">6</div>
                <div className="pt-cell">3</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">모델</div>
                <div className="pt-cell">2~3명 (맞춤형)</div>
                <div className="pt-cell">2명</div>
                <div className="pt-cell">1명</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">영상 길이</div>
                <div className="pt-cell">40초 이내</div>
                <div className="pt-cell">40초 이내</div>
                <div className="pt-cell">40초 이내</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">영상 크기</div>
                <div className="pt-cell">9:16, 4:5, 1:1 택 2</div>
                <div className="pt-cell">9:16, 4:5, 1:1 택 2</div>
                <div className="pt-cell">9:16, 4:5, 1:1 택 1</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">수정 횟수</div>
                <div className="pt-cell">영상당 1회</div>
                <div className="pt-cell">영상당 1회</div>
                <div className="pt-cell">영상당 1회</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">라이선스</div>
                <div className="pt-cell">통상 12개월</div>
                <div className="pt-cell">통상 12개월</div>
                <div className="pt-cell">통상 12개월</div>
              </div>

              <div className="pt-row-grid bg-dark-highlight">
                <div className="pt-cell pt-label text-cyan">비용</div>
                <div className="pt-cell">
                  <span className="pt-strike">420만원</span>
                  <span className="text-cyan">첫이용 360만원</span>
                </div>
                <div className="pt-cell">
                  <span className="pt-strike">270만원</span>
                  <span className="text-cyan">첫이용 240만원</span>
                </div>
                <div className="pt-cell text-cyan">150만원</div>
              </div>

              <div className="pt-row-grid bg-dark-highlight">
                <div className="pt-cell pt-label text-cyan">1개 영상당 비용</div>
                <div className="pt-cell">
                  <span className="pt-strike">350,000원</span>
                  <span className="text-cyan">300,000원</span>
                </div>
                <div className="pt-cell">
                  <span className="pt-strike">450,000원</span>
                  <span className="text-cyan">400,000원</span>
                </div>
                <div className="pt-cell text-cyan">500,000원</div>
              </div>
            </div>

            <p style={{ textAlign: 'right', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>* 모든 비용은 VAT 별도</p>

            <div className="pt-additional-cost animate-up delay-200">
              <div className="pt-ac-title">
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#00bcd4', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 900 }}>+</div>
                추가비용
              </div>
              <div className="pt-ac-list">
                <div className="pt-ac-item">
                  <div className="pt-ac-label">클린본 제공</div>
                  <div className="pt-ac-val">600,000원</div>
                </div>
                <div className="pt-ac-item">
                  <div className="pt-ac-label">사이즈 추가</div>
                  <div className="pt-ac-val">200,000원</div>
                </div>
                <div className="pt-ac-item">
                  <div className="pt-ac-label">모델 추가</div>
                  <div className="pt-ac-val">400,000원</div>
                </div>
                <div className="pt-ac-item">
                  <div className="pt-ac-label">코딩형 기획</div>
                  <div className="pt-ac-val">별도 협의</div>
                </div>
                <div className="pt-ac-item">
                  <div className="pt-ac-label">인플루언서 협찬</div>
                  <div className="pt-ac-val">문의</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Pricing 2 (C, D, E) */}
      <section className="slide" ref={(el) => { slideRefs.current[8] = el; }}>
        <div className="slide-content dark-pricing">
          <h2 className="slide-title animate-up" style={{ marginBottom: '16px' }}>
            Pricing<br/>
            상품 및 가격<br/>
            <span style={{ color: 'var(--primary)', fontSize: '1.4rem', fontWeight: 600, display: 'inline-block', marginTop: '8px' }}>(모델, 촬영 미포함 타입)</span>
          </h2>
          
          <div className="pricing-detailed-wrapper animate-up delay-100">
            <div className="pricing-detailed-table">
              <div className="pt-header-grid">
                <div className="pt-header-cell pt-empty"></div>
                <div className="pt-header-cell">
                  <div className="pt-type-title">C_Type</div>
                  <div className="pt-type-desc">브랜드사에서 보유하고있는 영상 및 이미지, 시딩 컨텐츠들을 활용하여, 효율높은 광고용숏폼 소재를 제작합니다.</div>
                </div>
                <div className="pt-header-cell">
                  <div className="pt-type-title">D_Type</div>
                  <div className="pt-type-desc">브랜드사에서 보유하고 있는 영상 및 이미지, 시딩 컨텐츠들을 활용하여, 효율높은 광고용숏폼 소재를 제작합니다.</div>
                </div>
                <div className="pt-header-cell">
                  <div className="pt-type-title">E_Type</div>
                  <div className="pt-type-desc">브랜드사에서 보유하고 있는 영상 및 이미지, 시딩 컨텐츠들을 활용하여, 효율높은 광고용숏폼 소재를 제작합니다.</div>
                </div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label text-cyan">활용 매체</div>
                <div className="pt-media-pill">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0064e0' }}>
                    <svg width="24" height="24" fill="#0064e0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>
                    Meta
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#000000' }}>
                    <svg width="24" height="24" fill="#000000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    TikTok
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF0000' }}>
                    <svg width="24" height="24" fill="#FF0000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.931 9.99-1.441-.601 1.717-.913a4.48 4.48 0 0 0 1.874-6.078 4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193 4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192 4.525 4.525 0 0 0-2.678-3.904ZM9.597 15.19V8.824l6.007 3.184z"/></svg>
                    Shorts
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8a2be2' }}>
                    <svg width="24" height="24" fill="#8a2be2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#8a2be2" strokeWidth="2" fill="none"/><path d="M10 8l6 4-6 4z" fill="#8a2be2"/></svg>
                    Clip
                  </span>
                </div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">제공 영상 개수</div>
                <div className="pt-cell">12</div>
                <div className="pt-cell">6</div>
                <div className="pt-cell">3</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">모델</div>
                <div className="pt-cell">0</div>
                <div className="pt-cell">0</div>
                <div className="pt-cell">0</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">영상 길이</div>
                <div className="pt-cell">40초 이내</div>
                <div className="pt-cell">40초 이내</div>
                <div className="pt-cell">40초 이내</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">영상 크기</div>
                <div className="pt-cell">9:16, 4:5, 1:1 택 2</div>
                <div className="pt-cell">9:16, 4:5, 1:1 택 2</div>
                <div className="pt-cell">9:16, 4:5, 1:1 택 1</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">수정 횟수</div>
                <div className="pt-cell">영상당 1회</div>
                <div className="pt-cell">영상당 1회</div>
                <div className="pt-cell">영상당 1회</div>
              </div>

              <div className="pt-row-grid">
                <div className="pt-cell pt-label">라이선스</div>
                <div className="pt-cell">영상소스에 따라 상이</div>
                <div className="pt-cell">영상소스에 따라 상이</div>
                <div className="pt-cell">영상소스에 따라 상이</div>
              </div>

              <div className="pt-row-grid bg-dark-highlight">
                <div className="pt-cell pt-label text-cyan">비용</div>
                <div className="pt-cell text-cyan">240만원</div>
                <div className="pt-cell text-cyan">150만원</div>
                <div className="pt-cell text-cyan">90만원</div>
              </div>

              <div className="pt-row-grid bg-dark-highlight">
                <div className="pt-cell pt-label text-cyan">1개 영상당 비용</div>
                <div className="pt-cell text-cyan">200,000원</div>
                <div className="pt-cell text-cyan">250,000원</div>
                <div className="pt-cell text-cyan">300,000원</div>
              </div>
            </div>

            <p style={{ textAlign: 'right', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '16px', lineHeight: '1.6' }}>
              * 모든 비용은 VAT 별도<br/>
              * 시딩 컨텐츠는 클린본 제공 필수
            </p>
          </div>
        </div>
      </section>

      {/* Slide 10: Contact */}
      <section className="slide" ref={(el) => { slideRefs.current[9] = el; }}>
        <div className="slide-content text-center" style={{ textAlign: 'center' }}>
          <h2 className="slide-title animate-up">광고주의 매출을 숏폼으로 <br/><span style={{ color: 'var(--primary)' }}>책임집니다.</span></h2>
          
          <div className="glass-panel animate-up delay-100" style={{ maxWidth: '600px', margin: '60px auto 0' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '24px', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              현재까지 TO마감 상태였으나<br />
              확장으로 인해 단 <strong>2분</strong>의 클라이언트만 추가로 모집합니다.
            </p>
            <a href="http://pf.kakao.com/_kxdmxfX/chat" target="_blank" rel="noopener noreferrer" 
               className="btn-primary" 
               style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 40px', fontSize: '1.1rem', backgroundColor: '#FEE500', color: '#000000', borderRadius: '8px', fontWeight: '600', boxShadow: '0 4px 12px rgba(254, 229, 0, 0.4)', textDecoration: 'none' }}
               onClick={() => {
                 if (typeof window !== 'undefined' && (window as any).fbq) {
                   (window as any).fbq('track', 'Contact');
                 }
               }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C7.02944 4 3 7.21071 3 11.1714C3 13.7258 4.70837 16.0357 7.24072 17.3325L6.1558 21.2825C6.07542 21.5753 6.3986 21.8021 6.64333 21.6247L11.3931 18.1724C11.5925 18.1882 11.7951 18.1964 12 18.1964C16.9706 18.1964 21 14.9857 21 11.025C21 7.06429 16.9706 4 12 4Z" />
              </svg>
              카카오톡으로 문의하기
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
