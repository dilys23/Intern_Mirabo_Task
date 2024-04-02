
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import("../pages/Login/LoginPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
