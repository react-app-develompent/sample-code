import { Link, Outlet } from "react-router-dom";
import FlashMessage from "../FlashMessage/index";
import "./index.css";

function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-content">
          <div className="layout__logo">
            <Link to="/" className="layout__logo-link">
              <h1>NoteSpace</h1>
            </Link>
          </div>
          <nav className="layout__nav">
            <Link to="/" className="layout__nav-link">
              <span className="layout__nav-text">ホーム</span>
            </Link>
            <Link to="/new" className="layout__nav-link">
              <span className="layout__nav-text">新規作成</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="layout__main">
        <div className="layout__content">
          <Outlet />
        </div>
      </main>
      <FlashMessage />
    </div>
  );
}

export default Layout;
