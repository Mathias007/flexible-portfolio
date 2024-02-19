import { FC } from "react";

import {
    HomeMainHeader,
    HomeSubHeader,
    HomeDescription,
    HomeActions,
    HomePicture,
} from "../components/Home";

const Home: FC = () => {
    return (
        <section className="home section" id="home" data-testid="home-section">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <HomeMainHeader />
                        <br />
                        <HomeSubHeader />
                        <HomeDescription />
                        <HomeActions />
                    </div>
                    <HomePicture />
                </div>
            </div>
        </section>
    );
};

export default Home;
