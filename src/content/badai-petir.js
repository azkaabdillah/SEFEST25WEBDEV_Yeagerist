import React from 'react'
import '../styling/content.css'
import Navbar from '../navbar';

 const contentData = [
  {
    title: "Badai Petir",
    description: "Badai petir adalah fenomena cuaca yang ditandai oleh kehadiran kilat dan guntur, sering disertai oleh hujan deras, angin kencang, dan kadang-kadang hujan es. Badai petir bisa sangat berbahaya dan merusak, terutama jika disertai dengan angin puting beliung atau banjir bandang.",
    buttons: [
      { id: "collapse1", label: "Penyebab", content: "Dilansir dari laman Badan Meteorologi, Klimatologi, dan Geofisika (BMKG), terbentuknya badai guntur bisa terjadi karena tiga hal yakni uap air, ketidakstabilan/instabilitas udara, dan mekanisme pengangkatan massa udara (lifting). Dalam kondisi badai, udara dikatakan tak stabil jika ia terus naik ketika ada dorongan ke atas. Suatu massa udara yang tidak stabil dicirikan oleh udara panas lembab di dekat permukaan dan udara dingin yang kering di atasnya. Ketika sekumpulan udara yang naik mengalami pendinginan, sebagian uap airnya akan terkondensasi membentuk awan cumulonimbus (Cb), yang umumnya disebut badai guntur (thunderstorm)." },
      { id: "collapse2", label: "Siklus Badai", content: " (1) Pada tahap menjadi towering cumulus (Cu), sebuah awan Cu mulai tumbuh secara vertikal mencapai ketinggian hingga 6 km. Massa udara di dalamnya didominasi adanya updraft atau udara yang bergerak ke atas dengan beberapa aliran turbulensi eddy di sekeliling tepi awan. (2) Pada saat thunderstorm mencapai tahapan matang, awan dapat berkembang menjulang sangat tinggi, seringkali mencapai 12 km atau lebih. Bahkan di puncak awan badai guntur, dapat mencapai lapisan tropopause, lapisan pembatas di mana segala unsur oksigen maupun karbondioksida sudah tidak ada. Akibatnya, hujan dihasilkan dan gaya friksi ke bawah terdesak oleh butiran‐butiran air hujan yang turun di sekitar wilayah udara yang menghasilkan downdraft (udara yang bergerak ke bawah). Kemudian proses pendinginan massa udara akibat penguapan butiran‐butiran air hujan akan meningkatkan kecepatan downdraft. Dengan Laju updraft dan downdraft yang relative lemah, yaitu sekitar 10m/detik, dan keduanya dapat saling mempengaruhi/bercampur. (3) Pada tahap peluruhan, hujan akan menyebar ke seluruh bagian awan badai guntur dan downdraft menjadi lebih luas. Updraft semakin melemah, badai mulai kehabisan suplai udara panas yang lembab sebagai bahan bakarnya, dan akhirnya awan badai guntur akan meluruh. Hujan ringan dan angin dapat tetap berlangsung untuk sementara waktu pada tahap ini, sebelum yang tertinggal hanya sisa‐sisa awan anvil bagian dari cumulonimbus." },
      { id: "collapse3", label: "Jenis", content: " (1) Badai Petir Tunggal (Single-cell Thunderstorm), yaitu Badai petir relatif kecil yang terdiri dari satu sel badai dengan siklus hidup sekitar satu jam. (2) Badai Petir Multisel (Multi-cell Thunderstorm), yaitu Badai yang terdiri dari beberapa sel badai yang berkembang secara bersamaan atau berurutan, dapat berlangsung lebih lama dan lebih intens daripada badai petir tunggal. (3) Badai Petir Supercell (Supercell Thunderstorm), yaitu Badai petir yang sangat kuat dengan struktur rotasi yang dikenal sebagai mesocyclone, sering disertai dengan angin kencang, hujan es besar, dan potensi angin puting beliung. (4) Badai Petir Garis (Squall Line), yaitu Badai yang membentuk garis panjang yang dapat menyebabkan angin kencang dan hujan deras di sepanjang garis tersebut." },
      { id: "collapse4", label: "Dampak", content: " (1)Kerusakan Properti (angin kencang dan hujan es dapat merusak bangunan, kendaraan, dan tanaman). (2) Kebakaran (Kilat dapat menyebabkan kebakaran hutan atau kebakaran bangunan jika menyambar material yang mudah terbakar). (3) Banjir Bandang (Hujan deras dapat menyebabkan banjir bandang, terutama di daerah yang tidak memiliki sistem drainase yang baik). (4) Gangguan Jaringan Listrik (Kilat dapat menyebabkan pemadaman listrik dan merusak peralatan listrik). (5) Bahaya Bagi Penerbangan (Turbulensi dan kondisi cuaca ekstrem dapat membahayakan penerbangan). " },
      { id: "collapse5", label: "Tips", content: " (1) Tetap Di Dalam Ruangan (Saat badai petir, lebih aman berada di dalam rumah atau bangunan yang kokoh). (2) Hindari Peralatan Elektronik (Jangan menggunakan peralatan listrik atau elektronik selama badai petir untuk menghindari risiko sambaran petir). (3) Jauhi Jendela dan Pintu (Tetap menjauh dari jendela, pintu, dan dinding luar untuk mengurangi risiko cedera akibat angin kencang atau pecahan kaca). (5) Cari Perlindungan Segera (Jika Anda berada di luar, cari perlindungan di dalam bangunan terdekat atau di dalam kendaraan dengan jendela tertutup). " },
    ],
    accordions: [
      { id: "collapseOne", label: "Pendidikan Keselamatan", content: "Meningkatkan pendidikan keselamatan terkait badai petir kepada masyarakat, termasuk tentang tempat perlindungan dan perilaku aman." },
      { id: "collapseTwo", label: "Penanggulangan Resiko", content: "Menilai dan mengurangi risiko kebakaran yang disebabkan oleh petir dengan pengelolaan vegetasi dan pemantauan terus-menerus." },
      { id: "collapseThree", label: "Perencanaan Darurat", content: "Mengembangkan rencana darurat yang mencakup prosedur evakuasi dan komunikasi darurat selama badai petir." },
      { id: "collapseFour", label: "Pemantauan Cuaca", content: "Menggunakan sistem pemantauan cuaca yang efektif untuk memantau perkembangan badai petir dan memberikan peringatan dini." },
      { id: "collapseFive", label: "Proteksi Bangunan", content: "Memasang sistem proteksi petir pada bangunan-bangunan penting dan menghindari penggunaan peralatan elektronik selama badai petir." },
      { id: "collapseSix", label: "Komitmen Keselamatan", content: "Mengajak masyarakat untuk berkomitmen pada keselamatan pribadi dan mengambil tindakan pencegahan yang sesuai." },
    ],
    accordionsTwo: [
      { id: "collapseOne2", label: "Cari Tempat Perlindungan", content: "Cari tempat perlindungan seperti bangunan tertutup atau kendaraan yang berada di dalam." },
      { id: "collapseTwo2", label: "Jauhi Tempat Terbuka", content: "Jauhi tempat terbuka, pohon tinggi, tiang listrik, dan air terjun." },
      { id: "collapseThree2", label: "Hindari Air", content: "Hindari air seperti kolam renang, dan pancuran karena air adalah konduktor listrik." },
      { id: "collapseFour2", label: "Tetap di Tempat Aman", content: "Tetap berada di tempat perlindungan hingga badai petir berlalu dan aman untuk keluar." },
      { id: "collapseFive2", label: "Bantu Korban", content: "Berikan pertolongan pertama kepada korban yang terluka jika aman untuk melakukannya." },
    ],
    accordionsThree: [
      { id: "collapseOne3", label: "Penilaian Kerusakan", content: "Periksa kerusakan bangunan dan infrastrukturnya, pastikan bangunan aman sebelum kembali masuk." },
      { id: "collapseTwo3", label: "Perbaikan Infrastruktur", content: "Memulihkan dan memperbaiki infrastruktur yang rusak akibat petir seperti listrik dan komunikasi." },
      { id: "collapseThree3", label: "Edukasi Masyarakat", content: "Memberikan edukasi kepada masyarakat tentang pemahaman lebih lanjut mengenai bahaya petir dan langkah-langkah untuk mengurangi risiko." },
      { id: "collapseFour3", label: "Penguatan Sistem Proteksi", content: "Menguatkan sistem proteksi petir pada bangunan-bangunan penting serta meningkatkan kesadaran akan perlunya perlindungan petir." },
    ],
  },
];

function BadaiPetir() {
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
                <button key={button.id} className="btn btn-warning flex-fill col btn-content" type="button" data-bs-toggle="collapse" data-bs-target={`#${button.id}`} aria-expanded="false" aria-controls={button.id}>{button.label}</button>
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
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="true" aria-controls={accordion.id}>
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

export default BadaiPetir;