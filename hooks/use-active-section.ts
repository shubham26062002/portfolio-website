import { create } from 'zustand'

interface ActiveSectionStore {
    activeSection: Section,
    setActiveSection: (section: Section) => void,
}

export const useActiveSection = create<ActiveSectionStore>((set) => ({
    activeSection: 'home',
    setActiveSection: (section) => set({ activeSection: section }),
}))