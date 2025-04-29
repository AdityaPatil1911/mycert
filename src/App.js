import React from "react";

const CertificateDetails = () => {
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
        className="absolute top-12 left-1/2 transform -translate-x-1/2 w-48 h-auto" // Increased width to w-48
      />

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl overflow-hidden mt-24">
        <div className=" p-4 text-black text-center font-bold text-xl">
          {`FURUNO FMD-3100/FMD-3200/FMD-3300`}
          <div className=" text-cyan-600 text-sm font-normal underline cursor-pointer mt-1">
            Preview Certificate
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Certificate status</span>
            <span className="text-green-500 font-semibold">Valid ✅</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Certificate issuer</span>
            <span className="text-green-500 font-semibold">
              Verified ✅
              <div className="text-sm text-blue-500">
                Verified by {certificate.issuer}
              </div>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Expiration</span>
            <span className="text-green-500 font-semibold">
              {certificate.expiration}
            </span>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-cyan-600 font-bold mb-2 text-lg">
              ADDITIONAL INFORMATION
            </h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="font-semibold">Nationality</span>
              <span>{certificate.nationality}</span>
              <span className="font-semibold">Date of Birth</span>
              <span>{certificate.dob}</span>
              <span className="font-semibold">Supervisor ID</span>
              <span>{certificate.supervisorId}</span>
              <span className="font-semibold">First Name</span>
              <span>{certificate.name}</span>
              <span className="font-semibold">Last Name</span>
              <span>{certificate.lastName}</span>
              <span className="font-semibold">Middle Name</span>
              <span>{certificate.middleName || "-"}</span>
              <span className="font-semibold">Certificate No</span>
              <span className="text-blue-600 font-semibold">{certificate.id}</span>
              <span className="font-semibold">Date of Issue</span>
              <span>{certificate.issueDate}</span>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full">
              VERIFY ANOTHER CERTIFICATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetails;
