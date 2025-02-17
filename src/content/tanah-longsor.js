import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Tanah Longsor",
    description: "Longsor atau sering disebut gerakan tanah adalah suatu peristiwa geologi yang terjadi karena pergerakan massa batuan atau tanah dengan berbagai tipe dan jenis seperti jatuhnya bebatuan atau gumpalan besar tanah",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "(1) Curah Hujan Tinggi (Hujan deras bisa meningkatkan kelembaban tanah dan membuatnya tidak stabil, sehingga mudah longsor). (2) Erosi (Aliran air yang terus-menerus mengikis tanah di lereng, mengurangi stabilitas dan memicu longsor). (3) Getaran Gempa (Gempa bumi dapat mengganggu stabilitas tanah di lereng dan menyebabkan longsor). (4) Aktivitas Vulkanik (Letusan gunung berapi bisa membuat lereng tidak stabil dengan pengeluaran material vulkanik). (5) penggalian dan Konstruksi (Aktivitas manusia seperti penggalian tanah atau pembangunan bangunan di lereng dapat mengganggu stabilitas tanah). (6) Deforestasi (Penebangan hutan mengurangi ikatan akar yang menjaga tanah tetap stabil, meningkatkan risiko longsor). (7) Kondisi Geologi (Jenis tanah dan batuan tertentu rentan terhadap longsor, seperti tanah lempung atau batuan retak-retak)." },
      { id: "collapse2", label: "Jenis", content: "(1) Longsor Translasi (Pergerakan massa tanah di sepanjang bidang gelincir yang datar atau melengkung). (2) Longsor Rotasi (Massa tanah bergerak menuruni lereng dengan permukaan gelincir berbentuk melengkung, menyebabkan permukaan tanah berotasi). (3) Longsor Debris (Pergerakan cepat material campuran seperti tanah, batuan, dan vegetasi, biasanya dipicu oleh hujan deras atau salju yang mencair). (4) Aliran Lumpur (Campuran air dan tanah sangat jenuh yang mengalir cepat menuruni lereng, sering terjadi setelah hujan deras). " },
      { id: "collapse3", label: "Dampak", content: " (1) Kerusakan Infrastruktur. (2) Korban jiwa dan luka-luka. (3) Gangguan Transportasi (Longsor bisa memutus akses jalan dan jembatan, mengganggu transportasi dan evakuasi). (4) Kerusakan Lingkungan (Longsor dapat merusak ekosistem, menghancurkan vegetasi, dan mencemari sungai serta sumber air). (5) Kerugian Ekonomi (Kerusakan properti dan infrastruktur menyebabkan kerugian ekonomi yang signifikan). " },
    ],
    accordions: [
      { id: "collapseOne", label: "Pemetaan Resiko", content: "Melakukan pemetaan daerah rawan tanah longsor dan identifikasi faktor-faktor pemicu seperti curah hujan tinggi atau kondisi tanah yang labil." },
      { id: "collapseTwo", label: "Perencanaan Tata Ruang", content: "Mengembangkan kebijakan tata ruang yang mempertimbangkan potensi tanah longsor, termasuk zona larangan bangunan dan perencanaan struktur pengaman." },
      { id: "collapseThree", label: "Penguatan Lereng", content: "Menerapkan teknik-teknik penguatan lereng seperti pembuatan teras, pemasangan dinding penahan, dan penghijauan untuk memperkuat stabilitas lereng." },
      { id: "collapseFour", label: "Sistem Peringatan Dini", content: "Membangun sistem peringatan dini untuk mendeteksi potensi longsor dengan menggunakan sensor atau pengamatan visual." },
      { id: "collapseFive", label: "Evakuasi dan Rencana Darurat", content: "Mengembangkan rencana evakuasi yang jelas dan melatih masyarakat dalam prosedur evakuasi darurat." },
      { id: "collapseSix", label: "Pendidikan Masyarakat", content: "Meningkatkan kesadaran masyarakat tentang tanda-tanda awal tanah longsor dan langkah-langkah yang dapat diambil untuk mengurangi risiko." },
      { id: "collapseSeven", label: "Pengawasan dan Monitoring", content: "Memantau kondisi lereng secara berkala untuk mendeteksi perubahan yang dapat menyebabkan tanah longsor."},
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Tetap Tenang", content: "Tetap tenang dan hindari panik untuk dapat mengambil langkah-langkah yang tepat." },
      { id: "collapseTwo2", label: "Hindari daerah Rawan", content: "Jauhi daerah rawan tanah longsor dan pindah ke tempat yang lebih aman jika memungkinkan." },
      { id: "collapseThree2", label: "Cari Tempat Perlindungan", content: "Cari tempat perlindungan yang lebih tinggi atau struktur bangunan yang kuat untuk melindungi diri." },
      { id: "collapseFour2", label: "Dengarkan Informasi Terbaru", content: "Dengarkan informasi terbaru melalui radio atau sumber informasi lainnya untuk instruksi evakuasi dan kondisi terkini." },
      { id: "collapseFive2", label: "Bantu Korban", content: "Bantu korban yang terluka dan membutuhkan pertolongan darurat." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan." },
      { id: "collapseTwo3", label: "Pembersihan dan Perbaikan", content: "Membersihkan material longsoran dan memulihkan infrastruktur yang rusak seperti jalan, bangunan, dan saluran air." },
      { id: "collapseThree3", label: "Bantuan Kemanusiaan", content: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, perlengkapan kebersihan, dan tempat penampungan." },
      { id: "collapseFour3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami." },
      { id: "collapseFive3", label: "Pemulihan Lingkungan", content: "Melakukan rehabilitasi lingkungan untuk mengembalikan fungsi ekosistem yang terganggu akibat tanah longsor."},
      { id: "collapseSix3", label: "Evaluasi dan Pembelajaran", content: "Mengevaluasi respons terhadap tanah longsor dan memperbaiki sistem mitigasi serta kesiapsiagaan untuk kejadian serupa di masa depan."},
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