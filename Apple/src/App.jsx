import React from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/footer.jsx';
import MacBook from './components/macBook/macBook.jsx';
import Iphone11 from './components/iphone11/Iphone11.jsx';

function App() {
  return (
    <div>
      <Header />

      <MacBook />
      <Iphone11 />
      <Footer />
    </div>
  )
}

export default App;
