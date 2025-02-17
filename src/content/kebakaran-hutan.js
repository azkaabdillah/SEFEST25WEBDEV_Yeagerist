import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Kebakaran Hutan",
    description: "Kebakaran hutan adalah peristiwa di mana api menyebar dengan cepat melalui lahan yang tertutup vegetasi seperti hutan, padang rumput, atau lahan gambut. Kebakaran hutan dapat terjadi secara alami atau akibat aktivitas manusia, dan memiliki dampak yang signifikan terhadap lingkungan, ekonomi, dan kesehatan manusia. ",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "(1) Penyebab Alamiah : petir (petir yang menyambar pohon atau vegetasi kering dapat memicu kebakaran), Cuca Ekstrem (Suhu tinggi, angin kencang, dan kelembaban rendah meningkatkan risiko kebakaran), letusan gunung api (Lava atau abu panas dari letusan gunung berapi bisa menyebabkan kebakaran). (2) Penyebab Manusia : pembakaran terbuka, Pembukaan lahan dengan cara dibakar (slash-and-burn) untuk pertanian atau perkebunan, kecelakaan (Kebakaran akibat api unggun, puntung rokok, atau percikan api dari mesin yang tidak dipadamkan dengan benar) dan sengaja dibakar." },
      { id: "collapse2", label: "Dampak", content: "keruskan ekosistem, polusi udara, perubahan iklim, kerugian ekonomi, krisis air, evakuasi dan displacement (Kebakaran besar bisa menyebabkan evakuasi massal dan kehilangan tempat tinggal bagi banyak orang)." },
    ],
    accordions: [
      { id: "collapseOne", label: "Pencegahan Kebakaran", content: "Mengimplementasikan program pencegahan kebakaran hutan seperti pemeliharaan jalur pemisah api, patroli rutin, dan edukasi masyarakat." },
      { id: "collapseTwo", label: "Perencanaan Penataan Tata Ruang", content: "Mengembangkan perencanaan tata ruang yang mempertimbangkan risiko kebakaran hutan dan zona perlindungan." },
      { id: "collapseThree", label: "Pengelolaan lahan", content: "Melakukan pengelolaan lahan yang berkelanjutan untuk mengurangi material bakar dan menciptakan zona defensif." },
      { id: "collapseFive", label: "Sistem Peringatan Dini", content: "Membangun dan memelihara sistem peringatan dini kebakaran hutan untuk mendeteksi awal dan merespons dengan cepat." },
      { id: "collapseSix", label: "Pelatihan dan Pendidikan", content: "Melakukan pelatihan reguler kepada petugas dan masyarakat dalam penanganan kebakaran hutan dan pencegahan." },
      { id: "collapseSeven", label: "Komitmen Kemitraan", content: "Membangun kemitraan yang kuat antara pemerintah, komunitas lokal, dan sektor swasta untuk respons yang lebih efektif."},
      { id: "collapseEight", label: "Pengawasan dan Penegakan Hukum", content: "Meningkatkan pengawasan dan penegakan hukum terhadap aktivitas ilegal yang dapat memicu kebakaran hutan." },
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Tetap Tenang", content: "Tetap tenang dan hindari panik untuk dapat mengambil langkah-langkah yang tepat." },
      { id: "collapseTwo2", label: "Segera Evakuasi", content: "Segera evakuasi diri dan keluarga ke zona aman atau tempat perlindungan terdekat." },
      { id: "collapseThree2", label: "Hindari Jalur Api", content: "Jauhi area yang terkena dampak langsung api atau kabut asap yang tebal." },
      { id: "collapseFour2", label: "Dengarkan Instruksi Resmi", content: "Dengarkan instruksi dari petugas darurat dan otoritas setempat untuk langkah selanjutnya." },
      { id: "collapseFive2", label: "Bantu Korban", content: "Bantu korban yang terluka dan membutuhkan pertolongan darurat." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan." },
      { id: "collapseTwo3", label: "Rehabilitasi Ekosistem", content: "Memulihkan ekosistem yang terpengaruh oleh kebakaran hutan melalui reboisasi dan restorasi alami." },
      { id: "collapseFour3", label: "Bantuan Kemanusiaan", content: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, dan tempat penampungan bagi korban." },
      { id: "collapseFive3", label: "Dukungan Psikologis", content: "Memberikan dukungan psikologis kepada masyarakat yang mengalami dampak emosional akibat kebakaran hutan."},
      { id: "collapseSix3", label: "Pemulihan Ekonomi", content: "Mendukung pemulihan ekonomi lokal dengan mendukung usaha kecil dan menstabilkan mata pencaharian masyarakat."},
    ],
  },
];

function KebakaranHutan() {
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

export default KebakaranHutan;