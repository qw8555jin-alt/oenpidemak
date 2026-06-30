import type { Metadata } from 'next'
import './globals.css'

import { ContactModalProvider } from '../context/ContactModalContext';
import Navbar from '../components/Navbar';
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

          <footer style={{ textAlign: 'center', padding: '60px 20px', borderTop: '1px solid var(--card-border)' }}>
            <div className="nav-logo" style={{ marginBottom: '24px' }}>원피드마케팅</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '24px' }}>
              <p>상호명 : 원피드마케팅</p>
              <p>대표 : 권용진</p>
              <p>이메일 : stu01dio@gmail.com</p>
              <p>사업자등록번호 : 234-39-01465</p>
              <p>주소 : 용인시 처인구 기흥구 동백3로 11번길 33, 8층</p>
            </div>
            <p style={{ color: '#c0c0c0', fontSize: '0.85rem' }}>© 2026 원피드마케팅. All rights reserved.</p>
          </footer>
          
          <FloatingButton />
        </ContactModalProvider>
      </body>
    </html>
  )
}
