'use client';

import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

export default function home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Tambahkan state untuk card yang dipilih
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <Head>
        <title>VeloRent.</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <nav className="navbar py-3" style={{ backgroundColor: '#6984FF' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo kiri */}
          <a className="navbar-brand text-white fw-bold fs-3" href="#" style={{ letterSpacing: '0.5px' }}>
            Velo<span style={{ color: '#ffffff' }}>Rent.</span>
          </a>
          {/* Menu tengah */}
          <div className="d-flex gap-5 justify-content-center flex-grow-1" style={{ marginLeft: '-120px' }}>
            <a className="text-white fw-bold fs-5 text-decoration-none" href="#">Home</a>
            <a className="text-white fw-bold fs-5 text-decoration-none" href="#">Settings</a>
            <a className="text-white fw-bold fs-5 text-decoration-none" href="#">History</a>
          </div>
          {/* Profil kanan */}
          <div className="d-flex align-items-center">
            <span className="text-white me-2 fw-bold fs-6" style={{ fontSize: '13px' }}>Hello, User !</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-circle border border-white"
              style={{ background: '#6984FF', padding: '2px' }}
            />
          </div>
        </div>
      </nav>

      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.lovepik.com/background/20211022/large/lovepik-city-road-background-image_401914511.jpg"
              className="d-block w-100 h-100 position-absolute"
              style={{ objectFit: 'cover', zIndex: 1, top: 0, left: 0 }}
              alt="Slide 1 Background"
            />
            <img
              src="https://www.belitungtours.com/asap/assets/asap/pages/setting/kategori_sewa/images/2/220810095640_rental-mobil-belitung-murah_2.png"
              className="d-block w-100"
              style={{ position: 'relative', zIndex: 2 }}
              alt="Mobil"
            />
            <div
              className="carousel-caption d-flex justify-content-start align-items-start h-100"
              style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 3 }}
            >
              <h1 className="display-4 fw-bold text-white bg-dark bg-opacity-50 px-3 py-2 rounded">
                TEMPAT SEWA TERMURAH
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.lovepik.com/background/20211021/small/lovepik-highway-city-background-image_401429529.jpg"
              className="d-block w-100 h-100 position-absolute"
              style={{ objectFit: 'cover', zIndex: 1, top: 0, left: 0 }}
              alt="Slide 2 Background"
            />
            <img
              src="/Sewa-Mobil-malang-jogja-magelang.png"
              className="d-block w-100"
              style={{ position: 'relative', zIndex: 2 }}
              alt="Mobil"
            />
            <div className="carousel-caption d-flex justify-content-center align-items-center h-100">
              <h1 className="display-4 fw-bold text-white bg-dark bg-opacity-50 px-3 py-2 rounded">
                SEWA MOBIL JOGJA
              </h1>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className="text-center my-5">CHOOSE YOUR CARS !</h1>

      <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap">
        <select className="form-select" style={{ width: '200px' }} defaultValue="">
          <option value="" disabled>CARS TYPE</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <input type="date" className="form-control" style={{ width: '200px' }} />
        <input type="date" className="form-control" style={{ width: '200px' }} />
        <input
          type="text"
          className="form-control"
          placeholder="Rp.50.000,00 - Rp.1.000.000,00"
          style={{ width: '250px' }}
        />
        <button className="btn btn-primary">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {Array(6).fill(0).map((_, idx) => (
            <div className="col-md-4" key={idx}>
              <button
                type="button"
                className={`btn vehicle-btn w-100 h-100 rounded-3 fw-bold`}
                style={{
                  backgroundColor: selectedCard === idx ? '#6984FF' : '#F6F6F6', // Ubah warna default
                  color: selectedCard === idx ? '#fff' : '#212529',
                  border: selectedCard === idx ? '2px solid #6984FF' : '1px solid #212529',
                  transition: 'background 0.2s, color 0.2s, border 0.2s'
                }}
                onClick={() => setSelectedCard(idx)}
              >
                <img
                  src="https://clipground.com/images/gambar-mobil-png-8.png"
                  alt="Small Car"
                  className="vehicle-img d-block mx-auto"
                  style={{ width: '200px', height: '200px', objectFit: 'contain' }} // Hapus filter
                />
                <h3 className="h5 fw-bold mb-2">SMALL</h3>
                <p className="text-muted small mb-2" style={{ color: selectedCard === idx ? '#e0e0e0' : undefined }}>4 kursi, ekonomis</p>
                <p className="fw-bold mb-0" style={{ color: selectedCard === idx ? '#fff' : '#2366e8' }}>Rp. 50.000</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}