import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[#8A1D2F] mb-8 text-center">
        About YES Groups
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Image
          src="/home/about/about-main.png"
          alt="About YES Groups"
          width={400}
          height={300}
          className="rounded shadow-md object-contain"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          YES Groups, a brainchild of Mr. Deepak Budaguppe, was started in 1998
          with the intention of serving society and making it better in all
          aspects. It was formed with the help of his close associates like Mr.
          Deepak M. and Mr. Jagadeesh G.N., and officially inaugurated by Mr.
          Raja Shekara Koti, Editor of "Andolana Daily", with a sapling
          plantation at Jayanagar Government Hospital, Mysore.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {[
          {
            title: "YES Printers",
            year: "1999",
            description:
              "Empowering the unemployed through print services since 1999 — a self-sustaining unit to support YES Trust's vision.",
          },
          {
            title: "YES HardSoft Solutions",
            year: "2001 – Present",
            description:
              "Founded in 2001 in India and expanded to the USA in 2006, YES HardSoft Solutions delivers global software development, IT consulting, and hardware solutions to empower businesses across continents.",
          },
          {
            title: "YES Finance",
            year: "2006",
            description:
              "Established in 2006 to offer micro-finance to the underserved and financial assistance to businesses across India.",
          },
          {
            title: "YES Auto Needs",
            year: "2017",
            description:
              "Established in 2006 to offer micro-finance to the underserved and financial assistance to businesses across India.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border-l-4 border-[#8A1D2F] p-4 rounded shadow-md"
          >
            <h3 className="text-xl font-bold text-[#8A1D2F]">
              {item.title}{" "}
              <span className="text-sm text-gray-500">({item.year})</span>
            </h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Emblem & Motto */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <Image
          src="/home/about/emblem.png"
          alt="YES Emblem"
          width={250}
          height={250}
          className="rounded-full object-contain mb-8"
          priority
        />
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-[#8A1D2F] mb-4">
            YES Emblem and Theme
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            The emblem shows a clock at 10:10 with the message "Be Positive" — a
            symbol of time, action, and optimism.
          </p>
          <p className="italic text-[#8A1D2F] text-xl font-semibold">
            "Do something, lead, follow, or get out of the way"
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center text-[#8A1D2F] mb-8">
          Our Motive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Youth",
              desc: "Focused on high-quality services and youth empowerment through opportunity.",
            },
            {
              title: "Effort",
              desc: "Continuous improvement and strong work ethic drive our delivery.",
            },
            {
              title: "Society",
              desc: "Transparency, fairness, and service to society guide our mission.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center"
            >
              <h3 className="text-xl font-bold text-[#8A1D2F] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
