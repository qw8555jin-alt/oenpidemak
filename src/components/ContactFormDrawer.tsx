"use client";

import React, { useEffect, useState } from 'react';
import { useContactModal } from '../context/ContactModalContext';
import './ContactFormDrawer.css';

export default function ContactFormDrawer() {
  const { isOpen, closeModal } = useContactModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyDetail, setShowPrivacyDetail] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Netlify Forms requires form-name
    const searchParams = new URLSearchParams();
    searchParams.append("form-name", "contact");
    for (const [key, value] of formData.entries()) {
      searchParams.append(key, value as string);
    }
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: searchParams.toString()
      });
      
      if (response.ok) {
        alert("상담 신청이 완료되었습니다. 빠르게 연락드리겠습니다!");
        form.reset();
        closeModal();
      } else {
        alert("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch {
      alert("네트워크 오류가 발생했지만 전송이 시도되었습니다.");
      form.reset();
      closeModal();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={closeModal}
      />

      {/* Drawer */}
      <div className={`contact-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div>
            <h2>숏폼 제작 상담 신청</h2>
            <p>업종과 목적에 맞는 숏폼 콘텐츠 방향을 확인한 후,<br />맞춤 견적을 안내드립니다.</p>
          </div>
          <button className="close-btn" onClick={closeModal} aria-label="닫기">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-group">
              <label>1. 업체명</label>
              <input type="text" name="업체명" placeholder="예) ○○법률사무소" required />
            </div>

            <div className="form-group">
              <label>2. 연락처 또는 이메일</label>
              <input type="text" name="연락처_이메일" placeholder="예) 010-0000-0000 또는 example@email.com" required />
            </div>

            <div className="form-group">
              <label>3. 업종</label>
              <select name="업종" required defaultValue="">
                <option value="" disabled>업종을 선택해주세요</option>
                <option value="병원/의원">병원 / 의원</option>
                <option value="변호사/법무법인">변호사 / 법무법인</option>
                <option value="학원/교육">학원 / 교육</option>
                <option value="음식점/카페">음식점 / 카페</option>
                <option value="뷰티/미용">뷰티 / 미용</option>
                <option value="쇼핑몰/브랜드">쇼핑몰 / 브랜드</option>
                <option value="부동산/분양">부동산 / 분양</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="form-group">
              <label>4. 필요한 서비스 <span className="sub-label">(복수 선택 가능)</span></label>
              <div className="checkbox-grid">
                <label className="checkbox-label"><input type="checkbox" name="필요한_서비스" value="숏폼 콘텐츠 기획" /> 숏폼 콘텐츠 기획</label>
                <label className="checkbox-label"><input type="checkbox" name="필요한_서비스" value="촬영 대행" /> 촬영 대행</label>
                <label className="checkbox-label"><input type="checkbox" name="필요한_서비스" value="편집 대행" /> 편집 대행</label>
                <label className="checkbox-label"><input type="checkbox" name="필요한_서비스" value="릴스 제작" /> 릴스 제작</label>
                <label className="checkbox-label"><input type="checkbox" name="필요한_서비스" value="광고 소재 제작" /> 광고 소재 제작</label>
                <label className="checkbox-label"><input type="checkbox" name="필요한_서비스" value="아직 잘 모르겠음" /> 아직 잘 모르겠음</label>
              </div>
            </div>

            <div className="form-group">
              <label>5. 월 제작 희망 수량</label>
              <select name="월_제작_희망_수량" required defaultValue="">
                <option value="" disabled>제출 희망 수량을 선택해주세요</option>
                <option value="월 4편">월 4편</option>
                <option value="월 8편">월 8편</option>
                <option value="월 12편">월 12편</option>
                <option value="월 20편 이상">월 20편 이상</option>
                <option value="상담 후 결정">상담 후 결정</option>
              </select>
            </div>

            <div className="form-group">
              <label>6. 현재 운영 중인 채널 <span className="sub-label">(복수 선택 가능)</span></label>
              <div className="checkbox-grid">
                <label className="checkbox-label"><input type="checkbox" name="운영_중인_채널" value="인스타그램" /> 인스타그램</label>
                <label className="checkbox-label"><input type="checkbox" name="운영_중인_채널" value="유튜브" /> 유튜브</label>
                <label className="checkbox-label"><input type="checkbox" name="운영_중인_채널" value="틱톡" /> 틱톡</label>
                <label className="checkbox-label"><input type="checkbox" name="운영_중인_채널" value="블로그" /> 블로그</label>
                <label className="checkbox-label"><input type="checkbox" name="운영_중인_채널" value="아직 없음" /> 아직 없음</label>
              </div>
            </div>

            <div className="form-group">
              <label>7. 운영 중인 계정 링크</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="checkbox-label" style={{ marginBottom: '4px' }}>
                  <input type="checkbox" name="계정_링크_없음" value="없음" />
                  <span>운영 중인 계정이 없습니다 (X)</span>
                </label>
                <input type="text" name="계정_링크" placeholder="운영 중인 인스타그램 아이디를 알려주세요" />
              </div>
            </div>

            <div className="form-group">
              <label>8. 숏폼 제작 목적 <span className="sub-label">(복수 선택 가능)</span></label>
              <div className="checkbox-grid">
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="브랜드 인지도 상승" /> 브랜드 인지도 상승</label>
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="상담 / 문의 증가" /> 상담 / 문의 증가</label>
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="예약 증가" /> 예약 증가</label>
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="매장 방문 증가" /> 매장 방문 증가</label>
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="제품 판매 증가" /> 제품 판매 증가</label>
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="전문성 / 신뢰감 확보" /> 전문성 / 신뢰감 확보</label>
                <label className="checkbox-label"><input type="checkbox" name="제작_목적" value="잘 모르겠음" /> 잘 모르겠음</label>
              </div>
            </div>

            <div className="form-group">
              <label>9. 예상 예산</label>
              <select name="예상_예산" required defaultValue="">
                <option value="" disabled>예상 예산을 선택해주세요</option>
                <option value="월 50만원 이하">월 50만원 이하</option>
                <option value="월 50~100만원">월 50~100만원</option>
                <option value="월 100~200만원">월 100~200만원</option>
                <option value="월 200~300만원">월 200~300만원</option>
                <option value="월 300만원 이상">월 300만원 이상</option>
                <option value="상담 후 결정">상담 후 결정</option>
              </select>
            </div>

            <div className="form-group">
              <label>10. 문의 내용</label>
              <textarea 
                name="문의_내용"
                rows={5} 
                placeholder="예) 숏폼을 시작하고 싶은데 어떤 콘텐츠를 만들어야 할지 모르겠어요.&#10;예) 촬영은 가능한데 편집만 맡기고 싶어요.&#10;예) 변호사 사무실 홍보용 숏폼을 만들고 싶어요."
              ></textarea>
            </div>

            <div className="form-group privacy-policy">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label className="checkbox-label privacy-label">
                  <input type="checkbox" name="개인정보_동의" required />
                  <span style={{ fontWeight: '600', color: '#333' }}>개인정보 수집 및 이용에 동의합니다. (필수)</span>
                </label>
                <button 
                  type="button" 
                  onClick={() => setShowPrivacyDetail(!showPrivacyDetail)}
                  style={{ background: 'none', border: 'none', color: '#888', fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer', padding: '0 4px' }}
                >
                  {showPrivacyDetail ? '접기' : '자세히 보기'}
                </button>
              </div>
              
              {showPrivacyDetail && (
                <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#fff', borderRadius: '6px', fontSize: '0.85rem', color: '#666', lineHeight: '1.6', border: '1px solid #eee' }}>
                  입력해주신 정보는 상담 및 견적 안내 목적으로만 사용되며, 상담 완료 후 관련 법령에 따라 안전하게 관리 및 파기됩니다.
                </div>
              )}
            </div>

            <div className="drawer-footer">
              <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? '전송 중...' : '제출하기'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
