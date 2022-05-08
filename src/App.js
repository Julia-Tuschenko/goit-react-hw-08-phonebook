import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppBar from 'components/AppBar';
import { GlobalStyle } from "components/GlobalStyle/GlobalStyle";
import authOperations from './redux/auth/authOperation';
import PrivatRoute from './components/PrivatRout';
import PublicRoute from './components/PublicRoute';
import authSelectors from './redux/auth/authSelectors';

const HomePageView = lazy(() => import(`./views/HomePageView/HomePageView`));
const ContactsRoutsView = lazy(() => import(`./views/ContactsRoutsView/ContactsRoutsView`));
const LoginFormView = lazy(() => import(`./views/LoginFormView`));
const RegisterFormView = lazy(() => import(`./views/RegisterFormView`));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.isFetchingCurrentUser);
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch]);

  return ( !isFetchingCurrentUser &&
(    <>
    <Suspense fallback={<p>Загружаем...</p>}>
    <GlobalStyle/>
    <AppBar />
      <Routes>
        <Route path="/" element={
          <PublicRoute redirectTo="/">
            <HomePageView />  
          </PublicRoute>
        }/>
        <Route path="/contacts" 
            element={
              <PrivatRoute redirectTo="/login" >
                <ContactsRoutsView />
              </PrivatRoute> 
            }>
        </Route>
        <Route path="/register" element={
            <PublicRoute restricted redirectTo="/">
              <RegisterFormView />  
            </PublicRoute>
        } />
        <Route path="/login" element={        
            <PublicRoute restricted redirectTo="/contacts">
              <LoginFormView /> 
            </PublicRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Suspense>
  </>)
 );
};


export default App;




