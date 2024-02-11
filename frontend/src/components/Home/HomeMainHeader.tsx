import { FC } from "react";

const HomeMainHeader: FC = () => {
    return (
        <h3 className="hello" data-testid="home-main-header">
            Hello, my name is <span className="name">Mateusz Stawowski</span>
        </h3>
    );
};

export default HomeMainHeader;
