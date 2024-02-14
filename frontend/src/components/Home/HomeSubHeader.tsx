import { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import { homeData } from "../../data";

const HomeSubHeader: FC = () => {
    return (
        <h3 className="my-proffesion" data-testid="home-sub-header">
            {homeData.homeSubHeaderText}
            <TypeAnimation
                sequence={homeData.homeAnimationTextData}
                speed={50}
                repeat={Infinity}
                className="proffesion typing"
            />
        </h3>
    );
};

export default HomeSubHeader;
