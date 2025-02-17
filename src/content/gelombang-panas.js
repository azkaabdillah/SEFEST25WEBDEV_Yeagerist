import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Gelombang Panas",
    description: "Gelombang panas atau heatwaves adalah periode cuaca yang sangat panas yang berlangsung selama beberapa hari hingga beberapa minggu. Kondisi ini biasanya disertai dengan kelembaban tinggi dan suhu malam yang tetap tinggi, menyebabkan tekanan panas yang signifikan pada manusia, hewan, dan lingkungan. ",
    buttons: [
      { id: "collapse1", label: "Ciri-Ciri", content: "(1) Suhu lingkungan naik secara signifikan (2) Durasi panas yang panjang (3) Kelembapan meningkat (4) Suhu malam hari tidak begitu menurun." },
      { id: "collapse2", label: "Penyebab", content: "(1) Pemanasan global dan perubahan iklim (2) Lapisan ozon menipis (3) Blokade atmosfer (4) Curah hujan menurun (5) Pola angin yang lemah (6) Topografi daerah tersebut, misal : daerah yang dikelilingi pgunungan dapat menyebabkan udara panas terjebak di daerah lembah sehingga tekanannya lebih tinggi dari wilayah sekitarnya." },
      { id: "collapse3", label: "Dampak Kesehatan", content: "(1) Heatstroke hingga epilepsi (2) Gangguan sistem pencernaan (3) Gangguan sistem pernapasan (4) Badan terasa lemas dan mudah terserang penyakit lainnya." },
      { id: "collapse4", label: "Dampak Lainnya", content: "(1) Gangguan sosial dan ekonomi (2) Kerusakan lingkungan (Gelombang panas dapat menyebabkan kekeringan, mengurangi kelembaban tanah, dan meningkatkan risiko kebakaran hutan). (3) Pertanian (Tanaman dan ternak dapat terkena dampak buruk, mengurangi hasil panen dan menyebabkan kematian ternak). (4) Kerusakan infrastruktur." },
      { id: "collapse5", label: "Tips", content: "(1) Minum air secara teratur (2) Hindari aktivitas berat (3) Cari tempat sejuk (Tinggal di dalam ruangan dengan pendingin udara atau kipas angin, dan hindari paparan langsung sinar matahari). (4) Kenakan pakaian ringan (Pilih pakaian yang ringan, longgar, dan berwarna terang untuk membantu menjaga tubuh tetap sejuk). (5) Menggunakan ventilasi ruangan agar sirkulasi udara dalam ruangan tetap terjaga." },
    ],
    accordions: [
      { id: "collapseOne", label: "Pendidikan Masyarakat", content: "Meningkatkan kesadaran masyarakat tentang risiko gelombang panas dan cara-cara mengurangi dampaknya melalui edukasi dan kampanye publik." },
      { id: "collapseTwo", label: "Pengaturan Suhu Ruangan", content: "Mendorong pengaturan suhu ruangan yang nyaman dengan ventilasi yang baik dan penggunaan penyejuk udara jika memungkinkan." },
      { id: "collapseThree", label: "Penyediaan Tempat Perlindungan", content: "Menyediakan tempat perlindungan seperti pusat pendinginan umum untuk masyarakat yang tidak memiliki akses terhadap penyejuk udara." },
      { id: "collapseFour", label: "Air Minum", content: "Memastikan ketersediaan air minum yang cukup untuk menghindari dehidrasi." },
      { id: "collapseFive", label: "Evakuasi", content: "Mengembangkan rencana evakuasi yang jelas dan melakukan simulasi secara berkala." },
      { id: "collapseSix", label: "Pemantauan Kesehatan Masyarakat", content: "Memonitor kesehatan masyarakat khususnya kelompok rentan seperti anak-anak, lansia, dan mereka dengan penyakit kronis." },
      { id: "collapseSeven", label: "Penyediaan Informasi Cuaca", content: "Menyediakan informasi cuaca dan peringatan dini tentang gelombang panas melalui berbagai media komunikasi."},
      { id: "collapseEight", label: "Perencanaan Darurat", content: "Mengembangkan rencana darurat untuk menghadapi gelombang panas termasuk prosedur evakuasi jika diperlukan." },
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Minum Banyak Air", content: "Minum banyak air untuk menjaga tubuh tetap terhidrasi." },
      { id: "collapseTwo2", label: "Hindari Aktivitas Luar Ruangan", content: "Menghindari aktivitas luar ruangan terutama pada saat siang hari yang panas." },
      { id: "collapseThree2", label: "Gunakana Pakaian yang Tepat", content: "Menggunakan pakaian yang longgar, berwarna terang, dan berbahan ringan untuk mengurangi panas tubuh." },
      { id: "collapseFour2", label: "Cari Tempat yang Sejuk", content: "Mencari tempat yang sejuk seperti pusat pendinginan umum atau ruangan ber-AC jika memungkinkan." },
      { id: "collapseFive2", label: "Pantau Kesehatan", content: "Memantau gejala panas berlebih dan segera mencari bantuan medis jika diperlukan." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Evakuasi Dampak Kesehatan", content: "Menilai dampak kesehatan masyarakat dan memberikan perawatan medis lanjutan jika diperlukan." },
      { id: "collapseTwo3", label: "Rehabilitasi Infrastruktur", content: "Memulihkan infrastruktur yang terpengaruh dan memperbaiki fasilitas publik seperti air bersih dan listrik." },
      { id: "collapseThree3", label: "Edukasi Pasca Bencana", content: "Memberikan edukasi kepada masyarakat tentang pencegahan dan respons terhadap gelombang panas di masa mendatang." },
      { id: "collapseFour3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami." },
      { id: "collapseFive3", label: "Evaluasi Sistem Peringatan Dini", content: "Mengevaluasi efektivitas sistem peringatan dini dan melakukan perbaikan jika diperlukan."},
    ],
  },
];

function GelombangPanas() {
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

export default GelombangPanas;