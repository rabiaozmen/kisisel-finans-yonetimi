# Bütçem - Kişisel Finans & Gider Takipçisi

Bütçem, kullanıcıların günlük gelir ve giderlerini modern, sade ve göz alıcı bir arayüzle kaydetmesini, listelemesini, düzenlemesini ve silmesini sağlayan bir kişisel finans yönetim uygulamasıdır. 

Bu proje, modern web geliştirme standartları çerçevesinde **React (Vite)** ve **Tailwind CSS** kullanılarak geliştirilmiştir.

---

## 🚀 Proje Özellikleri (CRUD & LocalStorage)

Uygulama, ödev yönergesinde belirtilen tüm gereksinimleri karşılamaktadır:
*   **Gelir/Gider Ekleme (Create):** Açıklama, tutar, kategori, tarih ve işlem türü (gelir/gider) girerek yeni kayıt oluşturulabilir.
*   **İşlem Geçmişi Listeleme (Read):** Eklenen tüm işlemler kronolojik olarak listelenir. Arama kutusu ile açıklamaya göre filtreleme yapılabilir. Ayrıca tür (Gelir/Gider) ve kategoriye göre süzülebilir.
*   **Kayıt Güncelleme (Update):** Listeden seçilen herhangi bir işlem, form alanlarına otomatik doldurularak güncellenebilir.
*   **Kayıt Silme (Delete):** İstenmeyen işlemler onay alınarak listeden kolayca kaldırılabilir.
*   **LocalStorage Kalıcılığı:** Girilen tüm veriler tarayıcı önbelleğinde saklanır. Sayfa yenilendiğinde veriler kaybolmaz.
*   **Kategori Analizi:** Giderlerin hangi kategorilerde yoğunlaştığını gösteren dinamik yüzde çubukları ve otomatik analiz özeti.
*   **Premium Tasarım:** Koyu tema (Dark theme), yumuşak degradeler (gradients), glassmorphic kartlar ve mobil uyumlu (responsive) arayüz.

---

## 🛠️ Kurulum ve Yerel Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1.  **Bağımlılıkları Kurun:**
    ```bash
    npm install
    ```

2.  **Yerel Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    *Tarayıcınızda `http://localhost:5173` adresini açarak uygulamayı görebilirsiniz.*

3.  **Üretim Derlemesi Alın (Build):**
    ```bash
    npm run build
    ```
    *Bu komut, Netlify veya muadili platformlara yüklemek üzere optimize edilmiş dosyaları `dist` klasöründe oluşturur.*

---

## 🌐 Netlify Üzerinde Canlıya Alma (Dağıtım)

Projeyi Netlify üzerinde yayına almak için iki kolay yoldan birini seçebilirsiniz:

### Yöntem A: Sürükle ve Bırak (En Kolay Yol)
1.  Terminalinizde `npm run build` komutunu çalıştırın.
2.  Proje klasörünüzde oluşan `dist` klasörünü bilgisayarınızda bulun.
3.  [Netlify Drop](https://app.netlify.com/drop) sayfasını açın.
4.  `dist` klasörünü sayfadaki alana sürükleyip bırakın. Projeniz saniyeler içinde yayına alınacaktır.

### Yöntem B: GitHub Bağlantısı (Otomatik Güncelleme)
1.  Netlify paneline giriş yapın ve **"Add new site" -> "Import an existing project"** seçeneğini seçin.
2.  GitHub hesabınızı bağlayıp bu projeyi yüklediğiniz depoyu (repository) seçin.
3.  Build settings ayarlarını şu şekilde yapın (varsayılan olarak otomatik dolacaktır):
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
4.  **"Deploy"** butonuna basın. Artık GitHub deposuna her kod gönderdiğinizde siteniz otomatik güncellenecektir.

---

## 🖥️ GitHub'a Yükleme Adımları

Projeyi kendi GitHub hesabınıza yüklemek için:

1.  GitHub üzerinde yeni bir **Public** depo (repository) oluşturun.
2.  Terminalinizden şu komutları sırasıyla çalıştırın:
    ```bash
    git add .
    git commit -m "feat: init expense tracker crud"
    git branch -M main
    git remote add origin <sizin-github-depo-linkiniz>
    git push -u origin main
    ```
