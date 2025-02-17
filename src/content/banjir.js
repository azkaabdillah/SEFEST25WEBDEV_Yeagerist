import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Banjir",
    description: "Banjir adalah peristiwa aliran atau genangan air di suatu wilayah yang terjadi akibat meluapnya air dari saluran yang ada melebihi kapasitas pembuangan air. Banjir bisa terjadi karena curah hujan yang tinggi, lelehan salju, atau masalah lain yang mengakibatkan air tak dapat diserap dengan cepat oleh tanah atau dialirkan oleh saluran air yang ada.",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "(1) Curah hujan tinggi dengan sistem drainase buruk. (2) Luapan air sungai. (3) Adanya gelombang pasang, badai, atau tsunami bisa menyebabkan air laut naik dan menggenangi daerah pesisir. (4) Bendungan jebol. (5) Deforestasi." },
      { id: "collapse2", label: "Jenis", content: "(1) Banjir Bandang, terjadi ketika air dan material lain seperti lumpur mengalir deras ke daratan. (2) Banjir sungai (river flood), terjadi ketika permukaan air naik di atas tepian sungai karena hujan berlebihan. (3) Banjir pantai (coastal flood), terjadi ketika air laut naik dan meluap ke daratan. (4) Gelombang badai (storm surge), terjadi ketika angin kencang dan tekanan rendah menyebabkan air laut naik dan meluap ke daratan. (5) Banjir genangan: terjadi ketika air menggenangi daratan rendah akibat hujan lebat." },
      { id: "collapse3", label: "Dampak", content: " (1) Kerusakan Infrastruktur. (2) Korban jiwa dan luka-luka. (3) Kerugian Ekonomi (banjir dapat merusak lahan pertanian, mengganggu aktivitas bisnis, dan menyebabkan kerugian ekonomi yang besar.). (4) Kesehatan Masyarakat (air banjir bisa membawa penyakit menular, seperti kolera dan leptospirosis, serta meningkatkan risiko infeksi.). (5) Merusak habitat satwa liar dan mengakibatkan pencemaran lingkungan akibat bahan kimia dan limbah yang terbawa air. " },
    ],
    accordions: [
      { id: "collapseOne", label: "Pendidikan dan Kesadaran", content: "Meningkatkan kesadaran masyarakat tentang risiko banjir dan cara mengantisipasi serta mengurangi dampaknya." },
      { id: "collapseTwo", label: "Perencanaan Tata Ruang", content: "Mengembangkan regulasi tata ruang yang mempertimbangkan potensi banjir, termasuk zona evakuasi dan pembatasan pembangunan di daerah rawan." },
      { id: "collapseThree", label: "Drainase dan Infrastruktur", content: "Meningkatkan sistem drainase dan infrastruktur penanganan air hujan untuk mengurangi risiko banjir." },
      { id: "collapseFour", label: "Peringatan Dini", content: "Membangun dan memelihara sistem peringatan dini banjir yang efektif untuk memberi waktu yang cukup bagi masyarakat untuk mengambil tindakan." },
      { id: "collapseFive", label: "Evakuasi", content: "Mengembangkan rencana evakuasi yang jelas dan melakukan simulasi secara berkala." },
      { id: "collapseSix", label: "Pendidikan Penanganan Darurat", content: "Melatih masyarakat dalam keterampilan penanganan darurat seperti penyelamatan diri dan pertolongan pertama." },
      { id: "collapseSeven", label: "Penguatan Bangunan", content: "Menggalakkan penggunaan bahan bangunan tahan air dan mengangkat bangunan di daerah rawan banjir."},
      { id: "collapseEight", label: "Komitmen Komuitas:", content: "Mendorong partisipasi aktif masyarakat dalam program mitigasi banjir dan pemantauan kondisi sungai serta saluran air." },
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Tetap Tenang", content: "Tetap tenang dan hindari panik untuk dapat mengambil langkah-langkah yang tepat." },
      { id: "collapseTwo2", label: "Pindah Ke Tempat Aman", content: "Segera pindah ke tempat yang lebih tinggi atau ke zona evakuasi yang telah ditentukan." },
      { id: "collapseThree2", label: "Jauhi Air Mengalir", content: "Hindari kontak langsung dengan air mengalir yang dapat membawa material berbahaya." },
      { id: "collapseFour2", label: "Dengarkan Informasi Terbaru", content: "Dengarkan informasi terbaru melalui radio atau sumber informasi lainnya untuk instruksi evakuasi dan kondisi terkini." },
      { id: "collapseFive2", label: "Bantu Korban", content: "Bantu korban yang terluka dan membutuhkan pertolongan darurat." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan." },
      { id: "collapseTwo3", label: "Pembersihan dan Perbaikan", content: "Membersihkan dan memulihkan infrastruktur yang rusak serta membersihkan lumpur dan puing-puing." },
      { id: "collapseThree3", label: "Bantuan Kemanusiaan", content: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, perlengkapan kebersihan, dan tempat penampungan." },
      { id: "collapseFour3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami." },
      { id: "collapseFive3", label: "Pemulihan Ekonomi", content: "Mendukung pemulihan ekonomi lokal dengan membangun kembali usaha kecil dan menstabilkan mata pencaharian masyarakat."},
      { id: "collapseSix3", label: "Evaluasi dan Pembelajaran", content: "Mengevaluasi respons terhadap banjir dan memperbaiki sistem mitigasi serta kesiapsiagaan untuk kejadian banjir masa depan."},
    ],
  },
];

function Banjir() {
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

export default Banjir;