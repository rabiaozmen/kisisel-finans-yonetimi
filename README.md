# 💰 Bütçem — Kişisel Finans & Gider Takipçisi

Bütçem, kullanıcıların günlük gelir ve giderlerini modern, sade ve göz alıcı bir arayüzle kaydetmesini, listelemesini, düzenlemesini ve silmesini sağlayan bir kişisel finans yönetim uygulamasıdır. Uygulama, harcama alışkanlıklarınızı takip etmenizi, gelir-gider dengenizi görmenizi ve kategori bazında nereye ne kadar harcama yaptığınızı analiz etmenizi sağlar.

Bu proje, modern web geliştirme standartları çerçevesinde **React (Vite)** ve **Tailwind CSS** kullanılarak geliştirilmiştir. Tüm veriler tarayıcının LocalStorage alanında saklanır, bu sayede herhangi bir backend veya veritabanına ihtiyaç duymadan kalıcı bir deneyim sunar.

---

## 🛠️ Kullanılan Teknolojiler

- **React (Vite)** — Hızlı geliştirme ortamı ve modern arayüz mimarisi için
- **Tailwind CSS** — Utility-first yaklaşımıyla hızlı ve tutarlı stil geliştirme
- **LocalStorage** — Sayfa yenilense dahi verilerin kaybolmadan saklanması
- **Netlify** — Projenin canlıya alınması ve yayınlanması

---

## 🚀 Özellikler

Uygulama, temel CRUD (Create - Read - Update - Delete) işlemlerinin tamamını desteklemektedir:

| Özellik | Açıklama |
|---|---|
| ➕ **Ekleme** | Açıklama, tutar, kategori, tarih ve işlem türü (gelir/gider) girerek yeni kayıt oluşturma |
| 📋 **Listeleme** | Tüm işlemleri kronolojik olarak listeleme; açıklamaya göre arama, türe ve kategoriye göre filtreleme yapabilme |
| ✏️ **Güncelleme** | Listeden seçilen bir işlemi form alanlarına otomatik doldurarak kolayca düzenleme |
| 🗑️ **Silme** | Onay alarak istenmeyen işlemleri listeden kaldırma |
| 💾 **LocalStorage Kalıcılığı** | Girilen tüm veriler tarayıcı önbelleğinde saklanır, sayfa yenilendiğinde kaybolmaz |
| 📊 **Kategori Analizi** | Giderlerin hangi kategorilerde yoğunlaştığını gösteren dinamik yüzde çubukları ve otomatik analiz özeti |
| 🎨 **Modern Tasarım** | Koyu tema (dark theme), yumuşak degradeler ve mobil uyumlu (responsive) arayüz |

---

## ⚙️ Kurulum ve Yerel Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Bağımlılıkları Kurun

```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Komut çalıştıktan sonra tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görüntüleyebilirsiniz.

### 3. Üretim Derlemesi Alın (Build)

```bash
npm run build
```

Bu komut, Netlify veya muadili platformlara yüklemek üzere optimize edilmiş dosyaları `dist` klasörü altında oluşturur.

---

## 📌 Notlar

Proje, modern web geliştirme eğitim programı kapsamında; HTML, CSS ve JavaScript temellerinin bir JavaScript kütüphanesi (React) ile birleştirilerek gerçek bir frontend projesine dönüştürülmesi amacıyla hazırlanmıştır.
