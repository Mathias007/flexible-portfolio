import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const HomeSubHeader: FC = () => {
    return (
        <h3 className="my-proffesion" data-testid="home-sub-header">
            I'm a{" "}
            <TypeAnimation
                sequence={[
                    "Web Developer",
                    1000,
                    "Software Engineer",
                    1000,
                    "Fullstack JavaScript Developer",
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="proffesion typing"
            />
        </h3>
    );
};

export default HomeSubHeader;
