import { mockBusinessCardList as mockBusinessCardListItems } from "../../../mocks/mockBusinessCard";

import mockBusinessCardReturn from "../../../mocks/mockBusinessCard";
import {
  businessReducer,
  createBusinessActionCreator,
  deleteBusinessActionCreator,
  loadAllBusinessActionCreator,
} from "./businessSlice";
import { Business, BusinessState } from "./types";

describe("Given a businessReducer", () => {
  describe("When it is invoked with it's method loadAllBusiness", () => {
    test("Then it should show the list of business", () => {
      const list: Business[] = [
        {
          id: "1",
          businessName: "Optica San antonio",
          category: "Salud",
          slogan: "Desde 1978",
          address: "c/ Rossello, 214",
          adhesionDate: "10/03/14",
          contactNumber: "934820396",
          businessImage: "string",
        },
      ];
      const initialState: BusinessState = {
        businessList: [],
      };
      const expectctState: BusinessState = {
        businessList: list,
      };
      const newState = businessReducer(
        initialState,
        loadAllBusinessActionCreator(list)
      );

      expect(expectctState).toStrictEqual(newState);
    });
  });

  describe("When it's invoked with it's method deleteBusiness and an id in it's payload", () => {
    test("then it should return a new state without the received business", () => {
      const currentBusinessState: BusinessState = {
        businessList: mockBusinessCardListItems,
      };

      const businessToDelete = mockBusinessCardListItems[0];
      const deleteBusinessAction = deleteBusinessActionCreator(
        businessToDelete.id as string
      );

      const expectedBusinessState: BusinessState = {
        businessList: [mockBusinessCardListItems[1]],
      };

      const newBusinessState = businessReducer(
        currentBusinessState,
        deleteBusinessAction
      );

      expect(newBusinessState).toStrictEqual(expectedBusinessState);
    });
  });

  describe("When it's invoked with its reducer createBusiness reducer and a new business in its payload", () => {
    test("Then it should return a new state with the received business added in it", () => {
      const currentBusinessState: BusinessState = {
        businessList: mockBusinessCardListItems,
      };
      const businessToCreate = mockBusinessCardReturn;

      const expectedbusinessState: BusinessState = {
        ...currentBusinessState,
        businessList: [...currentBusinessState.businessList, businessToCreate],
      };

      const businessSliceState = businessReducer(
        currentBusinessState,
        createBusinessActionCreator(businessToCreate)
      );

      expect(businessSliceState).toStrictEqual(expectedbusinessState);
    });
  });
});
