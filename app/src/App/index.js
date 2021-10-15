import * as React from "react";

import { Routes, Route, NavLink } from "react-router-dom";

import Tasks from "../Tasks";

import Origin from "./origin";
import styles from "./styles.module.scss";

const App = () => (
  <>
    <header>
      <nav className={styles.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>{" "}
        | <NavLink to="dashboard">Dashboard</NavLink>|{" "}
        <NavLink to="map">Map</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<GoogleMap />} />
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <header className={styles.header}>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <p>{process.env.REACT_APP_SUBTITLE}</p>
    </header>
    <Tasks />
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

const GoogleMap = () => (
  <>
    <Origin />
  </>
);

export default App;
