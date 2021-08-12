import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface AppState {
  isContactUs: boolean
  isNavigation: boolean
  isFormSucceeded: boolean
  isFormFailed: boolean
}

let store: any

const initialState: AppState = {
  isContactUs: false,
  isNavigation: false,
  isFormSucceeded: false,
  isFormFailed: false,
}

const reducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case 'OPEN_CONTACT_US':
      return {
        ...state,
        isContactUs: true,
        isNavigation: false,
      }
    case 'SET_FORM_SUCCESS':
      return {
        ...state,
        isContactUs: false,
        isFormSucceeded: action.payload,
      }
    case 'SET_FORM_ERROR':
      return {
        ...state,
        isContactUs: false,
        isFormFailed: action.payload,
      }
    case 'CLOSE_CONTACT_US':
      return {
        ...state,
        isContactUs: false,
      }
    case 'OPEN_NAVIGATION':
      return {
        ...state,
        isNavigation: true,
        isContactUs: false,
      }
    case 'CLOSE_NAVIGATION':
      return {
        ...state,
        isNavigation: false,
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState: AppState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: AppState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
