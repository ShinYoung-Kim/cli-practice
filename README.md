# 디자인 시스템 개발 실습

더 나은 Warrr-UI를 개발하기 위해 기술 및 자동화 등을 실습해보는 레포지토리입니다.

## Warrr-UI란?

- 컴포넌트의 개별 설치
- cli 기반 copy and paste 방식 지원
- Headless UI
- n 여 종의 테마

를 목표로 하는 UI 라이브러리로, 추후 이를 활용한 팀 블로그 제작을 염두에 두고 있습니다.

### 확정된 스펙

주에 2회씩, 12주(시험 기간을 포함하여 약 3달)의 조사 및 실습 기간을 거쳐 신중하게 개발 스펙을 확정하고 있습니다.

- 모노레포: `turbo repo`
- 번들러: `rollup`
- 패키지 매니저: `pnpm`
- CSS 라이브러리: `Panda CSS`
- 컴포넌트 로직 검증 및 상호작용 테스트: `testing-library/react`, `jest`
- 웹 접근성 및 크로스 브라우징 테스트: `playwright`
- UI 테스트: `storybook`
- 서비스 구조: primitive(Headless UI), themed(shadcn같은 copy paste 기반 component collection), utils

## 목차

| 주차      | 날짜       | 주제                                               |
| --------- | ---------- | -------------------------------------------------- |
| Week1     | 2024.03.02 | 테크블로그 분석                                    |
| Week2     | 2024.03.09 | 디자인 시스템 조사                                 |
| Week3     | 2024.03.16 | CSS 라이브러리 (tailwind CSS, Uno CSS) 조사        |
| Week4     | 2024.03.23 | 디자인 시스템 라이브러리 분석                      |
| Week5     | 2024.03.30 | cli 실습                                           |
| Week6     | 2024.04.04 | cli 실습                                           |
| Week7     | 2024.05.05 | 번들러와 모노레포                                  |
| Week8     | 2024.05.11 | CI/CD + changeset, 번들러                          |
| Week9     | 2024.05.19 | 스토리북, 테스트코드                               |
| Week10    | 2024.05.26 | icon 관련 자동화                                   |
| Week11    | 2024.06.02 | preset, token, stylesheet 관련 자동화 및 세팅 연습 |
| 시험 기간 | 2024.06.16 | 아이콘 컴포넌트 생성 방식 조사 및 비교             |
| Week12    | 2024.07.01 | 개발 전 세팅                                       |

## 주차별 요약

### 테크 블로그 분석

[조사 내용](https://reliable-tune-124.notion.site/b88ce089cf64460fa01a265fa3ac799d?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8%EB%A5%BC-%EB%A7%8C%EB%93%A0%EB%8B%A4%EB%8A%94-%EA%B1%B4) | [피그마 디자인](https://www.figma.com/design/fdmDrfsNM9QiiRWSSGNXZC/%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=gvmLRS4RzxBQWkZ4-1)

: 기존 테크 블로그를 분석하여 필요한 컴포넌트와 기능, 디자인 등을 분석하고 이를 기반으로 팀 블로그를 설계해보며 동기 부여하였습니다.

### 디자인 시스템 조사

[조사 내용](https://reliable-tune-124.notion.site/e85d67d8a05a42da9cd4b773856702fe?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%A0%95%EB%A6%AC%ED%95%98%EB%8A%94-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C)

### CSS 라이브러리 조사

[조사 내용](https://reliable-tune-124.notion.site/Tailwind-CSS-39ac5d225a4f4d43815e0b4ac06eea59?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-UnoCSS)

### 디자인 시스템 라이브러리 조사

[조사 내용](https://reliable-tune-124.notion.site/radix-UI-Shadcn-UI-b179da1f95d046eca4f97d4ab4726d5d?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-Shadcn-UI-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0-feat.-%EA%B0%9C%EB%B3%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B3%A0%EC%B0%B0)

### cli 실습

[조사 내용](https://reliable-tune-124.notion.site/CLI-4601432fbcce4c0cac9d9d43cab4413f?pvs=4) | [실습]()

### 번들러와 모노레포

[조사 내용](https://reliable-tune-124.notion.site/fa72673d1b5c42eb9e01851c5cac8516?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-Shadcn-UI-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0-feat.-%EA%B0%9C%EB%B3%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B3%A0%EC%B0%B0) | [실습]()

### CI/CD, changesets, 자동화

[조사 내용](https://reliable-tune-124.notion.site/fa72673d1b5c42eb9e01851c5cac8516?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-Shadcn-UI-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0-feat.-%EA%B0%9C%EB%B3%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B3%A0%EC%B0%B0) | [실습]()

### 테스트 실습

[조사 내용](https://reliable-tune-124.notion.site/fa72673d1b5c42eb9e01851c5cac8516?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-playwright-%EC%B2%AB-%EC%8B%9C%EB%8F%84) | [실습]()

### icon 관련 자동화

[조사 내용](https://reliable-tune-124.notion.site/fa72673d1b5c42eb9e01851c5cac8516?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9E%90%EB%8F%99-%EC%B6%94%EC%B6%9C-%ED%94%BC%EA%B7%B8%EB%A7%88-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0) | [실습]()

### preset, token, stylesheet 관련 자동화 및 세팅 연습

[조사 내용](https://reliable-tune-124.notion.site/Panda-CSS-e405e85f5c0e434eacad16b7d36acff6?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-Shadcn-UI-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0-feat.-%EA%B0%9C%EB%B3%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B3%A0%EC%B0%B0) | [실습]()

### 아이콘 컴포넌트 생성 방식 조사 및 비교

[조사 내용](https://reliable-tune-124.notion.site/fa72673d1b5c42eb9e01851c5cac8516?pvs=4) | [블로그 포스팅](https://velog.io/@hannatoo/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-Shadcn-UI-%EB%B6%84%EC%84%9D%ED%95%98%EA%B8%B0-feat.-%EA%B0%9C%EB%B3%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B3%A0%EC%B0%B0) | [실습]()
