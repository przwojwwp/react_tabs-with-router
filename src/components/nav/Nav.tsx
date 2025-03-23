import { Link, useLocation } from 'react-router-dom';
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
          <a className={cn('navbar-item', { 'is-active': pathname === '/' })}>
            <Link to="/">Home</Link>
          </a>

          <a
            className={cn('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            <Link to="/tabs">Tabs</Link>
          </a>
        </div>
      </div>
    </nav>
  );
};
