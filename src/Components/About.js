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
                        <img src="/w3images/team1.jpg" alt="Yasser" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Yasser Saadi</h2>
                            <p className="title">Pursuit Fellow</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>yassersaadi@pursuit.org</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/w3images/team2.jpg" alt="Wilton" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Wilton Camilo</h2>
                            <p className="title">Pursuit Fellow</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>wiltoncamilo@pursuit.org</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/w3images/team3.jpg" alt="Ryan" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Ryan Lundy</h2>
                            <p className="title">Pursuit Fellow</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>ryanlundy@pursuit.org</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}