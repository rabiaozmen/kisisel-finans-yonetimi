# 💰 Bütçem — Kişisel Finans & Gider Takipçisi

Bütçem, kullanıcıların günlük gelir ve giderlerini modern, sade ve göz alıcı bir arayüzle kaydetmesini, listelemesini, düzenlemesini ve silmesini sağlayan bir kişisel finans yönetim uygulamasıdır. Bu proje, modern web geliştirme standartları çerçevesinde **React (Vite)** ve **Tailwind CSS** kullanılarak geliştirilmiştir.

---

## 🛠️ Kullanılan Teknolojiler

- **React (Vite)** — Arayüz geliştirme
- **Tailwind CSS** — Stil ve tasarım
- **LocalStorage** — Veri kalıcılığı
- **Netlify** — Yayınlama

---

## 🚀 Özellikler

| Özellik | Açıklama |
|---|---|
| ➕ **Ekleme** | Açıklama, tutar, kategori, tarih ve işlem türü (gelir/gider) girerek yeni kayıt oluşturma |
| 📋 **Listeleme** | Tüm işlemleri kronolojik listeleme; açıklamaya göre arama, türe ve kategoriye göre filtreleme |
| ✏️ **Güncelleme** | Seçilen işlemi form alanlarına otomatik doldurarak düzenleme |
| 🗑️ **Silme** | Onay alarak istenmeyen işlemleri listeden kaldırma |
| 💾 **LocalStorage Kalıcılığı** | Veriler tarayıcıda saklanır, sayfa yenilense de kaybolmaz |
| 📊 **Kategori Analizi** | Giderlerin kategori bazında dağılımını gösteren dinamik yüzde çubukları |

---

## ⚙️ Kurulum ve Yerel Çalıştırma

```bash
# Bağımlılıkları kurun
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görebilirsiniz.

```bash
# Üretim derlemesi alın
npm run build
```

Bu komut, Netlify veya muadili platformlara yüklemek üzere optimize edilmiş dosyaları `dist` klasöründe oluşturur.
