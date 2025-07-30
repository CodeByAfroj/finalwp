import React, { useEffect, useState } from "react";

export default function QRCodeDisplay() {
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQR = async () => {
      try {
        const res = await fetch("http://localhost:3000/qr");
        const data = await res.json();
        if (data.qr) {
          setQr(data.qr);
          setLoading(false);
        } else {
          setTimeout(fetchQR, 2000); // retry after 2 sec if not ready
        }
      } catch (err) {
        console.error("Failed to fetch QR:", err);
      }
    };

    fetchQR();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Scan WhatsApp QR</h2>
      {loading ? (
        <p className="text-gray-500">Loading QR code...</p>
      ) : (
        <img src={qr} alt="WhatsApp QR Code" className="mx-auto" />
      )}
    </div>
  );
}
