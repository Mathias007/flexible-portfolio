export interface ISocialData {
    id: number;
    type: string;
    link: string;
}

const socialData: ISocialData[] = [
    { id: 0, type: "facebook", link: "#" },
    { id: 1, type: "twitter", link: "#" },
    { id: 2, type: "instagram", link: "#" },
    { id: 3, type: "youtube", link: "#" },
    { id: 4, type: "linkedin", link: "#" },
    { id: 5, type: "github", link: "#" },
];

export default socialData;
