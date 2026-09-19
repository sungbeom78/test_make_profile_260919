# 안숭범 강사 프로필

Claude Design으로 만든 강사 프로필 페이지(단일 HTML, 리소스 내장)를 Vercel 정적 사이트로 배포한 저장소입니다.

- 서비스 주소: https://profile.ahnda.com/profile_claude
- 페이지 파일: `site/profile_claude/index.html`
- 루트(`/`)는 `/profile_claude`로 리다이렉트됩니다 (`site/vercel.json`).

## 접근 제한

- 공개 주소는 `profile.ahnda.com`(Cloudflare DNS → Vercel) 하나뿐입니다.
- `ahn-sungbeom-profile.vercel.app`은 `profile.ahnda.com`으로 308 리다이렉트됩니다.
- 그 밖의 `*.vercel.app` 배포·브랜치 주소는 Vercel Standard Protection으로 팀 멤버 로그인이 필요합니다.

## 배포

Vercel 프로젝트 `ahn-sungbeom-profile`이 이 저장소와 연결되어 있습니다(Root Directory: `site`).
`main` 브랜치에 푸시하면 자동으로 프로덕션에 배포되고, 다른 브랜치는 프리뷰로 배포됩니다.

수동 배포가 필요하면 저장소 최상위에서 실행합니다.

```bash
npx vercel deploy --prod --yes
```
