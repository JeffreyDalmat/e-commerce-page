import { configureStore } from '@reduxjs/toolkit';

import headerReducer from 'src/slice/header';

export default configureStore({
  reducer: {
    header: headerReducer,
  },
});
