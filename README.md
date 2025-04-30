# Twitch Auto Drops & Points Claimer

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/YOUR_EXTENSION_ID?label=Chrome%20Web%20Store)](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/YOUR_EXTENSION_ID?label=Users)](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)

## 簡介 / Introduction

Twitch Auto Drops & Points Claimer 是一個簡單方便的 Chrome 擴充功能，旨在自動為您領取 Twitch Drops 獎勵和頻道忠誠點數獎勵，讓您在觀看喜愛的實況時不再錯過任何獎勵。

厭倦了手動點擊領取按鈕？這個擴充功能將為您完成這一切！

---

Twitch Auto Drops & Points Claimer is a simple and convenient Chrome extension designed to automatically claim Twitch Drops and Channel Points rewards for you, ensuring you never miss out on rewards while watching your favorite streams.

Tired of manually clicking claim buttons? This extension does it all for you!

## 功能特色 / Features

* **自動領取 Drops 獎勵：** 在符合資格的實況中，自動偵測並點擊 Twitch Drops 的領取按鈕。

* **自動領取頻道忠誠點數：** 自動偵測並點擊頻道忠誠點數的「領取獎勵」按鈕。

* **多語言支援：** 支援多種語言的 Drops 領取按鈕文字偵測，包括但不限於英文、繁體中文、簡體中文、德語、西班牙語、法語、義大利語、日語、韓語等。

* **高效運行：** 利用 MutationObserver 技術監控頁面變化，而非頻繁輪詢，降低資源佔用。

* **冷卻時間機制：** 每次領取 Drops 或忠誠點數後，會設定一個 5 分鐘的冷卻時間，避免重複點擊和潛在的彈窗干擾。


* **Automatic Drops Claiming:** Automatically detects and clicks the Twitch Drops claim button during eligible streams.

* **Automatic Channel Points Claiming:** Effortlessly collect your Channel Points bonuses just for watching.

* **Multi-Language Support:** Designed to recognize the Drops claim button text in various languages, including but not limited to English, Traditional Chinese, Simplified Chinese, German, Spanish, French, Italian, Japanese, Korean, Vietnamese, Turkish, Czech, Greek, Hungarian, Bulgarian, Russian, Thai, Dutch, Norwegian, Polish, Portuguese, Slovak, and Romanian. (You can list the languages you've added support for).

* **Efficient Operation:** Utilizes MutationObserver technology to monitor page changes efficiently without constant polling, minimizing resource usage.

* **Cooldown Mechanism:** Includes a 5-minute cooldown period after claiming either a Drop or Channel Points to prevent excessive clicking and avoid triggering repetitive pop-ups, ensuring a smooth viewing experience.

## 安裝 / Installation

您可以透過 Chrome Web Store 安裝此擴充功能：

[Chrome Web Store 連結](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)

或者，您也可以從原始碼手動載入：

1. 下載本儲存庫的程式碼。

2. 在 Chrome 瀏覽器中，前往 `chrome://extensions/`。

3. 開啟右上角的「開發人員模式」。

4. 點擊左上角的「載入未封裝項目」。

5. 選擇包含 `manifest.json` 檔案的擴充功能資料夾。

---

You can install this extension from the Chrome Web Store:

[Chrome Web Store Link](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)

Alternatively, you can manually load it from the source code:

1. Download the code from this repository.

2. In your Chrome browser, go to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click "Load unpacked" in the top left corner.

5. Select the extension folder that contains the `manifest.json` file.

## 使用方法 / Usage

安裝並啟用擴充功能後，無需額外設定。只需在 Chrome 瀏覽器中打開 Twitch.tv 網站並觀看實況，擴充功能將會在背景自動偵測並領取 Drops 和忠誠點數獎勵。

請確保您已登入 Twitch 帳戶，並且正在觀看符合 Drops 資格的實況。

---

After installing and enabling the extension, no additional configuration is needed. Simply open the Twitch.tv website in your Chrome browser and watch streams. The extension will automatically detect and claim Drops and Channel Points rewards in the background.

Please ensure you are logged into your Twitch account and are watching eligible streams for Drops.

## 注意事項 / Notes

* 本擴充功能透過模擬使用者點擊 Twitch 頁面上的特定元素來實現功能。

* Twitch 網站的結構可能會不定期更新，這可能會影響擴充功能的正常運作。如果擴充功能失效，請檢查是否有更新版本，或聯繫開發者回報問題。

* 本擴充功能**不收集**任何個人身份資訊、瀏覽歷史或 Twitch 帳戶資料。所有操作都在您的瀏覽器本地進行。


* This extension functions by simulating user clicks on specific elements on the Twitch website.

* Twitch's website structure may be updated periodically, which could potentially affect the extension's functionality. If the extension stops working, please check for an updated version or contact the developer to report the issue.

* This extension **does NOT collect** any personally identifiable information, browsing history, or Twitch account data. All operations are performed locally within your browser.

## 支援與回饋 / Support and Feedback

如果您在使用過程中遇到任何問題、有功能建議或想回報 Bug，請透過以下方式聯繫：

* \[您的支援電子郵件地址\]

* \[如果有的話，提供 GitHub Issues 連結\]

---

If you encounter any issues, have feature suggestions, or would like to report a bug, please contact us through the following channels:

* \[Your Support Email Address\]

* \[If applicable, provide a link to GitHub Issues\]

## 授權 / License

\[根據您的選擇添加授權資訊，例如 MIT 授權\]

---

\[Add license information based on your choice, e.g., MIT License]

**請將上述內容中的 `YOUR_EXTENSION_ID` 替換為您的擴充功能在 Chrome Web Store 發布後的實際 ID。**

**Please replace `YOUR_EXTENSION_ID` in the content above with the actual ID of your extension after it is published on the Chrome Web Store.**
