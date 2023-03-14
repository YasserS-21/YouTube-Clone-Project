import "./About.css"

export default function About() {
    return (
        <>
            <div className="about-section">
                <h1>About Us </h1>
                <p> Welcome to our React YouTube clone project! We are a team of three Pursuit Fellows who share a love for creating amazing web applications.
                    Our goal with this project was to build a fully-functional YouTube clone using modern web technologies, and
                    we are excited to share our creation with you!
                </p>
            </div>

            <div className="row">
                <h1 style={{ textAlign: 'center' }}>Our Team</h1>
                <div className="column">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/D4E03AQHp1AUtv0Np7A/profile-displayphoto-shrink_200_200/0/1674261137650?e=1683763200&v=beta&t=oXWVdlmM_53dEghNBusjvpfo0qzq11L6TYWD5a9cS3c" alt="Yasser" style={{ width: '30%' }} />
                        <div className="container">
                            <h2>Yasser Saadi</h2>
                            <p className="title">Pursuit Fellow</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>yassersaadi@pursuit.org</p>
                            <a href="https://www.linkedin.com/in/yasser-saadi/" target="_blank" rel="noopener noreferrer">
                                <p><button className="button">LinkedIn</button></p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/C4D03AQE4hlgj2OUHPA/profile-displayphoto-shrink_200_200/0/1645283288721?e=1683763200&v=beta&t=Mr7zajtKujtoAyXQPs6D-cvMjmx4XZ0JYqiDJiP9R4A" alt="Wilton" style={{ width: '27%' }} />
                        <div className="container">
                            <h2>Wilton Camilo</h2>
                            <p className="title">Pursuit Fellow</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>wiltoncamilo@pursuit.org</p>
                            <a href="https://www.linkedin.com/in/wilton-l-camilo-339b78130/" target="_blank" rel="noopener noreferrer">
                                <p><button className="button">LinkedIn</button></p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/C4E03AQG4l7bDnaBpNw/profile-displayphoto-shrink_800_800/0/1663510422547?e=1683763200&v=beta&t=ZB1EQa2xVaF2dkzNxSxNYlTOnLVwR00G1U1cePHyRa4" alt="Ryan" style={{ width: '27%' }} />
                        <div className="container">
                            <h2>Ryan Lundy</h2>
                            <p className="title">Pursuit Fellow</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>ryanlundy@pursuit.org</p>
                            <a href="https://www.linkedin.com/in/1ryanlundy/" target="_blank" rel="noopener noreferrer">
                                <p><button className="button">LinkedIn</button></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}