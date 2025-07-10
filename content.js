let width = "";
let height = "";

// 초기 설정 불러오기
chrome.storage.sync.get(["velogImgWidth", "velogImgHeight"], (result) => {
  width = result.velogImgWidth || "";
  height = result.velogImgHeight || "";
});

// 메시지 받으면 값 업데이트
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "UPDATE_IMG_SIZE") {
    width = message.width || "";
    height = message.height || "";
  }
});

// 클릭 시 복사
document.addEventListener("click", function (event) {
  const clickedSpan = event.target;

  // 1. 정확히 URL 부분 (괄호 안) span인지 체크
  if (!clickedSpan.classList.contains("cm-url")) return;

  const container = clickedSpan.closest('.CodeMirror-line');
  if (!container) return;

  // 2. 클릭한 span 내부 텍스트가 정확한 마크다운 URL인지 확인
  const urlMatch = clickedSpan.textContent.match(/https?:\/\/[^\s)]+/);
  if (!urlMatch) return;

  const url = urlMatch[0];

  // 3. 변환 및 복사
  const tag = `<img src="${url}" width="${width}" height="${height}">`;
  navigator.clipboard.writeText(tag).then(() => {
    alert("📋 이미지 태그가 복사되었습니다!");
  });
});
