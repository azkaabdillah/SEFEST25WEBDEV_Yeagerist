import React from 'react';
import './styling/home.css'
import Modal from './modal'
import Item from './portofolio-item'

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
                            <Item name="Gempa bumi" target="/gempa-bumi" img="./img/assets/carl-campbell-D4PJKYGH2qY-unsplash.jpg" />
                            <Item name="Angin Topan" target="/angin-topan" img="./img/assets/gettyimages-1131211375-64f0a6d0426a3.jpg" />
                            <Item name="Tsunami" target="#circus" img="./img/assets/5e689e40e618e.jpg" />
                            <Item name="Gunung Meletus" target="#circus" img="./img/assets/asa-steinarsdottir-NUDZ0D3ySAA-unsplash.jpg" />
                            <Item name="Tanah Longsor" target="#game" img="./img/assets/759143984-612x612.webp" />
                            <Item name="Banjir" target="#safe" img="./img/assets/chris-gallagher-9Jgn8hSYUFc-unsplash.jpg" />
                            <Item name="Kekeringan" target="#submarine" img="./img/assets/mike-erskine-GKFsewk-hz0-unsplash.jpg" />             
                            <Item name="Kebakaran Hutan" target="#game" img="./img/assets/1200px-Bandipur_fires_2019.jpg" />
                            <Item name="Gelombang Panas" target="#safe" img="./img/assets/202405061212-mobile.cropped_1715039603.jpg" />
                            <Item name="Badai Petir" target="#submarine" img="./img/assets/garth-manthe--VjeHVFSl38-unsplash.jpg" />
                        </div>
                    </div>

                    {/* <Modal name='LOG CABIN' id='cabin' img='./img/portfolio/cabin.png' />
                    <Modal name='TASTY CAKE' id='cake' img='./img/portfolio/cake.png' />
                    <Modal name='CIRCUS TENT' id='circus' img='./img/portfolio/circus.png' />
                    <Modal name='CONTROLLER' id='game' img='./img/portfolio/game.png' />
                    <Modal name='LOCKED SAFE' id='safe' img='./img/portfolio/safe.png' />
                    <Modal name='SUBMARINE' id='submarine' img='./img/portfolio/submarine.png' /> */}
                </div>
            </div>
        </div>
    )
}

export default Home