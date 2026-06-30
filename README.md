# 원피드마케팅 (Onefeed Marketing)

원피드마케팅 공식 웹사이트 및 포트폴리오 페이지입니다.

## 최근 변경 사항

- **모바일 최적화**: 제안서(`/proposal`) 및 메인 페이지 네비게이션 바 등 전체적인 레이아웃이 좁은 모바일 화면에서도 쾌적하게 보이도록 반응형(Responsive) 처리 및 스크롤 최적화 적용.
- **제안서 UI 개선**: 패키지 가격표를 6가지 타입으로 세분화하여 표 형태로 구현하고, Meta, TikTok 등 매체 공식 아이콘을 삽입하여 시각적 완성도 상향.
- **연락처 버튼 간소화**: 하단 안내 섹션의 텍스트를 제거하고 카카오톡 문의하기 버튼으로 단일화하여 전환율(CTA) 집중.
- **문의 폼 리다이렉트**: 상담 폼 제출 성공 시 담당자 카카오톡 채팅방(`pf.kakao.com`)으로 자동 이동되도록 기능 개선.
- **섹션 디자인 개선**: ROAS 성과 섹션을 프리미엄 다크 모드로 변경하고, 여타 섹션들에 부드러운 그라데이션 배경을 적용하여 단조로움을 없애고 시각적 흐름을 다채롭게 개선함.
- **포트폴리오 페이지 구축**: 4가지 카테고리(뷰티, 음식, 인테리어, 피트니스)의 숏폼 영상 12개를 그리드로 배치하고, 화면에 보이는 영상만 로드/재생되도록 지연 로딩(Lazy Loading) 적용.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
