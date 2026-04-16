# 🚀 ProConnect - Professional Network Showcase

ProConnect, React öğrenme yolculuğumun ilk aşamasında geliştirdiğim, modern bileşen mimarisini (Component Architecture) ve responsive tasarım prensiplerini temel alan bir profesyonel ağ platformu arayüzüdür.

## 🎯 Projenin Amacı
Bu proje, statik bir web sayfasını mantıksal parçalara (bileşenlere) bölerek, veriyi bu parçalar arasında güvenli bir şekilde taşımayı ve her ekran boyutunda kusursuz bir kullanıcı deneyimi sunmayı hedeflemektedir.

## 🛠️ Teknik Kazanımlar ve Özellikler

### 1. Atomik Bileşen Yapısı (Atomic Component Structure)
Proje, React'in en güçlü yanı olan "tekrar kullanılabilirlik" üzerine inşa edilmiştir. Uygulama şu ana parçalara ayrılmıştır:
- **Header:** Sticky navigasyon ve marka kimliği.
- **BusinessCard:** Kullanıcı bilgilerini taşıyan ana konteyner.
- **SkillList:** Kart içindeki yetenek dizilerini dinamik olarak render eden alt bileşen.
- **Footer:** Kurumsal bitiş ve link hiyerarşisi.

### 2. Dinamik Veri Yönetimi (Props & Lists)
- Tüm kullanıcı verileri `App.jsx` üzerinde bir veri kümesi olarak tutulur.
- **Props & Destructuring:** Veriler alt bileşenlere modern JavaScript teknikleriyle (Object Destructuring) aktarılmıştır.
- **Mapping:** `map()` metodu kullanılarak benzersiz `key` değerleriyle dinamik listeler oluşturulmuştur.

### 3. Koşullu Durum Yönetimi (Conditional Rendering)
- Kullanıcıların müsaitlik durumuna göre (Open to Work) dinamik CSS sınıfları ve rozetler (Badges) atanmıştır.

### 4. Gelişmiş Styling & Responsive Design
- **Bileşen Bazlı CSS:** Her bileşen kendi stil dosyasıyla kapsüllenmiştir.
- **Flex & Grid:** Modern dizilim teknikleri kullanılarak kartlar otomatik hizalanmıştır.
- **Media Queries:** Mobil, tablet ve masaüstü ekranlar için %100 uyumluluk sağlanmıştır.

## 🚀 Başlangıç

Projeyi yerel bilgisayarınızda çalıştırmak için:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/agitencu/proconnect-react-showcase.git
