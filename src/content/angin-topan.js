import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Angin Topan",
    description: "Angin topan, juga dikenal sebagai siklon tropis, adalah sistem cuaca bertekanan rendah yang kuat yang terbentuk di lautan tropis dan subtropis. Angin topan ditandai dengan angin kencang, hujan deras, dan sering kali gelombang besar. Angin topan dapat menyebabkan kerusakan yang signifikan di wilayah yang dilaluinya.",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "Penyebab Angin Topan Angin topan terbentuk melalui beberapa proses, antara lain: Suhu Permukaan Laut yang Hangat Angin topan membutuhkan air laut yang hangat (biasanya lebih dari 26,5°C) untuk membentuk dan mempertahankan energinya. Kelembaban Tinggi Kelembaban tinggi di atmosfer bagian bawah membantu pembentukan awan dan hujan yang intens. Gangguan Atmosfer Gelombang tropis atau gangguan lain di atmosfer dapat memicu pembentukan angin topan. Rotasi Bumi Efek Coriolis yang disebabkan oleh rotasi bumi membantu angin topan berputar. Perbedaan Tekanan Udara Perbedaan tekanan antara pusat rendah dan daerah sekitarnya menyebabkan angin berhembus ke arah pusat topan, menciptakan angin yang sangat kuat." },
      { id: "collapse2", label: "Struktur", content: "Angin topan memiliki struktur yang khas, yang terdiri dari:  Mata Topan      Area tenang di pusat angin topan dengan cuaca relatif baik dan tekanan udara yang sangat rendah.   Dinding Mata Topan      Zona di sekitar mata yang terdiri dari awan tebal, hujan lebat, dan angin terkuat. Dinding mata adalah bagian paling berbahaya dari topan.   Badan Topan      Wilayah di luar dinding mata yang terdiri dari pita awan spiral dengan hujan deras dan angin kencang." },
      { id: "collapse3", label: "Kategori", content: " Angin topan dikategorikan berdasarkan kecepatan anginnya menggunakan Skala Saffir-Simpson:  Kategori 1      Kecepatan angin 119-153 km/jam   Kategori 2      Kecepatan angin 154-177 km/jam   Kategori 3      Kecepatan angin 178-208 km/jam   Kategori 4      Kecepatan angin 209-251 km/jam   Kategori 5      Kecepatan angin lebih dari 251 km/jam   " },
      { id: "collapse4", label: "Dampak", content: " Angin topan dapat menyebabkan berbagai dampak, antara lain:Kerusakan InfrastrukturAngin kencang dan hujan deras dapat merusak bangunan, jembatan, jalan, dan infrastruktur lainnya.BanjirHujan lebat dan gelombang pasang dapat menyebabkan banjir parah di wilayah pesisir dan daratan rendah.Korban Jiwa dan CederaAngin topan bisa menyebabkan banyak korban jiwa dan luka-luka akibat runtuhan bangunan, banjir, dan puing-puing yang terbawa angin.Gangguan Listrik dan KomunikasiAngin kencang dapat merusak jaringan listrik dan komunikasi, menyebabkan pemadaman listrik dan gangguan komunikasi.Kerugian EkonomiKerusakan properti, lahan pertanian, dan gangguan bisnis dapat menyebabkan kerugian ekonomi yang besar." }
    ],
    accordions: [
      { id: "collapseOne", label: "Pendidikan dan Kesadaran", content: "Meningkatkan kesadaran masyarakat tentang risiko angin topan dan langkah-langkah persiapan yang harus diambil." },
      { id: "collapseTwo", label: "Perencanaan Rumah Tangga", content: "Mengembangkan rencana darurat keluarga yang mencakup tempat persembunyian dan persediaan darurat." },
      { id: "collapseThree", label: "Perkuatan Bangunan", content: "Memastikan bangunan memenuhi standar ketahanan terhadap angin topan, termasuk pemasangan jendela tahan angin dan struktur atap yang kuat." },
      { id: "collapseFour", label: "Evakuasi", content: "Mengembangkan rencana evakuasi yang jelas dan melatih masyarakat untuk merespons dengan cepat saat perlu dievakuasi." },
      { id: "collapseFive", label: "Penyediaan Perlengkapan Darurat", content: "Menyediakan perlengkapan darurat seperti senter, baterai cadangan, makanan, air bersih, dan obat-obatan." },
      { id: "collapseSix", label: "Sistem Peringatan Dini", content: "Membangun dan memelihara sistem peringatan dini angin topan untuk memberi waktu reaksi yang cukup kepada masyarakat." },
      { id: "collapseSeven", label: "Pendataan Komunitas", content: "Mengumpulkan informasi dan mendata komunitas untuk mempermudah proses evakuasi dan bantuan setelah angin topan." }
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Tetep Tenang", content: "Pertahankan ketenangan untuk dapat mengambil keputusan yang tepat dan efektif." },
      { id: "collapseTwo2", label: "Masuk ke Tempat Persembunyian", content: "Segera masuk ke tempat persembunyian terdekat atau bangunan yang aman dari dampak angin topan." },
      { id: "collapseThree2", label: "Jauhi jendela dan pintu", content: "Hindari jendela dan pintu, dan cari tempat di dalam ruangan yang paling aman." },
      { id: "collapseFour2", label: "Dengarkan informasi Terbaru", content: "Dengarkan radio atau sumber informasi lainnya untuk informasi terbaru dan instruksi dari pihak berwenang." },
      { id: "collapseFive2", label: "Bantu Korban", content: "Berikan pertolongan pertama kepada korban yang terluka jika aman untuk melakukannya." },
      
      { id: "collapseSix2", label: "Sistem Peringatan Dini", content: "Membangun dan memelihara sistem peringatan dini angin topan untuk memberi waktu reaksi yang cukup kepada masyarakat." },
      { id: "collapseSeven2", label: "Pendataan Komunitas", content: "Mengumpulkan informasi dan mendata komunitas untuk mempermudah proses evakuasi dan bantuan setelah angin topan." }
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan." },
      { id: "collapseTwo3", label: "Pembersihan dan Perbaikan", content: "Membersihkan puing-puing dan memulihkan infrastruktur yang rusak untuk memulai proses pemulihan." },
      { id: "collapseThree3", label: "Bantuan Kemanusiaan", content: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, dan perlindungan bagi yang terdampak." },
      { id: "collapseFour3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami." },
      { id: "collapseFive3", label: "Perbaikan Sistem Peringatan", content: "Meningkatkan dan memperbaiki sistem peringatan dini serta infrastruktur yang mendukung mitigasi angin topan di masa depan." },
      
      { id: "collapseSix3", label: "Sistem Peringatan Dini", content: "Membangun dan memelihara sistem peringatan dini angin topan untuk memberi waktu reaksi yang cukup kepada masyarakat." },
      { id: "collapseSeven3", label: "Pendataan Komunitas", content: "Mengumpulkan informasi dan mendata komunitas untuk mempermudah proses evakuasi dan bantuan setelah angin topan." }
    ],
  },
];

function AnginTopan() {
  return (
    <div className="content">
      <Navbar />
      {contentData.map((data, index) => (
        <div key={index} className="container container-content shadow-lg">
          <div className="header-content row">
            <img className="content-image col-12" src="../img/assets/gettyimages-1131211375-64f0a6d0426a3.jpg" alt="" />
            <h1 className="title-content col-12">
              <b>{data.title}</b>
            </h1>
            <h4 className='text-content-description'>{data.description}</h4>
          </div>

          <div className="container mt-4">
            <div className="d-flex row">
              {data.buttons.map(button => (
                <button key={button.id} className="btn btn-warning flex-fill col btn-content" type="button" data-bs-toggle="collapse" data-bs-target={`#${button.id}`} aria-expanded="true" aria-controls={button.id}>{button.label}</button>
              ))}
            </div>
            <div id="collapseGroup">
              {data.buttons.map(button => (
                <div key={button.id} id={button.id} className="collapse" data-bs-parent="#collapseGroup">
                  <div className="card card-body">
                    {button.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-content">
            <b>Mitigasi dan Kesiapsiagaan:</b>
          </h2>

          <div className="accordion" id="accordionExample">
            {data.accordions.map(accordion => (
              <div key={accordion.id} className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                    {accordion.label}
                  </button>
                </h2>
                <div id={accordion.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {accordion.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-content">
            <b>Respons saat terjadi bencana:</b>
          </h2>

          <div className="accordion" id="accordionExample">
            {data.accordionsTwo.map(accordion => (
              <div key={accordion.id} className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                    {accordion.label}
                  </button>
                </h2>
                <div id={accordion.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {accordion.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-content">
            <b>Pemulihan pasca bencana:</b>
          </h2>

          <div className="accordion" id="accordionExample">
            {data.accordionsThree.map(accordion => (
              <div key={accordion.id} className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                    {accordion.label}
                  </button>
                </h2>
                <div id={accordion.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {accordion.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnginTopan;