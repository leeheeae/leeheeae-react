import { configureStore } from '@reduxjs/toolkit';
import loading from './loading';
import theme from './theme';

export default configureStore({
  reducer: { loading, theme },
});
