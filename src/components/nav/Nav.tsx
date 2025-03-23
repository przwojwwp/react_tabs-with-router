import { useLocation } from 'react-router-dom';
import cn from 'classnames';

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href="#/"
            className={cn('navbar-item', { 'is-active': pathname === '/' })}
          >
            Home
          </a>

          <a
            href="#/tabs"
            className={cn('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            Tabs
          </a>
        </div>
      </div>
    </nav>
  );
};
