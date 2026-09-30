# Tafix web sitesi

İngilizce içerik, beyaz zemin ve siyah butonlar, mobil uyumlu ana sayfa ve altı uygulama tanıtım sayfası hazırdır. Statik HTML/CSS/JavaScript kullanır; kurulum veya derleme gerektirmez.

## Dosyalar
- `index.html`: ana sayfa
- `templatemo-622-clearwave.css`: orijinal stil ve Tafix uyarlaması
- `templatemo-622-clearwave.js`: menü, animasyon, uygulama filtreleri ve bağlantılar
- `site-config.js`: mağaza ve yasal metin bağlantıları
- `apps/valiso/index.html`, `apps/lyvo/index.html`, `apps/piley/index.html`, `apps/prism/index.html`, `apps/trasi/index.html`, `apps/shutr/index.html`: uygulama sayfaları
- `assets/tafix-logo.png`: gönderdiğin siyah beyaz Tafix ikonu; üstbilgi, altbilgi ve tarayıcı simgesi olarak kullanılır
- `assets/favicon.svg`: siyah beyaz yedek tarayıcı simgesi

## Önizleme
ZIP'i çıkarıp `index.html` dosyasını tarayıcıda açabilirsin. Yerel sunucu tercih edersen bu klasörde `python3 -m http.server 8080` çalıştırıp `http://localhost:8080` adresini aç.

## Tamamlanacak gerçek bilgiler
1. `site-config.js` içindeki her uygulamanın `appStore`, `googlePlay`, `privacy` ve `terms` alanlarına doğrulanmış tam HTTPS bağlantılarını ekle. Boş alanların düğmeleri gösterilmez; hayali mağaza URL'leri kullanılmamıştır.
2. Uygulama sembolleri kategorileri anlatan geçici çizimlerdir; gerçek mağaza ikonları değildir. Gerçek ikonları gönderdiğinde tüm sayfalarda değiştirilebilir.
3. Uygulama metinleri daha önce paylaştığın özelliklerden hazırlanmıştır. Güncel platform, yayın durumu ve özellik kapsamını yayımlamadan önce kontrol et.
4. İletişim adresi `support@tafix.co` olarak ayarlanmıştır.
5. Gerçek ekran görüntüleri geldiğinde ilgili uygulama sayfalarına eklenebilir. Şablondaki başka ürüne ait dashboard görselleri kullanılmadı.

## Mevcut tafix.co sitesine ekleme
Paket içeriğini GitHub deposundaki `public` klasörüne aktar. Dış klasörü değil, içindeki dosyaları ve `apps` / `assets` klasörlerini yükle. Ana sayfa dosyasının adı `index.html` olmalı. Aynı adlı dosyalar değişeceği için mevcut sürümünün bir kopyasını sakla. Var olan gizlilik/koşul dosyalarını ve `apps/valiso/download/` gibi yönlendirme klasörlerini silme; bu paket bu dosyaları içermez ve bunların yerine geçmez.

Cloudflare'daki mevcut yayın akışını kullanabilirsin. Bu çalışma herhangi bir canlı siteyi değiştirmedi veya yayımlamadı.

## Tasarım kaynağı
TemplateMo 622 Clearwave: https://templatemo.com/tm-622-clearwave
Kaynak dosyalarda kişisel ve ticari kullanımın ücretsiz olduğu belirtiliyor. Kaynak kodundaki açıklamalar korunmuştur. Görünür TemplateMo altbilgi yazısı kaldırılmıştır. Demo yorumları, müşteri logoları, sertifika iddiaları, SaaS fiyatlandırması ve timer demosu çıkarılmıştır.

## Siyah beyaz tema güncellemesi
Ana sayfa, uygulama dizini ve altı uygulama sayfası güncellendi. Butonlar siyah, zeminler beyaz ve açık gri; renkli ışımalar kaldırıldı. Site ikonunda gönderdiğin özgün PNG kullanıldı. CSS bağlantısına önbellek yenileme parametresi eklendi.
