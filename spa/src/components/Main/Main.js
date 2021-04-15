import { Link} from 'react-router-dom';

const Main = () => {
    return(
        <section className="wrapper style3 container special">

			<header className="major">
								<h2>Top Rated  <strong>Landmarks</strong></h2>
			</header>

				<div className="row">
				<div className="col-6 col-12-narrower">

		<section>
										<Link to="" className="image featured"><img src="https://www.nasamnatam.com/statiifiles/Klearchos%20Kapoutsis_Belogradchik.jpg" alt="" /></Link>
										<header>
											<h3>Belogradchik Rocks</h3>
										</header>
										<p>The formation of the Belogradchik Rocks started during the Permian period, about 230 million years ago, when the tectonic cycle was folding to create the Balkan Mountains and elevating the region of Belogradchik. </p>
									</section>

								</div>
								
							
							</div>
							<div className="row">
							
							
							</div>

							<footer className="major">
								<ul className="buttons">
									<li><Link to="#" className="button">See More</Link></li>
								</ul>
							</footer>

						</section>
    );
}

export default Main;