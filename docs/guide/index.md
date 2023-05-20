# Introduction

Blro UI Primitives는 Vue로 구성된 스타일이 지정되지 않은(Headless) 오픈 소스 저수준 컴포넌트 라이브러리입니다. 접근성과 사용자 지정 및 개발자 경험에 중점을 두고 있으며, 디자인 시스템 구현의 기반이 될 수 있습니다.

## Motivation

체크 박스나 다이얼로그, 선택 목록 등 많은 컴포넌트들은 서로 다른 제품이어도 같은 디자인 패턴을 가집니다. 이러한 디자인 패턴은 [WAI-ARIA 지침](https://www.w3.org/WAI/ARIA/apg/)을 통해 문서화됩니다.

그러나 웹 플랫폼의 구현은 많은 디자인 패턴이 존재하지 않거나, 사용자 지정하기 어려운 경우가 많습니다. 이를 해결하기 위해 개발자는 직접 컴포넌트를 구현해야 하지만 이는 어려운 작업입니다. 중요한 기능이 누락되거나 접근성 문제가 발생할 수 있기 때문입니다.

이것이 우리가 해결하고자 하는 문제입니다. 다양한 디자인 패턴이 구현된 컴포넌트 라이브러리를 만들어 개발자가 컴포넌트를 구현하는 데 도움을 주고자 합니다.

### Other Libraries

이 라이브러리는 특히 React로 구현된 [Radix UI](https://www.radix-ui.com/)에서 큰 영감을 받았습니다. Blro UI Primitives의 비전과 목표는 Radix UI와 동일합니다.

비슷한 시기에 같은 동기를 가진 [productdevbook](https://github.com/productdevbook)의 [Oku UI](https://oku-ui.com/)가 공개됐습니다. Oku UI를 채택하는 것도 좋은 선택지입니다.

## Features

### Accessible

WAI-ARIA 지침을 준수해 접근 가능한 컴포넌트를 제공합니다. 복잡한 속성 지정부터 키보드 네비게이션 등을 직접 구현하지 않아도 됩니다.

### Developer Experience

컴포넌트들은 일관된 API를 통해 제공되고, 모두 문서화되어 있습니다. 그리고 조합 컴포넌트를 통해 복잡한 컴포넌트는 더 단순한 형태로 제공됩니다.

### Customizable Styling

모든 컴포넌트는 스타일이 지정되지 않은 상태로 제공되어 사용자가 원하는 스타일로 변경할 수 있습니다. 디자인 시스템의 기반으로 채택하면 모든 장점을 그대로 누릴 수 있습니다.

## Next Steps

라이브러리를 사용하려면 [설치하기](/ko/guide/installation)를 통해 시작하세요. 그리고 [컴포넌트 목록](/ko/components)에서 컴포넌트를 확인할 수 있습니다.
