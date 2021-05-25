React hooks rules: https://reactjs.org/docs/hooks-rules.html

What are hooks: Component life cycle changes effect functions

Uses of hooks:
1.  useState : to create component level state variable
2.  useEffect : to do some operation before page render,eg-fetching some api
3.  useContext : to provide context/state variable across child hierarchy and easily accesible
4.  useReducer : to handle mutation of complex operation of state,like redux
5.  useCallback : to prevent create a new version of function whenever component re-render due to any state variable change
6.  useMemo : to create cache result change if dependency mentioned
7.  useRef : to create a ref to any dom element to manipulate it,or any static variable in componet like static counter
8.  useLayoutEffect : to do some operation after rendering of component like after scrolling