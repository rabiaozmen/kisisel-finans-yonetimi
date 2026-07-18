<div align="center">
💰 Bütçem — Kişisel Finans & Gider Takipçisi

Günlük gelir ve giderlerinizi sade, modern ve göz alıcı bir arayüzle yönetin.

Show Image
Show Image
Show Image
Show Image
Show Image

🔗 Canlı Demo · 🐞 Hata Bildir · ✨ Özellik Öner

</div>

📸 Ekran Görüntüsü

<div align="center">
  <img src="./screenshots/anasayfa.png" alt="Bütçem uygulama ana ekranı" width="800"/>
</div>

💡 screenshots/ klasörü altına ekran görüntülerini eklemeyi ve yukarıdaki dosya adını kendi görselinle güncellemeyi unutma.




📖 Proje Hakkında

Bütçem, kullanıcıların günlük gelir ve giderlerini kaydetmesini, listelemesini, düzenlemesini ve silmesini sağlayan bir kişisel finans yönetim uygulamasıdır. Modern web geliştirme standartları çerçevesinde React (Vite) ve Tailwind CSS kullanılarak geliştirilmiştir.

🚀 Özellikler

ÖzellikAçıklama➕ Ekleme (Create)Açıklama, tutar, kategori, tarih ve işlem türü (gelir/gider) girerek yeni kayıt oluşturma📋 Listeleme (Read)Tüm işlemleri kronolojik listeleme; açıklamaya göre arama, türe ve kategoriye göre filtreleme✏️ Güncelleme (Update)Seçilen işlemi form alanlarına otomatik doldurarak düzenleme🗑️ Silme (Delete)Onay alarak istenmeyen işlemleri listeden kaldırma💾 LocalStorage KalıcılığıVeriler tarayıcıda saklanır, sayfa yenilense de kaybolmaz📊 Kategori AnaliziGiderlerin kategori bazında dağılımını gösteren dinamik yüzde çubukları🎨 Premium TasarımKoyu tema, yumuşak degradeler, glassmorphic kartlar, mobil uyumlu arayüz

🛠️ Teknoloji Yığını


Framework: React 18 + Vite
Styling: Tailwind CSS
State/Persistence: React Hooks + LocalStorage
Deployment: Netlify


📁 Proje Yapısı

src/
├── components/     # Tekrar kullanılabilir arayüz bileşenleri
├── pages/          # Sayfa bileşenleri
├── interfaces/     # Tip/veri yapıları
├── App.jsx
└── main.jsx

⚙️ Kurulum ve Yerel Çalıştırma

Gereksinimler: Node.js (v18+) ve npm

bash# Depoyu klonlayın
git clone https://github.com/kullanici-adi/butcem.git
cd butcem

# Bağımlılıkları kurun
npm install

# Geliştirme sunucusunu başlatın
npm run dev

Tarayıcınızda http://localhost:5173 adresini açarak uygulamayı görüntüleyebilirsiniz.

Üretim Derlemesi (Build)

bashnpm run build

Bu komut, Netlify veya muadili platformlara yüklemek üzere optimize edilmiş dosyaları dist/ klasöründe oluşturur.

🌐 Canlı Yayın

Uygulama Netlify üzerinden yayına alınmıştır: buraya-netlify-linkin.netlify.app

🗺️ Yol Haritası


 Grafik/analiz sayfasının genişletilmesi (aylık trend grafiği)
 Bütçe hedefi belirleme ve limit uyarıları
 Çoklu dil desteği
 Verileri JSON/CSV olarak dışa aktarma


🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz!


Bu depoyu fork'layın
Yeni bir dal oluşturun (git checkout -b ozellik/harika-ozellik)
Değişikliklerinizi commit'leyin (git commit -m 'Harika özellik eklendi')
Dalınızı push'layın (git push origin ozellik/harika-ozellik)
Bir Pull Request açın


📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.

👤 İletişim

[Adın Soyadın]


GitHub: @kullanici-adi
LinkedIn: profil linkin
