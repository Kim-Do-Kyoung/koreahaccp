import { create } from 'zustand';

interface SearchBarState {
  keyword: string;
  searchCriteria: string;
  searchCategory: string;
  setKeyword: (value: string) => void;
  setSearchCriteria: (value: string) => void;
  setSearchCategory: (value: string) => void;
  reset: () => void;
}

export const useSearchStore = create<SearchBarState>((set) => ({
  keyword: '',
  searchCriteria: 'title',
  searchCategory: '',
  setKeyword: (value) => set({ keyword: value }),
  setSearchCriteria: (value) => set({ searchCriteria: value }),
  setSearchCategory: (value) => set({ searchCategory: value }),
  reset: () => set({ keyword: '', searchCriteria: 'title', searchCategory: '' }),
}));
