'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

type State = {
  isOpen: boolean;
  toggleSideBar: () => void;
  hideSidebar: () => void;
};

const initialState: State = {
  isOpen: false,
  toggleSideBar: () => {},
  hideSidebar: () => {},
};

const SidebarContext = createContext<State>(initialState);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(initialState.isOpen);

  const toggleSideBar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const hideSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSideBar, hideSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): State => useContext(SidebarContext);
