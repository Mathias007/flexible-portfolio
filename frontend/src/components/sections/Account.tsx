import { FC, useEffect, useState } from "react";

import { AccountForm, AccountIntroduction } from "../Account";

import { socialModels } from "../../models";

import { ConfigVariables, ServerPaths } from "../../config";
const { SERVER_URL } = ConfigVariables;
const { API, SOCIAL } = ServerPaths;

const Account: FC = () => {
    const [socialData, setSocialData] = useState<socialModels.ISocialData[]>([]);

    useEffect(() => {
        const fetchSocialData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${SOCIAL}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch social data");
                }
                const data = await response.json();
                setSocialData(data);
            } catch (error) {
                console.error("Error fetching social data:", error);
            }
        };

        fetchSocialData();
    }, []);

    return (
        <section
            className="account section"
            id="account"
            data-testid="account-section"
        >
            <div className="container">
                <div className="row full-screen align-items-center">
                    <AccountIntroduction socialData={socialData} />
                    <AccountForm />
                </div>
            </div>
        </section>
    );
};

export default Account;
