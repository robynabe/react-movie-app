// INDIVIDUAL PAGE //
import { NavLink } from 'react-router-dom';

function Individual() {

    return (

        <main>
            <button className="return-home-btn">
            <NavLink to={'/'}><i className="fas fa-step-backward"></i></NavLink>
            </button>
            <div className="movie-poster-individual">
            <img className="movie-image" src="../images/ww84-image-placeholder.jpg"/>
            <button className="far fa-heart favourite"></button>
                <div className="movie-info-individual">
                <h2>Wonder Woman 1984 (2020)</h2>
                <h3>Release date: 12/25/2020</h3>
                <h3>Fantasy, Action, Adventure</h3>
                <h3>2h31m</h3>
                </div>
                <p><i className="fas fa-star"></i> 5.0</p>
           
                <h4>Synopsis</h4>
                <p>Wonder Woman comes into conflict with the Soviet Union during the Cold War
                in the 1980s and finds a formidable foe by the name of the Cheetah.</p>

                <h4>Cast</h4>
                <p>Kodi Smit-McPhee, Ryan Kwanten, Sana'a Shaik, Aaron Glenane, Leeanna Walsman,
                Deborah Mailman, Finn Little, Matt Testro, Damian Walshe-Howling, Andy McPhee,
                Rachael Wegener</p>

                <h4>Producers</h4>
                <p>Kate Croser, Jason Taylor, Lisa Shaunessy</p>
                <h4>Director(s)</h4>
                <p>Seth Larney</p>
            </div>
        </main>

    );
}

export default Individual;