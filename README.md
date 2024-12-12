# Frontend Assessment

Bu proje, verilen frontend case çalışmasını gerçekleştirmek için hazırlanmıştır. Nuxt.js üzerine inşa edilen bu proje, kullanıcıların giriş yapabildiği, rastgele kedi görsellerini API üzerinden alarak görüntülediği ve kullanıcı deneyimini artıran animasyonlar ile desteklenen bir uygulamadır.

---

## Kullanılan Teknolojiler
- **Nuxt 3**: Uygulama çatısı olarak.
- **TypeScript**: Tip güvenliği ve kod kalitesi için.
- **Pinia**: Durum yönetimi için.
- **Shadcn-Vue**: Hazır stil ve UI bileşenleri için.
- **Vee-Validate ve Zod**: Form doğrulama ve şema doğrulama için.
- **The Cat API**: Rastgele kedi görselleri sağlamak için.

---

## Özellikler
- Kullanıcı girişi ve çıkışı (login/logout) özelliği
- API üzerinden rastgele kedi görsellerini çekme ve ekranda görüntüleme
- Görsellerin bir "Değiştir" butonu ile yenilenmesi ve her görsel değişiminde animasyon (fade-in/fade-out gibi)
- Nitro API endpoint ile API anahtarını gizli tutma
- Responsive tasarım
- Temiz ve hata içermeyen bir kullanıcı deneyimi

---

---

## Live Demo
[Canlı link](https://case-12-12.vercel.app/)

## Kurulum ve Çalıştırma

1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/gumrahsindar/case-12-12.git
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```

4. **Proje Çıktısını Oluşturun (Opsiyonel):**
   ```bash
   npm run build
   ```

---

## API Kullanımı
- Bu projede rastgele kedi görselleri için [The Cat API]([https://docs.thecatapi.com/api-reference/images/images-search](https://developers.thecatapi.com/)) kullanılmıştır.
- Nitro API endpoint özelliği sayesinde `api anahtarı` gizli tutulmuş ve doğrudan istemci tarafında görünmesi engellenmiştir.

---

## Kullanıcı Deneyimi Notları
- **Login Sayfası:** Kullanıcı adı ve şifre girişinden sonra başarılı doğrulama durumunda ana sayfaya yönlendirilir.
- **Ana Sayfa:** İlk girişte bir kedi görseli yüklenir. "Değiştir" butonuna basıldığında, yeni bir görsel ve geçiş animasyonu gösterilir.
- **Logout:** Kullanıcı, tek bir tıklama ile oturumu sonlandırabilir.

---

## Önemli Notlar
- **Animasyonlar:** Görsel değişimlerinde CSS animasyonları kullanılmıştır.
- **Responsive Tasarım:** Mobil ve masaüstü uyumlu.
- **Hata Yönetimi:** API iletişiminde ve kullanıcı girişinde karşılaşılabilecek hatalar kullanıcıya uygun mesajlarla iletilir.

---

## Ekran Görüntüleri (Opsiyonel)
Ekran görüntüleri burada gösterilebilir.

---

Herhangi bir soru ya da geri bildirim için benimle iletişime geçebilirsiniz!
