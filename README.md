# 원피드마케팅 (Onefeed Marketing)

원피드마케팅 공식 웹사이트 및 포트폴리오 페이지입니다.

## 최근 변경 사항

- **문의 폼 리다이렉트**: 상담 폼 제출 성공 시 담당자 카카오톡 채팅방(`pf.kakao.com`)으로 자동 이동되도록 기능 개선.
- **UI 개선**: 포트폴리오 영상 우측 상단에 노출되던 카테고리 텍스트 라벨(예: 뷰티, 음식 등)을 삭제하여 더 깔끔하게 시청할 수 있도록 수정.
- **포트폴리오 페이지 구축**: 4가지 카테고리(뷰티, 음식, 인테리어, 피트니스)의 숏폼 영상 12개를 그리드로 배치.
- **로딩 최적화**: `IntersectionObserver`를 활용하여 화면에 보이는 영상만 로드/재생되도록 지연 로딩(Lazy Loading) 적용.
- **문의하기 버튼 개선**: 포트폴리오 하단 및 메인 페이지에 '견적 신청하기(폼 연동)' 및 '카카오톡 문의하기(실제 채널 링크 연동)' 버튼 추가.

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
