import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Tsunami",
    description: "Tsunami adalah rangkaian gelombang laut yang mampu menjalar dengan kecepatan hinggalebih 900 km per jam, terutama diakibatkan oleh gempabumi yang terjadi di dasar laut. ",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "(1) Tsunami akibat gempa bumi (Tidak semua gempabumi mengakibatkan terbentuknya tsunami. Syarat terjadinya tsunami akibat gempabumi adalah: 1. Pusat gempa terjadi di dasar laut 2. Kedalaman pusat gempa kurang dari 60 km ). (2)Tsunami akibat letusan gunung api (Letusan gunung berapi bawah laut atau di dekat pantai bisa memindahkan sejumlah besar air, memicu tsunami). (3) Tsunami akibat longsor bawah laut (Tanah longsor di dasar laut atau di tepi pantai bisa menggeser air secara tiba-tiba, menyebabkan gelombang tsunami). (4) Tsunami akibat meteorit (ini jarang terjadi)." },
      { id: "collapse2", label: "Mekanisme", content: "(1) Inisisasi, Gempa bumi atau gangguan lainnya menyebabkan perpindahan besar volume air. (2) Propogasi. Gelombang tsunami mulai menyebar dari sumbernya dengan kecepatan tinggi, sering kali lebih dari 800 km/jam di laut dalam. (3) Amplifikasi. Saat gelombang mendekati pantai, kedalaman air yang menurun menyebabkan gelombang melambat dan tinggi gelombang meningkat secara drastis. (4) Inundasi. Gelombang tsunami menghantam pantai, membanjiri daratan dengan air dan membawa puing-puing, sering kali menyebabkan kerusakan besar." },
      { id: "collapse3", label: "Daerah Rawan", content: " Di Indonesia wilayah rawan bencana tsunami meliputi 21 wilayah, yaitu: Nanggroe Aceh Darussalam, Sumatera Utara, Sumatera Barat, Bengkulu, Lampung-Banten, Jawa Tengah Bagian Selatan, Jawa Timur Bagian Selatan, Bali, Nusa Tenggara Barat, Nusa Tenggara Timur,Sulawesi Utara, Sulawesi Tengah, Sulawesi Selatan, Maluku Utara, Maluku Selatan, Biak, Yapen, Balikpapan, sekurau, Palu, Talaud, Kendari." },
    ],
    accordions: [
      { id: "collapseOne", label: "Pendidikan dan Kesadaran", content: "Meningkatkan kesadaran masyarakat tentang risiko banjir dan cara mengantisipasi serta mengurangi dampaknya." },
      { id: "collapseTwo", label: "Perencanaan Tata Ruang", content: "Mengembangkan zona evakuasi dan menghindari pembangunan di daerah rendah yang rawan tergenang air laut." },
      { id: "collapseThree", label: "Sistem Peringatan Dini", content: "Membangun dan memelihara sistem peringatan dini tsunami yang efektif dan memastikan masyarakat dapat menerima informasi dengan cepat." },
      { id: "collapseFour", label: "Evakuasi", content: "Mengembangkan rencana evakuasi yang terinci dan mengadakan latihan evakuasi secara berkala." },
      { id: "collapseFive", label: "Evakuasi", content: "Mengembangkan rencana evakuasi yang jelas dan melakukan simulasi secara berkala." },
      { id: "collapseSix", label: "Infrastruktur Pelindung", content: "Membangun struktur pelindung seperti tanggul, danau buatan, atau vegetasi pantai yang dapat meredam gelombang tsunami." },
      { id: "collapseSeven", label: "endidikan Penanganan Darurat", content: "Melatih masyarakat dalam keterampilan penanganan darurat dan pertolongan pertama untuk membantu korban tsunami."},
      { id: "collapseEight", label: "Komitmen Masyarakat:", content: "Menggalang komitmen masyarakat untuk berpartisipasi aktif dalam upaya mitigasi dan kesiapsiagaan tsunami." },
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Tetap Tenang", content: "Tetap tenang dan hindari panik untuk dapat mengambil langkah-langkah yang tepat." },
      { id: "collapseTwo2", label: "Segera Menuju Ke Tempat Tinggi", content: "Segera bergerak menuju ke daerah yang lebih tinggi atau ke zona evakuasi yang telah ditentukan." },
      { id: "collapseThree2", label: "Hindari Pantai", content: "Jauhi daerah pantai, muara sungai, dan area terbuka lainnya yang rentan terkena tsunami." },
      { id: "collapseFour2", label: "Dengarkan Informasi Terbaru", content: "Dengarkan informasi terbaru melalui radio atau sumber informasi lainnya untuk instruksi evakuasi dan kondisi terkini." },
      { id: "collapseFive2", label: "Bantu Korban", content: "Bantu korban yang terluka dan membutuhkan pertolongan darurat." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan." },
      { id: "collapseTwo3", label: "Pembersihan dan Perbaikan", content: "Membersihkan dan memulihkan infrastruktur yang rusak serta membersihkan lumpur dan puing-puing." },
      { id: "collapseThree3", label: "Bantuan Medis dan Psikologis", content: "Menyediakan bantuan medis untuk korban yang terluka dan dukungan psikologis untuk yang memerlukan." },
      { id: "collapseFour3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami." },
      { id: "collapseFive3", label: "Rekonstruksi Perumahan dan Fasilitas Umum", content: "Rekonstruksi perumahan, sekolah, rumah sakit, dan fasilitas umum lainnya yang rusak akibat tsunami."},
      { id: "collapseSix3", label: "Evaluasi dan Pembelajaran", content: "Mengadakan evaluasi terhadap respons dan rencana mitigasi yang ada untuk memperbaiki dan mempersiapkan diri lebih baik di masa depan."},
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