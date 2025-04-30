import React, { useState } from "react";

const CertificateDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const certificate = {
    id: "MYCERTM00120Z251Y228W",
    name: "Hitesh",
    middleName: "Balaram",
    lastName: "Patil",
    nationality: "India",
    dob: "1999-11-28",
    supervisorId: "9AB324iex",
    issueDate: "30.04.2025 04:54:27",
    status: "Valid",
    issuer: "SafeLearn LMS",
    verified: true,
    expiration: "Never",
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex justify-center items-center p-6"
        style={{
          backgroundImage:
            "url('https://app.mycert.com/_app/Content/Images/check_page_background.png')",
        }}
      >
        <img
          src="https://app.mycert.com/_app/Content/Images/logoWhite.png"
          alt="Logo"
          className="absolute top-12 left-1/2 transform -translate-x-1/2 w-48 h-auto"
        />

        <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden mt-24">
          <div className="p-4 text-black text-center font-bold text-xl">
            {`FURUNO FMD-3100/FMD-3200/FMD-3300`}
            <div
              onClick={() => setShowModal(true)}
              className="text-cyan-600 text-sm font-normal underline cursor-pointer mt-1 flex items-center justify-center gap-1"
            >
              <img
                src="https://app.mycert.com/_app/Content/Images/preview.png"
                alt="Preview Icon"
                className="w-4 h-4"
              />
              <span>Preview Certificate</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* Certificate Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="http://app.mycert.com/_app/Content/Images/certificate_status.png"
                  alt="Status Icon"
                  className="w-5 h-5"
                />
                <span className="bold">
                  <strong>Certificate status</strong>
                </span>
              </div>
              <span
                className="font-semibold flex items-center gap-1"
                style={{ color: "#07d2ad" }}
              >
                Valid
                <img
                  src="https://app.mycert.com/_app/Content/Images/verified.png"
                  alt="Valid"
                  className="w-4 h-4"
                />
              </span>
            </div>

            {/* Certificate Issuer */}
            <div className="flex justify-between items-start">
  {/* Left side */}
  <div className="flex-1">
    <div className="flex items-center gap-2">
      <img
        src="https://app.mycert.com/_app/Content/Images/certificate_issuer.png"
        alt="Issuer Icon"
        className="w-5 h-5"
      />
      <strong>Certificate issuer</strong>
    </div>
    <div className="text-sm text-black mt-1 ml-7">
      Verified by <span className="text-cyan-600 font-semibold">{certificate.issuer}</span>
    </div>
    <div className="mt-1 ml-7">
      <img
        src="https://app.mycert.com/_app/OrganizationCrud/displayImage?imagePath=fTKfpO2fomvrXcajnSQBw9RUQQD4K%2F4Kd1X1fb9XY0RVry4kHujPxclTzT0BwLpPcX6mlTXyW7rBsHEG7tT5GA%3D%3D"
        alt="Certification Icon"
        className="w-12 h-12"
      />
    </div>
  </div>

  {/* Right side */}
  <div className="text-right">
    <div
      className="font-semibold flex items-center gap-1"
      style={{ color: "#07d2ad" }}
    >
      Verified
      <img
        src="https://app.mycert.com/_app/Content/Images/verified.png"
        alt="Verified"
        className="w-4 h-4"
      />
    </div>
  </div>
</div>



            {/* Expiration */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://app.mycert.com/_app/Content/Images/expiration.png"
                  alt="Expiration Icon"
                  className="w-5 h-5"
                />
                <span className="bold">
                  <strong>Expiration</strong>
                </span>
              </div>
              <span
                className="font-semibold"
                style={{ color: "#07d2ad" }}
              >
                {certificate.expiration}
              </span>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-cyan-600 font-bold mb-2 text-lg">
                ADDITIONAL INFORMATION
              </h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="font-semibold">Nationality</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.nationality}</span>
                <span className="font-semibold">Date of Birth</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.dob}</span>
                <span className="font-semibold">Supervisor ID</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.supervisorId}</span>
                <span className="font-semibold">First Name</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.name}</span>
                <span className="font-semibold">Last Name</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.lastName}</span>
                <span className="font-semibold">Middle Name</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.middleName || "-"}</span>
                <span className="font-semibold">Certificate No</span>
                <span className="font-semibold text-right text-cyan-600">
                  {certificate.id}
                </span>
                <span className="font-semibold">Date of Issue</span>
                <span className="font-semibold text-right text-cyan-600">{certificate.issueDate}</span>
              </div>
            </div>

            <div className="pt-6 text-center">
            <a
  href="https://app.mycert.com/_app/Check" // replace with your actual path
  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full inline-block text-center"
>
  VERIFY ANOTHER CERTIFICATE
</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for PDF Preview */}
      {showModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-xl w-[75%] h-[95vh] flex flex-col">
      <div className="flex-1 overflow-hidden">
        <iframe
          src="/FURUNO%20ECDIS%20-%20HITESH%20PATIL.pdf"
          title="Certificate PDF"
          className="w-full h-full"
        />
      </div>
      <div className="p-4 border-t flex justify-end">
        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-6 py-2 rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default CertificateDetails;
