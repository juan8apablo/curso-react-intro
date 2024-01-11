import React from 'react';

//custom hook to save items in local storage
function useLocalStorage(key, defaultValue) {
  const [item, setItem] = React.useState(defaultValue); //item is the state, setItem is the function that updates the state
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(key);
        let parsedItem
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        else
          localStorage.setItem(key, JSON.stringify(defaultValue));
        setLoading(false);
      }
      catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 3000);
  }, []);

  const updateItem = (updatedTodos) => {
    setItem(updatedTodos);
    localStorage.setItem(key, JSON.stringify(updatedTodos));
  }

  return { item, updateItem, error, loading };
}

export { useLocalStorage };