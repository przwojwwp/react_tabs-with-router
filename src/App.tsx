import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import cn from 'classnames';
import { Home } from './components/Home/Home';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { tabs } from './data/tabs';

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                cn('navbar-item ', { 'is-active': isActive })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                cn('navbar-item', { 'is-active': isActive })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
            <Route path="/tabs/:tabId" element={<TabsPage tabs={tabs} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
