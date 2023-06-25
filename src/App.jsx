import { Outlet } from 'react-router-dom';
import Header from './Component/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default App;