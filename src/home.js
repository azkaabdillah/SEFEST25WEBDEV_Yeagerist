import React from 'react';
import './styling/home.css'
import Item from './item'

function Home() {
    return (
        <div className="home">
            <div className="header">
                <div className="container">
                    <h1 className="text-header">
                        <b>Siap, Sigap, Selamat: Mitigasi Bencana untuk Semua</b>
                    </h1>
                    <h4 className="text-description">Bersiap sebelum bencana datang, bertindak cepat saat terjadi, dan selamat bersama! </h4> 
                </div>
            </div>

            <div className="cards">
                <div className="container" id="card">
                    <div className="text-card">
                        <b>Penanganan Bencana</b>
                    </div>

                    <div className="card-content">
                        <div className="justify-content-center row">
                            <Item name="Angin Topan" target="/angin-topan" img="./img/assets/gettyimages-1131211375-64f0a6d0426a3.jpg" />
                            <Item name="Gempa bumi" target="/gempa-bumi" img="./img/assets/carl-campbell-D4PJKYGH2qY-unsplash.jpg" />
                            <Item name="Tsunami" target="/tsunami" img="./img/assets/5e689e40e618e.jpg" />
                            <Item name="Gunung Meletus" target="/gunung-meletus" img="./img/assets/asa-steinarsdottir-NUDZ0D3ySAA-unsplash.jpg" />
                            <Item name="Tanah Longsor" target="/tanah-longsor" img="./img/assets/759143984-612x612.webp" />
                            <Item name="Banjir" target="/banjir" img="./img/assets/chris-gallagher-9Jgn8hSYUFc-unsplash.jpg" />
                            <Item name="Kekeringan" target="kekeringan" img="./img/assets/mike-erskine-GKFsewk-hz0-unsplash.jpg" />             
                            <Item name="Kebakaran Hutan" target="kebakaran-hutan" img="./img/assets/1200px-Bandipur_fires_2019.jpg" />
                            <Item name="Gelombang Panas" target="gelombang-panas" img="./img/assets/202405061212-mobile.cropped_1715039603.jpg" />
                            <Item name="Badai Petir" target="badai-petir" img="./img/assets/garth-manthe--VjeHVFSl38-unsplash.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home