## 🏥 NARLA Hastane Yönetim Sistemi:

🧭NARLA Hastane Yönetim Sistemi, özel hastanelerin gerçek çalışma mantığı temel alınarak geliştirilmiş, çok rollü, tam kapsamlı bir full-stack hastane yönetim platformudur.

Bu proje, sadece CRUD işlemlerinden oluşan bir demo değil; gerçek iş kuralları, rol bazlı erişim, tıbbi süreçler ve ödeme sistemleri göz önünde bulundurularak 10 gün içerisinde uçtan uca geliştirilmiştir.

NARLA Hastane Yönetim Sistemi, gerçek bir hastanenin operasyonel ihtiyaçları temel alınarak tasarlanmış, çok rollü ve ölçeklenebilir bir web tabanlı yönetim platformudur.

Projenin amacı; hastane içerisindeki idari, tıbbi ve hasta odaklı süreçleri tek bir sistem altında toplayarak, kullanıcıların rollerine göre doğru bilgiye, doğru yetkiyle ve doğru zamanda erişmesini sağlamaktır.

Bu proje; sadece teknik bir çalışma değil, aynı zamanda iş analizi, kullanıcı deneyimi ve sistem tasarımı bakış açısıyla geliştirilmiştir.

---

## ✨ Genel Bakış:

Sistem; hastane içerisindeki farklı roller için özelleştirilmiş arayüzler ve yetkiler sunar:

🔹Admin

🔹Doktor

🔹Hemşire

🔹Laborant

🔹Veznedar

🔹Hasta

Her rol, yalnızca kendi yetkisi dahilindeki alanlara erişir ve gerçek hastane işleyişine uygun bir kullanıcı deneyimi yaşar.

---

## 🔐 Kimlik Doğrulama & Yetkilendirme:

🔹Clerk Authentication kullanıldı

🔹Güvenli e-posta & şifre ile giriş

🔹Rol bazlı yetkilendirme

🔹Kullanıcı rolleri publicMetadata üzerinden yönetilir

🔹İlk girişte role göre otomatik yönlendirme

---

## 👤 Hasta Kayıt (Onboarding) Süreci:

🔑Sisteme ilk kez giriş yapan kullanıcılar otomatik olarak hasta kayıt formuna yönlendirilir

🔑Tek form üzerinden:

🔑Yeni hasta kaydı

🔑Mevcut hasta bilgisi güncelleme

🔑Kişisel bilgiler, acil durum iletişimi ve onaylar (KVKK / sağlık) tek noktadan yönetilir

---


## 🧠 Rol Bazlı Dashboard’lar:

🛠 Admin Paneli

🎯Genel istatistikler:

Toplam hasta

Toplam doktor

Toplam randevu

Tamamlanan muayeneler

Aylık randevu grafikleri

Son randevu kayıtları

Müsait doktorlar

🎯Tam yetkiler:

Kullanıcılar

Doktorlar

Personel

Hastalar

Randevular

Ödemeler

Audit loglar

Sistem ayarları

---


## 👨‍⚕️ Doktor Paneli:

✔Hasta ve randevu oluşturma

✔Tanı koyma ve hastalık kaydı

✔Çalışma günleri & saatleri tanımlama

✔Personel atama

✔Reçete, tedavi planı ve takip planı oluşturma

✔Hasta geçmişi ve vital bulgulara erişim

---


## 🧑‍⚕️ Hemşire Paneli:

🚩Hasta yönetimi

🚩Randevu takibi

🚩İlaç uygulama süreçleri

🚩Tıbbi kayıtlara erişim

---

## 🧪 Laborant:

💧Laboratuvar testleri

💧Test sonuçlarının tıbbi kayıtlara bağlanması

💧Hizmet bazlı faturalandırma altyapısı

---

## 🧾 Ödeme & Faturalandırma:

⚡Randevu bazlı fatura oluşturma

⚡Hizmet kalemi detayları

⚡Ödeme türleri:

⚡Nakit

⚡Kart

⚡Ödeme durumları:

⚡Ödendi

⚡Kısmi

⚡Ödenmedi

⚡İndirim ve makbuz sistemi

---

## 🧍 Hasta Paneli:

🖤Kişisel dashboard

🖤Randevu istatistikleri

🖤Aylık grafikler

🖤Tıbbi kayıtlar

🖤Tanılar & vital bulgular

🖤Doktor değerlendirme sistemi

🖤Profil yönetimi

---

## 🗂 Tıbbi Kayıt Sistemi:

💛Her randevu ile bağlantılı:

💛Tıbbi kayıtlar

💛Tanılar

💛Vital bulgular

💛Laboratuvar testleri

💛Tüm geçmiş hasta profili üzerinden görüntülenebilir

💛Gerçek hastane mantığına uygun veri ilişkileri

---

## 📊 Vital Bulgular:

💥Vücut sıcaklığı

💥Tansiyon (sistolik / diyastolik)

💥Nabız

💥Solunum sayısı

💥Oksijen satürasyonu

💥Boy & kilo

---

## ⭐ Doktor Değerlendirme Sistemi:

❗Hastalar doktorlara puan verebilir

❗Yorum sistemi

❗Doktor & hasta profilleriyle ilişkili yapı


---

## 🧱 Kullanılan Teknolojiler:

⚜Frontend

⚜Next.js (App Router)

⚜React 19

⚜TypeScript

⚜Tailwind CSS

⚜Radix UI

⚜Recharts

⚜Backend

⚜Next.js Server Actions

⚜Prisma ORM

⚜PostgreSQL

⚜Clerk Authentication

⚜Form & Validasyon

⚜Zod

⚜React Hook Form

---

## 🌱 Veri Tohumlama (Seeding):

🔰Faker.js ile gerçekçi mock veriler

🔰Doktor, hasta, personel ve randevu üretimi

🔰Prisma Studio ile inceleme

---

## 🔍 Audit Log Sistemi:

🔰Kullanıcı aksiyonlarının kaydı

🔰Admin erişimi

🔰Güvenlik ve izlenebilirlik

---

## ⏱ Geliştirme Süreci:

10 gün

Odak noktaları:

Gerçek iş kuralları

Rol izolasyonu

Ölçeklenebilir veri modeli

Temiz mimari

---

## 🛠 Bu Projede Neler Kullandık?:

🟢Frontend Teknolojileri

🟢Next.js (App Router)
→ Sayfa bazlı yönlendirme, server/client ayrımı ve performans

🟢React & TypeScript
→ Bileşen tabanlı mimari ve tip güvenliği

🟢Tailwind CSS
→ Hızlı, tutarlı ve ölçeklenebilir stil yapısı

🟢Radix UI
→ Erişilebilir ve profesyonel UI bileşenleri

🟢Recharts
→ İstatistiksel verilerin grafiklerle sunulması

🟢Backend & Altyapı

🟢Next.js Server Actions
→ API yazmadan sunucu işlemleri

🟢Prisma ORM
→ Güçlü veri modeli ve ilişkisel yapı

🟢PostgreSQL
→ Güvenilir ve ölçeklenebilir veritabanı

🟢Clerk Authentication
→ Güvenli kimlik doğrulama ve rol yönetimi

🟢Form & Validasyon

🟢React Hook Form
→ Performanslı form yönetimi

🟢Zod
→ Tip güvenli ve merkezi doğrulama

## 🎯 Bu Teknolojilerin Ne Gibi Faydaları Oldu?:

🔸Rol bazlı erişim sayesinde veri güvenliği sağlandı

🔸Server Actions ile:

🔸Daha az boilerplate

🔸Daha hızlı geliştirme

🔸Prisma ile:

🔸Karmaşık hastane ilişkileri (hasta–randevu–doktor) net şekilde modellendi

🔸Tailwind + Radix:

🔸Hem estetik hem erişilebilir arayüz

🔸TypeScript + Zod:

🔸Runtime ve compile-time hatalar minimize edildi

## 👥 Kimlere Hitap Ediyor?:

🏥 Hastaneler & Klinikler:

Hasta, randevu ve personel yönetimini tek sistemde toplamak isteyen kurumlar

👨‍⚕️ Sağlık Personeli:

Doktorlar, hemşireler, laborantlar ve veznedarlar

Kendi görevlerine özel sade arayüzler

🧍 Hastalar:

Randevu takibi

Tıbbi kayıt geçmişi

Doktor değerlendirme sistemi

💻 Yazılım Ekipleri & İşverenler:

Gerçek hayat senaryosu içeren

Ölçeklenebilir mimariye sahip

Full-stack yetkinliği gösteren bir referans proje

🚀 Projenin Sağladığı Katma Değer:

Gerçek hastane işleyişine uygun rol izolasyonu

Veri tutarlılığı ve izlenebilirlik

Kullanıcı deneyimi odaklı dashboard’lar

Teknik ve iş mantığını birlikte ele alan yapı

## 🔮 Geliştirilebilir Alanlar:

Bu proje, büyümeye açık bir mimari üzerine kurulmuştur.

🧾 E-Nabız / SGK entegrasyonu

💳 Online ödeme altyapısı

📅 Doktor takvim senkronizasyonu

🔔 Bildirim sistemi (SMS / e-posta)

🌍 Çoklu dil desteği

📈 Gelişmiş raporlama ve analiz

🤖 AI destekli ön tanı / triage sistemi

📱 Mobil uygulama (React Native)

## 🧠 Projenin Kazandırdıkları:

Bu proje ile:

🟪Gerçek iş kurallarına uygun sistem tasarımı

🟪Rol bazlı güvenlik mimarisi

🟪Full-stack düşünme becerisi

🟪Ölçeklenebilir veri modeli oluşturma

🟪Modern frontend + backend entegrasyonu konularında derinlemesine deneyim kazanıldı.

---

# 💬 İletişim :

Proje hakkında sorularınız varsa, lütfen benimle iletişime geçin..

Her türlü geri bildirim, öneri veya iş birliği için benimle iletişime geçebilirsiniz ✨

👩‍💻 Geliştirici :Esra Akgündoğdu Frontend ağırlıklı Full-Stack Developer || React Developer

📧 Email: akgundogduesr@gmail.com

💼 LinkedIn: www.linkedin.com/in/esra-akgun

---

## 🖼️Görseller-Hikaye görünümü:

<img width="1906" height="912" alt="1a" src="https://github.com/user-attachments/assets/e79e6418-d710-4c0a-a33e-781dbbe4f62c" />
<img width="1842" height="840" alt="1b" src="https://github.com/user-attachments/assets/0bd180f6-b98d-4db7-8da5-ff600e11b10b" />
<img width="1902" height="908" alt="1c" src="https://github.com/user-attachments/assets/c7a913e4-4699-4182-af9a-5359dcd0dcc5" />
<img width="1900" height="904" alt="1d" src="https://github.com/user-attachments/assets/0342ac3d-a973-44ef-bb85-5f6234bf624a" />
<img width="1893" height="909" alt="1e" src="https://github.com/user-attachments/assets/0465a33e-239e-4b31-ba6f-7fd565f611c6" />
<img width="1900" height="900" alt="1f" src="https://github.com/user-attachments/assets/41b2567f-a5a1-44a0-b9ae-05117cdb4860" />
<img width="1901" height="910" alt="2a" src="https://github.com/user-attachments/assets/e6181d57-06c0-4db4-b06a-708143bb5ecc" />
<img width="1906" height="905" alt="2b" src="https://github.com/user-attachments/assets/c4ef552f-d878-4895-a82c-a091feb07dc3" />
<img width="1902" height="901" alt="2c" src="https://github.com/user-attachments/assets/a578bd55-2438-433c-8725-6511acd4db06" />
<img width="1904" height="905" alt="2d" src="https://github.com/user-attachments/assets/617a6149-73a5-4dab-bdfc-7bd54f7e284d" />
<img width="1902" height="906" alt="3a" src="https://github.com/user-attachments/assets/aaf98131-596c-4550-a999-afc7de58b3fd" />
<img width="1896" height="903" alt="3b" src="https://github.com/user-attachments/assets/49a467de-fcba-4446-9e30-a16c81ce9219" />
<img width="1912" height="864" alt="3c" src="https://github.com/user-attachments/assets/94494593-9939-41cc-b5e6-b36aa7c469bd" />
<img width="1903" height="909" alt="3d" src="https://github.com/user-attachments/assets/49c5d1d8-0409-45e3-9d15-a5cd3e17afde" />
<img width="1910" height="908" alt="3e" src="https://github.com/user-attachments/assets/30caac6e-8434-4a98-9912-1f4cd3a2f7a2" />
<img width="1911" height="904" alt="4a" src="https://github.com/user-attachments/assets/6e47a9db-c8b7-48e7-b53d-de57bec411fb" />
<img width="1907" height="902" alt="4b" src="https://github.com/user-attachments/assets/da5cdb97-6548-4ec2-8a16-78c5d5a04bd9" />
<img width="1914" height="909" alt="4c" src="https://github.com/user-attachments/assets/b944ceca-d953-4294-aef6-bf55a4d9b1ce" />
<img width="1908" height="908" alt="4d" src="https://github.com/user-attachments/assets/d5a62f89-7ecc-4896-b203-e3b94ff0ac04" />

---

## Video:
https://github.com/user-attachments/assets/f97788f4-a308-4935-98ed-b70633c32264
https://github.com/user-attachments/assets/a07d0618-b00b-4359-bf0e-121b51d4dc8b
https://github.com/user-attachments/assets/bed6d855-4c43-4ab3-b54b-c8d9dc6faac9
https://github.com/user-attachments/assets/80075e27-6610-4840-819b-17670bb14a4f
https://github.com/user-attachments/assets/bebe3538-6b25-46e1-9c4f-dd9f72f6c758
https://github.com/user-attachments/assets/2aa1fb56-f745-403a-bbbb-b2b90cd6dfb5






























