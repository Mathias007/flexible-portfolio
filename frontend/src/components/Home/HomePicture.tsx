import { FC } from "react";
import MainPhoto from "../../assets/hero.jpg";

const HomePicture: FC = () => {
    return (
        <div className="home-img padd-15" data-testid="home-picture">
            <img src={MainPhoto} alt="main" />
        </div>
    );
};

export default HomePicture;
