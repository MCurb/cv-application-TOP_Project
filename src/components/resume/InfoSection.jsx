import { Card } from "../ui/Card";

export function InfoSection({ entries, sectionType }) {
  const sectionTitle = {
    education: "Education",
    work: "Professional Experience",
  };
  return (
    <section className="resume-section">
      <h2 className="section-heading">{sectionTitle[sectionType]}</h2>
      <ul className="resume-cards-wrapper">
        {sectionType === "education" &&
          entries.map((entry) => {
            const groupOne = (
              <>
                <div className="date">
                  <p>{entry.fromDate}</p>
                  <span>-</span>
                  <p>{entry.toDate}</p>
                </div>
                <p>{entry.location}</p>
              </>
            );
            const groupTwo = (
              <>
                <p className="poppins-700" style={{ fontSize: "20px" }}>
                  {entry.schoolName}
                </p>
                <p className="poppins-500">{entry.title}</p>
              </>
            );
            return (
              <Card
                groupOne={groupOne}
                groupTwo={groupTwo}
                key={entry.id}
              ></Card>
            );
          })}

        {sectionType === "work" &&
          entries.map((entry) => {
            const groupOne = (
              <>
                <div className="date">
                  <p>{entry.fromDate}</p>
                  <span>-</span>
                  <p>{entry.toDate}</p>
                </div>
                <p>{entry.location}</p>
              </>
            );
            const groupTwo = (
              <>
                <div>
                  <p className="poppins-700" style={{ fontSize: "20px" }}>
                    {entry.companyName}
                  </p>
                  <p className="poppins-500">{entry.positionTitle}</p>
                </div>
                <p className="main-resp">{entry.mainResp}</p>
              </>
            );
            return (
              <Card
                groupOne={groupOne}
                groupTwo={groupTwo}
                key={entry.id}
              ></Card>
            );
          })}
      </ul>
    </section>
  );
}
