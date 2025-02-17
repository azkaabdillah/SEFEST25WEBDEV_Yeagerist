import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Kekeringan",
    description: "Kekeringan adalah keadaan kekurangan pasokan air pada suatu daerah dalam masa yang berkepanjangan. Biasanya terjadi ketika wilayah tersebut mengalami curah hujan di bawah rata-rata. Kekeringan dapat disebabkan oleh faktor alam maupun manusia. ",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "(1) Curah hujan rendah (2) Perubahan iklim (3) Penggundulan hutan (4) Overirigasi (5) Pengelolaan air yang buruk (6) Aktivitas manusia, seperti : Urbanisasi, industri, dan pertanian tidak berkelanjutan dapat menguras sumber air dan memperparah kekeringan." },
      { id: "collapse2", label: "Jenis", content: "(1) Kekeringan Meteorologis, yaitu kurangnya curah hujan dibandingkan dengan rata-rata jangka panjang di suatu daerah. (2) Kekeringan Hidrologis, terjadi ketika sumber air permukaan dan bawah tanah, seperti sungai dan akuifer, menurun ke tingkat yang sangat rendah. (3) Kekeringan Pertanian, yaitu kekurangan air tanah dan kelembaban tanah yang mempengaruhi tanaman dan hasil pertanian. (4) Kekeringan Sosio-Ekonomi, yaitu permintaan air melebihi pasokan yang tersedia, mengganggu kehidupan sosial dan ekonomi masyarakat." },
      { id: "collapse3", label: "Dampak", content: "(1) Kerugian pertanian (2) Krisis air (3) Kebakaran hutan (4) Kerusakan ekosistem (5) Gangguan Ekonomi (6) Migrasi dan konflik (kekurangan air dapat memicu migrasi massal dan konflik sosial antara komunitas yang bersaing untuk mendapatkan sumber air)." },
    ],
    accordions: [
      { id: "collapseOne", label: "Konservasi Air", content: "Mendorong konservasi air melalui pendidikan dan program penghematan air untuk mengurangi kebutuhan air." },
      { id: "collapseTwo", label: "Diversifikasi Sumber Air", content: "Mengembangkan sumber-sumber air alternatif seperti sumur dangkal, penampungan air hujan, atau desalinasi air laut." },
      { id: "collapseThree", label: "Pengelolaan SDA", content: "Meningkatkan pengelolaan sumber daya air dengan mengatur penggunaan air secara efisien dan adil." },
      { id: "collapseFour", label: "Perencanaan Pertanian Berkelanjutan", content: "Mengembangkan praktik pertanian berkelanjutan yang lebih efisien dalam penggunaan air." },
      { id: "collapseFive", label: "Pendataan dan Pemantauan Kondisi", content: "Melakukan pendataan dan pemantauan kondisi tanah dan sumber air secara berkala untuk mendeteksi potensi kekeringan." },
      { id: "collapseSix", label: "Pendidikan Masyarakat", content: "Meningkatkan kesadaran masyarakat tentang pentingnya konservasi air dan langkah-langkah mitigasi kekeringan." },
      { id: "collapseSeven", label: "Kemitraan dan Kolaborasi", content: "Membangun kemitraan antara pemerintah, masyarakat, dan sektor swasta untuk mengelola kekeringan secara efektif."},
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Penghematan Air", content: "Mendorong masyarakat untuk menghemat penggunaan air dengan membatasi penggunaan air untuk keperluan penting saja." },
      { id: "collapseTwo2", label: "Distribusi Air Bersih", content: "Mengatur distribusi air bersih kepada komunitas yang terdampak kekeringan." },
      { id: "collapseThree2", label: "Bantuan Kemanusiaan", content: "Menyediakan bantuan kemanusiaan seperti makanan dan air bersih kepada mereka yang paling terdampak." },
      { id: "collapseFour2", label: "Edukasi Kesehatan", content: "Memberikan edukasi mengenai kesehatan terkait kekeringan dan penyakit yang dapat timbul akibat kondisi tersebut." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kebutuhan", content: "Melakukan penilaian kebutuhan masyarakat dan infrastruktur untuk menentukan prioritas pemulihan." },
      { id: "collapseTwo3", label: "Rehabilitasi SDA", content: "Melakukan rehabilitasi sumber daya air dan pengembalian fungsi ekosistem yang terpengaruh oleh kekeringan." },
      { id: "collapseThree3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada masyarakat yang mengalami dampak psikologis akibat kekeringan." },
      { id: "collapseFour3", label: "Pengembangan Kelembagaan", content: "Menguatkan kelembagaan dan kapasitas lokal dalam menghadapi kekeringan di masa mendatang." },
      { id: "collapseFive3", label: "Evaluasi dan Pembelajaran", content: "Mengevaluasi respons terhadap kekeringan dan memperbaiki sistem mitigasi serta kesiapsiagaan untuk kejadian serupa di masa depan."},
    ],
  },
];

function Kekeringan() {
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

export default Kekeringan;