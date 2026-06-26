import type { Metadata } from 'next'
import './globals.css'

import { ContactModalProvider } from '../context/ContactModalContext';
import Navbar from '../components/Navbar';
import ContactFormDrawer from '../components/ContactFormDrawer';
import FloatingButton from '../components/FloatingButton';

export const metadata: Metadata = {
  title: '원피드마케팅 - 시선을 사로잡는 숏폼 대행사',
  description: '릴스, 쇼츠, 틱톡. 기획부터 촬영, 편집까지 압도적인 퀄리티의 숏폼 콘텐츠를 제작해 드립니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ContactModalProvider>
          <Navbar />
          
          <main>{children}</main>

          {/* Netlify Form Hidden Dummy for Build Parser */}
          <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="업체명" />
            <input type="text" name="연락처_이메일" />
            <select name="업종"></select>
            <input type="checkbox" name="필요한_서비스" />
            <select name="월_제작_희망_수량"></select>
            <input type="checkbox" name="운영_중인_채널" />
            <input type="checkbox" name="계정_링크_없음" />
            <input type="text" name="계정_링크" />
            <input type="checkbox" name="제작_목적" />
            <select name="예상_예산"></select>
            <textarea name="문의_내용"></textarea>
            <input type="checkbox" name="개인정보_동의" />
          </form>

          <footer style={{ textAlign: 'center', padding: '60px 20px', borderTop: '1px solid var(--card-border)' }}>
            <div className="nav-logo" style={{ marginBottom: '24px' }}>원피드마케팅</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '24px' }}>
              <p>대표 : 권용진</p>
              <p>이메일 : stu01dio@gmail.com</p>
              <p>사업자등록번호 : 234-39-01465</p>
              <p>주소 : 용인시 처인구 기흥구 동백3로 11번길 33, 8층</p>
            </div>
            <p style={{ color: '#c0c0c0', fontSize: '0.85rem' }}>© 2026 원피드마케팅. All rights reserved.</p>
          </footer>
          
          <FloatingButton />
          <ContactFormDrawer />
        </ContactModalProvider>
      </body>
    </html>
  )
}
