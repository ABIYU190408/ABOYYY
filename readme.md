# 📦 Project Setup & Git Workflow

Dokumentasi ini berisi panduan lengkap untuk setup project, penanganan `node_modules`, normalisasi line endings, penggunaan TailwindCSS, dan cara melakukan push ke GitHub.

---

## 🗑️ Menghapus `node_modules` yang Terlanjur Ter-push ke GitHub

Jika folder **node_modules** terlanjur masuk ke repository GitHub, jalankan perintah berikut:

```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules from repo"
git push
```

Git akan menghapusnya dari repo tanpa menghapus folder `node_modules` di komputer kamu.

---

## 🔧 Normalisasi Line Endings (Jalankan Sekali Saja)

Setelah membuat `.gitattributes` atau setelah instal pertama kali, lakukan normalisasi:

```bash
git add --renormalize .
git commit -m "Normalize line endings"
git push
```

> ⚠️ **Catatan:**
> Perintah ini **cukup dilakukan satu kali saja** pada setup awal project.

---

## 🎨 Penggunaan TailwindCSS

Pastikan semua CSS utama diarahkan ke file:

```
src/output.css
```

### ⚙️ Perintah untuk Compile Tailwind

#### Mode Development (watch):

```bash
npm run build
```

#### Mode Production (minify):

```bash
npm run final
```

---

## 🚀 Cara Push ke GitHub

Gunakan perintah standar:

```bash
git add .
git commit -m "update"
git push
```

Perubahan akan dipush kecuali file yang diabaikan melalui `.gitignore`.

---

## 📌 Ringkasan Penting

* `node_modules` harus ada di `.gitignore`.
* Jika terlanjur terpush, hapus menggunakan `git rm -r --cached node_modules`.
* Normalisasi line endings dilakukan sekali dengan `git add --renormalize .`.
* Compile Tailwind menggunakan `npm run build` dan `npm run final`.
* Push perubahan dengan `git add .`, `git commit`, dan `git push`.

---