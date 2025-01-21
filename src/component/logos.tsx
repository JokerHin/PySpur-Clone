import React from "react";

export default function logos() {
  return (
    <div>
      <section id="logos">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            FROM LEADING AI INSTITUTIONS.
          </h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-5 mt-6 place-items-center">
            <div className=" p-4 rounded shadow-md">
              <img src="/images/meta.png" alt="Meta" />
            </div>
            <div className=" p-4 rounded shadow-md">
              <img src="/images/bcg.png" alt="BCG" />
            </div>
            <div className=" p-4 rounded shadow-md">
              <img src="/images/imperial.png" alt="Imperial College" />
            </div>
            <div className=" p-4 rounded shadow-md">
              <img src="/images/yc.png" alt="YC" />
            </div>
            <div className=" p-4 rounded shadow-md">
              <img src="/images/jiosaavn.png" alt="Jiosaavn" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
