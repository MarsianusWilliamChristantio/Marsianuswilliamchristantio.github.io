# Website Portofolio — Marsianus William Christantio

Website portofolio pribadi untuk mahasiswa Computer Science (Bina Nusantara University)
dengan fokus **Hardware & Internet of Things (IoT)**.

Dibuat dengan HTML, CSS, dan JavaScript murni — tanpa framework, jadi ringan dan
mudah diubah. Tema desain: **Midnight Violet** (gelap dengan aksen ungu-cyan).

## 📁 Struktur File

```
Portofolio dan CV/
├── index.html   → isi & struktur halaman (teks yang kamu edit ada di sini)
├── style.css    → tampilan (warna, font, layout)
├── script.js    → interaksi (menu mobile, accordion studi, tahun otomatis)
├── profile.jpg  → foto profil (tambahkan sendiri)
└── README.md    → file ini
```

## 🚀 Cara Membuka

Klik dua kali file `index.html`, atau klik kanan → **Open With** → browser
(Chrome, Safari, dll.). Tidak perlu install apa pun.

## 📸 Menambahkan Foto Profil

Foto profil tampil di bagian atas (Hero). Untuk memasangnya:

1. Siapkan foto kamu, sebaiknya berbentuk persegi (misalnya 500 x 500 piksel).
2. Beri nama file **`profile.jpg`**.
3. Taruh di folder yang sama dengan `index.html`.

Kalau file `profile.jpg` belum ada, akan tampil inisial **MW** sebagai pengganti.
Kalau fotomu PNG, ganti nama jadi `profile.png` dan ubah `src="profile.jpg"`
menjadi `src="profile.png"` di `index.html`.

## ✏️ Yang Masih Perlu Diisi

Buka `index.html` dan lengkapi:

- **GitHub** — ganti `username-kamu` di bagian Kontak dengan username GitHub kamu.
- **Perjalanan Studi** — isi Karya/Prestasi dan Organisasi di tiap jenjang (SD–Kuliah).
- **Proyek** — ganti 3 kartu contoh dengan proyek asli kamu dan tautkan ke repo GitHub.

> Tips: mau ganti warna tema? Edit bagian `:root` di paling atas `style.css`.
> `--accent` = warna ungu, `--accent-2` = warna cyan.

## 🌐 Hosting Gratis di GitHub Pages

1. Buat akun di [github.com](https://github.com) kalau belum punya.
2. Buat repository baru, misalnya `portofolio`.
3. Upload semua file ke repo itu (Add file → Upload files), atau via terminal:
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/username-kamu/portofolio.git
   git push -u origin main
   ```
4. Di repo, buka **Settings → Pages**.
5. Bagian *Source*, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
6. Website tayang di: `https://username-kamu.github.io/portofolio/`

Link itu bisa kamu taruh di CV dan LinkedIn.
