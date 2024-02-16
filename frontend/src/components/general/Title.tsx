import { FC } from "react";

interface ITitle {
    title: string;
}

const Title: FC<ITitle> = ({ title }) => {
    return (
        <div className="row" data-testid="title">
            <div className="section-title padd-15">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Title;
