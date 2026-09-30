# Tafix web sitesi

İngilizce içerik, beyaz zemin ve siyah butonlar, mobil uyumlu ana sayfa ve yedi uygulama tanıtım sayfası hazırdır. Statik HTML/CSS/JavaScript kullanır; kurulum veya derleme gerektirmez.

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
1. `site-config.js` içindeki her uygulamanın `appStore`, `googlePlay`, `privacy` ve `terms` alanlarına doğrulanmış tam HTTPS bağlantılarını ekle. Mağaza adresi boşsa indirme düğmesi gösterilmez. `privacy` ve `terms` boşsa uygulamanın yerel hukuk sayfaları açılır; harici HTTPS adresi girersen bağlantı o adrese yönlenir.
2. Valiso, shutr, Lyvo, Prism, Trasi ve Piley için gerçek ikon kullanılır. Quran for Wear OS da gerçek ikon ve görselleriyle eklendi; tüm uygulama listelerinde en son sıradadır.
3. Uygulama metinleri daha önce paylaştığın özelliklerden hazırlanmıştır. Güncel platform, yayın durumu ve özellik kapsamını yayımlamadan önce kontrol et.
4. İletişim adresi `support@tafix.co` olarak ayarlanmıştır.
5. Yedi uygulamanın gönderdiğin görselleri eklendi. Mobilde galeriler yatay kaydırılabilir.

## Mevcut tafix.co sitesine ekleme
Paket içeriğini GitHub deposundaki `public` klasörüne aktar. Dış klasörü değil, içindeki dosyaları ve `apps` / `assets` klasörlerini yükle. Ana sayfa dosyasının adı `index.html` olmalı. Aynı adlı dosyalar değişeceği için mevcut sürümünün bir kopyasını sakla. Var olan gizlilik/koşul dosyalarını ve `apps/valiso/download/` gibi yönlendirme klasörlerini silme; bu paketteki boş Privacy Policy / Terms taslaklarını doldurulmuş metinlerinin üzerine yazma. Mevcut yönlendirme klasörlerini koru.

Cloudflare'daki mevcut yayın akışını kullanabilirsin. Bu çalışma herhangi bir canlı siteyi değiştirmedi veya yayımlamadı.

## Tasarım kaynağı
TemplateMo 622 Clearwave: https://templatemo.com/tm-622-clearwave
Kaynak dosyalarda kişisel ve ticari kullanımın ücretsiz olduğu belirtiliyor. Kaynak kodundaki açıklamalar korunmuştur. Görünür TemplateMo altbilgi yazısı kaldırılmıştır. Demo yorumları, müşteri logoları, sertifika iddiaları, SaaS fiyatlandırması ve timer demosu çıkarılmıştır.

## Siyah beyaz tema güncellemesi
Ana sayfa, uygulama dizini ve yedi uygulama sayfası güncellendi. Butonlar siyah, zeminler beyaz ve açık gri; renkli ışımalar kaldırıldı. Site ikonunda gönderdiğin özgün PNG kullanıldı. CSS bağlantısına önbellek yenileme parametresi eklendi.

## Privacy Policy ve Terms içeriklerini ekleme
Her uygulama detayında, açıklamanın altında iki bağlantı bulunur. Her uygulamanın kendine ait iki dosyası vardır:

| Uygulama | Privacy Policy dosyası | Terms dosyası |
| --- | --- | --- |
| Valiso | `apps/valiso/privacy-policy.html` | `apps/valiso/terms.html` |
| Lyvo | `apps/lyvo/privacy-policy.html` | `apps/lyvo/terms.html` |
| Piley | `apps/piley/privacy-policy.html` | `apps/piley/terms.html` |
| Prism | `apps/prism/privacy-policy.html` | `apps/prism/terms.html` |
| Trasi | `apps/trasi/privacy-policy.html` | `apps/trasi/terms.html` |
| shutr | `apps/shutr/privacy-policy.html` | `apps/shutr/terms.html` |
| Quran for Wear OS | `apps/quran/privacy-policy.html` | `apps/quran/terms.html` |

GitHub'da dosyalar `public/` klasörünün altında olmalıdır. Örneğin Lyvo için `public/apps/lyvo/privacy-policy.html` dosyasını açıp düzenle.

1. Dosyada `CONTENT START` ve `CONTENT END` yorumlarını bul.
2. Aralarındaki `<p>This page will be updated soon.</p>` satırını kendi metninle değiştir. Paragrafları `<p>...</p>`, başlıkları `<h2>...</h2>` olarak ekleyebilirsin.
3. İstersen başlığın altındaki örnek `Last updated` satırını yorumdan çıkarıp tarihini yaz.
4. İçerik tamamlanınca `<meta name="robots" content="noindex">` satırını kaldırabilirsin. Bu satır boş taslağın arama sonuçlarına girmemesi içindir.
5. Commit changes ile kaydet. Sayfa bağlantısı değişmez.

Sayfalar içerik şablonudur; hiçbir uygulama için hukuki metin yazılmadı. Geçici mesajı kendi metninle değiştirebilirsin. Bağlantılar JavaScript kapalıyken de çalışır.

## Valiso görselleri ve mağaza bağlantıları
- `assets/valiso/icon.png`: gerçek uygulama ikonu; ana sayfada, uygulama listesinde ve detayda kullanılır.
- `assets/valiso/travel-better.jpg`, `trip-planning.jpg`, `weather-packing.jpg`: gönderilen görseller, kırpılmadan gösterilir. Mobilde galeri yatay kaydırılabilir; görsele tıklayarak orijinal boyutunu açabilirsin.
- `site-config.js`: Valiso'nun sağladığın App Store ve Google Play bağlantıları eklendi.

Bu güncellemede `index.html`, `apps/index.html`, `apps/valiso/index.html`, `templatemo-622-clearwave.css`, `site-config.js` ve `assets/valiso/` öğelerini `public/` içinde güncelle. Düzenlediğin Privacy Policy / Terms metinleri varsa bu dosyaları taslaklarla değiştirme.

## Uygulama içerikleri ilerlemesi
- Valiso: ikon, 3 görsel, App Store ve Google Play bağlantıları eklendi.
- shutr: ikon, 3 görsel ve Google Play bağlantısı eklendi.
- Lyvo: ikon, 3 görsel, App Store ve Google Play bağlantıları eklendi.
- Prism: ikon, 4 görsel ve Google Play bağlantısı eklendi.
- Trasi: ikon, 3 görsel ve Google Play bağlantısı eklendi.
- Piley: ikon, 3 görsel ve Google Play bağlantısı eklendi.
- Quran for Wear OS: ikon, 3 görsel, Google Play bağlantısı, Privacy Policy ve Terms sayfaları eklendi. Ana sayfa ve uygulama dizininde en son sıradadır.
- Tüm uygulamaların indirme düğmeleri ortak Apple / Google Play SVG ikonlarını kullanır.
- Kullanıcı tercihi: her uygulamadan sonra ZIP paylaşılmayacak; tüm uygulamalar tamamlandığında son paket teslim edilecek.
