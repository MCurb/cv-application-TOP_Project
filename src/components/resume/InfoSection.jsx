import { Card } from "../ui/Card";

export function InfoSection({ entries, sectionType }) {
  const sectionTitle = {
    education: "Education",
    work: "Professional Experience",
  };
  return (
    <section className="resume-section">
      <h2>{sectionTitle[sectionType]}</h2>
      <ul className="resume-cards-wrapper">
        {sectionType === "education" &&
          entries.map((entry) => {
            const groupOne = (
              <>
                <div className="date">
                  <p className="inter-500" style={{ fontSize: "14px" }}>
                    {entry.fromDate}
                  </p>
                  <span>-</span>
                  <p className="inter-500" style={{ fontSize: "14px" }}>
                    {entry.toDate}
                  </p>
                </div>
                <p className="inter-500" style={{ fontSize: "14px" }}>
                  {entry.location}
                </p>
              </>
            );
            const groupTwo = (
              <>
                <p className="poppins-700" style={{fontSize:'32px'}}>{entry.schoolName}</p>
                <p className="poppins-600" style={{fontSize:'22px'}}>{entry.title}</p>
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
                <p>{entry.companyName}</p>
                <p>{entry.positionTitle}</p>
                <p>{entry.mainResp}</p>
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
