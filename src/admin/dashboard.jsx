import React from "react";
import { FaUtensils, FaWhatsapp } from "react-icons/fa";


export default function Dashboard() {
  const categories = [
    { id: 1, name: "Makanan", icon: <FaUtensils />, isSelected: true },
  ];

  const products = [
    { id: "P-01", name: "Pangsit Tiramisu", price: 10000, image: "https://firebasestorage.googleapis.com/v0/b/isenafktp.appspot.com/o/mayones.jpeg?alt=media&token=937219c1-9953-4ef7-989b-a1b54f94a4bc" },
    { id: "P-02", name: "Pangsit Chocolate", price: 10000, image: "https://firebasestorage.googleapis.com/v0/b/isenafktp.appspot.com/o/coklat.jpeg?alt=media&token=cd3d0774-bb7e-4953-87f8-3d3df9fa0ae9" },
    { id: "P-03", name: "Pangsit Balado", price: 10000, image: "https://firebasestorage.googleapis.com/v0/b/isenafktp.appspot.com/o/balado.jpeg?alt=media&token=04a8118d-7b29-4f10-902c-557cc771faad" },
  ];

  const whatsappNumber = "6282235344593"; // Ganti dengan nomor WhatsApp Anda
  const whatsappMessage = "Halo, saya ingin memesan Pangsit Roll Anda!";

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/isenafktp.appspot.com/o/logo.jpeg?alt=media&token=0ced8ce1-461e-4401-8874-1d007d5ef395" // Ganti dengan path logo Anda
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <h1 className="text-xl font-bold text-indigo-600">PANGSIT ROLL</h1>
        </div>

        {/* Tombol WhatsApp */}
        <div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-success-500 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={24} className="mr-2" />
            <span>Ingin Memesan?</span>
          </a>
        </div>
      </header>

      {/* Body Container */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 bg-white shadow-lg md:h-screen flex flex-col">
          <div className="p-6">
            <h2 className="text-xl font-bold text-indigo-600 mb-6">Kategori</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={`flex items-center p-3 mb-3 rounded-lg cursor-pointer transition-all ${
                    category.isSelected
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-indigo-200"
                  }`}
                >
                  <span className="mr-3">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer at the bottom of Sidebar */}
          <footer className="mt-auto bg-white-700 text-grey text-center py-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Pangsit Roll. Kelompok 6. All rights reserved.
            </p>
          </footer>
        </aside>

        {/* Konten Utama */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Daftar Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}{" "}
                    <span className="text-gray-400">({product.id})</span>
                  </h3>
                  <p className="text-indigo-600 font-bold mt-2">
                    Rp. {product.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
