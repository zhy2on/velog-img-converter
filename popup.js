document.addEventListener('DOMContentLoaded', () => {
	// 저장된 값 불러오기
	chrome.storage.sync.get(["velogImgWidth", "velogImgHeight"], (result) => {
		document.getElementById("width").value = result.velogImgWidth || "";
		document.getElementById("height").value = result.velogImgHeight || "";
	});

	const save = () => {
		const width = document.getElementById("width").value;
		const height = document.getElementById("height").value;

		chrome.storage.sync.set({
			velogImgWidth: width,
			velogImgHeight: height
		}, () => {
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				chrome.tabs.sendMessage(tabs[0].id, {
					type: "UPDATE_IMG_SIZE",
					width,
					height
				});
			});

			window.close(); // 팝업 닫기
		});
	};

	document.getElementById("save").addEventListener("click", save);

	// Enter 키로 저장
	document.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			e.preventDefault(); // 폼 submit 방지
			save();
		}
	});
});
