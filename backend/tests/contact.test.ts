import { ContactService } from "../services";
import { ContactDataModel } from "../models";
import { ContactUtils } from "./utils";

const { mockContactInfoData } = ContactUtils;

jest.mock("../models/contact.models.ts");

describe("ContactService", () => {
    let contactService: ContactService;

    beforeEach(() => {
        contactService = new ContactService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getContactInfoData", () => {
        it("should return contact info data from database", async () => {
            (ContactDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockContactInfoData
            );

            const result = await contactService.getContactInfoData();

            expect(result).toEqual(mockContactInfoData);

            expect(ContactDataModel.find).toHaveBeenCalledTimes(1);
            expect(ContactDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if database operation fails", async () => {
            (ContactDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(contactService.getContactInfoData()).rejects.toThrow(
                "Failed to fetch contact info data"
            );

            expect(ContactDataModel.find).toHaveBeenCalledTimes(1);
            expect(ContactDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
