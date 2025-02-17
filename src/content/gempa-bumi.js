import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Gempa Bumi",
    description: "Gempa bumi adalah peristiwa alam berupa getaran atau guncangan yang terjadi di permukaan tanah akibat pelepasan energi secara tiba-tiba di bawah litosfer sehingga menimbulkan gelombang seismik. ",
    buttons: [
      { id: "collapse1", label: "Skala dan Pengukuran", content: "Pengukuran gempa bumi dapat mengguanakan alat yang bernama seismograf. Sedangakan skala yang dapat digunakan adalah skala MMI (Modified Mercalli Intensity) yang terdiri dari skala I-XII berdasarkan tingkat kerusakan bangunan dan keterasaan manusia. Kemudian ada skala Richter yang mengukur kekuatan gempa dari skala 2,5-8,0 berdasarkan kerusakan yang terjadi. " },
      { id: "collapse2", label: "Penyebab", content: "(1) Pemanasan global dan perubahan iklim (2) Lapisan ozon menipis (3) Blokade atmosfer (4) Curah hujan menurun (5) Pola angin yang lemah (6) Topografi daerah tersebut, misal : daerah yang dikelilingi pgunungan dapat menyebabkan udara panas terjebak di daerah lembah sehingga tekanannya lebih tinggi dari wilayah sekitarnya." },
      { id: "collapse3", label: "Dampak", content: "Gempa bumi dapat menyebabkan kerusakan yang parah tergantung pada besarnya, kedalaman pusat gempa (hiposenter), dan jarak dari pusat gempa ke permukaan bumi (epicenter). Beberapa dampak yang mungkin terjadi adalah: (1) Kerusakan bangunan (2) Tanah longsor (3) Tsunami (jika terjadi gempa bawah laut) (4) Korban jiwa dan luka-luka" },
    ],
    accordions: [
      { id: "collapseOne", label: "Pendidikan dan Kesadaran", content: "Meningkatkan kesadaran masyarakat tentang risiko gempa bumi dan cara mengurangi dampaknya melalui pelatihan dan pendidikan." },
      { id: "collapseTwo", label: "Perencanaan Tata Ruang", content: "Menghindari pembangunan di daerah rawan gempa dan mengimplementasikan peraturan bangunan yang tahan gempa." },
      { id: "collapseThree", label: "Peningkatan Struktur Bangunan", content: "Memastikan bangunan memenuhi standar ketahanan gempa, termasuk rumah, sekolah, dan fasilitas umum lainnya." },
      { id: "collapseFour", label: "Infrastruktur", content: "Membangun dan memperbaiki infrastruktur seperti jembatan, jalan, dan jaringan listrik agar tahan gempa." },
      { id: "collapseFive", label: "Rencana Darurat", content: "Mengembangkan dan menguji rencana darurat untuk keluarga, komunitas, dan instansi pemerintah." },
      { id: "collapseSix", label: "Latihan Evakuasi", content: "Mengadakan latihan evakuasi secara berkala di sekolah, tempat kerja, dan komunitas." },
      { id: "collapseSeven", label: "Perlengkapan Darurat", content: "Menyediakan perlengkapan darurat yang mencakup air, makanan, obat-obatan, senter, baterai cadangan, dan radio."},
      { id: "collapseEight", label: "Komunikasi", content: "Mengembangkan sistem komunikasi yang dapat diandalkan untuk menginformasikan masyarakat tentang gempa bumi dan langkah-langkah yang harus diambil." },
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Tetap Tenang", content: "Jangan panik, segera berlindung di bawah meja atau furnitur yang kokoh untuk melindungi diri dari benda yang jatuh." },
      { id: "collapseTwo2", label: "Jauhi Jendela", content: "Hindari jendela, kaca, dan benda-benda yang dapat pecah atau jatuh." },
      { id: "collapseThree2", label: "Dalam Ruangan", content: "Jika berada di dalam ruangan, tetaplah di dalam. Jika berada di luar ruangan, hindari bangunan, pohon, dan tiang listrik." },
      { id: "collapseFour2", label: "Tangga dan Lift", content: "Jangan menggunakan tangga atau lift selama gempa." },
      { id: "collapseFive2", label: "Keluar Dengan Aman", content: "etelah gempa berhenti, keluar dengan hati-hati dari bangunan, periksa kerusakan sebelum keluar." },
      { id: "collapseSix2", label: "Periksa Cedera", content: "Periksa apakah ada yang terluka dan berikan pertolongan pertama jika memungkinkan." },
      { id: "collapseSeven2", label: "Waspada Terhadap Gempa Susulan", content: "Siapkan diri untuk gempa susulan yang mungkin terjadi." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Periksa kerusakan bangunan dan infrastrukturnya, pastikan bangunan aman sebelum kembali masuk." },
      { id: "collapseTwo3", label: "Kesehatan", content: "Pastikan tidak ada ancaman kesehatan seperti kebocoran gas, air yang terkontaminasi, atau penyakit menular." },
      { id: "collapseThree3", label: "Bantuan Medis", content: "Segera minta bantuan medis untuk yang terluka atau membutuhkan perawatan." },
      { id: "collapseFour3", label: "Penampungan", content: "Manfaatkan tempat penampungan sementara yang disediakan pemerintah atau organisasi bantuan." },
      { id: "collapseFive3", label: "Pembangunan Kembali", content: "Rekonstruksi bangunan dan infrastruktur yang rusak dengan memperhatikan standar ketahanan gempa."},
      { id: "collapseSix3", label: "Perbaikan Sistem", content: "Evaluasi dan perbaiki sistem kesiapsiagaan dan respons untuk menghadapi bencana di masa depan."},
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