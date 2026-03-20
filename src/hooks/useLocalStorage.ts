import { useState, useEffect } from 'react';
import { UserData, INITIAL_USER_DATA } from '../constants';

export function useLocalStorage() {
  const [userData, setUserData] = useState<UserData>(() => {
    const saved = localStorage.getItem('ling-shu-user-data');
    return saved ? JSON.parse(saved) : INITIAL_USER_DATA;
  });

  useEffect(() => {
    localStorage.setItem('ling-shu-user-data', JSON.stringify(userData));
  }, [userData]);

  const toggleFavorite = (id: string) => {
    setUserData(prev => ({
      ...prev,
      favorites: prev.favorites.includes(id)
        ? prev.favorites.filter(f => f !== id)
        : [...prev.favorites, id]
    }));
  };

  const saveNote = (id: string, note: string) => {
    setUserData(prev => ({
      ...prev,
      notes: { ...prev.notes, [id]: note }
    }));
  };

  const checkIn = (date: string, note: string) => {
    setUserData(prev => ({
      ...prev,
      checkIns: prev.checkIns.includes(date) ? prev.checkIns : [...prev.checkIns, date],
      checkInNotes: { ...prev.checkInNotes, [date]: note }
    }));
  };

  const toggleTask = (taskName: string) => {
    setUserData(prev => ({
      ...prev,
      tasks: { ...prev.tasks, [taskName]: !prev.tasks[taskName] }
    }));
  };

  const toggleCategoryVisibility = (categoryId: string) => {
    setUserData(prev => {
      const current = prev.visibleCategories || ['qmdj', 'bzml', 'dlr', 'zwds', 'mhys'];
      return {
        ...prev,
        visibleCategories: current.includes(categoryId)
          ? current.filter(id => id !== categoryId)
          : [...current, categoryId]
      };
    });
  };

  return {
    userData,
    toggleFavorite,
    saveNote,
    checkIn,
    toggleTask,
    toggleCategoryVisibility
  };
}
