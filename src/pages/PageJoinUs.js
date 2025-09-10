import { Col, Row } from "react-bootstrap"
import Header from "../components/Header"


const JoinUsTxt = {
    title: "We are recruiting new PhD students",
    jobDescription: "We are seeking a highly motivated and talented PhD students to join our interdisciplinary research team. The successful candidate will conduct cutting-edge the-oretical and computational research in the following areas:",
    researchAreas: [
        "Electromagnetism and Plasmonics: Theory and computational modeling of electro-magnetism in complex media, plasmonic systems, and metamaterials, with a particu-lar focus on cavity quantum electrodynamics (QED) and interactions between light and matter at the nanoscale.",
        "Inverse Design in Nanophotonics and Quantum Nanophotonics: Application of inverse design techniques to optimize and design novel photonic structures and de-vices, including metasurfaces, photonic crystals, and quantum nanophotonic systems.",
        "Plasma and Magnetohydrodynamics (MHD) Modeling: Development and applica-tion of advanced plasma modeling tools, such as particle-in-cell (PIC) simulations and magnetohydrodynamics (MHD), to study their interaction with plasmonic or exci-tonic systems.",
        "Novel Optoelectronic Effects: Investigation of new optoelectronic phenomena in low-dimensional materials (e.g., 2D materials, nanowires, and quantum dots) and time crystals, focusing on their potential applications in next-generation devices.",
        "Non-Hermitian and Topological Photonics: Study of non-Hermitian systems and topological photonics, including the exploration of novel phenomena such as excep-tional points, edge states, and robust modes in photonic systems.",
    ],
    programs: [
        {
            title: "SUTD PhD Programme",
            des: "Doctor of Philosophy degree under Science, Mathematics, and Technology (SMT) pillar",
            ref: (<>
                <span>please go to </span>
                <a href="https://www.sutd.edu.sg/programme-listing/sutd-phd-programme/" target="_blank" rel="noopener noreferrer">this link</a> 
                <span> for more information</span>
            </>),
        },
        {
            title: "SUTD Graduate Scholarship",
            des: "This scholarship is open to all nationalities and covers the applicable tuition fees and monthly stipend as follows.",
            ref: (<>
                <span>please go to </span>
                <a href="https://www.sutd.edu.sg/admissions/graduate/scholarship/sutd-graduate-fellowships-scholarships" target="_blank" rel="noopener noreferrer">this link</a> 
                <span> for more information</span>
            </>),
        },
        {
            title: "Singapore International Graduate Award (SINGA)",
            des: "Funded by the Agency for Science, Technology & Research (A*STAR) to pursue PhD degree in NUS, NTU and SUTD",
            ref: (<>
                <span>please go to </span>
                <a href="https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa" target="_blank" rel="noopener noreferrer">this link</a> 
                <span> for more information</span>
            </>),
        },
    ]
}



const PageJoinUs = () => {
    return (
        <div>
            <Header />

            <Row>
                <Col lg={{span: 8, offset: 2}} xs='12'>
                    <div className="main-comp">
                        <h4>{JoinUsTxt.title}</h4>
                        <hr />
                        <div>{JoinUsTxt.jobDescription}</div>
                        <br />
                        {JoinUsTxt.researchAreas.map((item, index) => {
                            const [title, description] = item.split(/:(.+)/); // split at first colon
                            return (
                                <div key={index} style={{ marginBottom: '1em' }}>
                                    <strong>{index + 1}. {title}:</strong> {description}
                                </div>
                            );
                        })}
                    </div>
                </Col>
                <br /><br />
                {JoinUsTxt.programs.map((item, index) => (
                    <Col lg={{span: 8, offset: 2}} xs='12' key={index}>
                    <br />
                        <div className="main-comp">
                            <h4>{item.title}</h4>
                            <hr />
                            <div>{item.des}</div>
                            <br />
                            <div>{item.ref}</div>
                        </div>
                    </Col>
                ))}
                
            </Row>
            <br />
        </div>
    )
}

export default PageJoinUs