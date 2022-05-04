import { createAction, handleActions } from 'redux-actions';

const THEME_CHANGE = 'theme/THEME_CHANGE';

export const themeChange = createAction(THEME_CHANGE, (type) => type);

const initialState = {
  theme: 'light',
};

const theme = handleActions(
  {
    [THEME_CHANGE]: (state, { payload: type }) => ({
      ...state,
      theme: type,
    }),
  },
  initialState,
);

export default theme;
