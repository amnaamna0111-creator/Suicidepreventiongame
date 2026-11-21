# Hope Game – لعبة الأمل
World Suicide Prevention Day – Ain Shams University, Faculty of Nursing.

## 1) Collect names, scores and feedback (Google Sheet)
1. Create a new Google Sheet.
2. Extensions → Apps Script → delete the sample code → paste everything from `apps-script.gs` → Save.
3. Deploy → New deployment → type: Web app → Execute as: **Me** → Who has access: **Anyone** → Deploy (authorize when asked).
4. Copy the Web app URL.
5. Open `index.html`, find `const SHEET_URL="";` and paste the URL between the quotes.
Every time someone presses "إنشاء الشهادة", a new row (time, name, score, rating, feedback) is added to your sheet.

## 2) Publish on GitHub Pages
Upload `index.html` to a repo → Settings → Pages → Deploy from a branch → `main` / `(root)`.
Link: https://YOUR-USERNAME.github.io/REPO-NAME/
