export interface ISkillsItemData extends ISkillsData {
    maxValue: number;
}

export interface ISkillsData {
    _id: number;
    skill: string;
    value: number;
}
