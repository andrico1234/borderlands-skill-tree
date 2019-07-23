import React from "react";
import logo from "./logo.png";
import "./App.css";
import { SkillProvider, SkillTreeGroup, SkillTree } from "beautiful-skill-tree";
import { motion, harmony, cataclysm } from './data/data';
import theme from './data/theme';

function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: '150px', margin: '0 auto' }}>
        <img style={{ width: "500px" }} src={logo} alt="borderlands logo." />
      </div>
      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {() => {
            return (
              <React.Fragment>
                <SkillTree title="Motion" treeId="motion" data={motion} />
                <SkillTree title="Harmony" treeId="harmony" data={harmony} />
                <SkillTree title="Cataclysm" treeId="cataclysm" data={cataclysm} />
              </React.Fragment>
            );
          }}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
