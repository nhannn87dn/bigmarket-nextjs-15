//import { getAllCategories, TCategory } from '@/constants/APIEndpoints/categories';
import { create } from 'zustand'

interface TGlobalStore {
  isToggleCategories: boolean;
  //categoriesList: TCategory[];
  isLoading: boolean;
  error: null | string;
  setToggleCategories: () => void;
  //fetchCategories: () => void; // Fetch data from server and update state with new data.
}

export const useGlobalStore = create<TGlobalStore>((set) => ({
  isLoading: false,
  error: null,
  isToggleCategories: false,
  //categoriesList: [],
  setToggleCategories: () => set((state) => ({ isToggleCategories: !state.isToggleCategories })),
  // fetchCategories: async ()=>{
  //   set({isLoading: true});
  //   const data = await getAllCategories();
  //   set({isLoading: false, categoriesList: data});
  // }
}))

