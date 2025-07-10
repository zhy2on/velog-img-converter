# velog-img-converter

Velog 글쓰기 창에서 마크다운 이미지(`![](url)`)를 클릭하면  
미리 설정한 width, height 값으로 `<img>` 태그가 클립보드에 복사되는 크롬 확장 프로그램입니다.

## 사용법
1. 확장 아이콘 클릭 → width, height 입력 후 저장
2. Velog 글쓰기 페이지에서 `![](url)` 이미지를 클릭
3. 지정한 크기의 `<img>` 태그가 클립보드에 자동 복사됨
4. 원하는 위치에 붙여넣기

## 특징
- 팝업에서 설정한 값은 저장되어 재사용됨
- 복사 성공 시 알림(alert) 표시

## 예시
```markdown
![](https://velog.velcdn.com/images/xxx/image.png")
```

<center>⬇️</center>

```html
<img src="https://velog.velcdn.com/images/xxx/image.png" width="400" height="300">
```
